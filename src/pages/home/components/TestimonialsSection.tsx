import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Virginia Silveira',
      role: '.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/9e67a31ca7b13afc90ab42dd15edd368.png',
      text: `Estou simplesmente maravilhada com o Bamboo Eventos! O espaço é incrível, desde a recepção impecável até a comida deliciosa, que foi servida com muita atenção para os meus 40 convidados. Todos ficaram super bem atendidos, e as crianças não queriam ir embora de tanto que curtiram o telão e o espaço Kids. Foi realmente encantador!
`,
    },
    {
      name: 'Fernando Alencar',
      role: '.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/f15d47ca92311e21a27c19c0ca61b45b.png',
      text: `Estive recentemente para comemorar o aniversário de duas pequenas bençãos de Deus, Theo e Benício.
Posso dizer que é um excelente buffet, um ótimo ambiente, amplo, agradável e climatizado.
As comidas estavam impecável, a entrada com salgados e outros itens frescos e preparados na hora.
O Jantar com diferentes massas, tudo preparado na hora, estava tudo muito bom!
Espaço kids maravilhoso, recomendo a todos vir conhecer este espaço, parabéns e sucesso aos proprietários.`,
    },
    {
      name: 'Natallya Lopes Machado',
      role: '.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/e4e8d5682e2d71cb54a2314ff5105b78.png',
      text: `Eu fiz a minha festa de formatura no espaço e foi incrível! A decoração e o buffet estavam impecáveis e renderam muitos elogios! O espaço é excelente, os colaboradores muito educados e receptivos, tive uma experiência excepcional`,
    },
    {
      name: 'Layza Maria Rabelo',
      role: '.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/1f267f66c47b56b499f545266e4c0361.png',
      text: `Gostaria de expressar minha profunda gratidão ao espaço Bamboo eventos e a toda a equipe responsável pela festa de aniversário do meu filho. Tudo foi impecável, desde a organização até cada detalhe que tornou esse momento tão especial. A atenção, o cuidado e a dedicação de vocês fizeram toda a diferença, proporcionando uma celebração cheia de alegria e inesquecível para nós e nossos convidados. Muito obrigado por fazerem parte desse dia tão importante!
`,
    },
    {
      name: 'Paula Oliveira',
      role: '.',
      image:
        'https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/aae17f3c2b072e4c0b87af654b99f8e0.png',
      text: `Tive uma excelente experiência com o Bamboo Eventos! Lugar moderno, espaçoso, climatizado, cadeiras lindas! o telão deu um charme especial na festa! O fato de ter totó e Fliperama é muito bom, amei a monitora dos brinquedos, super cuidadosa e gentil! Nota 10x10`,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-8 md:py-16 bg-[#0d3d2f] text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-6 left-6 w-32 h-32 md:w-40 md:h-40">
          <i className="ri-double-quotes-l text-[100px] md:text-[130px] text-[#d4af37]"></i>
        </div>
        <div className="absolute bottom-6 right-6 w-32 h-32 md:w-40 md:h-40">
          <i className="ri-double-quotes-r text-[100px] md:text-[130px] text-[#d4af37]"></i>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-3">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm
            a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-20 md:h-20 rounded-full overflow-hidden mb-4 md:mb-4 ring-4 ring-[#d4af37]">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="mb-3 md:mb-4">
                <i className="ri-double-quotes-l text-3xl md:text-3xl text-[#d4af37]"></i>
              </div>

              <p className="text-sm md:text-xl text-gray-200 mb-4 md:mb-6 leading-relaxed italic">
                {testimonials[activeIndex].text}
              </p>

              <h4 className="text-base md:text-xl font-bold text-[#d4af37] mb-1">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-xs md:text-base text-gray-300">{testimonials[activeIndex].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 md:gap-3 mt-4 md:mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 md:w-10 md:h-10 flex items-center justify-center bg-[#d4af37] rounded-full hover:bg-[#c4a137] transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <i className="ri-arrow-left-s-line text-xl md:text-2xl text-[#0d3d2f]"></i>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 md:w-2 md:h-2 rounded-full transition-all cursor-pointer ${
                    index === activeIndex ? 'bg-[#d4af37] w-6 md:w-6' : 'bg-white/30'
                  }`}
                  aria-label={`Depoimento ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 md:w-10 md:h-10 flex items-center justify-center bg-[#d4af37] rounded-full hover:bg-[#c4a137] transition-colors cursor-pointer"
              aria-label="Próximo"
            >
              <i className="ri-arrow-right-s-line text-xl md:text-2xl text-[#0d3d2f]"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}