import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Edit, Trash2, Plus, Save, X } from "lucide-react";
import { BlogPost } from "./Blog";

interface BlogAdminProps {
  posts: BlogPost[];
  onAddPost: (post: Omit<BlogPost, 'id'>) => void;
  onUpdatePost: (id: string, post: Omit<BlogPost, 'id'>) => void;
  onDeletePost: (id: string) => void;
}

const BlogAdmin = ({ posts, onAddPost, onUpdatePost, onDeletePost }: BlogAdminProps) => {
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "AlphaWave AI Team",
    date: new Date().toISOString().split('T')[0],
    image: ""
  });

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      author: "AlphaWave AI Team",
      date: new Date().toISOString().split('T')[0],
      image: ""
    });
    setEditingPost(null);
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      onUpdatePost(editingPost.id, formData);
    } else {
      onAddPost(formData);
    }
    
    resetForm();
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      date: post.date,
      image: post.image || ""
    });
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      onDeletePost(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Admin Header */}
      <Card className="bg-gray-900/70 border-cyan-400/30">
        <CardHeader>
          <CardTitle className="text-cyan-400 flex items-center gap-2">
            <Edit className="h-5 w-5" />
            Blog Administration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Post
          </Button>
        </CardContent>
      </Card>

      {/* Add/Edit Form */}
      {showForm && (
        <Card className="bg-gray-900/70 border-purple-400/30">
          <CardHeader>
            <CardTitle className="text-purple-400">
              {editingPost ? "Edit Post" : "Create New Post"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-white">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="excerpt" className="text-white">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="content" className="text-white">Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                  rows={8}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="author" className="text-white">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="date" className="text-white">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="image" className="text-white">Image URL (optional)</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://..."
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  <Save className="h-4 w-4 mr-2" />
                  {editingPost ? "Update" : "Create"} Post
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={resetForm}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Posts Management */}
      <Card className="bg-gray-900/70 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Manage Posts ({posts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="flex-1">
                  <h4 className="text-white font-medium">{post.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{post.date} • {post.author}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(post)}
                    className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(post.id)}
                    className="border-red-400/30 text-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            {posts.length === 0 && (
              <p className="text-gray-400 text-center py-8">No posts created yet.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogAdmin;
