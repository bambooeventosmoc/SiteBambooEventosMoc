export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-briefcase-line',
      title: 'Eventos Corporativos',
      description:
        'Conferências, seminários, lançamentos de produtos e eventos empresariais planejados com profissionalismo e inovação.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/e9f4513aa3c08834d696190c2c5063db.png',
    },
    {
      icon: 'ri-heart-line',
      title: 'Casamentos',
      description:
        'Celebrações românticas e personalizadas que refletem a história única de cada casal, do planejamento à execução.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/4c7d9c7b42182ce506964909868e1b84.png',
    },
    {
      icon: 'ri-cake-3-line',
      title: 'Festas e Celebrações',
      description:
        'Aniversários, formaturas, comemorações especiais com decoração criativa e experiências memoráveis para todos os convidados.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/2747356289e60dd2ec581d020e2616e7.png',
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'área kids',
      description:
        'Nosso salão de festas tem área kids, um espaço seguro e confortável para as crianças brincarem. Enquanto elas se divertem, os pais aproveitam a festa com tranquilidade.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/ba04e0d01c5fbe46fa441550a1a2d7d0.png',
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Catering Premium',
      description:
        'Experiências gastronômicas exclusivas com cardápios personalizados e apresentação impecável para encantar seus convidados.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/9b2bd6b565b87b2a7c5b93bbdadd90ca.png',
    },
    {
      icon: 'ri-palette-line',
      title: 'Decoração',
      description:
        'Ambientações únicas e personalizadas que transformam espaços em cenários deslumbrantes alinhados ao seu conceito.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/41b9638653bcc594f97eae07f5986f39.png',
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-3">
        <div className="text-center mb-4 md:mb-10">
          <h2 className="text-xl md:text-4xl font-bold text-[#0d3d2f] mb-2 md:mb-3">
            Nossos Serviços
          </h2>
          <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para tornar seu evento extraordinário, com qualidade e dedicação em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-32 md:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-2 md:p-5">
                <div className="w-7 h-7 md:w-12 md:h-12 flex items-center justify-center bg-[#d4af37] rounded-full mb-1.5 md:mb-3">
                  <i className={`${service.icon} text-base md:text-2xl text-[#0d3d2f]`}></i>
                </div>
                <h3 className="text-xs md:text-xl font-bold text-[#0d3d2f] mb-1.5 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}