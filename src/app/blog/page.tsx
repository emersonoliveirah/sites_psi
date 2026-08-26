import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NewsletterSignup from "@/components/ui/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog — Maiara Pereira de Souza",
  description: "Textos sobre psicologia infantojuvenil, TCC e orientação para pais.",
};

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main id="main" className="mx-auto max-w-[760px] px-6 py-20">
      <p className="text-[13px] font-semibold uppercase tracking-wider text-sage-deep">Blog</p>
      <h1 className="mb-10 mt-2.5 font-display text-[clamp(30px,4vw,42px)] font-medium tracking-tight text-text">
        Textos sobre psicologia infantojuvenil
      </h1>

      <ul className="flex flex-col">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-text/10 py-7 first:border-t">
            <Link href={`/blog/${post.slug}`} className="group">
              <time className="text-sm text-text-soft">{formatDate(post.date)}</time>
              <h2 className="mt-1.5 font-display text-2xl font-medium text-text group-hover:text-sage-deep">
                {post.title}
              </h2>
              <p className="mt-2 text-[15px] text-text-soft">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <NewsletterSignup />
      </div>
    </main>
  );
}
