import { Building, Phone, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    "Jamiyat haqida",
    "Rahbariyat",
    "Yangiliklar",
    "Xizmatlar",
    "Bog'lanish",
  ];

  const services = [
    "Interaktiv xizmatlar",
    "Bo'sh ish o'rinlari",
    "Yuridik yordam",
    "Moliyaviy hisobotlar",
    "Investitsiya loyihalari",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <Building className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Qirguli Issiqlik Manbai</h3>
                <p className="text-sm opacity-80">
                  Mas'uliyati cheklangan jamiyat
                </p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              O'zbekiston Respublikasining yirik issiqlik ta'minoti korxonasi.
              Zamonaviy texnologiyalar asosida sifatli xizmat ko'rsatamiz.
            </p>
            <div className="flex space-x-3">
              <Button
                size="icon"
                variant="outline"
                className="border-white/20 hover:bg-white/10">
                <Globe className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-white/20 hover:bg-white/10">
                <Phone className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-white/20 hover:bg-white/10">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Tezkor havolalar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm opacity-90 hover:opacity-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Xizmatlar</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm opacity-90 hover:opacity-100 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Aloqa</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <div>
                  <p className="text-sm opacity-90">
                    Toshkent shahri, Yunusobod tumani, Amir Temur shox ko'chasi
                    108
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-80" />
                <div>
                  <p className="text-sm opacity-90">+998 71 202 80 80</p>
                  <p className="text-sm opacity-90">+998 71 202 81 81</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-80" />
                <p className="text-sm opacity-90">info@uzissiq.uz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2025 "Qirguli Issiqlik Manbai" MCHJ. Barcha huquqlar
              himoyalangan.
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Maxfiylik siyosati
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Foydalanish shartlari
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
