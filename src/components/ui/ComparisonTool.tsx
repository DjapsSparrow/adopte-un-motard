"use client";

import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { PiggyBank, Leaf, Zap } from 'lucide-react';

const Odometer = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.5,
      ease: [0.5, 0, 0, 0.75],
      onUpdate: (latest) => setDisplayValue(latest)
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span className="font-black italic">
      {prefix}{Math.round(displayValue).toLocaleString()}{suffix}
    </span>
  );
};

export const ComparisonTool: React.FC = () => {
  const [km, setKm] = useState(10000);
  
  // Logic
  const thermalFuelCost = (km / 100) * 12; // 6L/100km * 2€
  const electricFuelCost = (km / 100) * 2.6; // 13kWh/100km * 0.20€
  const maintenanceSavings = (km / 10000) * 350;
  
  const annualSavings = (thermalFuelCost - electricFuelCost) + maintenanceSavings;
  
  const co2Thermal = km * 0.120;
  const co2Electric = km * 0.010;
  const co2Debt = 1000; // 1 tonne
  const co2Net = co2Debt - (co2Thermal - co2Electric);
  const isEcoNeutral = co2Net <= 0;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      {/* 1. SLIDER BLOCK */}
      <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-black text-deep-charcoal uppercase italic">Combien roulez-vous ?</h3>
            </div>
            <input 
              type="range" 
              min="0" 
              max="25000" 
              step="500"
              value={km}
              onChange={(e) => setKm(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between mt-4 text-[10px] font-bold text-deep-charcoal/40 uppercase">
              <span>0 km</span>
              <span>12 500 km</span>
              <span>25 000 km</span>
            </div>
          </div>
          <div className="bg-bg/5 rounded-2xl p-6 border border-black/5 min-w-[200px] text-center">
            <div className="text-4xl font-black text-deep-charcoal italic leading-none">
              {km.toLocaleString()} <span className="text-accent text-xl">km</span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-deep-charcoal/40 mt-2">Par an</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 2. SAVINGS BLOCK */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <PiggyBank size={20} className="text-accent" />
              <span className="text-xs font-black uppercase tracking-widest text-deep-charcoal opacity-60">Économie Annuelle</span>
            </div>
            <div className="text-6xl md:text-7xl font-black text-deep-charcoal italic tracking-tighter">
              <Odometer value={annualSavings} suffix=" €" />
            </div>
            <p className="text-xs font-bold text-accent uppercase tracking-widest mt-4">
              Carburant + Entretien inclus
            </p>
          </div>
          
          <div className="mt-12 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-black uppercase text-deep-charcoal/40">
                <span>Coût Thermique</span>
                <span>{Math.round(thermalFuelCost + maintenanceSavings).toLocaleString()} €</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div animate={{ width: "100%" }} className="h-full bg-deep-charcoal/20" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-black uppercase text-accent">
                <span>Coût Électrique</span>
                <span>{Math.round(electricFuelCost).toLocaleString()} €</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: `${(electricFuelCost / (thermalFuelCost + maintenanceSavings) || 0) * 100}%` }}
                  className="h-full bg-accent shadow-[0_0_15px_rgba(0,163,255,0.5)]" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. CARBON BLOCK */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Leaf size={20} className={isEcoNeutral ? "text-accent" : "text-power-red"} />
              <span className="text-xs font-black uppercase tracking-widest text-deep-charcoal opacity-60">Impact Écologique</span>
            </div>
            <div className={`text-5xl md:text-6xl font-black italic tracking-tighter ${isEcoNeutral ? "text-accent" : "text-power-red"}`}>
              {isEcoNeutral ? "Neutralisé !" : <Odometer value={co2Net} suffix=" kg CO2" />}
            </div>
            <p className="text-xs text-deep-charcoal/60 leading-relaxed mt-4">
              {isEcoNeutral 
                ? "Vous avez remboursé la dette carbone de fabrication de votre batterie." 
                : `Dette carbone restante à compenser en roulant.`}
            </p>
          </div>

          <div className="mt-12">
            <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden p-1">
              <motion.div 
                animate={{ 
                  width: `${Math.min(100, Math.max(0, ((km * 0.110) / 1000) * 100))}%`,
                  backgroundColor: isEcoNeutral ? "#00A3FF" : "#E63946"
                }}
                className="h-full rounded-full transition-colors duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                <span className="text-[9px] font-black uppercase text-white">Fabrication</span>
                <span className="text-[9px] font-black uppercase text-white">Point Mort (9 000 km)</span>
              </div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-deep-charcoal/40 mt-4 text-center">
              Dette de fabrication : 1 000 kg CO2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
