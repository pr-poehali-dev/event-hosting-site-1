const GallerySection = () => {
  const portfolioVideos = [
    { 
      image: 'https://cdn.poehali.dev/projects/db95ceea-5212-40ec-9f47-746bb5a917a5/files/a7bf26a9-23ac-4d8d-9bf0-723eb34a0050.jpg',
    },
    { 
      image: 'https://cdn.poehali.dev/projects/db95ceea-5212-40ec-9f47-746bb5a917a5/files/e25fbc26-f523-4b3f-870d-259a9d1eac89.jpg',
    },
    { 
      image: 'https://cdn.poehali.dev/projects/db95ceea-5212-40ec-9f47-746bb5a917a5/files/6a88ffcd-2fcc-4a0b-ba92-745539ae2871.jpg',
    }
  ];

  return (
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
  );
};

export default GallerySection;
