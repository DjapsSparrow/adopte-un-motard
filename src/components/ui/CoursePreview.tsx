import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, ChevronRight, PlayCircle } from 'lucide-react';

const curriculum = [
  {
    title: "Welcome",
    description: "C'est ici que tout commence. Avant d'entrer dans le vif du sujet, posons les bases de notre collaboration. Cette section introductive vous donne une vision d'ensemble du voyage que nous allons faire ensemble : elle définit le cadre, la philosophie de ce programme et l'état d'esprit nécessaire pour aborder ce changement de monture avec curiosité et sérénité. Bienvenue dans l'aventure !",
    lessons: ["Introduction"]
  },
  {
    title: "Comprendre la moto électrique, sans fantasmes ni peurs",
    description: "Avant de parler voltage ou bornes de recharge, il est temps de remettre l’église au milieu du village. Dans cette section, on oublie les discours marketing lisses et les préjugés tenaces. Nous allons décortiquer ensemble l’ADN de ces machines : ce qu'elles changent physiquement sous votre selle, comment s'y retrouver dans la jungle des modèles actuels, et surtout, ce que signifie réellement 'rouler branché' au quotidien.",
    lessons: [
      "Pourquoi la moto électrique n’est ni une moto thermique “moins bien”, ni un gadget",
      "Les grandes familles de motos électriques aujourd’hui",
      "Ce que personne ne te dit avant de passer à l’électrique"
    ]
  },
  {
    title: "Avant l’achat : se poser les bonnes questions",
    description: "Acheter une moto électrique, c'est un investissement plaisir, mais c'est surtout un investissement stratégique. Dans cette section, on sort les calculettes et on regarde la réalité en face. Nous allons apprendre à différencier vos besoins quotidiens de vos envies d'évasion, à décoder les chiffres d'autonomie souvent trompeurs des constructeurs et à organiser votre future logistique de recharge.",
    lessons: [
      "Analyser son usage réel, pas son usage fantasmé",
      "Autonomie : comprendre un chiffre mal compris",
      "Recharge : mythe, réalité et quotidien",
      "Le nerf de la guerre : Budget, Maintenance et Rentabilité"
    ]
  },
  {
    title: "Bases d’électricité pour motards électriques",
    description: "Pas besoin d'être ingénieur pour rouler en électrique, mais comprendre comment l'énergie circule va radicalement changer votre expérience. Dans cette section, nous allons traduire le 'jargon' des électriciens en langage motard. Vous apprendrez à différencier la puissance de la capacité et à vérifier votre installation domestique.",
    lessons: [
      "Bases indispensables de l’électricité",
      "kW, kWh, A : comprendre les chiffres",
      "Compteur électrique et abonnement",
      "Monophasé, triphasé, fusibles et protections"
    ]
  },
  {
    title: "Prise en main et conduite",
    description: "Oubliez tout ce que vous savez sur le passage des vitesses et le cirage d’embrayage. Dans cette section, nous passons à la pratique : comment apprivoiser cette poussée linéaire et silencieuse qui ne s'arrête jamais. Nous allons voir comment adapter vos réflexes de motard pour transformer l'absence de boîte de vitesses en un atout de précision.",
    lessons: [
      "Sensations et adaptation",
      "Doser sans embrayage ni boîte",
      "Régénération : comprendre et maîtriser"
    ]
  },
  {
    title: "Conduite, autonomie et plaisir",
    description: "Rouler en électrique, c'est apprendre à jouer avec les éléments pour en tirer le meilleur parti. Dans cette section, nous quittons la théorie pour la route : comment adopter une éco-conduite fluide sans jamais sacrifier le plaisir de piloter, comment exploiter le couple phénoménal de votre machine en conduite sportive.",
    lessons: [
      "Rouler efficient sans se priver",
      "Conduite sportive et électrique",
      "Saison, météo et conditions réelles"
    ]
  },
  {
    title: "Recharge au quotidien",
    description: "Passer de la théorie à la pratique, c'est savoir gérer son 'énergie' comme un pro. Dans cette section, nous quittons votre garage pour explorer le monde extérieur. Vous découvrirez les secrets de longévité pour préserver votre batterie sur des années, comment naviguer dans la jungle des bornes publiques sans stress.",
    lessons: [
      "Bonnes pratiques batterie",
      "Recharge publique : réalité terrain",
      "Longs trajets et road trips"
    ]
  },
  {
    title: "Entretien et longévité",
    description: "On dit souvent qu'une moto électrique ne demande aucun entretien. Si c’est presque vrai pour la partie mécanique, le paradigme change radicalement pour le reste. Dans cette section, nous allons dresser la liste de tout ce que vous n'aurez plus jamais à réviser, mais aussi des nouveaux points de vigilance.",
    lessons: [
      "Ce qui disparaît, ce qui reste",
      "Batterie dans le temps",
      "Logiciel, bugs et mises à jour"
    ]
  },
  {
    title: "Équipement et accessoires",
    description: "Parce qu’on ne roule pas tout à fait de la même manière quand on n'a plus de moteur entre les jambes pour nous chauffer ou masquer les bruits, l’équipement change lui aussi. Dans cette section, nous allons voir comment adapter votre panoplie de motard pour optimiser votre confort acoustique et thermique.",
    lessons: [
      "Équipement du motard électrique",
      "Accessoires utiles"
    ]
  },
  {
    title: "Vie quotidienne et regard extérieur",
    description: "Au-delà de la technique, l'électrique redéfinit votre relation avec votre environnement. Que vous traversiez un centre-ville apaisé ou un parc naturel protégé, vous ne laissez plus la même empreinte. Cette section explore la réalité du quotidien sur différents terrains.",
    lessons: [
      "Ville, campagne, mixte",
      "Regard des autres et pédagogie"
    ]
  },
  {
    title: "Pour qui / pour qui pas",
    description: "L’électrique n’est pas encore une solution universelle, et c’est important de le reconnaître. Entre passion, pragmatisme et contraintes logistiques, cette section va vous aider à déterminer si vous êtes prêt à franchir le pas dès aujourd'hui.",
    lessons: [
      "Profils compatibles",
      "Profils pour lesquels il vaut mieux attendre"
    ]
  },
  {
    title: "Conclusion",
    description: "Après la technique et la théorie, place au bilan humain. Cette dernière section est l'occasion de boucler la boucle : un retour d'expérience sans filtre sur cinq années passées au guidon d'une Zero SR/F, les leçons apprises sur le bitume, et un espace d'échange.",
    lessons: [
      "Bilan honnête après 5 ans",
      "One more thing..."
    ]
  }
];

export const CoursePreview: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-36 md:bottom-40 left-4 md:left-6 z-50 flex items-center gap-3 group pointer-events-auto cursor-pointer"
      >
        <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full shadow-[0_0_20px_rgba(0,163,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] transition-all duration-300">
          <BookOpen size={24} className="text-white" />
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          <span className="text-[10px] font-black uppercase tracking-widest text-text-primary whitespace-nowrap">Aperçu du programme</span>
        </div>
      </motion.button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] cursor-pointer"
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 h-full w-full md:w-[500px] bg-bg/95 backdrop-blur-2xl border-r border-white/10 z-[100] flex flex-col shadow-2xl light:bg-white/95 light:border-black/5"
            >
              {/* Header */}
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-1">Curriculum</h2>
                  <p class="text-xl font-black text-text-primary italic uppercase tracking-tighter">Aperçu du programme</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5 light:bg-black/5 light:border-black/5 cursor-pointer"
                >
                  <X size={20} className="text-white light:text-text-primary" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="space-y-12 pb-12">
                  {curriculum.map((module, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-accent/20"></div>
                      <div className="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-accent border-4 border-bg"></div>
                      
                      <div className="pl-4">
                        <h3 className="text-lg font-black text-text-primary mb-4 uppercase italic leading-tight">
                          {idx + 1}. {module.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed mb-6 italic opacity-80">
                          {module.description}
                        </p>
                        
                        <div className="space-y-3">
                          {module.lessons.map((lesson, lIdx) => (
                            <div key={lIdx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-accent/30 transition-all">
                              <PlayCircle size={14} className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                              <span className="text-xs font-bold text-text-primary/90">{lesson}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-8 border-t border-white/5 bg-surface/50">
                <a 
                  href="https://ecole.fudoshin.solutions/offers/aab1d65b-e96b-49a2-b054-de94398f7f7b"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-accent text-white font-black uppercase tracking-widest text-sm rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,163,255,0.3)] cursor-pointer"
                >
                  Rejoindre la formation
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
