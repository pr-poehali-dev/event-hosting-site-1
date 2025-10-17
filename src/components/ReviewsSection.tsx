import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
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

  return (
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
  );
};

export default ReviewsSection;
