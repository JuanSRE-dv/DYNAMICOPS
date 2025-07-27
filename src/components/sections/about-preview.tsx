"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/i18n';

export function AboutPreviewSection() {
    const { t } = useI18n();
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{t('aboutPreview.title')}</h2>
            <p className="text-foreground/70">
              {t('aboutPreview.description1')}
            </p>
            <p className="text-foreground/70">
              {t('aboutPreview.description2')}
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/about">{t('aboutPreview.button')}</Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Dynamicops Team"
              data-ai-hint="office automation"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
