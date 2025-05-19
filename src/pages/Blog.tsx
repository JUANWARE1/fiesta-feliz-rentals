
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { blogPosts } from "@/data/blog";
import ContactButtons from "@/components/ContactButtons";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-beboy-purple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{t("blog.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            {t("blog.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title[language as keyof typeof post.title]} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3">{post.title[language as keyof typeof post.title]}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt[language as keyof typeof post.excerpt]}</p>
                <Button asChild>
                  <Link to={`/blog/${post.id}`}>{t("blog.readMore")}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactButtons />
    </div>
  );
};

export default Blog;
