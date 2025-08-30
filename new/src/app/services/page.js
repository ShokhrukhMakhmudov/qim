import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Building2,
  Wrench,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function page() {
  const mainServices = [
    {
      icon: Zap,
      title: "Issiqlik ta'minoti",
      description:
        "Turar-joy va ishlab chiqarish binolariga markazlashgan issiqlik ta'minoti xizmatlari",
      features: [
        "24/7 uzluksiz xizmat ko'rsatish",
        "Zamonaviy qozonxonalar orqali",
        "Ekologik toza yoqilg'i ishlatish",
        "Avtomatlashtirilgan nazorat tizimi",
      ],
    },
    {
      icon: Building2,
      title: "Qozonxona xizmatlari",
      description:
        "Qozonxonalar qurilishi, modernizatsiyasi va texnik xizmat ko'rsatish",
      features: [
        "Yangi qozonxonalar loyihalash",
        "Mavjud qozonxonalarni modernizatsiya qilish",
        "Doimiy texnik xizmat ko'rsatish",
        "Energiya samaradorligini oshirish",
      ],
    },
    {
      icon: Wrench,
      title: "Texnik xizmat",
      description:
        "Issiqlik tarmoqlari va uskunalarga professional texnik xizmat ko'rsatish",
      features: [
        "Profilaktik tekshiruvlar",
        "Shoshilinch ta'mirlash ishlari",
        "Uskunalar almashtirilishi",
        "Tizim optimallashtirish",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Konsalting xizmatlari",
      description:
        "Energiya samaradorligi va issiqlik ta'minoti bo'yicha maslahat xizmatlari",
    },
    {
      title: "Loyihalash",
      description: "Issiqlik ta'minoti tizimlari loyihalash va hisob-kitoblar",
    },
    {
      title: "Montaj ishlari",
      description: "Issiqlik tarmoqlari va qozonxonalar montaji",
    },
    {
      title: "Diagnostika",
      description: "Issiqlik yo'qotishlarini aniqlash va bartaraf etish",
    },
  ];

  const regions = [
    "Toshkent shahri",
    "Toshkent viloyati",
    "Samarqand viloyati",
    "Buxoro viloyati",
    "Xorazm viloyati",
    "Qashqadaryo viloyati",
    "Surxondaryo viloyati",
    "Navoiy viloyati",
    "Jizzax viloyati",
    "Sirdaryo viloyati",
    "Farg'ona viloyati",
    "Namangan viloyati",
    "Andijon viloyati",
    "Qoraqalpog'iston Respublikasi",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bizning xizmatlarimiz
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "Issiqliktaʻminoti" AJ O'zbekiston bo'ylab keng ko'lamli issiqlik
              ta'minoti xizmatlarini taklif etadi. Bizning malakali
              mutaxassislarimiz zamonaviy texnologiyalar asosida sifatli xizmat
              ko'rsatishadi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Asosiy xizmatlar
            </h2>
            <p className="text-lg text-muted-foreground">
              Bizning mutaxassislik sohasidagi asosiy yo'nalishlar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-corporate">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qo'shimcha xizmatlar
            </h2>
            <p className="text-lg text-muted-foreground">
              Kompleks yechimlar uchun qo'shimcha professional xizmatlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Faoliyat hududlari
            </h2>
            <p className="text-lg text-muted-foreground">
              Biz O'zbekistonning barcha viloyatlarida xizmat ko'rsatamiz
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-gradient-card hover:bg-accent transition-colors">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Xizmat olish uchun murojaat qiling
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bizning mutaxassislarimiz sizga professional maslahat berib, eng
              yaxshi yechimlarni taklif qilishadi
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2 text-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-medium">+998 71 123 45 67</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">24/7 xizmat</span>
              </div>
            </div>

            <div className="mt-8">
              <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold shadow-corporate hover:shadow-hero transition-all duration-300 hover:scale-105">
                Bog'lanish
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
