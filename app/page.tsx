import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ANKI Co - Sustainable Container Homes',
  description: 'Transform shipping containers into beautiful, sustainable living spaces with ANKI Co. Custom designs, eco-friendly materials, and expert craftsmanship.',
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg/40 z-0" />
        <Image
          src="/pictures/hero/container-home-hero.jpg"
          alt="Modern Container Home"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Sustainable Living, Redefined</h1>
          <p className="hero-subtitle">
            Transform shipping containers into beautiful, eco-friendly homes.
            Custom designs, expert craftsmanship, and sustainable materials.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gradient-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-light-text">
                Welcome To <span className="text-primary-color">ANKI</span> Co
              </h2>
              <p className="text-light-text/80">
                At <strong className="text-primary-color">ANKI Co.</strong>, we specialize in crafting
                innovative, sustainable, and affordable living solutions by
                transforming shipping containers into modern, eco-friendly homes.
              </p>
              <p className="text-light-text/80">
                With a focus on quality craftsmanship and cutting-edge design,
                ANKI Co. ensures each container home is customized to meet the
                unique needs and lifestyles of our clients.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/pictures/th-3448510966.jpg"
                alt="Container Home"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-dark">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-primary-color">Container Homes</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/pictures/features/sustainability.jpg"
                  alt="Sustainable Living"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Eco-Friendly</h3>
              <p className="text-text-light/80">
                Reduce your carbon footprint with our sustainable building practices
                and energy-efficient designs.
              </p>
            </div>
            <div className="card group">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/pictures/features/customization.jpg"
                  alt="Custom Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Design</h3>
              <p className="text-text-light/80">
                Create your dream home with fully customizable layouts and
                premium finishes.
              </p>
            </div>
            <div className="card group">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/pictures/features/affordable.jpg"
                  alt="Affordable Living"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Cost-Effective</h3>
              <p className="text-text-light/80">
                Save on construction costs without compromising on quality or
                design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-primary-color">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-color mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">Consultation</h3>
              <p className="text-text-light/80">
                Discuss your vision and requirements with our experts.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-color mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p className="text-text-light/80">
                Create a custom design that matches your needs and style.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-color mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Construction</h3>
              <p className="text-text-light/80">
                Build your home with precision and attention to detail.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-color mb-4">4</div>
              <h3 className="text-xl font-bold mb-4">Completion</h3>
              <p className="text-text-light/80">
                Move into your new sustainable home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-dark">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-primary-color">Project</span>?
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto mb-8">
            Let's work together to create your dream sustainable container home.
            Contact us today to discuss your project requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 