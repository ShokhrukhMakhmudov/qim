import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, ArrowRight } from "lucide-react";

const AboutPreview = () => {
  const achievements = [
    {
      icon: Target,
      title: "30+ yillik tajriba",
      description:
        "1992 yildan buyon issiqlik ta'minoti sohasida faoliyat yuritamiz",
    },
    {
      icon: Award,
      title: "Yuqori sifat",
      description:
        "Xalqaro standartlarga mos keladigan sifatli xizmatlar ko'rsatamiz",
    },
    {
      icon: Users,
      title: "Malakali jamoa",
      description: "800+ ta yuqori malakali mutaxassis va texnik xodim",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              "Issiqliktaʻminoti" AJ haqida
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Biz 1992 yildan beri O'zbekiston aholisini sifatli issiqlik bilan
              ta'minlash sohasida faoliyat yurituvchi yetakchi korxonamiz.
              Zamonaviy texnologiyalar va malakali kadrlar bilan respublika
              bo'ylab 520+ qozonxona va 23+ filialimiz orqali xizmat
              ko'rsatamiz.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold shadow-corporate hover:shadow-hero transition-all duration-300 hover:scale-105">
              Batafsil ma'lumot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  520+
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  Zamonaviy qozonxona
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  23+
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  Filial tarmog'i
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  800+
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  Malakali xodim
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  14+
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  Faoliyat viloyati
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
