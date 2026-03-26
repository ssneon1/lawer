import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, ArrowRight } from "lucide-react";
import { useBlogData, getImageUrl } from "@/hooks/useBlogData";

export default function Blog() {
  const { blogPosts, loading, error } = useBlogData();

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-legal-grey">Loading blog posts...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-red-600">Error loading blog posts: {error}</div>
        </div>
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-legal-grey">No blog posts found.</div>
        </div>
      </div>
    );
  }

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-legal-black mb-4 sm:mb-6 font-space-grotesk">
            Legal Insights & Updates
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-legal-grey max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert legal analysis, practical advice, and updates on important 
            legal developments that may affect you.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12 sm:mb-16">
          <Card className="border-2 border-legal-black shadow-lg bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-legal-yellow p-6 sm:p-8 lg:p-12">
                <Badge className={featuredPost.categoryColor + " mb-3 sm:mb-4 text-xs sm:text-sm"}>
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-legal-black mb-3 sm:mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-legal-black text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {featuredPost.preview}
                </p>
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-0 xs:justify-between text-xs sm:text-sm text-legal-black mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center bg-legal-black text-white px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-legal-black hover:bg-legal-grey transition-colors font-semibold text-sm sm:text-base"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div 
                className="h-48 sm:h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${getImageUrl(featuredPost.image, featuredPost.imageSource)})` }}
              ></div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {otherPosts.map((post) => (
            <Card 
              key={post.id}
              className="border-2 border-legal-black shadow-lg bg-white hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div 
                className="h-40 sm:h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${getImageUrl(post.image, post.imageSource)})` }}
              ></div>
              <CardContent className="p-4 sm:p-6">
                <Badge className={post.categoryColor + " mb-2 sm:mb-3 text-xs"}>
                  {post.category}
                </Badge>
                <h3 className="text-base sm:text-lg font-bold text-legal-black mb-2 sm:mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-legal-grey text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {post.preview}
                </p>
                <div className="flex flex-col xs:flex-row gap-2 xs:gap-0 xs:justify-between text-xs text-legal-grey mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span className="whitespace-nowrap">{post.date}</span>
                  </div>
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-legal-black hover:text-legal-blue font-semibold text-xs sm:text-sm transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
