import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Users,
  Send,
  Globe,
} from "lucide-react";

export default function page() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon raqamlar",
      details: [
        "+998 71 123 45 67 (Asosiy)",
        "+998 71 987 65 43 (Qo'shimcha)",
        "+998 71 555 77 99 (24/7 xizmat)",
      ],
    },
    {
      icon: Mail,
      title: "Elektron pochta",
      details: [
        "info@uzissiq.uz",
        "reception@uzissiq.uz",
        "support@uzissiq.uz",
      ],
    },
    {
      icon: MapPin,
      title: "Manzil",
      details: [
        "Toshkent shahri,",
        "Yunusobod tumani,",
        "Amir Temur ko'chasi, 42-uy",
      ],
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      details: [
        "Dushanba - Juma: 9:00 - 18:00",
        "Shanba: 9:00 - 13:00",
        "Yakshanba: Dam olish kuni",
        "Favqulodda: 24/7",
      ],
    },
  ];

  const departments = [
    {
      title: "Bosh direktoriyat",
      phone: "+998 71 123 45 67",
      email: "director@uzissiq.uz",
      responsible: "Ilhom To'rayev",
    },
    {
      title: "Texnik bo'lim",
      phone: "+998 71 123 45 68",
      email: "technical@uzissiq.uz",
      responsible: "Sherzod Sultonov",
    },
    {
      title: "Mijozlar xizmati",
      phone: "+998 71 123 45 69",
      email: "support@uzissiq.uz",
      responsible: "Farrux Karimov",
    },
    {
      title: "Moliya bo'limi",
      phone: "+998 71 123 45 70",
      email: "finance@uzissiq.uz",
      responsible: "Nilufar Rahimova",
    },
  ];

  const branches = [
    {
      city: "Toshkent",
      address: "Yunusobod tumani, Amir Temur ko'chasi, 42",
      phone: "+998 71 123 45 67",
    },
    {
      city: "Samarqand",
      address: "A.Navoiy ko'chasi, 15",
      phone: "+998 66 234 56 78",
    },
    {
      city: "Buxoro",
      address: "Mustaqillik ko'chasi, 28",
      phone: "+998 65 345 67 89",
    },
    {
      city: "Xorazm",
      address: "Paxtakor ko'chasi, 12",
      phone: "+998 62 456 78 90",
    },
    {
      city: "Farg'ona",
      address: "Al-Xorazmiy ko'chasi, 45",
      phone: "+998 73 567 89 01",
    },
    {
      city: "Andijon",
      address: "Bobur ko'chasi, 33",
      phone: "+998 74 678 90 12",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Biz bilan bog'laning
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bizning mutaxassislarimiz sizning barcha savollaringizga javob
              berishga va kerakli yordam ko'rsatishga tayyor. 24/7 xizmat
              ko'rsatamiz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Aloqa ma'lumotlari
            </h2>
            <p className="text-lg text-muted-foreground">
              Bizga murojaat qilishning barcha usullari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-corporate">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Savollaringizni yuboring
              </h3>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Ism</Label>
                        <Input
                          id="firstName"
                          placeholder="Ismingizni kiriting"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Familiya</Label>
                        <Input
                          id="lastName"
                          placeholder="Familiyangizni kiriting"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon raqam</Label>
                      <Input id="phone" placeholder="+998 XX XXX XX XX" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Elektron pochta</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Mavzu</Label>
                      <Input id="subject" placeholder="Murojaat mavzusi" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Xabar</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Sizning savolingiz yoki taklifingiz..."
                      />
                    </div>

                    <Button className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 shadow-corporate hover:shadow-hero transition-all duration-300">
                      <Send className="mr-2 h-4 w-4" />
                      Xabarni yuborish
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Departments */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Bo'limlar va mas'ullar
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-card-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {dept.title}
                          </h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone className="h-3 w-3" />
                              <span>{dept.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Mail className="h-3 w-3" />
                              <span>{dept.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="h-3 w-3" />
                              <span>{dept.responsible}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Filiallarimiz
            </h2>
            <p className="text-lg text-muted-foreground">
              O'zbekiston bo'ylab joylashgan filiallarimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-primary rounded-lg p-2 shadow-corporate">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {branch.city} filiali
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {branch.address}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        <span>{branch.phone}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bizning joylashuvimiz
            </h2>
            <p className="text-lg text-muted-foreground">
              Bosh ofisimiz Toshkent shahrida joylashgan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-corporate">
              <div className="bg-gradient-card h-64 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Interaktiv xarita
                  </h3>
                  <p className="text-muted-foreground">
                    Toshkent shahri, Yunusobod tumani, Amir Temur ko'chasi,
                    42-uy
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
