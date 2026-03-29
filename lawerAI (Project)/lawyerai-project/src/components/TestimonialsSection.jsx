import React from 'react';

const testimonials = [
    {
        quote: '"Importing students from Google Sheets took minutes; mapping plans and installments was straightforward."',
    },
    {
        quote: '"Parents appreciated clear messages with due dates and links — collections became predictable."',
    },
    {
        quote: '"Fee reconciliation that used to take a day now finishes before lunch thanks to real-time tracking."',
    },
    {
        quote: '"Overdues dropped noticeably in 60 days; Feezo practically paid for itself from recovered fees."',
    },
    {
        quote: '"Templates for reminders feel professional yet friendly; we customized tone without any coding."',
    },
    {
        quote: '"The audit trail is solid — every nudge and payment is logged, which helps during PTA reviews."',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-inner">
                <div className="testimonials-left">
                    <h2 className="testimonials-heading">
                        Built a workflow that used to take 3 services and 2 meetings.
                    </h2>
                </div>

                <div className="testimonials-right">
                    <div className="testimonials-grid">
                        {testimonials.map((item, index) => (
                            <div className="testimonial-card" key={index}>
                                <p className="testimonial-quote">{item.quote}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
