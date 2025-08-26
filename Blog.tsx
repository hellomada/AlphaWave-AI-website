
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Edit, Trash2, Plus } from "lucide-react";
import BlogAdmin from "./BlogAdmin";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "How AI Chatbots Are Revolutionizing Customer Service",
      excerpt: "Discover how AI-powered chatbots are transforming the way businesses interact with their customers, providing 24/7 support and instant responses.",
      content: "Full article content would go here...",
      author: "AlphaWave AI Team",
      date: "2024-01-15",
      image: "/api/placeholder/600/300"
    },
    {
      id: "2", 
      title: "The Future of Lead Generation with AI Voice Agents",
      excerpt: "Learn about the cutting-edge technology behind AI voice agents and how they're changing the landscape of lead generation for businesses.",
      content: "Full article content would go here...",
      author: "AlphaWave AI Team", 
      date: "2024-01-10",
      image: "/api/placeholder/600/300"
    },
    {
      id: "3",
      title: "5 Ways AI Automation Can Save Your Business Time and Money",
      excerpt: "Explore practical applications of AI automation that can streamline your business operations and boost your bottom line.",
      content: "Full article content would go here...",
      author: "AlphaWave AI Team",
      date: "2024-01-05", 
      image: "/api/placeholder/600/300"
    }
  ]);

  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleAdminToggle = () => {
    toast({
      title: "Admin access requires authentication",
      description: "Connect Supabase and sign in as admin to manage blog posts.",
      variant: "destructive",
    });
  };

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = {
      ...post,
      id: Date.now().toString()
    };
    setPosts([newPost, ...posts]);
  };

  const updatePost = (id: string, updatedPost: Omit<BlogPost, 'id'>) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...updatedPost, id } : post
    ));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in AI automation and business growth
          </p>
          
          {/* Admin Toggle Button */}
          <Button
            onClick={handleAdminToggle}
            variant="ghost"
            size="sm"
            className="mt-4 text-gray-500 hover:text-cyan-400"
          >
            {showAdmin ? <Edit className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
            {showAdmin ? "Close Admin" : "Admin"}
          </Button>
        </div>

        {/* Admin Panel */}
        {showAdmin && isAuthenticated && (
          <div className="mb-12">
            <BlogAdmin 
              posts={posts}
              onAddPost={addPost}
              onUpdatePost={updatePost}
              onDeletePost={deletePost}
            />
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </CardTitle>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="mt-4 p-0 h-auto text-cyan-400 hover:text-cyan-300"
                >
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
