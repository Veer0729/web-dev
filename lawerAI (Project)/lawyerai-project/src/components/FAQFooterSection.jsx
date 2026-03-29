import React, { useState } from 'react';

const faqItems = [
    { question: 'What is this AI platform designed for?', answer: 'Our platform is designed to help professionals automate tasks, create content, and boost productivity using advanced AI models.' },
    { question: 'Is there a free plan available?', answer: 'Yes! Our Starter plan is completely free, giving you access to essential AI tools with limited prompts per month.' },
    { question: 'Do I need technical knowledge to use it?', answer: 'Not at all. Our interface is designed to be intuitive and user-friendly, requiring no coding or technical background.' },
    { question: 'Can I use this for business purposes?', answer: 'Absolutely. Our Pro and Lifetime plans are built for professional and business use cases with advanced features.' },
    { question: 'Which AI models power the tool?', answer: 'We use state-of-the-art language models that are continuously updated to provide the best performance and accuracy.' },
    { question: 'How can I get support if I have issues?', answer: 'We offer community support on our free plan, and priority support for Pro and Lifetime subscribers via email and chat.' },
];

export default function FAQFooterSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className="faq-section" id="faq">
                <div className="faq-inner">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>FAQ</span>
                    </div>

                    <h2 className="faq-heading">
                        <span className="heading-highlight">Your questions,</span>{' '}
                        <span className="heading-muted">answered with clarity</span>
                    </h2>

                    <div className="faq-grid">
                        {faqItems.map((item, index) => (
                            <div
                                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                                key={index}
                                onClick={() => toggle(index)}
                            >
                                <div className="faq-question">
                                    <span>{item.question}</span>
                                    <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-banner-section">
                <div className="cta-banner">
                    <div className="cta-banner-content">
                        <h2 className="cta-banner-heading">
                            Step into the future,<br />
                            guided by AI clarity
                        </h2>
                        <p className="cta-banner-text">
                            Experience the tool right now. Just dive in and see what AI can do for you.
                        </p>
                        <button className="cta-banner-btn">Get Started</button>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="footer-inner">
                    <p className="footer-text">© 2026 LawyerAI. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
