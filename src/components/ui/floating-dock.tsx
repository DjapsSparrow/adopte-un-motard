"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const radius = 100; // Réduit pour éviter les débordements sur iPhone

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10">
            {items.map((item, idx) => {
              // Arc plus serré (165° à 15°) pour garder les labels dans l'écran
              const angle = 165 - (idx * (150 / (items.length - 1)));
              const angleRad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(angleRad);
              const y = -radius * Math.sin(angleRad);

              const isLeft = x < -20;
              const isRight = x > 20;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    x: x,
                    y: y,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: (items.length - 1 - idx) * 0.05 
                  }}
                  className="absolute top-0 left-0"
                >
                  <a
                    href={item.href}
                    className="h-10 w-10 rounded-full bg-deep-charcoal/95 backdrop-blur-md border border-white/10 flex items-center justify-center text-paper shadow-2xl relative"
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                    
                    <div className={cn(
                      "absolute bg-deep-charcoal/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10 shadow-xl pointer-events-none",
                      isLeft ? "right-full mr-3 top-1/2 -translate-y-1/2" : 
                      isRight ? "left-full ml-3 top-1/2 -translate-y-1/2" : 
                      "bottom-full mb-3 left-1/2 -translate-x-1/2"
                    )}>
                      <span className="text-[10px] text-white font-bold whitespace-nowrap uppercase tracking-wider">
                        {item.title}
                      </span>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-deep-charcoal border border-white/10 flex items-center justify-center text-paper relative z-10 shadow-xl"
      >
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconLayoutNavbarCollapse className="h-5 w-5" />
        </motion.div>
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-paper border border-carbon-grey/10 px-4 pb-3 shadow-xl",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white/10 border border-white/5 flex items-center justify-center relative transition-colors hover:bg-electric-cyan hover:text-deep-charcoal group"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-1 whitespace-pre rounded-md bg-electric-cyan text-deep-charcoal absolute left-1/2 -top-10 w-fit text-xs font-black shadow-lg border border-white/20"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-paper group-hover:text-deep-charcoal transition-colors"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
