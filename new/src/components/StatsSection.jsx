import { Card } from "@/components/ui/card";
import { Building2, MapPin, Users, Zap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      number: "520+",
      label: "Qozonxona",
      icon: Zap,
      description: "Zamonaviy qozonxonalar",
    },
    {
      number: "23+",
      label: "Filial",
      icon: Building2,
      description: "Butun respublika bo'ylab",
    },
    {
      number: "800+",
      label: "Mutaxassis",
      icon: Users,
      description: "Malakali xodimlar",
    },
    {
      number: "14+",
      label: "Viloyatda faoliyat",
      icon: MapPin,
      description: "Keng qamrovli xizmat",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bizning yutuqlarimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O'zbekiston bo'ylab issiqlik ta'minoti sohasidagi yetakchi korxona
            sifatida faoliyatimizning asosiy ko'rsatkichlari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="relative p-8 text-center bg-gradient-card border-0 shadow-card-hover hover:shadow-corporate transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative mb-6 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Number */}
                <div className="relative mb-2">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <h3 className="relative text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="relative text-muted-foreground text-sm">
                  {stat.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
