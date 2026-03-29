import React from 'react';

const aboutCards = [
    {
        title: 'Time Unfolded',
        description: 'Automate tasks and reclaim hours, your AI assistant turns routine into seconds so you can focus on growth.',
        image: '⏱️',
    },
    {
        title: 'Words That Flow',
        description: 'Drafts, blogs, and emails written with clarity and speed — the elegance of language without the struggle.',
        image: '✍️',
    },
    {
        title: 'A Silent Guide',
        description: 'Always present to keep you focused — suggestions, reminders, and insights right when you need them.',
        image: '🧭',
    },
];

export default function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="about-inner">
                <div className="section-badge">
                    <span className="badge-dot"></span>
                    <span>Introducing Message</span>
                </div>

                <h2 className="about-heading">
                    <span className="heading-highlight">Harness invisible power</span>{' '}
                    <span className="heading-muted">to write faster, focus deeper, and save hours.</span>
                </h2>

                <div className="about-cards">
                    {aboutCards.map((card, index) => (
                        <div className="about-card" key={index}>
                            <div className="about-card-image">
                                <span className="about-card-emoji">{card.image}</span>
                            </div>
                            <h3 className="about-card-title">{card.title}</h3>
                            <p className="about-card-desc">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
