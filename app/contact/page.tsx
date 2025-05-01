import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ANKI Co - Sustainable Container Homes',
  description: 'Get in touch with ANKI Co. to discuss your sustainable container home project. We\'re here to help bring your vision to life.',
};

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg/40 z-0" />
        <Image
          src="/pictures/hero/contact-hero.jpg"
          alt="Contact Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">
            Ready to start your sustainable container home project?
            Contact us today to discuss your vision.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input-field"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input-field"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="input-field"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="input-field"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary-color text-2xl">📍</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Location</h3>
                      <p className="text-text-light/80">
                        123 Container St, Eco City<br />
                        California, 90210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-primary-color text-2xl">📞</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Phone</h3>
                      <p className="text-text-light/80">
                        +1 (555) 123-4567<br />
                        Mon-Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-primary-color text-2xl">✉️</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-text-light/80">
                        info@ankico.com<br />
                        support@ankico.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6">Find Us</h2>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/pictures/features/location.jpg"
                    alt="Our Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gradient-dark">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-primary-color">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">How long does it take to build a container home?</h3>
              <p className="text-text-light/80">
                The construction time varies depending on the size and complexity of the project. On average, it takes 3-6 months from design to completion.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Are container homes energy efficient?</h3>
              <p className="text-text-light/80">
                Yes, our container homes are designed with energy efficiency in mind. We use high-quality insulation, energy-efficient windows, and sustainable materials.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Can I customize my container home?</h3>
              <p className="text-text-light/80">
                Absolutely! We offer fully customizable designs to meet your specific needs and preferences. Our team will work closely with you throughout the process.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">What's the cost of a container home?</h3>
              <p className="text-text-light/80">
                The cost varies based on size, design, and features. Our homes typically range from $50,000 to $200,000. Contact us for a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 