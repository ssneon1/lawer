import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { useBlogData, useBlogPost, getImageUrl } from "@/hooks/useBlogData";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { blogPosts } = useBlogData();
  const { content, loading, error } = useBlogPost(slug || '');

  const blogPost = blogPosts.find(post => post.slug === slug);

  const relatedArticles = blogPosts
    .filter(post => post.slug !== slug)
    .slice(0, 3)
    .map(post => ({
      title: post.title,
      slug: post.slug,
      category: post.category
    }));

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-legal-grey">Loading article...</div>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-legal-yellow p-8 brutalist-border brutalist-shadow mb-8">
            <h1 className="text-6xl font-bold text-legal-black mb-4">404</h1>
            <h2 className="text-2xl font-bold text-legal-black mb-2">Article Not Found</h2>
          </div>
          <p className="text-xl text-legal-grey mb-8">
            {error ? error : "The article you're looking for doesn't exist or has been removed."}
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-legal-black text-white hover:bg-legal-grey brutalist-border brutalist-shadow font-semibold"
          >
            <Link to="/blog">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Back Button */}
            <div className="mb-6 sm:mb-8">
              <Button 
                asChild
                variant="outline"
                className="border-2 border-legal-black text-legal-black hover:bg-legal-black hover:text-white font-semibold py-2.5 sm:py-3"
              >
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <Card className="border-2 border-legal-black shadow-lg bg-white mb-6 sm:mb-8">
              <div 
                className="h-48 sm:h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${getImageUrl(blogPost.image, blogPost.imageSource)})` }}
              ></div>
              <CardContent className="p-5 sm:p-6 md:p-8">
                <Badge className={blogPost.categoryColor + " mb-3 sm:mb-4 text-xs sm:text-sm"}>
                  {blogPost.category}
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-legal-black mb-3 sm:mb-4 font-space-grotesk">
                  {blogPost.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-legal-grey text-xs sm:text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blogPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPost.date}</span>
                  </div>
                  <span className="text-xs">{blogPost.readTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Article Content */}
            <Card className="border-2 border-legal-black shadow-lg bg-white mb-6 sm:mb-8">
              <CardContent className="p-5 sm:p-6 md:p-8 prose prose-sm sm:prose max-w-none">
                <MarkdownRenderer content={content} />
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-2 border-legal-black shadow-lg bg-legal-yellow">
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-legal-black mb-3 sm:mb-4">
                  Need Legal Assistance?
                </h3>
                <p className="text-legal-black text-sm sm:text-base mb-6">
                  If you're facing similar legal challenges, don't hesitate to seek professional help. 
                  Contact us for expert legal guidance and representation.
                </p>
                <Button 
                  asChild
                  className="bg-legal-black text-white hover:bg-legal-grey border-2 border-legal-black font-semibold px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-base"
                >
                  <Link to="/contact">
                    Schedule Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar (Only Related Articles) */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-legal-black shadow-lg bg-white">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-legal-black mb-4 text-base sm:text-lg">Related Articles</h3>
                <div className="space-y-3 sm:space-y-4">
                  {relatedArticles.map((article, index) => (
                    <div key={index} className="pb-3 sm:pb-4 border-b border-gray-200 last:border-b-0">
                      <Link 
                        to={`/blog/${article.slug}`}
                        className="block hover:text-legal-blue transition-colors"
                      >
                        <Badge className="text-xs mb-2 bg-gray-100 text-gray-700">
                          {article.category}
                        </Badge>
                        <h4 className="font-semibold text-legal-black text-xs sm:text-sm leading-tight">
                          {article.title}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6">
                  <Link 
                    to="/blog"
                    className="inline-flex items-center text-legal-black hover:text-legal-blue font-semibold text-xs sm:text-sm transition-colors"
                  >
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
