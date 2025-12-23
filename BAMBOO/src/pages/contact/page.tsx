import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoEvento: '',
    data: '',
    convidados: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4j0h5b3rief4cfea8g0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          tipoEvento: '',
          data: '',
          convidados: '',
          mensagem: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0d3d2f] text-white py-6 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl md:text-6xl font-bold mb-2 md:mb-4">
                Entre em <span className="text-[#d4af37]">Contato</span>
              </h1>
              <p className="text-sm md:text-xl text-gray-300">
                Estamos prontos para transformar seu evento em uma experiência inesquecível. Fale conosco!
              </p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-6 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
              {/* Informações de Contato */}
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-[#0d3d2f] mb-4 md:mb-6">
                  Fale Conosco
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed">
                  Nossa equipe está pronta para atender você e criar o evento dos seus sonhos. Entre em contato através dos canais abaixo ou preencha o formulário.
                </p>

                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#d4af37] rounded-full flex-shrink-0">
                      <i className="ri-phone-line text-2xl md:text-3xl text-[#0d3d2f]"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-xl text-[#0d3d2f] mb-1 md:mb-2">Telefone</h3>
                      <p className="text-sm md:text-lg text-gray-600">(38) 999758535</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#d4af37] rounded-full flex-shrink-0">
                      <i className="ri-mail-line text-2xl md:text-3xl text-[#0d3d2f]"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-xl text-[#0d3d2f] mb-1 md:mb-2">E-mail</h3>
                      <p className="text-sm md:text-lg text-gray-600">bambooeventosmoc@gamil.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#d4af37] rounded-full flex-shrink-0">
                      <i className="ri-time-line text-2xl md:text-3xl text-[#0d3d2f]"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-xl text-[#0d3d2f] mb-1 md:mb-2">Horário de Atendimento</h3>
                      <p className="text-sm md:text-lg text-gray-600">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-sm md:text-lg text-gray-600">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div>
                  <h3 className="font-semibold text-base md:text-xl text-[#0d3d2f] mb-3 md:mb-4">Siga-nos nas Redes Sociais</h3>
                  <div className="flex gap-3 md:gap-4">
                    <a 
                      href="https://www.facebook.com/bambooeventos.moc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#0d3d2f] rounded-full hover:bg-[#d4af37] transition-colors cursor-pointer"
                      aria-label="Facebook"
                    >
                      <i className="ri-facebook-fill text-xl md:text-2xl text-white"></i>
                    </a>
                    <a 
                      href="https://www.instagram.com/bambooeventos.moc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#0d3d2f] rounded-full hover:bg-[#d4af37] transition-colors cursor-pointer"
                      aria-label="Instagram"
                    >
                      <i className="ri-instagram-fill text-xl md:text-2xl text-white"></i>
                    </a>
                    <a 
                      href="https://wa.me/5538977585355" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#25D366] rounded-full hover:bg-[#1fb855] transition-colors cursor-pointer"
                      aria-label="WhatsApp"
                    >
                      <i className="ri-whatsapp-fill text-xl md:text-2xl text-white"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Imagem */}
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/c03617f3e54b09b1be1bfd77c6433359.jpeg"
                  alt="Escritório Bamboo Eventos"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section id="nossa-localizacao" className="py-6 md:py-16 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-3 md:mb-6">
              <h2 className="text-xl md:text-4xl font-bold text-[#0d3d2f] mb-2 md:mb-3">
                Nossa Localização
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Visite nosso escritório e conheça nossa equipe pessoalmente.
              </p>
            </div>
            <div className="max-w-5xl mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7011139180127!2d-43.864973510589586!3d-16.74175854840327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab55bf59a9873b%3A0x78249a93fda56c87!2sBamboo%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1764351957429!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Bamboo Eventos"
                className="md:h-[450px]"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
