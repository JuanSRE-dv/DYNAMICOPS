"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, Archive, FileText, Share2, ShoppingCart, UserCheck, AreaChart, Calculator, CalendarCheck, HardDrive, Wrench, Trash2, ArrowRight } from "lucide-react";
import { useI18n } from "@/context/i18n";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const servicesByCategory = [
  {
    category: "services.categories.cat1.title",
    services: [
      {
        icon: <Clock className="w-10 h-10 text-primary" />,
        title: "services.categories.cat1.service1.title",
        description: "services.categories.cat1.service1.description",
      },
      {
        icon: <Archive className="w-10 h-10 text-primary" />,
        title: "services.categories.cat1.service2.title",
        description: "services.categories.cat1.service2.description",
      },
      {
        icon: <FileText className="w-10 h-10 text-primary" />,
        title: "services.categories.cat1.service3.title",
        description: "services.categories.cat1.service3.description",
      },
    ]
  },
  {
    category: "services.categories.cat2.title",
    services: [
       {
        icon: <Share2 className="w-10 h-10 text-primary" />,
        title: "services.categories.cat2.service1.title",
        description: "services.categories.cat2.service1.description",
      },
      {
        icon: <ShoppingCart className="w-10 h-10 text-primary" />,
        title: "services.categories.cat2.service2.title",
        description: "services.categories.cat2.service2.description",
      },
      {
        icon: <UserCheck className="w-10 h-10 text-primary" />,
        title: "services.categories.cat2.service3.title",
        description: "services.categories.cat2.service3.description",
      },
    ]
  },
   {
    category: "services.categories.cat3.title",
    services: [
       {
        icon: <AreaChart className="w-10 h-10 text-primary" />,
        title: "services.categories.cat3.service1.title",
        description: "services.categories.cat3.service1.description",
      },
      {
        icon: <Calculator className="w-10 h-10 text-primary" />,
        title: "services.categories.cat3.service2.title",
        description: "services.categories.cat3.service2.description",
      },
      {
        icon: <CalendarCheck className="w-10 h-10 text-primary" />,
        title: "services.categories.cat3.service3.title",
        description: "services.categories.cat3.service3.description",
      },
    ]
  },
  {
    category: "services.categories.cat4.title",
    services: [
       {
        icon: <HardDrive className="w-10 h-10 text-primary" />,
        title: "services.categories.cat4.service1.title",
        description: "services.categories.cat4.service1.description",
      },
       {
        icon: <Trash2 className="w-10 h-10 text-primary" />,
        title: "services.categories.cat4.service2.title",
        description: "services.categories.cat4.service2.description",
      },
       {
        icon: <Wrench className="w-10 h-10 text-primary" />,
        title: "services.categories.cat4.service3.title",
        description: "services.categories.cat4.service3.description",
      },
    ]
  }
];


export function ServicesSection() {
    const { t } = useI18n();
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{t('services.title')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesByCategory.flatMap(c => c.services).slice(0, 6).map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 border-border/60 hover:border-primary/50 hover:bg-secondary transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <div className="p-4 bg-secondary rounded-full mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">{t(service.title)}</CardTitle>
                  </CardHeader>
                  <CardDescription className="mt-2 text-sm">
                    {t(service.description).split('. ')[0] + '.'}
                  </CardDescription>
                </Card>
            ))}
        </div>
        <div className="text-center mt-16">
            <Button asChild size="lg">
                <Link href="/services">{t('hero.exploreServices')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

    
