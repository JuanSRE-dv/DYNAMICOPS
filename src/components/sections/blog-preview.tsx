"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/context/i18n';

const blogPosts = [
  {
    title: "blog.posts.post1.title",
    date: "July 15, 2024",
    category: "Productividad",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "office productivity",
    excerpt: "blog.posts.post1.excerpt",
    slug: "/blog/post-1",
  },
  {
    title: "blog.posts.post2.title",
    date: "July 8, 2024",
    category: "Ventas",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "sales growth",
    excerpt: "blog.posts.post2.excerpt",
    slug: "/blog/post-2",
  },
  {
    title: "blog.posts.post3.title",
    date: "July 1, 2024",
    category: "Datos",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "data analysis",
    excerpt: "blog.posts.post3.excerpt",
    slug: "/blog/post-3",
  },
];

export function BlogPreviewSection() {
    const { t } = useI18n();
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
            <div className="text-left">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{t('blogPreview.title')}</h2>
                <p className="mt-4 max-w-2xl text-foreground/70">
                    {t('blogPreview.subtitle')}
                </p>
            </div>
             <Button variant="outline" asChild>
                <Link href="/blog">{t('blogPreview.button')} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden border-border/60 hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="p-0">
                <Link href={post.slug}>
                  <Image
                    src={post.image}
                    alt={t(post.title)}
                    data-ai-hint={post.dataAiHint}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <CardTitle className="font-headline text-xl mb-2">
                  <Link href={post.slug} className="hover:text-primary transition-colors">{t(post.title)}</Link>
                </CardTitle>
                <p className="text-foreground/70 text-sm">{t(post.excerpt)}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <p className="text-xs text-foreground/50">{post.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
