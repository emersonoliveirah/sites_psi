import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostContent } from "@/lib/posts";
import { mdxComponents } from "@/lib/mdxComponents";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blog`,
    description: post.description,
  };
}

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getAllPosts().find((p) => p.slug === slug);
  if (!meta) notFound();

  const content = getPostContent(slug);

  return (
    <main id="main" className="mx-auto max-w-[680px] px-6 py-20">
      <Link href="/blog" className="text-sm font-semibold text-sage-deep">
        ← Voltar para o blog
      </Link>

      <p className="mb-2 mt-6 text-sm text-text-soft">{formatDate(meta.date)}</p>
      <h1 className="mb-8 font-display text-[clamp(28px,3.6vw,40px)] font-medium tracking-tight text-text">
        {meta.title}
      </h1>

      <article>
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </main>
  );
}
