import React from 'react';
import { ChevronDown, TreePine } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img 
          src="/fondo pag 2.jpg" 
          alt="Paisaje del desierto con algarrobos al atardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-green-800/60 to-teal-700/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
            <TreePine className="w-16 h-16 text-emerald-300" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-6 tracking-tight">
          Reserva <span className="font-semibold text-emerald-300">Thaqu</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-emerald-100 mb-4 font-light">
          Donde el Algarrobo se encuentra con tu futuro
        </p>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Descubre la oportunidad perfecta para invertir en tu tranquilidad. 
            Parcelas exclusivas en el corazón de la naturaleza tarapaqueña, 
            donde cada metro cuadrado es una promesa de crecimiento y serenidad.
          </p>
        </div>
        
        <div className="text-center">
          <span className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full text-sm font-medium tracking-wider uppercase">
            Tu inversión natural comienza aquí
          </span>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-all duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;