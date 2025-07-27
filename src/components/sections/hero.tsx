"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/context/i18n";

export function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                {t('hero.title')}
              </h1>
              <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#services">{t('hero.exploreServices')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">{t('hero.contactUs')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
