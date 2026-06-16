"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import leftArrow from "@/public/leftarrow.png";   // Adjust paths to match your project
import rightArrow from "@/public/rightarrow.png";

interface SupernovaLoaderProps {
  onComplete?: () => void;
}

interface StarData {
  sz: number;
  dur: number;
  del: number;
  top: string;
  left: string;
}

export default function SupernovaLoader({ onComplete }: SupernovaLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef       = useRef<HTMLDivElement>(null);
  const rightRef      = useRef<HTMLDivElement>(null);
  const orbRef        = useRef<HTMLDivElement>(null);
  const outerGlowRef  = useRef<HTMLDivElement>(null);
  const textRef       = useRef<HTMLDivElement>(null);
  const barRef        = useRef<HTMLDivElement>(null);
  const statusRef     = useRef<HTMLSpanElement>(null);
  const pcRef         = useRef<HTMLDivElement>(null);
  const ring1Ref      = useRef<HTMLDivElement>(null);
  const ring2Ref      = useRef<HTMLDivElement>(null);
  const ring3Ref      = useRef<HTMLDivElement>(null);
  const ring4Ref      = useRef<HTMLDivElement>(null);
  const animRef       = useRef<number | null>(null);
  const timersRef     = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 70 }).map(() => ({
      sz: Math.random() * 1.8 + 0.4,
      dur: 2 + Math.random() * 5,
      del: Math.random() * 5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(generatedStars);

    startProgressBar();
    
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      timersRef.current.forEach(clearTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addTimer(fn: () => void, delay: number) {
    const t = setTimeout(fn, delay);
    timersRef.current.push(t);
  }

  function ease(t: number): number {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  // Quick explosion ease for the fast flying arrows
  function easeOutQuad(t: number): number {
    return t * (2 - t);
  }

  function spawnParticles() {
    const pc = pcRef.current;
    if (!pc) return;
    pc.innerHTML = "";
    const colors = ["#ffffff","#ddb0ff","#aa60ff","#60e0ff","#ff80ee","#ffcc80","#80ffcc"];
    for (let i = 0; i < 45; i++) {
      const p = document.createElement("div");
      p.style.cssText = `
        position:absolute; border-radius:50%;
        top:50%; left:50%;
        transform:translate(-50%,-50%);
        opacity:0; will-change:transform,opacity;
      `;
      const sz    = Math.random() * 5 + 2.5;
      const angle = Math.random() * Math.PI * 2;
      const dist  = 80 + Math.random() * 140;
      const tx    = Math.cos(angle) * dist;
      const ty    = Math.sin(angle) * dist;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const dur   = 1200 + Math.random() * 800;
      p.style.width  = sz + "px";
      p.style.height = sz + "px";
      p.style.background   = color;
      p.style.boxShadow    = `0 0 ${sz * 2}px ${color}`;
      pc.appendChild(p);
      addTimer(() => {
        p.style.transition = `transform ${dur}ms cubic-bezier(0.1,0.8,0.2,1), opacity ${dur}ms ease`;
        p.style.opacity    = "1";
        p.style.transform  = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`;
        addTimer(() => { p.style.opacity = "0"; }, dur * 0.6);
      }, 10);
    }
  }

  function fireRing(el: HTMLDivElement | null, delay: number, color: string) {
    if (!el) return;
    addTimer(() => {
      el.style.width  = "60px";
      el.style.height = "60px";
      el.style.borderColor = color;
      el.style.animation   = "none";
      void el.offsetWidth; 
      el.style.animation   = "sn-expand-ring 2.0s ease-out forwards";
    }, delay);
  }

  function startProgressBar() {
    const bar  = barRef.current;
    const stat = statusRef.current;
    
    const statuses = ["initializing...","loading assets...","charging core...","supernova ignition..."];
    
    let si = 0;
    const statInterval = setInterval(() => {
      if (si < statuses.length - 1) { si++; if (stat) stat.textContent = statuses[si]; }
      else clearInterval(statInterval);
    }, 180); 
    timersRef.current.push(statInterval as unknown as ReturnType<typeof setTimeout>);

    const loadDuration = 800; 
    const startLoadTime = performance.now();

    function updateProgress(now: number) {
      const elapsed = now - startLoadTime;
      const prog = Math.min((elapsed / loadDuration) * 100, 100);

      if (bar) {
        bar.style.width = prog + "%";
      }

      if (elapsed < loadDuration) {
        animRef.current = requestAnimationFrame(updateProgress);
      } else {
        if (animRef.current) cancelAnimationFrame(animRef.current);
        runExplosionAnimation();
      }
    }

    animRef.current = requestAnimationFrame(updateProgress);
  }

  function runExplosionAnimation() {
    const totalDur   = 2400;
    const arrowDur   = 550; // Arrow separation takes only 550ms now!
    let startTime: number | null = null;
    let burstFired   = false;

    if (statusRef.current) {
      statusRef.current.textContent = "ready";
    }

    function tick(now: number) {
      if (!startTime) {
        startTime = now;
      }

      const left      = leftRef.current;
      const right     = rightRef.current;
      const orb       = orbRef.current;
      const outerGlow = outerGlowRef.current;
      const text      = textRef.current;

      if (!left || !right || !orb || !outerGlow || !text) {
        animRef.current = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startTime;

      // --- HYPER FAST ARROW TRACKING ---
      const pArrow  = Math.min(elapsed / arrowDur, 1);
      const epArrow = easeOutQuad(pArrow);

      left.style.transform  = `translate(${-epArrow * 240}px, ${-epArrow * 240}px) rotate(${-epArrow * 50}deg)`; 
      left.style.opacity    = String(1 - epArrow);
      
      right.style.transform = `translate(${epArrow * 240}px, ${epArrow * 240}px) rotate(${epArrow * 50}deg)`;    
      right.style.opacity   = String(1 - epArrow);


      // --- SLOW MAJESTIC COSMIC CORE TRACKING ---
      const p  = Math.min(elapsed / totalDur, 1);
      const ep = ease(p);

      if (ep > 0.05) {
        const orbP = Math.min((ep - 0.05) / 0.95, 1);
        const sz   = orbP * 85;
        orb.style.width   = sz + "px";
        orb.style.height  = sz + "px";
        orb.style.opacity = String(Math.min(orbP * 2, 1));
        const g = orbP * 90; const g2 = orbP * 140;
        orb.style.boxShadow = `0 0 ${g}px ${g*0.5}px rgba(180,80,255,0.65), 0 0 ${g2}px ${g2*0.4}px rgba(100,20,200,0.45)`;
        
        outerGlow.style.width     = (orbP * 280) + "px";
        outerGlow.style.height    = (orbP * 280) + "px";
        outerGlow.style.boxShadow = `0 0 ${orbP*95}px ${orbP*65}px rgba(130,30,220,0.3)`;
      }

      if (pArrow > 0.2 && !burstFired) {
        burstFired = true;
        spawnParticles();
        fireRing(ring1Ref.current,   0, "rgba(220,140,255,0.9)");
        fireRing(ring2Ref.current, 120, "rgba(170, 80,255,0.7)");
        fireRing(ring3Ref.current, 240, "rgba(100,200,255,0.6)");
        fireRing(ring4Ref.current, 360, "rgba(255,160,255,0.5)");
      }

      if (p < 1) { 
        animRef.current = requestAnimationFrame(tick); 
        return; 
      }
      
      animRef.current = null;

      // Settle text down
      orb.style.transition  = "width 1.4s cubic-bezier(0.16,1,0.3,1), height 1.4s cubic-bezier(0.16,1,0.3,1), box-shadow 1.4s ease";
      orb.style.width       = "24px";
      orb.style.height      = "24px";
      orb.style.boxShadow   = "0 0 24px 12px rgba(200,100,255,0.75), 0 0 62px 32px rgba(120,30,200,0.45)";

      text.style.transition = "opacity 1s ease, transform 1s cubic-bezier(0.34,1.56,0.64,1)";
      text.style.opacity    = "1";
      text.style.transform  = "translate(-50%,-50%) scale(1)";

      // Hold state context
      addTimer(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = "opacity 1s ease-in-out"; 
          containerRef.current.style.opacity = "0";
        }
        
        addTimer(() => {
          onComplete?.();
        }, 1000);

      }, 1500); 
    }

    animRef.current = requestAnimationFrame(tick);
  }

  return (
    <>
      <style>{`
        @keyframes sn-twinkle {
          0%,100% { opacity: 0.08; }
          50%      { opacity: 0.5;  }
        }
        @keyframes sn-expand-ring {
          0%   { transform: translate(-50%,-50%) scale(0.05); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(6.2);  opacity: 0; }
        }
      `}</style>

      <div
        ref={containerRef}
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#07000f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          willChange: "opacity"
        }}
      >
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: star.sz,
              height: star.sz,
              borderRadius: "50%",
              background: "white",
              top:  star.top,
              left: star.left,
              animation: `sn-twinkle ${star.dur}s ${star.del}s linear infinite`,
            }}
          />
        ))}

        {(["tl","tr","bl","br"] as const).map(pos => (
          <div
            key={pos}
            style={{
              position: "absolute", width: 18, height: 18, opacity: 0.25,
              top:    pos.includes("t") ? 14 : undefined,
              bottom: pos.includes("b") ? 14 : undefined,
              left:   pos.includes("l") ? 14 : undefined,
              right:  pos.includes("r") ? 14 : undefined,
              borderTop:    pos.includes("t") ? "1px solid #9050ff" : undefined,
              borderBottom: pos.includes("b") ? "1px solid #9050ff" : undefined,
              borderLeft:   pos.includes("l") ? "1px solid #9050ff" : undefined,
              borderRight:  pos.includes("r") ? "1px solid #9050ff" : undefined,
            }}
          />
        ))}

        <div style={{ position: "relative", width: 220, height: 220 }}>

          {/* Left arrow */}
          <div
            ref={leftRef}
            style={{
              position: "absolute", width: 110, height: 110,
              top: 80, left: 40,
              willChange: "transform, opacity",
              filter: "drop-shadow(0 0 8px rgba(180,130,255,0.35))",
            }}
          >
            <Image src={leftArrow} alt="left arrow" width={110} height={110} priority />
          </div>

          {/* Right arrow */}
          <div
            ref={rightRef}
            style={{
              position: "absolute", width: 110, height: 110,
              top: 60, left: 50,
              willChange: "transform, opacity",
              filter: "drop-shadow(0 0 8px rgba(180,130,255,0.35))",
            }}
          >
            <Image src={rightArrow} alt="right arrow" width={110} height={110} priority />
          </div>

          {/* Core container */}
          <div
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 0, height: 0, zIndex: 20,
            }}
          >
            {/* Orb */}
            <div
              ref={orbRef}
              style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: 0, height: 0, borderRadius: "50%",
                background: "radial-gradient(circle, #ffffff 0%, #e0b0ff 25%, #9030f0 55%, #3a00a0 80%, transparent 100%)",
                opacity: 0,
                willChange: "width, height, opacity",
              }}
            />

            {/* Rings */}
            {([ring1Ref, ring2Ref, ring3Ref, ring4Ref] as const).map((ref, i) => (
              <div
                key={i}
                ref={ref}
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%) scale(0)",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(180,80,255,0.7)",
                  width: 60, height: 60, opacity: 0,
                }}
              />
            ))}

            {/* Particles */}
            <div
              ref={pcRef}
              style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "100%", pointerEvents: "none",
              }}
            />
          </div>

          {/* Outer glow */}
          <div
            ref={outerGlowRef}
            style={{
              position: "absolute", top: "50%", left: "50%",
              width: 0, height: 0, borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              pointerEvents: "none", zIndex: 5,
            }}
          />

          {/* SUPERNOVA text */}
          <div
            ref={textRef}
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%) scale(0.7)",
              opacity: 0, textAlign: "center",
              pointerEvents: "none", zIndex: 30,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{
              display: "block",
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontWeight: 900, fontSize: 24,
              letterSpacing: 6, color: "#ffffff",
              textTransform: "uppercase", lineHeight: 1,
              background: "linear-gradient(to right, #dda0ff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Supernova
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          width: 100, height: 1, background: "rgba(140,60,220,0.15)",
        }}>
          <div
            ref={barRef}
            style={{
              height: "100%", width: "0%",
              background: "linear-gradient(to right, #5010a0, #cc80ff)",
              boxShadow: "0 0 5px rgba(180,100,255,0.7)",
            }}
          />
        </div>

        {/* Status */}
        <span
          ref={statusRef}
          style={{
            position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)",
            fontFamily: "monospace", fontSize: 10, letterSpacing: 3,
            color: "rgba(170,100,255,0.45)", textTransform: "uppercase",
          }}
        >
          initializing...
        </span>

        {/* Scanlines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
        }} />
      </div>
    </>
  );
}