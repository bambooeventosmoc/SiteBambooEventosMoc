
import { Link } from 'react-router-dom';

export default function AboutSection() {
  const stats = [
    { number: '98%', label: 'Clientes Satisfeitos' }
  ];

  return (
    <section className="py-6 md:py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12 items-center">
          {/* Imagem */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/989fc8187df1d51c7ca725df7dafdac1.png"
                alt="Equipe Bamboo Eventos"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 md:w-24 md:h-24 bg-[#d4af37] rounded-2xl opacity-20"></div>
          </div>

          {/* Conteúdo */}
          <div className="text-center">
            <h2 className="text-xl md:text-4xl font-bold text-[#0d3d2f] mb-2 md:mb-5">
              Sobre a Bamboo Eventos
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed">
              A Bamboo Eventos é um espaço completo e versátil para locação, ideal para quem busca um salão de festas em Montes Claros para qualquer tipo de celebração. Atuamos com locação para diversos tipos de eventos: festas de aniversário, eventos corporativos, reuniões empresariais, treinamentos, casamentos e formaturas. Nosso espaço possui capacidade para até 238 pessoas, ambiente climatizado, isolamento acústico e equipamentos de multimídia como retroprojetor, TVs e som ambiente. Contamos ainda com uma ampla cozinha equipada e uma divertida brinquedoteca com brinquedos eletrônicos e manuais ideal para eventos familiares com crianças. Realize seu evento com excelência e estilo no salão de festas mais completo e elogiado de Montes Claros.

            </p>

            {/* Estatísticas */}
            <div className="flex justify-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-4xl font-bold text-[#d4af37] mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[10px] md:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
