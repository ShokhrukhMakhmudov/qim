import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Building2, Wrench, ArrowRight } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Zap,
      title: "Issiqlik ta'minoti",
      description:
        "Turar-joy va ishlab chiqarish binolariga 24/7 uzluksiz issiqlik ta'minoti xizmatlari",
      features: [
        "Zamonaviy qozonxonalar",
        "Ekologik toza yoqilg'i",
        "Avtomatik nazorat",
      ],
    },
    {
      icon: Building2,
      title: "Qozonxona xizmatlari",
      description:
        "Qozonxonalar qurilishi, modernizatsiyasi va professional texnik xizmat ko'rsatish",
      features: ["Loyihalash", "Modernizatsiya", "Texnik xizmat"],
    },
    {
      icon: Wrench,
      title: "Ta'mirlash ishlari",
      description:
        "Issiqlik tarmoqlari va uskunalarga shoshilinch va rejalashtirilgan ta'mirlash",
      features: ["Profilaktika", "Shoshilinch ta'mir", "Diagnostika"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bizning xizmatlarimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O'zbekiston bo'ylab professional issiqlik ta'minoti xizmatlarini
            zamonaviy texnologiyalar bilan taklif etamiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-corporate">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold shadow-corporate hover:shadow-hero transition-all duration-300 hover:scale-105">
            Barcha xizmatlar
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
