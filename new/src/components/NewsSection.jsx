import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Qurilish sohasida strategik hamkorlik sari: vazirlar uchrashuvi",
      date: "27.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-07-30_09-09-54.jpg?alt=media&token=69fae2bd-93b1-4342-b0c5-574cae65da40",
      excerpt:
        "Qurilish va infratuzilma loyihalari bo'yicha strategik hamkorlik masalalari muhokama qilindi.",
    },
    {
      id: 2,
      title:
        "Shu kunlarda Turkiyada xizmat safarida bo'lib turgan \"Issiqliktaʻminoti\" AJ boshqaruv raisining birinchi o'rinbosari Sherzod Sultonov issiqlik taʻminoti yo'nalishidagi turli korxonalar faoliyati bilan yaqindan tanishmoqda.",
      date: "25.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-07-30_09-09-48.jpg?alt=media&token=2e2e6a40-9178-4a24-9528-f5a5fcf366b0",
      excerpt:
        "Turkiyadagi zamonaviy texnologiyalar va eng so'nggi yechimlar bilan tanishish.",
    },
    {
      id: 3,
      title:
        "Investitsiya loyihalari va moliyaviy hisobotlar bo'yicha kengash yig'ilishi",
      date: "20.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-11-17_13-21-54.jpg?alt=media&token=7e3507ad-ed15-4dab-9560-8c51675db20e",
      excerpt:
        "Yangi investitsiya loyihalari va moliyaviy ko'rsatkichlarni baholash.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            So'nggi yangiliklar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kompaniyamizning eng muhim voqealari va yangiliklari bilan tanishing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Card
              key={news.id}
              className="group overflow-hidden border-0 shadow-card-hover hover:shadow-corporate transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{news.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-3 group-hover:text-primary transition-colors duration-300">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {news.excerpt}
                </p>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary-dark group-hover:translate-x-1 transition-all duration-300">
                  Batafsil o'qish
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold shadow-corporate hover:shadow-hero transition-all duration-300 hover:scale-105">
            Barcha yangiliklar
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
