"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

export default function page() {
  const values = [
    {
      icon: Target,
      title: "Missiyamiz",
      description:
        "O'zbekiston aholisini sifatli issiqlik ta'minoti bilan ta'minlash va energiya samaradorligini oshirish",
    },
    {
      icon: Globe,
      title: "Viziyamiz",
      description:
        "Mintaqada yetakchi issiqlik ta'minoti kompaniyasi sifatida zamonaviy va ekologik toza xizmatlar ko'rsatish",
    },
    {
      icon: Award,
      title: "Sifat siyosati",
      description:
        "Xalqaro standartlarga mos keladigan yuqori sifatli xizmatlar va doimiy takomillashtirish",
    },
    {
      icon: Users,
      title: "Jamoa",
      description:
        "Malakali mutaxassislar jamoasi va zamonaviy texnologiyalar bilan ta'minlangan ishlab chiqarish",
    },
  ];

  const achievements = [
    { year: "1992", event: "Kompaniya tashkil etildi" },
    { year: "2010", event: "Zamonaviy qozonxonalar ishga tushirildi" },
    {
      year: "2015",
      event: "Respublika bo'ylab filiallar tarmog'i kengaytirildi",
    },
    { year: "2020", event: "Raqamli texnologiyalar joriy etildi" },
    { year: "2025", event: "520+ qozonxona va 23+ filial ishlaydi" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              "Qirguli Issiqlik Manbai" MCHJ haqida
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              O'zbekiston Respublikasi Bosh Vazirining 2005-yil 20-sentyabr
              kungi yig'ilish qarori va Farg'ona viloyati xokimining 2005-yil
              25-noyabr kungi qaroriga asosan Farg'ona viloyati «Issiqlik
              manbai» ishlab chiqarish boshqarmasining Farg'ona shahar Qirguli
              mavzesi uchastkazi baʼzasida tashkil qilingan. Farg'ona shahar
              xokimligida 16.09.2005 yil kuni №848-son bilan ro'yxatdan
              o'tkazilgan. Jamiyatimiz barcha issiqlik energiyasini "IES"AJ
              Farg'ona IEM filialidan sotib oladi. Jamiyatimiz bugungi kunda 317
              dona ko'p qavatli uylarga (16654 dona iste'molchi) issiq suv
              yetkazib beradi. Bizdan yuqori turuvchi tashkilotlar Qurilish va
              uy-joy kommunal xo'jaligi vazirligi Farg'ona viloyati boshqarmasi
              hamda O'zbekiston Respublikasi Davlat aktivlarini boshqarish
              agentligi Farg'ona viloyati hududiy boshqarmasi.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bizning qadriyatlarimiz
            </h2>
            <p className="text-lg text-muted-foreground">
              Kompaniyamizning asosiy yo'nalishlari va qarashlarimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bizning tarixmiz
            </h2>
            <p className="text-lg text-muted-foreground">
              Kompaniyaning rivojlanish bosqichlari
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="bg-gradient-primary text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-corporate group-hover:shadow-hero transition-all duration-300">
                    {item.year}
                  </div>
                  <Card className="flex-1 group-hover:shadow-card-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <p className="text-lg text-foreground font-medium">
                        {item.event}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rahbariyat
            </h2>
            <p className="text-lg text-muted-foreground">
              Kompaniya boshqaruvini amalga oshiruvchi rahbar shaxslar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ilhom To'rayev
                </h3>
                <p className="text-primary font-medium mb-2">Boshqaruv raisi</p>
                <p className="text-muted-foreground text-sm">
                  Kompaniya strategik rivojlanishi va boshqaruvini amalga
                  oshiradi
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Sherzod Sultonov
                </h3>
                <p className="text-primary font-medium mb-2">
                  Birinchi o'rinbosar
                </p>
                <p className="text-muted-foreground text-sm">
                  Texnik yo'nalish va ishlab chiqarish jarayonlarini boshqaradi
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Texnik rahbariyat
                </h3>
                <p className="text-primary font-medium mb-2">
                  Mutaxassislar jamoasi
                </p>
                <p className="text-muted-foreground text-sm">
                  800+ malakali xodim va mutaxassis ishlab chiqarishda faoliyat
                  yuritadi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
