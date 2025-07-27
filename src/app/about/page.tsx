"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle } from 'lucide-react';
import { useI18n } from '@/context/i18n';

const teamMembers = [
  { name: 'Alice Johnson', role: 'about.team.member1.role', avatar: 'AJ' },
  { name: 'Bob Williams', role: 'about.team.member2.role', avatar: 'BW' },
  { name: 'Charlie Brown', role: 'about.team.member3.role', avatar: 'CB' },
];

const values = [
    { name: 'about.values.value1.name', description: 'about.values.value1.description' },
    { name: 'about.values.value2.name', description: 'about.values.value2.description' },
    { name: 'about.values.value3.name', description: 'about.values.value3.description' },
    { name: 'about.values.value4.name', description: 'about.values.value4.description' },
];

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="bg-background text-foreground">
      <header className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">{t('about.title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </header>
      
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">{t('about.mission.title')}</h2>
              <p className="text-foreground/70 mb-4">
                {t('about.mission.description')}
              </p>
               <h3 className="font-headline text-2xl font-bold mt-8 mb-4">{t('about.values.title')}</h3>
                <ul className="space-y-3">
                    {values.map(value => (
                        <li key={value.name} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold">{t(value.name)}</h4>
                                <p className="text-foreground/70">{t(value.description)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative h-96">
               <Image src="https://placehold.co/600x400.png" alt="Office collaboration" data-ai-hint="business automation" layout="fill" objectFit="cover" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('about.team.title')}</h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center bg-card hover:bg-card/80 transition-colors">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                     <AvatarImage src={`https://placehold.co/96x96.png?text=${member.avatar}`} />
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary">{t(member.role)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
