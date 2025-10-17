import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
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

  return (
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
  );
};

export default AdvantagesSection;
