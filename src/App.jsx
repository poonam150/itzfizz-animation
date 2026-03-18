import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const objectRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial Load Animation
    tl.fromTo(".headline span", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: "power4.out" }
    )
    .fromTo(".stat", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, 
      "-=0.4"
    )
    // New: Animate buttons in
    .fromTo(".hero-btn", 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.2"
    );

    // Scroll Animation
    gsap.to(objectRef.current, {
      x: "105vw",
      opacity: 0,
      rotate: 15,
      scale: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-white selection:text-black">
      
      <div ref={containerRef} className="relative h-[300vh] bg-black">
        
        <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
          
          <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-[120px] pointer-events-none">
             <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600 rounded-full"></div>
          </div>

          {/* HEADLINE */}
          <div className="z-50 w-full px-4 text-center">
            <h1 className="headline relative inline-block text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-[0.2em] uppercase text-white whitespace-nowrap drop-shadow-2xl">
              {"WELCOME ITZFIZZ".split("").map((letter, index) => (
                <span key={index} className="inline-block whitespace-pre">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
          </div>

          {/* IMPACT METRICS */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 mt-10 z-50">
            {[
              { val: "98%", label: "Satisfaction" },
              { val: "120+", label: "Projects" },
              { val: "50+", label: "Brands" }
            ].map((item, i) => (
              <div key={i} className="stat text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white">{item.val}</h2>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.3em] mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* HERO BUTTONS (Moved here for better visibility) */}
          <div className="flex flex-row gap-4 mt-12 z-50">
             <a href="YOUR_GITHUB_LINK_HERE" target="_blank" className="hero-btn px-6 py-2 md:px-10 md:py-3 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full text-[10px] uppercase tracking-widest">
               GitHub
             </a>
             <a href="YOUR_LIVE_LINK_HERE" target="_blank" className="hero-btn px-6 py-2 md:px-10 md:py-3 bg-white text-black font-bold rounded-full text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all">
               Live Link
             </a>
          </div>

          {/* MOVING CAR */}
          <div 
            ref={objectRef} 
            className="absolute left-[-35%] md:left-[-20%] bottom-[15%] md:bottom-[20%] w-56 md:w-96 z-40 pointer-events-none"
          >
            <img 
              src="https://pngimg.com/d/porsche_PNG10620.png" 
              alt="Car Animation" 
              className="w-full h-auto drop-shadow-[0_15px_40px_rgba(255,255,255,0.2)]"
            />
          </div>

        </section>
      </div>

      {/* FOOTER SECTION */}
      <section className="h-[50vh] bg-zinc-950 flex items-center justify-center border-t border-white/5">
        <p className="text-zinc-600 text-xs tracking-[0.5em] uppercase">Built by Poonam • 2026</p>
      </section>

    </div>
  );
}

export default App;

