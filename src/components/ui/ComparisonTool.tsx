"use client";

import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { PiggyBank, Leaf, Zap, Fuel, ArrowRight } from 'lucide-react';

const Odometer = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.5,
      ease: [0.5, 0, 0, 0.75], // Tesla Easing
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
  const monthlySavings = annualSavings / 12;
  const breakEvenDays = annualSavings > 0 ? Math.round((29 / (annualSavings / 365))) : 0;
  
  const co2Thermal = km * 0.120;
  const co2Electric = km * 0.010;
  const co2Debt = 1000; // 1 tonne
  const co2Net = co2Debt - (co2Thermal - co2Electric);
  const isEcoNeutral = co2Net <= 0;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Column: Controls */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Zap size={20} />
            </div>
            <h3 className="text-xl font-black text-deep-charcoal uppercase italic">Simulateur de roulage</h3>
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <label className="text-xs font-black uppercase tracking-widest text-carbon-grey opacity-60">Kilométrage annuel</label>
              <div className="text-3xl font-black text-deep-charcoal italic">
                {km.toLocaleString()} <span className="text-accent text-xl">km</span>
              </div>
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
            <div className="flex justify-between mt-4 text-[10px] font-bold text-carbon-grey/40 uppercase">
              <span>0 km</span>
              <span>12 500 km</span>
              <span>25 000 km</span>
            </div>
          </div>

          <div className="bg-bg/5 rounded-2xl p-6 border border-black/5">
            <p className="text-sm text-carbon-grey leading-relaxed">
              En roulant <span className="font-bold text-deep-charcoal">{km.toLocaleString()} km/an</span>, votre formation est rentabilisée en seulement :
            </p>
            <div className="text-4xl font-black text-accent italic mt-2">
              <Odometer value={breakEvenDays} suffix=" jours" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-carbon-grey/40 mt-4 italic">
              Basé sur les économies réelles de carburant
            </p>
          </div>
        </div>

        {/* Right Column: Visualization */}
        <div className="space-y-12">
          {/* Money Chart */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <PiggyBank size={18} className="text-accent" />
                <span className="text-xs font-black uppercase tracking-widest text-carbon-grey">Économie annuelle</span>
              </div>
              <div className="text-2xl font-black text-deep-charcoal italic">
                <Odometer value={annualSavings} suffix=" €" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-carbon-grey/60">
                  <span>Thermique</span>
                  <Odometer value={thermalFuelCost + (km/10000*350)} suffix=" €" />
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="h-full bg-deep-charcoal"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-accent">
                  <span>Électrique (Zero SR/F)</span>
                  <Odometer value={electricFuelCost} suffix=" €" />
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${(electricFuelCost / (thermalFuelCost + (km/10000*350)) || 0) * 100}%` }}
                    className="h-full bg-accent shadow-[0_0_15px_rgba(0,163,255,0.5)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CO2 Chart */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Leaf size={18} className={isEcoNeutral ? "text-accent" : "text-power-red"} />
                <span className="text-xs font-black uppercase tracking-widest text-carbon-grey">Empreinte Carbone</span>
              </div>
              <div className={`text-2xl font-black italic ${isEcoNeutral ? "text-accent" : "text-power-red"}`}>
                {isEcoNeutral ? "Neutralisé !" : <Odometer value={co2Net} suffix=" kg CO2" />}
              </div>
            </div>

            <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden p-1">
              <motion.div 
                animate={{ 
                  width: `${Math.min(100, Math.max(0, ((km * 0.110) / 1000) * 100))}%`,
                  backgroundColor: isEcoNeutral ? "#00A3FF" : "#E63946"
                }}
                className="h-full rounded-full transition-colors duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                <span className="text-[8px] font-black uppercase text-white mix-blend-difference">Dette Carbone</span>
                <span className="text-[8px] font-black uppercase text-white mix-blend-difference">Rentabilité Éco (9k km)</span>
              </div>
            </div>
            
            <p className="text-[10px] text-carbon-grey/60 leading-relaxed mt-4">
              {isEcoNeutral 
                ? "Bravo ! Vous avez compensé la dette carbone liée à la fabrication de votre batterie." 
                : `Plus que ${Math.round(9091 - km)} km pour effacer totalement votre dette carbone initiale.`}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
