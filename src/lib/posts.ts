import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostMeta } from "@/types";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fileContent = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostContent(slug: string): string {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContent);
  return content;
}
