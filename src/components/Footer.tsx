const Footer = () => {
  return (
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
  );
};

export default Footer;
