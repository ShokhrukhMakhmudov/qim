import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Eye, Clock } from "lucide-react";

export default function page() {
  const allNews = [
    {
      id: 1,
      title: "Qurilish sohasida strategik hamkorlik sari: vazirlar uchrashuvi",
      date: "27.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-07-30_09-09-54.jpg?alt=media&token=69fae2bd-93b1-4342-b0c5-574cae65da40",
      excerpt:
        "Qurilish va infratuzilma loyihalari bo'yicha strategik hamkorlik masalalari muhokama qilindi. Yangi loyihalar va investitsiya imkoniyatlari ko'rib chiqildi.",
      content:
        "Bugun \"Issiqliktaʻminoti\" AJ rahbariyati Qurilish vazirligi vakillari bilan muhim uchrashuv o'tkazdi. Uchrashuvda respublika bo'ylab issiqlik ta'minoti infratuzilmasini rivojlantirish, yangi zamonaviy qozonxonalar qurish va mavjud tizimlarni modernizatsiya qilish masalalari muhokama qilindi.",
      views: 1240,
      readTime: "3 daqiqa",
    },
    {
      id: 2,
      title:
        "Turkiyada xizmat safari: zamonaviy texnologiyalar bilan tanishish",
      date: "25.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-07-30_09-09-48.jpg?alt=media&token=2e2e6a40-9178-4a24-9528-f5a5fcf366b0",
      excerpt:
        "\"Issiqliktaʻminoti\" AJ boshqaruv raisining birinchi o'rinbosari Sherzod Sultonov Turkiyada zamonaviy issiqlik ta'minoti texnologiyalari bilan tanishmoqda.",
      content:
        "Sherzod Sultonov Turkiyaning yetakchi issiqlik ta'minoti kompaniyalari bilan uchrashuv o'tkazdi. Safar davomida eng so'nggi texnologiyalar, energiya tejamkor yechimlar va zamonaviy boshqaruv tizimlari bilan tanishish rejalashtirilgan. Bu tajriba O'zbekistonda yangi standartlarni joriy etishga yordam beradi.",
      views: 890,
      readTime: "4 daqiqa",
    },
    {
      id: 3,
      title:
        "Investitsiya loyihalari va moliyaviy hisobotlar bo'yicha kengash yig'ilishi",
      date: "20.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-11-17_13-21-54.jpg?alt=media&token=7e3507ad-ed15-4dab-9560-8c51675db20e",
      excerpt:
        "Yangi investitsiya loyihalari va moliyaviy ko'rsatkichlarni baholash bo'yicha kengash a'zolari yig'ilishi o'tkazildi.",
      content:
        "Kompaniya kengash a'zolari 2025 yil uchun rejalashtirilgan investitsiya loyihalarini muhokama qildi. Yangi qozonxonalar qurish, mavjud infratuzilmani modernizatsiya qilish va xodimlar malakasini oshirish bo'yicha qarorlar qabul qilindi.",
      views: 654,
      readTime: "5 daqiqa",
    },
    {
      id: 4,
      title: "Yangi qozonxona majmuasi Toshkentda ishga tushirildi",
      date: "18.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-07-30_09-09-54.jpg?alt=media&token=69fae2bd-93b1-4342-b0c5-574cae65da40",

      excerpt:
        "Toshkent shahrida zamonaviy qozonxona majmuasi rasmiy ravishda ishga tushirildi. Majmua 50,000 ta uygacha issiqlik bilan ta'minlaydi.",
      content:
        "Yangi qozonxona majmuasi eng so'nggi Yevropa texnologiyalari asosida qurilgan. Majmua ekologik toza yoqilg'i ishlatadi va avtomatlashtirilgan boshqaruv tizimiga ega. Bu loyiha orqali Toshkent aholisining issiqlik ta'minoti sifati sezilarli darajada yaxshilanadi.",
      views: 2100,
      readTime: "6 daqiqa",
    },
    {
      id: 5,
      title: "Xodimlar malakasini oshirish dasturi boshlandi",
      date: "15.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-07-30_09-09-48.jpg?alt=media&token=2e2e6a40-9178-4a24-9528-f5a5fcf366b0",

      excerpt:
        "Kompaniya xodimlari uchun zamonaviy texnologiyalar bo'yicha maxsus o'quv kurslari tashkil etildi.",
      content:
        '"Issiqliktaʻminoti" AJ barcha xodimlari uchun malaka oshirish dasturini boshladi. Kurslar davomida xodimlar yangi texnologiyalar, xavfsizlik choralari va mijozlar bilan muloqot qilish usullari bo\'yicha bilim olishadi.',
      views: 456,
      readTime: "3 daqiqa",
    },
    {
      id: 6,
      title: "Energiya samaradorligi bo'yicha yangi standartlar",
      date: "12.08.2025",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qim-lp.appspot.com/o/images%2Fphoto_2024-11-17_13-21-54.jpg?alt=media&token=7e3507ad-ed15-4dab-9560-8c51675db20e",

      excerpt:
        "Kompaniya energiya samaradorligini oshirish maqsadida yangi standartlar va texnologiyalar joriy etmoqda.",
      content:
        "Energiya tejash va atrof-muhitni muhofaza qilish maqsadida yangi standartlar ishlab chiqildi. Bu choralar orqali yoqilg'i sarfini 15-20% gacha kamaytirish va CO2 chiqindilarini sezilarli darajada pasaytirish rejalashtirilgan.",
      views: 789,
      readTime: "4 daqiqa",
    },
  ];

  const categories = [
    "Barchasi",
    "Yangiliklar",
    "Loyihalar",
    "Texnologiyalar",
    "Hamkorlik",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Yangiliklar va e'lonlar
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "Issiqliktaʻminoti" AJ faoliyati, yangi loyihalar va muhim
              voqealar haqidagi so'nggi ma'lumotlar bilan tanishing
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Asosiy yangiliklar
            </h2>
            <p className="text-muted-foreground">
              Eng muhim va dolzarb yangiliklar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured */}
            <Card className="group overflow-hidden hover:shadow-corporate transition-all duration-300">
              <div className="relative">
                <img
                  src={allNews[0].image}
                  alt={allNews[0].title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{allNews[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{allNews[0].views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{allNews[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {allNews[0].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {allNews[0].content}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary">
                  Batafsil o'qish
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Secondary Featured */}
            <div className="space-y-6">
              {allNews.slice(1, 3).map((news) => (
                <Card
                  key={news.id}
                  className="group overflow-hidden hover:shadow-card-hover transition-all duration-300">
                  <div className="flex gap-4 p-4">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">{news.date}</span>
                        <Eye className="h-3 w-3 ml-2" />
                        <span className="text-xs">{news.views}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {news.excerpt}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-12 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Barcha yangiliklar
            </h2>
            <p className="text-muted-foreground">
              Kompaniya faoliyatidagi barcha yangiliklar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.slice(3).map((news) => (
              <Card
                key={news.id}
                className="group overflow-hidden border-0 shadow-card-hover hover:shadow-corporate transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
                <div className="relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{news.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">{news.views}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {news.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{news.readTime}</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-sm font-semibold text-primary">
                      O'qish
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
