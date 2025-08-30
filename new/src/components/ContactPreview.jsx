import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, ArrowRight } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bizga murojaat qiling
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bizning mutaxassislarimiz sizning barcha savollaringizga javob
            berishga va professional maslahat berishga tayyor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Telefon
              </h3>
              <p className="text-muted-foreground text-sm">+998 71 123 45 67</p>
              <p className="text-muted-foreground text-xs mt-1">24/7 xizmat</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Email
              </h3>
              <p className="text-muted-foreground text-sm">info@uzissiq.uz</p>
              <p className="text-muted-foreground text-xs mt-1">
                Online qo'llab-quvvatlash
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Manzil
              </h3>
              <p className="text-muted-foreground text-sm">
                Toshkent, Yunusobod
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Amir Temur ko'chasi, 42
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Ish vaqti
              </h3>
              <p className="text-muted-foreground text-sm">
                Dush-Jum: 9:00-18:00
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Shanba: 9:00-13:00
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-card rounded-2xl p-8 shadow-corporate">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Favqulodda vaziyatlarda
            </h3>
            <p className="text-muted-foreground mb-6">
              Issiqlik ta'minoti bilan bog'liq muammolar bo'lsa, bizning
              favqulodda xizmatimiz 24/7 ishlab turadi va tezkor yordam
              ko'rsatadi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                Favqulodda aloqa
              </Button>
              <Button className="bg-gradient-primary hover:bg-primary-dark hover:text-white text-primary shadow-corporate hover:shadow-hero transition-all duration-300">
                Batafsil ma'lumot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
