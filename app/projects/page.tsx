import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | ANKI Co - Sustainable Container Homes',
  description: 'Explore our portfolio of sustainable container home projects, showcasing innovative designs and eco-friendly solutions.',
};

const projects = [
  {
    id: 1,
    title: 'Modern Beachfront Retreat',
    category: 'residential',
    location: 'Malibu, CA',
    size: '1200 sq ft',
    image: '/pictures/projects/beachfront.jpg',
    features: ['Ocean view', 'Solar panels', 'Rainwater harvesting'],
  },
  {
    id: 2,
    title: 'Urban Studio Apartment',
    category: 'residential',
    location: 'New York, NY',
    size: '800 sq ft',
    image: '/pictures/projects/urban-studio.jpg',
    features: ['Rooftop garden', 'Smart home system', 'Energy efficient'],
  },
  {
    id: 3,
    title: 'Mountain Cabin',
    category: 'residential',
    location: 'Aspen, CO',
    size: '1600 sq ft',
    image: '/pictures/projects/mountain-cabin.jpg',
    features: ['Wood stove', 'Large windows', 'Natural materials'],
  },
  {
    id: 4,
    title: 'Office Space',
    category: 'commercial',
    location: 'Austin, TX',
    size: '2000 sq ft',
    image: '/pictures/projects/office-space.jpg',
    features: ['Open floor plan', 'Meeting rooms', 'Break area'],
  },
  {
    id: 5,
    title: 'Café & Restaurant',
    category: 'commercial',
    location: 'Portland, OR',
    size: '1500 sq ft',
    image: '/pictures/projects/cafe.jpg',
    features: ['Outdoor seating', 'Kitchen space', 'Storage area'],
  },
  {
    id: 6,
    title: 'Art Studio',
    category: 'commercial',
    location: 'Seattle, WA',
    size: '1000 sq ft',
    image: '/pictures/projects/art-studio.jpg',
    features: ['Natural lighting', 'Ventilation system', 'Storage space'],
  },
];

export default function Projects() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 to-dark-bg/40 z-0" />
        <Image
          src="/pictures/hero/projects-hero.jpg"
          alt="Projects Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Our Projects</h1>
          <p className="hero-subtitle">
            Explore our portfolio of sustainable container home projects,
            showcasing innovative designs and eco-friendly solutions.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card group">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-text-light/80 mb-2">{project.location}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary-color/20 text-primary-color px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-color">{project.category}</span>
                    <span className="text-text-light/60">{project.size}</span>
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-text-light/80">{project.location}</p>
                </div>
              </div>
            ))}
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
            Contact us today to discuss your project requirements and get started.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
} 