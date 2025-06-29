import React, { useRef, useEffect, useState } from 'react';
import { ShoppingCart, GraduationCap, Monitor, BookOpen, Package, Stethoscope, Home, Briefcase, Utensils } from 'lucide-react';

const UseCasesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const useCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Recupere carrinho abandonado, tire dúvidas sobre produtos e processe pedidos automaticamente.",
      benefits: ["↗ +87% conversão", "⚡ Resposta instantânea", "🛒 Vendas 24/7"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Mentores",
      description: "Qualifique leads, agende calls e apresente seus programas de mentoria de forma personalizada.",
      benefits: ["📞 +156% calls agendadas", "🎯 Leads qualificados", "💰 Maior ticket médio"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Monitor,
      title: "SaaS",
      description: "Onboarding automático, suporte técnico e retenção de clientes com IA especializada.",
      benefits: ["🚀 -73% churn", "⭐ +94% satisfação", "📈 Upsell automático"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Infoprodutores",  
      description: "Venda cursos, ebooks e consultorias com funil completo desde a captação até o fechamento.",
      benefits: ["📚 +234% vendas", "🎓 Educação do lead", "🔄 Follow-up inteligente"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Package,
      title: "Produtos Físicos",
      description: "Catálogo inteligente, rastreamento de pedidos e atendimento pós-venda automatizado.",
      benefits: ["📦 Envios otimizados", "🔍 Catálogo dinâmico", "💬 Suporte 24/7"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Stethoscope,
      title: "Clínicas & Saúde",
      description: "Agendamento inteligente, lembretes automáticos e triagem inicial de pacientes 24/7.",
      benefits: ["📅 +89% agendamentos", "⏰ Redução de faltas", "🏥 Triagem automática"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Home,
      title: "Imobiliárias",
      description: "Qualificação de interessados, agendamento de visitas e acompanhamento pós-venda.",
      benefits: ["🏠 +145% visitas", "💼 Leads qualificados", "📋 Follow-up automático"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Briefcase,
      title: "Consultoria",
      description: "Captação de clientes, apresentação de serviços e agendamento de reuniões estratégicas.",
      benefits: ["🎯 +178% reuniões", "💡 Apresentação automática", "📊 Relatórios detalhados"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Utensils,
      title: "Restaurantes",
      description: "Pedidos via WhatsApp, reservas automáticas e programa de fidelidade inteligente.",
      benefits: ["🍕 +92% pedidos online", "🪑 Reservas otimizadas", "⭐ Fidelização automática"],
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#2D0B55] to-[#1A0633] relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Funciona para <span className="text-[#FF7A00]">Qualquer</span> Negócio
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Nossa IA se adapta ao seu modelo de negócio e escala suas vendas independentemente do setor
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-[#FF7A00]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-[#FF7A00]/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}>
                    <useCase.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#FF7A00] transition-colors duration-300 text-center sm:text-left">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 flex-grow text-sm sm:text-base text-center sm:text-left">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs sm:text-sm text-gray-200 justify-center sm:justify-start">
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-[#FF7A00]/20 to-[#FF9500]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-[#FF7A00]/30">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              🚀 Não vê seu negócio aqui?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 px-2">
              Nossa IA se adapta a qualquer modelo de negócio. Vamos personalizar uma solução exclusiva para você.
            </p>
            <button 
              onClick={() => document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FF7A00] hover:bg-[#FF9500] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Conversar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;