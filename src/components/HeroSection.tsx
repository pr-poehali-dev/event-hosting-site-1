import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
