import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export const ROIChart: React.FC = () => {
  const [km, setKm] = useState(3000);
  
  // Constants for calculation (approximate values for demonstration)
  // Thermal: ~7L/100km * 1.8€/L + maintenance = ~15€ / 100km
  const costPer100KmThermal = 15;
  // Electric: ~6kWh/100km * 0.25€/kWh + near zero maintenance = ~1.5€ / 100km
  const costPer100KmElectric = 1.5;

  const thermalCost = (km / 100) * costPer100KmThermal;
  const electricCost = (km / 100) * costPer100KmElectric;
  const savings = thermalCost - electricCost;

  // Animated numbers
  const animatedSavings = useSpring(0, { stiffness: 50, damping: 20 });
  const displaySavings = useTransform(animatedSavings, (value) => Math.round(value));

  useEffect(() => {
    animatedSavings.set(savings);
  }, [savings, animatedSavings]);

  const maxCost = (20000 / 100) * costPer100KmThermal;
  const thermalHeight = (thermalCost / maxCost) * 100 + "%";
  const electricHeight = (electricCost / maxCost) * 100 + "%";

  return (
    <div className="bg-white p-8 rounded-2xl border border-electric-cyan/20 shadow-sm max-w-2xl mx-auto w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-deep-charcoal mb-2">Calculez vos économies</h3>
        <p className="text-carbon-grey">Estimez la rentabilité selon votre usage annuel.</p>
      </div>

      {/* Slider */}
      <div className="mb-10">
        <div className="flex justify-between text-sm font-semibold mb-2">
          <span>1 000 km</span>
          <span className="text-electric-cyan text-lg">{km.toLocaleString('fr-FR')} km/an</span>
          <span>20 000 km</span>
        </div>
        <input 
          type="range" 
          min="1000" 
          max="20000" 
          step="500" 
          value={km} 
          onChange={(e) => setKm(Number(e.target.value))}
          className="w-full h-2 bg-paper rounded-lg appearance-none cursor-pointer accent-electric-cyan"
        />
      </div>

      {/* Chart */}
      <div className="flex items-end justify-center gap-12 h-48 mb-8 border-b border-paper pb-4">
        {/* Thermal Bar */}
        <div className="flex flex-col items-center gap-2 w-24">
          <span className="font-bold text-carbon-grey">{Math.round(thermalCost)} €</span>
          <motion.div 
            className="w-full bg-carbon-grey rounded-t-md"
            animate={{ height: thermalHeight }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ minHeight: '4px' }}
          />
          <span className="text-sm text-carbon-grey mt-2 font-medium">Thermique</span>
        </div>

        {/* Electric Bar */}
        <div className="flex flex-col items-center gap-2 w-24">
          <span className="font-bold text-electric-cyan">{Math.round(electricCost)} €</span>
          <motion.div 
            className="w-full bg-electric-cyan rounded-t-md"
            animate={{ height: electricHeight }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ minHeight: '4px' }}
          />
          <span className="text-sm text-carbon-grey mt-2 font-medium">Électrique</span>
        </div>
      </div>

      {/* Result */}
      <div className="text-center bg-paper/50 rounded-xl p-6">
        <p className="text-carbon-grey mb-1">Économie réalisée la 1ère année</p>
        <div className="text-4xl font-black text-deep-charcoal flex justify-center items-baseline gap-1">
          + <motion.span>{displaySavings}</motion.span> €
        </div>
        <p className="text-sm text-carbon-grey mt-3 italic">
          "Rentabilisez l'achat de votre bécane (et de cette formation) dès vos premiers 3 000 km."
        </p>
      </div>
    </div>
  );
};
