import React, { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        monthlyPrice: '€0',
        yearlyPrice: '€0',
        period: '/month',
        description: 'Perfect to explore AI with essential tools for individuals and small projects.',
        cta: 'Start for Free',
        features: ['Basic access to AI core', 'Limited prompts per month', 'Community support'],
        popular: false,
    },
    {
        name: 'Pro',
        monthlyPrice: '€29',
        yearlyPrice: '€23',
        period: '/month',
        description: 'Advanced features and flexibility to scale productivity and handle bigger workloads.',
        cta: 'Upgrade to Pro',
        features: ['Unlimited AI prompts', 'Priority response time', 'Early access to new models'],
        popular: true,
    },
    {
        name: 'Lifetime',
        monthlyPrice: 'Custom',
        yearlyPrice: 'Custom',
        period: '',
        description: 'Full power with custom options, priority support, and team-ready collaboration.',
        cta: 'Contact Sales',
        features: ['Dedicated workspace', 'Advanced model tuning', 'Premium support & SLA'],
        popular: false,
    },
];

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="pricing-section" id="pricing">
            <div className="pricing-inner">
                <div className="section-badge">
                    <span className="badge-dot"></span>
                    <span>Pricing</span>
                </div>

                <h2 className="pricing-heading">
                    <span className="heading-highlight">Choose the plan</span>{' '}
                    <span className="heading-muted">that matches your ambition</span>
                </h2>

                <div className="pricing-toggle">
                    <span className={`toggle-label ${!isYearly ? 'active' : ''}`}>Monthly</span>
                    <button
                        className={`toggle-switch ${isYearly ? 'on' : ''}`}
                        onClick={() => setIsYearly(!isYearly)}
                        aria-label="Toggle billing period"
                    >
                        <span className="toggle-knob"></span>
                    </button>
                    <span className={`toggle-label ${isYearly ? 'active' : ''}`}>Yearly</span>
                    <span className="toggle-badge">20% OFF</span>
                </div>

                <div className="pricing-cards">
                    {plans.map((plan, index) => (
                        <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
                            <div className="pricing-card-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                {plan.popular && <span className="popular-badge">Popular</span>}
                            </div>

                            <div className="plan-price">
                                <span className="price-amount">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                                <span className="price-period">{plan.period}</span>
                            </div>

                            <p className="plan-description">{plan.description}</p>

                            <button className={`plan-cta ${plan.popular ? 'primary' : ''}`}>
                                {plan.cta}
                            </button>

                            <div className="plan-divider">
                                <span>Features</span>
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, fi) => (
                                    <li key={fi}>
                                        <span className="feature-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
