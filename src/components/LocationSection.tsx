import React from 'react';
import { MapPin, Mountain, Leaf, Sun, Navigation } from 'lucide-react';

const LocationSection = () => {
  const coordinates = { lat: -20.2167, lng: -69.2500 };
  const mapUrl = `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=13&output=embed`;

  return (
    <section className="h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-extralight mb-4 text-white">
              Ubicación <span className="font-semibold text-blue-300">Privilegiada</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              En el corazón de la Región de Tarapacá, Chile
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <MapPin className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Coordenadas Exactas</h3>
                <p className="text-blue-100">
                  Latitud: {coordinates.lat}° <br />
                  Longitud: {coordinates.lng}°
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-600/20 rounded-full">
                <Mountain className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Entorno Natural</h3>
                <p className="text-blue-100">
                  Rodeado por la majestuosidad de algarrobos y tamarugos nativos, 
                  en un ecosistema único del desierto de Atacama.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-yellow-600/20 rounded-full">
                <Navigation className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Accesibilidad</h3>
                <p className="text-blue-100">
                  Fácil acceso desde las principales rutas de la región, 
                  conectando naturaleza con comodidad urbana.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="text-center">
              <div className="p-3 bg-green-600/20 rounded-full w-fit mx-auto mb-2">
                <Leaf className="w-6 h-6 text-green-300" />
              </div>
              <p className="text-sm text-white/80">Flora Nativa</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-orange-600/20 rounded-full w-fit mx-auto mb-2">
                <Sun className="w-6 h-6 text-orange-300" />
              </div>
              <p className="text-sm text-white/80">Clima Privilegiado</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-purple-600/20 rounded-full w-fit mx-auto mb-2">
                <Mountain className="w-6 h-6 text-purple-300" />
              </div>
              <p className="text-sm text-white/80">Paisaje Único</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-4">Vista Satelital</h3>
            <div className="relative overflow-hidden rounded-xl">
              <a 
                href="https://maps.app.goo.gl/j4dW8uKoojaZR4fq8"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src="/Reserva Thaqu.jpg"
                  alt="Vista satelital del proyecto Reserva Thaqu - Click para ver en Google Maps"
                  className="w-full h-[300px] object-cover rounded-xl"
                />
              </a>
            </div>
            <p className="text-sm text-white/70 mt-4 text-center">
              Reserva Thaqu - Región de Tarapacá, Chile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;