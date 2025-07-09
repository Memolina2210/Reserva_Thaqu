import React, { useState } from 'react';
import { MapPin, Square, DollarSign, Eye, X, Satellite, ZoomIn, ZoomOut, RotateCcw, Expand } from 'lucide-react';

interface Lot {
  id: string;
  name: string;
  area: number;
  price: number;
  status: 'disponible' | 'reservado' | 'vendido';
}

const LotsSection = () => {
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const [showSatelliteModal, setShowSatelliteModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const lots: Lot[] = [
    { id: '1', name: 'Lote A1-1', area: 5096, price: 25000000, status: 'disponible' },
    { id: '2', name: 'Lote A1-2', area: 5096, price: 25000000, status: 'disponible' },
    { id: '3', name: 'Lote A1-3', area: 5390, price: 27000000, status: 'disponible' },
    { id: '4', name: 'Lote A1-4', area: 5488, price: 28000000, status: 'disponible' },
    { id: '5', name: 'Lote A2-1', area: 5096, price: 27000000, status: 'disponible' },
    { id: '6', name: 'Lote A2-2', area: 5096, price: 27000000, status: 'disponible' },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'disponible': return 'bg-green-500';
      case 'reservado': return 'bg-yellow-500';
      case 'vendido': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'disponible': return 'Disponible';
      case 'reservado': return 'Reservado';
      case 'vendido': return 'Vendido';
      default: return 'No disponible';
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const scrollToContactForm = () => {
    setSelectedLot(null);
    // Scroll to the contact section
    const contactSection = document.querySelector('section:last-child');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/fondo pag 3.jpg" 
          alt="Atardecer en el desierto con algarrobos"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-800/80 to-gray-900/85"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extralight mb-4 text-white drop-shadow-lg">
            Lotes <span className="font-semibold text-emerald-400">Disponibles</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Selecciona el lote perfecto para tu inversión. Cada parcela ofrece 
            un espacio único en armonía con la naturaleza.
          </p>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lots.map((lot) => (
            <div
              key={lot.id}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-6 hover:bg-black/50 transition-all duration-300 cursor-pointer group border border-white/10"
              onClick={() => setSelectedLot(lot)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white drop-shadow-md">{lot.name}</h3>
                <div className={`px-3 py-2 rounded-2xl text-xs font-medium text-white ${getStatusColor(lot.status)} flex flex-col items-center min-w-[140px] shadow-lg`}>
                  <span className="mb-2 drop-shadow-sm">{getStatusText(lot.status)}</span>
                  <div 
                    className="w-[120px] h-[80px] bg-white/20 rounded-lg flex items-center justify-center border border-white/30 cursor-pointer hover:bg-white/30 transition-colors group/image relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowImageModal(true);
                    }}
                  >
                    <img
                      src="/A1-1.jpg"
                      alt={`Vista del ${lot.name}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                      <Expand className="w-4 h-4 text-white opacity-0 group-hover/image:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Square className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">
                    <span className="text-gray-200 drop-shadow-sm">
                      {lot.area.toLocaleString()} m²
                    </span>
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-semibold text-lg drop-shadow-md">
                    {formatPrice(lot.price)}
                  </span>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <button className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-300">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm drop-shadow-sm">Ver detalles</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Satellite Image Button */}
        <div className="relative z-10 mt-12 text-center">
          <button
            onClick={() => setShowSatelliteModal(true)}
            className="inline-flex items-center space-x-3 bg-blue-600/30 hover:bg-blue-600/40 text-blue-200 hover:text-blue-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-md border border-blue-400/40 hover:border-blue-300/60 shadow-lg drop-shadow-md"
          >
            <Satellite className="w-6 h-6" />
            <span>Ver imagen general del proyecto</span>
          </button>
        </div>
      </div>
      
      {/* Modal */}
      {selectedLot && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setSelectedLot(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-2">
                {selectedLot.name}
              </h3>
              <div className={`inline-flex flex-col items-center px-4 py-3 rounded-2xl text-sm font-medium text-white mb-6 ${getStatusColor(selectedLot.status)}`}>
                <span className="mb-2">{getStatusText(selectedLot.status)}</span>
                <div 
                  className="w-[120px] h-[80px] bg-white/20 rounded-lg flex items-center justify-center border border-white/30 cursor-pointer hover:bg-white/30 transition-colors group/image relative"
                  onClick={() => setShowImageModal(true)}
                >
                  <img
                    src="/A1-1.jpg"
                    alt={`Vista del ${selectedLot.name}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                    <Expand className="w-4 h-4 text-white opacity-0 group-hover/image:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Superficie:</span>
                    <span className="text-white font-semibold">{selectedLot.area.toLocaleString()} m²</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Precio:</span>
                    <span className="text-emerald-400 font-semibold text-lg">{formatPrice(selectedLot.price)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Estado:</span>
                    <span className="text-white font-semibold">{getStatusText(selectedLot.status)}</span>
                  </div>
                </div>
                
                <div className="bg-emerald-900/30 rounded-lg p-4">
                  <h4 className="text-emerald-300 font-semibold mb-2">Características:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Terreno plano sin costra de sal</li>
                    <li>• Acceso por camino principal</li>
                    <li>• Vista panorámica del entorno</li>
                    <li>• Servidumbre con luminaria solar</li>
                  </ul>
                </div>
                
                {selectedLot.status === 'disponible' && (
                  <button 
                    onClick={scrollToContactForm}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Solicitar Cotización
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2">
              <button
                onClick={() => setShowImageModal(false)}
                className="text-white hover:text-gray-300 transition-colors bg-black/70 rounded-full p-3 backdrop-blur-sm hover:bg-black/80"
                title="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 4}
                className="text-white hover:text-gray-300 transition-colors bg-black/70 rounded-full p-3 backdrop-blur-sm hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Acercar"
              >
                <ZoomIn className="w-6 h-6" />
              </button>
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
                className="text-white hover:text-gray-300 transition-colors bg-black/70 rounded-full p-3 backdrop-blur-sm hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Alejar"
              >
                <ZoomOut className="w-6 h-6" />
              </button>
              <button
                onClick={handleResetZoom}
                className="text-white hover:text-gray-300 transition-colors bg-black/70 rounded-full p-3 backdrop-blur-sm hover:bg-black/80"
                title="Restablecer vista"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>

            {/* Zoom Level Indicator */}
            <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium">{Math.round(zoomLevel * 100)}%</span>
            </div>
            
            <div 
              className="relative max-w-full max-h-full overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
              style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              onWheel={handleWheel}
            >
              <img
                src="/A1-1.jpg"
                alt="Plano detallado del Lote A1-1 - Reserva Thaqu"
                className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-200 select-none"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                  transformOrigin: 'center center'
                }}
                onMouseDown={handleMouseDown}
                draggable={false}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/70 text-white px-6 py-2 rounded-full backdrop-blur-sm">
              <p className="text-sm font-medium">Plano del Lote A1-1 - Reserva Thaqu</p>
            </div>

            {/* Instructions */}
            {zoomLevel === 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-full backdrop-blur-sm">
                <p className="text-sm font-medium">Usa los controles para hacer zoom • Click fuera para cerrar</p>
              </div>
            )}
            {zoomLevel > 1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                <p className="text-xs">Arrastra para mover • Rueda del mouse para zoom</p>
              </div>
            )}
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={() => {
              setShowImageModal(false);
              handleResetZoom();
            }}
          />
        </div>
      )}
      
      {/* Satellite Image Modal */}
      {showSatelliteModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2">
              <button
                onClick={() => setShowSatelliteModal(false)}
                className="text-white hover:text-gray-300 transition-colors bg-black/70 rounded-full p-3 backdrop-blur-sm hover:bg-black/80"
                title="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 4}
                className="text-white hover:text-gray-300 transition-colors bg-black/70 rounded-full p-3 backdrop-blur-sm hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Acercar"
              >
                <ZoomIn className="w-6 h-6" />
              </button>
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
                className="text-white hover:text-gray-300 transition-colors bg-black/70 rounded-full p-3 backdrop-blur-sm hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Alejar"
              >
                <ZoomOut className="w-6 h-6" />
              </button>
              <button
                onClick={handleResetZoom}
                className="text-white hover:text-gray-300 transition-colors bg-black/70 rounded-full p-3 backdrop-blur-sm hover:bg-black/80"
                title="Restablecer vista"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>

            {/* Zoom Level Indicator */}
            <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium">{Math.round(zoomLevel * 100)}%</span>
            </div>
            
            <div 
              className="relative max-w-full max-h-full overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
              style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              onWheel={handleWheel}
            >
              <img
                src="/Reserva Thaqu.jpg"
                alt="Vista satelital del proyecto Reserva Thaqu"
                className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-200 select-none"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                  transformOrigin: 'center center'
                }}
                onMouseDown={handleMouseDown}
                draggable={false}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/70 text-white px-6 py-2 rounded-full backdrop-blur-sm">
              <p className="text-sm font-medium">Reserva Thaqu - Región de Tarapacá, Chile</p>
            </div>

            {/* Instructions */}
            {zoomLevel === 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-full backdrop-blur-sm">
                <p className="text-sm font-medium">Reserva Thaqu - Región de Tarapacá, Chile</p>
              </div>
            )}
            {zoomLevel > 1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                <p className="text-xs">Arrastra para mover • Rueda del mouse para zoom</p>
              </div>
            )}
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={() => {
              setShowSatelliteModal(false);
              handleResetZoom();
            }}
          />
        </div>
      )}
    </section>
  );
};

export default LotsSection;