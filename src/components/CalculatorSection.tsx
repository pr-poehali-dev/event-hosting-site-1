import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const CalculatorSection = () => {
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

  return (
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
  );
};

export default CalculatorSection;
