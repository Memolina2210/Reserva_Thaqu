import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    selectedLot: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const lots = [
    { id: 'A1-1', name: 'Lote A1-1', area: 5096, price: 25000000 },
    { id: 'A1-2', name: 'Lote A1-2', area: 5096, price: 25000000 },
    { id: 'A1-3', name: 'Lote A1-3', area: 5390, price: 27000000 },
    { id: 'A1-4', name: 'Lote A1-4', area: 5488, price: 28000000 },
    { id: 'A2-1', name: 'Lote A2-1', area: 5096, price: 27000000 },
    { id: 'A2-2', name: 'Lote A2-2', area: 5096, price: 27000000 },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedLotInfo = lots.find(lot => lot.id === formData.selectedLot);
    const lotDetails = selectedLotInfo 
      ? `\n\nParcela de interés:\n${selectedLotInfo.name} - ${selectedLotInfo.area.toLocaleString()} m² - ${formatPrice(selectedLotInfo.price)}`
      : '';
    
    // Crear el enlace mailto
    const subject = encodeURIComponent('Cotización Reserva Thaqu');
    const body = encodeURIComponent(`
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}${lotDetails}

Mensaje:
${formData.message}
    `);
    
    window.location.href = `mailto:Commolchile@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const openWhatsApp = () => {
    const selectedLotInfo = lots.find(lot => lot.id === formData.selectedLot);
    const lotText = selectedLotInfo ? ` Me interesa el ${selectedLotInfo.name}.` : '';
    const message = encodeURIComponent(`Hola, me interesa obtener más información sobre Reserva Thaqu. Mi nombre es ${formData.name || '[Nombre]'}.${lotText}`);
    window.open(`https://wa.me/56992654759?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extralight mb-4 text-white">
            Solicita tu <span className="font-semibold text-blue-400">Cotización</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a encontrar la parcela perfecta. 
            Contáctanos y recibe información personalizada.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono/Celular *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="selectedLot" className="block text-sm font-medium text-gray-300 mb-2">
                    Parcela de Interés
                  </label>
                  <div className="relative">
                    <select
                      id="selectedLot"
                      name="selectedLot"
                      value={formData.selectedLot}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all appearance-none"
                    >
                      <option value="" className="bg-gray-800 text-gray-300">
                        Selecciona una parcela (opcional)
                      </option>
                      {lots.map((lot) => (
                        <option key={lot.id} value={lot.id} className="bg-gray-800 text-white">
                          {lot.name} - {lot.area.toLocaleString()} m² - {formatPrice(lot.price)}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje o Comentario
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                    placeholder="Cuéntanos qué lote te interesa o cualquier pregunta que tengas..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Solicita Cotización</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="p-4 bg-green-600/20 rounded-full w-fit mx-auto mb-6">
                  <CheckCircle className="w-16 h-16 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  ¡Solicitud de Cotización Enviada!
                </h3>
                <p className="text-gray-300 mb-6">
                  Tu solicitud ha sido enviada exitosamente. 
                  Nos pondremos en contacto contigo muy pronto.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Enviar otra solicitud de cotización
                </button>
              </div>
            )}
          </div>
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Contacto Directo
              </h3>
              <p className="text-gray-300 mb-6">
                Para una atención más rápida, contáctanos directamente por WhatsApp.
              </p>
              <button
                onClick={openWhatsApp}
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Escribir por WhatsApp</span>
              </button>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">
                Horarios de Atención
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p>Domingos: Solo emergencias</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400">
            © 2024 Reserva Thaqu - Todos los derechos reservados
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Desarrollado y gestionado por <span className="font-semibold">Commol Spa</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;