import React, { useState } from 'react';

const tabs = [
    {
        label: 'Content Creation',
        heading: 'Content Creation',
        description: 'Bring stories, posts, and ideas to life with words that flow naturally.',
    },
    {
        label: 'Coding Help',
        heading: 'Coding Help',
        description: 'Debug faster, write cleaner code, and ship with confidence — your AI pair programmer.',
    },
    {
        label: 'Research & Insights',
        heading: 'Research & Insights',
        description: 'Dive deep into any topic instantly — gather data, analyze trends, and extract key findings.',
    },
    {
        label: 'Focus & productivity',
        heading: 'Focus & Productivity',
        description: 'Eliminate distractions, prioritize tasks, and stay in the zone with intelligent assistance.',
    },
];

export default function FeaturesSection() {
    const [activeTab, setActiveTab] = useState(0);
    const current = tabs[activeTab];

    return (
        <section className="features-section" id="features">
            <div className="features-inner">
                <div className="section-badge">
                    <span className="badge-dot"></span>
                    <span>Use cases</span>
                </div>

                <h2 className="features-heading">
                    <span className="heading-highlight">Different paths to explore</span>{' '}
                    <span className="heading-muted">all guided by one silent companion.</span>
                </h2>

                <div className="features-tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`features-tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="features-content">
                    <div className="features-image-container">
                        <div className="features-image-placeholder">
                            <div className="features-mock-ui">
                                <div className="mock-header">
                                    <span className="mock-dot"></span>
                                    <span className="mock-label">Message AI</span>
                                </div>
                                <p className="mock-text">
                                    Here's a quick draft for your new blog post introduction:
                                </p>
                                <p className="mock-text muted">
                                    In today's fast-paced digital world, finding your unique voice is more important than ever. Whether you're sharing stories, building a brand, or inspiring a community, the right words can turn simple ideas into lasting impact.
                                </p>
                                <p className="mock-text muted">But writing doesn't have to feel hard.</p>
                                <div className="mock-actions">
                                    <span>↻</span>
                                    <span>📋</span>
                                    <span>↗</span>
                                    <span>🔖</span>
                                    <span>⋮</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="features-description">
                        <p className="features-desc-label">{current.heading}</p>
                        <h3 className="features-desc-text">{current.description}</h3>
                        <button className="features-cta">Get started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
