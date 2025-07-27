"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Clock,
  Archive,
  FileText,
  Share2,
  ShoppingCart,
  UserCheck,
  AreaChart,
  Calculator,
  CalendarCheck,
  HardDrive,
  Wrench,
  Trash2,
} from "lucide-react";
import { useI18n } from "@/context/i18n";
import { Badge } from "@/components/ui/badge";

const servicesByCategory = [
  {
    category: "services.categories.cat1.title",
    services: [
      {
        icon: <Clock className="w-8 h-8 text-primary" />,
        title: "services.categories.cat1.service1.title",
        description: "services.categories.cat1.service1.description",
      },
      {
        icon: <Archive className="w-8 h-8 text-primary" />,
        title: "services.categories.cat1.service2.title",
        description: "services.categories.cat1.service2.description",
      },
      {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "services.categories.cat1.service3.title",
        description: "services.categories.cat1.service3.description",
      },
    ],
  },
  {
    category: "services.categories.cat2.title",
    services: [
      {
        icon: <Share2 className="w-8 h-8 text-primary" />,
        title: "services.categories.cat2.service1.title",
        description: "services.categories.cat2.service1.description",
      },
      {
        icon: <ShoppingCart className="w-8 h-8 text-primary" />,
        title: "services.categories.cat2.service2.title",
        description: "services.categories.cat2.service2.description",
      },
      {
        icon: <UserCheck className="w-8 h-8 text-primary" />,
        title: "services.categories.cat2.service3.title",
        description: "services.categories.cat2.service3.description",
      },
    ],
  },
  {
    category: "services.categories.cat3.title",
    services: [
      {
        icon: <AreaChart className="w-8 h-8 text-primary" />,
        title: "services.categories.cat3.service1.title",
        description: "services.categories.cat3.service1.description",
      },
      {
        icon: <Calculator className="w-8 h-8 text-primary" />,
        title: "services.categories.cat3.service2.title",
        description: "services.categories.cat3.service2.description",
      },
      {
        icon: <CalendarCheck className="w-8 h-8 text-primary" />,
        title: "services.categories.cat3.service3.title",
        description: "services.categories.cat3.service3.description",
      },
    ],
  },
  {
    category: "services.categories.cat4.title",
    services: [
      {
        icon: <HardDrive className="w-8 h-8 text-primary" />,
        title: "services.categories.cat4.service1.title",
        description: "services.categories.cat4.service1.description",
      },
      {
        icon: <Trash2 className="w-8 h-8 text-primary" />,
        title: "services.categories.cat4.service2.title",
        description: "services.categories.cat4.service2.description",
      },
      {
        icon: <Wrench className="w-8 h-8 text-primary" />,
        title: "services.categories.cat4.service3.title",
        description: "services.categories.cat4.service3.description",
      },
    ],
  },
];

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <header className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">
            {t("servicesPage.title")}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {t("servicesPage.subtitle")}
          </p>
        </div>
      </header>
      <main className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          {servicesByCategory.map((category, catIndex) => (
            <div key={catIndex} className="mb-20">
              <div className="text-center mb-12">
                <Badge variant="default" className="text-sm px-4 py-1 rounded-full">{t(category.category)}</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card
                        className="flex flex-col bg-card border-border/60 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                      >
                        <CardHeader className="flex items-start gap-4 p-6">
                          <div className="p-3 bg-secondary rounded-full">
                            {service.icon}
                          </div>
                          <CardTitle className="font-headline text-xl mt-2">
                            {t(service.title)}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0">
                          <CardDescription>
                            {(t(service.description) as string).split('\n')[0]}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                          <DialogTitle className="font-headline text-2xl mb-4 flex items-center gap-4">
                              <div className="p-3 bg-secondary rounded-full">
                                  {service.icon}
                              </div>
                              {t(service.title)}
                          </DialogTitle>
                          <DialogDescription className="text-base text-foreground/80 whitespace-pre-wrap">
                               {t(service.description)}
                          </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
