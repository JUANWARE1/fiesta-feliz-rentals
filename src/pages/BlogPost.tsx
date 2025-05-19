
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import ContactButtons from "@/components/ContactButtons";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-8 flex items-center gap-2"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Button>
        
        <div className="max-w-3xl mx-auto">
          <div className="h-80 rounded-lg overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title[language as keyof typeof post.title]} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {post.title[language as keyof typeof post.title]}
          </h1>
          
          <div className="flex flex-wrap items-center text-muted-foreground gap-6 mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
          </div>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: post.content[language as keyof typeof post.content] 
            }}
          />
          
          <div className="border-t border-muted my-12 pt-8">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline">Facebook</Button>
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">LinkedIn</Button>
            </div>
          </div>
        </div>
      </div>
      
      <ContactButtons />
    </div>
  );
};

export default BlogPost;
