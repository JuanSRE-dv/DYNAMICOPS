"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, Archive, FileText, Share2, ShoppingCart, UserCheck, AreaChart, Calculator, CalendarCheck, HardDrive } from "lucide-react";
import { useI18n } from "@/context/i18n";

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

        {servicesByCategory.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h3 className="font-headline text-2xl font-bold text-center mb-10">{t(category.category)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6 border-border/60 hover:border-primary/50 hover:bg-secondary transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <div className="p-4 bg-secondary rounded-full mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">{t(service.title)}</CardTitle>
                  </CardHeader>
                  <CardDescription className="mt-2">
                    {t(service.description)}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
