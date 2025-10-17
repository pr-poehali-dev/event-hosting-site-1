import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    { name: 'Свадьбы', price: 'от 50 000 ₽', icon: 'Heart' },
    { name: 'Корпоративы', price: 'от 40 000 ₽', icon: 'Briefcase' },
    { name: 'Детские праздники', price: 'от 30 000 ₽', icon: 'Baby' },
    { name: 'Юбилеи', price: 'от 35 000 ₽', icon: 'Gift' }
  ];

  return (
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
  );
};

export default ServicesSection;
