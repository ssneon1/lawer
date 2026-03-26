import { useState, useEffect } from "react";

export const useBlogData = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Understanding Divorce Law in India",
      excerpt: "A guide to the legal process of divorce in India, including grounds for divorce and mutual consent.",
      slug: "understanding-divorce-law-india",
      date: "2024-03-20",
      author: "Advocate Cheerag Goel",
      image: "/blog-1.jpg"
    },
    {
      id: 2,
      title: "Rights of Victims in Domestic Violence Cases",
      excerpt: "If you are a victim of domestic violence, know your rights under the Protection of Women from Domestic Violence Act, 2005.",
      slug: "rights-victims-domestic-violence",
      date: "2024-03-15",
      author: "Advocate Cheerag Goel",
      image: "/blog-2.jpg"
    }
  ]);

  return { posts, loading: false };
};

export const useBlogPost = (slug: string) => {
  const { posts } = useBlogData();
  const post = posts.find((p) => p.slug === slug);
  return { post, loading: false };
};

export const getImageUrl = (path: string) => {
  return path;
};
