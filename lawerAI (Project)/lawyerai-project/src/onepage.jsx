import React from 'react'
import { AnimatedNavigationTabs } from "@/components/animated-navigation-tags"
import Waves from './components/Waves'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import FAQFooterSection from './components/FAQFooterSection'

const onepage = () => {
  const navItems = [
    { id: 1, tile: "Home" },
    { id: 2, tile: "About" },
    { id: 3, tile: "Services" },
    { id: 4, tile: "Contact" }
  ];

  return (
    <div>
      <div id='main'>
        <Waves lineColor="rgba(147, 140, 140, 0.8)">
          <div className='navbar'><AnimatedNavigationTabs items={navItems} />
          </div>

          <div className="heroContent">
            <h1>
              Defending Your <em className='italic'>Rights</em>
              <br />
              with <em className='italic'>Integrity</em>
            </h1>

            <p>
              Our legal representation for complex litigation, corporate law,
              and personal matters. We fight for the justice you deserve.
            </p>
          </div>
          <div className='buttons'>
            <button>Get legal Help</button>
            <button>Learn More</button>
          </div>
        </Waves>
      </div>

      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQFooterSection />
    </div>
  )
}

export default onepage