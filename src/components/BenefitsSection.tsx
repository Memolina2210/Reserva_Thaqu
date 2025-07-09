import React from 'react';
import { TrendingUp, Leaf, Users, Shield, Wifi, Zap, Calendar } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Plusvalía Garantizada',
      description: 'Inversión segura en una zona de crecimiento constante con proyección de valorización del 15-20% anual en los próximos 5 años.'
    },
    {
      icon: Leaf,
      title: 'Desarrollo Sostenible',
      description: 'Proyecto diseñado en armonía con el ecosistema local, preservando la flora nativa y promoviendo prácticas ambientales responsables.'
    },
    {
      icon: Users,
      title: 'Comunidad Planificada',
      description: 'Desarrollo integral con espacios de conectividad, áreas verdes y capacidades para el desarrollo y bienestar de la sana convivencia.'
    },
    {
      icon: Shield,
      title: 'Preservación Natural',
      description: 'Compromiso con la conservación del entorno natural, manteniendo intactos los algarrobos y tamarugos centenarios de la zona.'
    },
    {
      icon: Wifi,
      title: 'Conectividad',
      description: 'Acceso garantizado a servicios de telecomunicaciones y conectividad digital, manteniendo el equilibrio entre naturaleza y tecnología.'
    },
    {
      icon: Zap,
      title: 'Energía Renovable',
      description: 'Infraestructura preparada para sistemas de energía solar, aprovechando las excepcionales condiciones climáticas de la región.'
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/new img.jpg" 
          alt="Paisaje desértico con algarrobos bajo el sol brillante"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-800/80 to-green-900/85"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="relative z-10 text-5xl md:text-6xl font-extralight mb-4 text-white drop-shadow-lg">
            Beneficios de <span className="font-semibold text-emerald-300">Inversión</span>
          </h2>
          <p className="relative z-10 text-xl text-emerald-100 max-w-2xl mx-auto drop-shadow-md">
            Más que una parcela, es tu puerta de entrada a un futuro próspero y sostenible.
          </p>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-md rounded-2xl p-6 hover:bg-black/40 transition-all duration-300 group border border-white/10"
            >
              <div className="mb-4">
                <div className="p-3 bg-emerald-600/30 rounded-full w-fit group-hover:bg-emerald-600/40 transition-colors">
                  <benefit.icon className="w-8 h-8 text-emerald-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-md">{benefit.title}</h3>
              <p className="text-emerald-100 leading-relaxed drop-shadow-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 bg-gradient-to-r from-black/40 to-black/30 rounded-2xl p-8 backdrop-blur-md border border-white/10">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-emerald-600/30 rounded-full">
              <Calendar className="w-12 h-12 text-emerald-300" />
            </div>
          </div>
          
          <h3 className="text-3xl font-semibold text-white text-center mb-6 drop-shadow-lg">
            Proyección Futura
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-300 drop-shadow-md">2025-2027</div>
                <div className="text-white font-semibold drop-shadow-md">Fase 1</div>
                <div className="text-emerald-100 text-sm drop-shadow-sm">
                  Infraestructura de seguridad, acceso mejorado y luminaria publica.
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-300 drop-shadow-md">2028-2030</div>
                <div className="text-white font-semibold drop-shadow-md">Fase 2</div>
                <div className="text-emerald-100 text-sm drop-shadow-sm">
                  Desarrollo comunitario con áreas recreativas, centro de servicios y conectividad completa.
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-300 drop-shadow-md">2031+</div>
                <div className="text-white font-semibold drop-shadow-md">Consolidación</div>
                <div className="text-emerald-100 text-sm drop-shadow-sm">
                  Comunidad completamente establecida con servicios y valorización.
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-white leading-relaxed drop-shadow-md">
                <span className="font-semibold text-emerald-300">Reserva Thaqu</span> se proyecta como la primera reserva ecológica residencial, combinando naturaleza, sostenibilidad, y crecimiento económico en un entorno único que preserva la esencia del desierto de la pampa del Tamarugal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;