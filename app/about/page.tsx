import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ANKI Co - Sustainable Container Homes',
  description: 'Learn about ANKI Co\'s mission to transform shipping containers into sustainable, modern living spaces.',
};

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg/40 z-0" />
        <Image
          src="/pictures/hero/about-hero.jpg"
          alt="About Us Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Our Vision & Values</h1>
          <p className="hero-subtitle">
            At ANKI Co., we believe in transforming simple containers into extraordinary spaces.
            Our vision is to redefine construction by blending functionality, aesthetic appeal, and sustainability.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-gradient-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Our <span className="text-primary-color">Mission</span>
              </h2>
              <p className="text-text-light/80">
                To revolutionize the housing industry by providing sustainable, affordable, and customizable
                container homes that meet the needs of modern living while reducing environmental impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-primary-color text-2xl">🌍</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Environmental Stewardship</h3>
                    <p className="text-text-light/80">
                      We're committed to reducing construction waste and promoting eco-friendly building practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary-color text-2xl">💡</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-text-light/80">
                      Constantly pushing boundaries in design and technology to create better living spaces.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary-color text-2xl">🤝</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-text-light/80">
                      Building not just homes, but sustainable communities for a better future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/pictures/features/sustainability.jpg"
                alt="Sustainable Living"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our <span className="text-primary-color">Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/pictures/team/team1.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-primary-color mb-2">Founder & CEO</p>
              <p className="text-text-light/80">
                With over 15 years of experience in sustainable architecture, Sarah leads our vision for eco-friendly living.
              </p>
            </div>
            <div className="card group">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/pictures/team/team2.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-primary-color mb-2">Lead Architect</p>
              <p className="text-text-light/80">
                Michael brings innovative design solutions to transform containers into beautiful living spaces.
              </p>
            </div>
            <div className="card group">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/pictures/team/team3.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Emma Rodriguez</h3>
              <p className="text-primary-color mb-2">Sustainability Expert</p>
              <p className="text-text-light/80">
                Emma ensures our projects meet the highest environmental standards and certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-dark">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="card">
              <div className="text-5xl font-bold text-primary-color mb-2">50+</div>
              <p className="text-text-light/80">Projects Completed</p>
            </div>
            <div className="card">
              <div className="text-5xl font-bold text-primary-color mb-2">100%</div>
              <p className="text-text-light/80">Client Satisfaction</p>
            </div>
            <div className="card">
              <div className="text-5xl font-bold text-primary-color mb-2">75%</div>
              <p className="text-text-light/80">Construction Waste Reduced</p>
            </div>
            <div className="card">
              <div className="text-5xl font-bold text-primary-color mb-2">15+</div>
              <p className="text-text-light/80">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 