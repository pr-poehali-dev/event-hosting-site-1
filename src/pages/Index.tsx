import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState(50);
  const [duration, setDuration] = useState(3);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    const basePrice = {
      wedding: 50000,
      corporate: 40000,
      children: 30000,
      birthday: 35000
    };
    const base = basePrice[eventType as keyof typeof basePrice] || 30000;
    const guestMultiplier = guestCount > 100 ? 1.3 : 1;
    const durationMultiplier = duration > 4 ? 1.2 : 1;
    const total = base * guestMultiplier * durationMultiplier;
    setCalculatedPrice(total);
  };

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

  const testimonials = [
    {
      name: 'Анна Петрова',
      event: 'Свадьба',
      rating: 5,
      text: 'Невероятный профессионал! Гости до сих пор вспоминают нашу свадьбу. Программа была идеально выстроена, никаких неловких пауз.'
    },
    {
      name: 'Сергей Иванов',
      event: 'Корпоратив',
      rating: 5,
      text: 'Работали на нашем корпоративе второй раз подряд. Команда в восторге! Умеет найти подход к любой аудитории.'
    },
    {
      name: 'Мария Соколова',
      event: 'День рождения',
      rating: 5,
      text: 'Отличный ведущий для взрослого праздника. Тонкий юмор, без пошлости. Все гости были вовлечены в программу.'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт 8+ лет',
      description: 'Более 500 успешно проведённых мероприятий'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Программа создаётся под ваши пожелания'
    },
    {
      icon: 'Music',
      title: 'Современное оборудование',
      description: 'Профессиональная звуковая и световая аппаратура'
    },
    {
      icon: 'Sparkles',
      title: 'Креативные сценарии',
      description: 'Авторские программы без шаблонов'
    }
  ];

  const services = [
    { name: 'Свадьбы', price: 'от 50 000 ₽', icon: 'Heart' },
    { name: 'Корпоративы', price: 'от 40 000 ₽', icon: 'Briefcase' },
    { name: 'Детские праздники', price: 'от 30 000 ₽', icon: 'Baby' },
    { name: 'Юбилеи', price: 'от 35 000 ₽', icon: 'Gift' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EventHost Pro
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-4 py-2 bg-gradient-to-r from-primary to-secondary">
              <Icon name="Star" size={16} className="mr-2" />
              Профессиональный ведущий
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ваш праздник —<br />наше искусство
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаём атмосферу и эмоции, которые запоминаются на всю жизнь
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover-scale">
                <Icon name="CalendarCheck" size={20} className="mr-2" />
                Забронировать дату
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают меня
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Услуги
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Профессиональное ведение мероприятий любого формата
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={36} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary mt-2">
                    {service.price}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Фотогалерея
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Лучшие моменты с мероприятий
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...portfolioVideos, ...portfolioVideos].slice(0, 8).map((item, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg hover-scale cursor-pointer group">
                <img 
                  src={item.image} 
                  alt={`Gallery ${index + 1}`}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Калькулятор стоимости
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Узнайте примерную стоимость проведения вашего мероприятия
            </p>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Рассчитайте стоимость</CardTitle>
                <CardDescription>Заполните параметры мероприятия</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="event-type">Тип мероприятия</Label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger id="event-type">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Свадьба</SelectItem>
                      <SelectItem value="corporate">Корпоратив</SelectItem>
                      <SelectItem value="children">Детский праздник</SelectItem>
                      <SelectItem value="birthday">Юбилей</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей: {guestCount}</Label>
                  <input
                    type="range"
                    id="guests"
                    min="10"
                    max="300"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>10</span>
                    <span>300</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Продолжительность (часов): {duration}</Label>
                  <input
                    type="range"
                    id="duration"
                    min="2"
                    max="8"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>2</span>
                    <span>8</span>
                  </div>
                </div>
                <Button 
                  onClick={calculatePrice} 
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  disabled={!eventType}
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                {calculatedPrice > 0 && (
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg animate-scale-in">
                    <p className="text-lg text-muted-foreground mb-2">Примерная стоимость:</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {calculatedPrice.toLocaleString()} ₽
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Точная стоимость определяется после консультации
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Что говорят о нас люди, которые уже доверили нам свой праздник
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((review, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.event}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Связаться со мной
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Оставьте заявку, и я свяжусь с вами в течение часа
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">host@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Город</p>
                      <p className="text-muted-foreground">Москва</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="font-semibold mb-3">Мы в соцсетях:</p>
                    <div className="flex gap-3">
                      {['Instagram', 'Youtube', 'Facebook'].map((social) => (
                        <Button key={social} variant="outline" size="icon" className="hover-scale">
                          <Icon name={social as any} size={20} />
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Отправить заявку</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем мероприятии..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EventHost Pro
            </h3>
            <p className="text-muted-foreground mb-6">
              Создаём незабываемые праздники с 2016 года
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EventHost Pro. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
