import { useState, useEffect, useRef } from "react";
import { Brain, FileText, Zap, MessageSquare, Shield, TrendingUp } from "lucide-react";

export default function ServicesTimeline() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const containerRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "AI Legal Research",
      description: "Harness the power of artificial intelligence to analyze thousands of legal cases, precedents, and statutes in mere seconds. Our advanced algorithms scan comprehensive legal databases, identifying relevant case law and extracting key insights that would traditionally take hours of manual research.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Contract Analysis",
      description: "Transform your contract review process with AI-powered analysis that delivers 99% accuracy. Our system automatically identifies risks, obligations, deadlines, and compliance issues across hundreds of contracts simultaneously, flagging potential problems before they become costly mistakes.",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Document Automation",
      description: "Streamline your legal document creation with intelligent automation. Generate contracts, briefs, motions, and legal filings instantly using AI-powered templates that adapt to your specific needs. Reduce drafting time by 80% while maintaining consistency and accuracy across all documents.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "Legal Chatbot",
      description: "Provide round-the-clock legal support with our AI assistant that never sleeps. Answer client questions instantly, schedule consultations automatically, and deliver preliminary legal guidance 24/7. Free up your team to focus on complex cases while routine inquiries are handled efficiently.",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "Compliance Monitoring",
      description: "Stay ahead of regulatory changes with real-time monitoring across all jurisdictions. Our AI system tracks legislative updates, new regulations, and compliance requirements automatically, alerting you to changes that impact your practice or clients before they take effect.",
      icon: Shield,
      color: "from-red-500 to-rose-500"
    },
    {
      id: 6,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with AI-powered predictions for case outcomes, settlement values, and litigation strategies. Analyze historical data from similar cases to forecast success rates, estimate timelines, and optimize your legal strategy with unprecedented accuracy.",
      icon: TrendingUp,
      color: "from-indigo-500 to-violet-500"
    }
  ];

  // Auto-rotate effect - INCREASED SPEED
  useEffect(() => {
    let interval;
    if (autoRotate) {
      interval = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.5) % 360);  // Changed from 0.3 to 0.5
      }, 50);
    }
    return () => clearInterval(interval);
  }, [autoRotate]);

  const calculatePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = window.innerHeight * 0.30;
    const radian = (angle * Math.PI) / 180;
    
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2));

    return { x, y, angle, zIndex, opacity };
  };

  const handleNodeClick = (id, index) => {
    if (expandedItem === id) {
      setExpandedItem(null);
      setAutoRotate(true);
    } else {
      setExpandedItem(id);
      setAutoRotate(false);
      
      const targetAngle = (index / services.length) * 360;
      setRotationAngle(270 - targetAngle);
    }
  };

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current) {
      setExpandedItem(null);
      setAutoRotate(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      onClick={handleContainerClick}
      className="w-full flex flex-col items-center justify-center bg-black relative overflow-hidden"
      style={{
        minHeight: "120vh",
        padding: "120px 32px",
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 1px,
          rgba(255, 255, 255, 0.015) 1px,
          rgba(255, 255, 255, 0.015) 2px
        )`
      }}
    >
      {/* Header - INCREASED SIZES */}
      <div className="absolute z-10" style={{ top: "80px", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Newsreader', serif",
          fontSize: "8rem",  // Increased from 8rem to more readable 5rem
          color: "#ffffff",
          letterSpacing: "-0.02em",
          marginBottom: "1px"  // Added gap
        }}>
          Our AI-Powered Services
        </h2>

        {/* Instructions */}
<div className="absolute bottom-12 text-center">
  <p 
    className="animate-pulse-slow"
    style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: "1rem",
      color: "rgba(255, 255, 255, 0.4)",
      animation: "pulseText 3s ease-in-out infinite"
    }}
  >
    Click any node to explore our services
  </p>
</div>
      </div>

      {/* Orbital Container */}
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center" style={{ marginTop: "150px" }}>
        <div className="absolute w-full h-full flex items-center justify-center" style={{ perspective: "1000px" }}>
          
          {/* Center Hub - INCREASED SIZE */}
          <div className="absolute rounded-full flex items-center justify-center z-10"
            style={{
              width: "180px",   // Increased from 128px
              height: "180px",
              background: "radial-gradient(circle, #dc2626 0%, #991b1b 100%)",
              boxShadow: "0 0 80px rgba(220, 38, 38, 0.7), inset 0 0 50px rgba(0, 0, 0, 0.5)"
            }}
          >
            <div className="absolute rounded-full border border-white/10 animate-ping opacity-30" 
              style={{ width: "200px", height: "200px" }}
            ></div>
            <div className="absolute rounded-full border border-white/5 animate-ping opacity-20"
              style={{ width: "230px", height: "230px", animationDelay: "0.5s" }}
            ></div>
            <div style={{
              width: "90px",  // Increased from 64px
              height: "90px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <span style={{ fontSize: "3.5rem" }}>⚖️</span>
            </div>
          </div>

          {/* Orbital Rings */}
          <div className="absolute rounded-full border border-white/5" style={{width: '50vh', height: '50vh'}}></div>
          <div className="absolute rounded-full border border-white/5" style={{width: '60vh', height: '60vh'}}></div>
          <div className="absolute rounded-full border border-white/5" style={{width: '70vh', height: '70vh'}}></div>

          {/* Service Nodes - INCREASED SIZES */}
          {services.map((service, index) => {
            const position = calculatePosition(index, services.length);
            const isExpanded = expandedItem === service.id;
            const Icon = service.icon;
            
            const isAtTop = isExpanded && Math.abs(position.angle - 270) < 5;

            return (
              <div
                key={service.id}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick(service.id, index);
                }}
              >
                {/* Glow effect - INCREASED */}
                <div 
                  className="absolute rounded-full -inset-2 blur-xl"
                  style={{
                    background: `radial-gradient(circle, rgba(220, 38, 38, ${isExpanded ? 0.5 : 0.3}) 0%, rgba(220, 38, 38, 0) 70%)`,
                    width: "120px",   // Increased from 80px
                    height: "120px",
                    left: "-35px",    // Adjusted
                    top: "-35px"
                  }}
                ></div>

                {/* Node - INCREASED SIZE */}
                <div
                  className={`
                    rounded-full flex items-center justify-center
                    border-2 transition-all duration-300
                    ${isExpanded 
                      ? "bg-white text-black border-white scale-150 shadow-lg shadow-white/30" 
                      : "bg-black text-white border-white/40 hover:border-white hover:scale-110"
                    }
                  `}
                  style={{
                    width: "70px",   // Increased from 48px
                    height: "70px"
                  }}
                >
                  <Icon size={32} />  {/* Increased from 20 */}
                </div>

                {/* Label - ADJUSTED POSITION */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold tracking-wider transition-all duration-300"
                  style={{
                    top: "90px",  // Increased from 64px
                    fontSize: "0.9rem",  // Slightly bigger
                    fontFamily: "'Space Mono', monospace",
                    color: isExpanded ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
                    transform: `translateX(-50%) ${isExpanded ? 'scale(1.25)' : 'scale(1)'}`
                  }}
                >
                  {service.title}
                </div>

                {/* Expanded Card - BIGGER CARD */}
                {isExpanded && isAtTop && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 rounded-lg overflow-hidden"
                    style={{
                      top: "130px",  // Adjusted for bigger nodes
                      width: "450px",  // Increased from 320px
                      background: "rgba(0, 0, 0, 0.95)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8)"
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-white/30"></div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 style={{
                          fontFamily: "'Newsreader', serif",
                          fontSize: "1.5rem",  // Increased
                          color: "#ffffff"
                        }}>
                          {service.title}
                        </h3>
                      </div>
                      
                      <p style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.95rem",  // Increased from 0.875rem
                        color: "rgba(255, 255, 255, 0.8)",
                        lineHeight: "1.7"  // Better readability
                      }}>
                        {service.description}
                      </p>

                      <button 
                        style={{
                          marginTop: "24px",
                          padding: "14px 28px",  // Bigger button
                          background: "#dc2626",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "4px",
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "1rem",  // Increased
                          cursor: "pointer",
                          transition: "all 0.3s",
                          fontWeight: "500"
                        }}
                        onMouseOver={(e) => e.target.style.background = "#991b1b"}
                        onMouseOut={(e) => e.target.style.background = "#dc2626"}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}