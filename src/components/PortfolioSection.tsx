import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const PortfolioSection = () => {
  const portfolioVideos = [
    { 
      category: 'Свадьбы', 
      image: 'https://cdn.poehali.dev/projects/db95ceea-5212-40ec-9f47-746bb5a917a5/files/a7bf26a9-23ac-4d8d-9bf0-723eb34a0050.jpg',
      title: 'Свадьба Александры и Дмитрия',
      description: 'Романтическая церемония в загородном клубе'
    },
    { 
      category: 'Корпоративы', 
      image: 'https://cdn.poehali.dev/projects/db95ceea-5212-40ec-9f47-746bb5a917a5/files/e25fbc26-f523-4b3f-870d-259a9d1eac89.jpg',
      title: 'Новогодний корпоратив IT-компании',
      description: 'Динамичная программа для 200+ гостей'
    },
    { 
      category: 'Детские', 
      image: 'https://cdn.poehali.dev/projects/db95ceea-5212-40ec-9f47-746bb5a917a5/files/6a88ffcd-2fcc-4a0b-ba92-745539ae2871.jpg',
      title: 'День рождения Максима (7 лет)',
      description: 'Яркий праздник с играми и конкурсами'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Видео-портфолио
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Посмотрите, как мы создаём незабываемые моменты
        </p>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="wedding">Свадьбы</TabsTrigger>
            <TabsTrigger value="corporate">Корпоративы</TabsTrigger>
            <TabsTrigger value="children">Детские</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="grid md:grid-cols-3 gap-6">
            {portfolioVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover-scale group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.image} 
                    alt={video.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Icon name="Play" size={32} className="text-primary" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary">
                    {video.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="wedding" className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover-scale group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={portfolioVideos[0].image} 
                  alt={portfolioVideos[0].title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <Icon name="Play" size={32} className="text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{portfolioVideos[0].title}</CardTitle>
                <CardDescription>{portfolioVideos[0].description}</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="corporate" className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover-scale group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={portfolioVideos[1].image} 
                  alt={portfolioVideos[1].title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <Icon name="Play" size={32} className="text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{portfolioVideos[1].title}</CardTitle>
                <CardDescription>{portfolioVideos[1].description}</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="children" className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover-scale group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={portfolioVideos[2].image} 
                  alt={portfolioVideos[2].title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <Icon name="Play" size={32} className="text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{portfolioVideos[2].title}</CardTitle>
                <CardDescription>{portfolioVideos[2].description}</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
