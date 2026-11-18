import React, { useState } from 'react';
import {
  Utensils,
  ShieldCheck,
  Sparkles,
  Truck,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Send
} from 'lucide-react';

const services = [
  {
    title: 'Catering Services',
    description:
      'Tailored corporate, event, and institutional catering delivering fresh, hygienic, and well-presented meals for gatherings of any scale.',
    icon: Utensils,
    highlights: ['Corporate & Event Buffets', 'Custom Menu Planning', 'Strict Food Safety Standards'],
  },
  {
    title: 'Security Solutions',
    description:
      'Reliable physical guarding, access control, and site protection operated by vetted, trained security personnel.',
    icon: ShieldCheck,
    highlights: ['24/7 Guarding & Patrols', 'Access Control Management', 'Commercial & Event Security'],
  },
  {
    title: 'Cleaning & Hygiene',
    description:
      'Comprehensive commercial, industrial, and residential cleaning programs designed to keep workspaces spotless and compliant.',
    icon: Sparkles,
    highlights: ['Office & Facility Maintenance', 'Deep Sanitation Services', 'Eco-Friendly Cleaning Agents'],
  },
  {
    title: 'General Supply',
    description:
      'Efficient procurement and timely delivery of essential operational goods, consumables, PPE, and office supplies.',
    icon: Truck,
    highlights: ['Bulk Consumables & PPE', 'Reliable Logistics & Delivery', 'Competitive Corporate Pricing'],
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Catering Services',
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Service Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Needed: ${formData.service}\n\nDetails:\n${formData.message}`
    );
    window.location.href = `mailto:boledimahlako94@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#262626] font-sans">
      {/* Navigation */}
{/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#EAE8E4]/95 backdrop-blur-sm border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28 sm:h-24">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/1.png"
                alt="Boledi Mahlako Enterprises Logo"
                className="h-24 sm:h-20 w-auto object-contain"
              />
              <div>
                <span className="block text-base sm:text-sm font-bold tracking-[0.2em] uppercase text-[#262626]">
                  Boledi Mahlako
                </span>
                <span className="block text-xs tracking-[0.3em] uppercase text-stone-600">
                  Enterprises
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#home" className="hover:text-amber-600 transition">Home</a>
              <a href="#services" className="hover:text-amber-600 transition">Services</a>
              <a href="#about" className="hover:text-amber-600 transition">Why Us</a>
              <a
                href="#contact"
                className="bg-[#262626] text-[#F5D042] px-5 py-2.5 rounded-md font-semibold hover:bg-stone-800 transition"
              >
                Request a Quote
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-md text-[#262626] hover:bg-stone-300/50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#EAE8E4] border-b border-stone-300 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-lg font-medium hover:text-amber-600"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-lg font-medium hover:text-amber-600"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-lg font-medium hover:text-amber-600"
            >
              Why Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#262626] text-[#F5D042] px-5 py-3 rounded-md text-base font-semibold"
            >
              Request a Quote
            </a>
          </div>
        )}
      </header>

{/* Hero Section with Unobstructed Logo Background */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#EAE8E4] text-[#262626] py-20 sm:py-28 border-b border-stone-300"
      >
        {/* Background Logo Image (No Color Overlay) */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain sm:bg-cover opacity-100 pointer-events-none"
          style={{ background: "white" }}
          aria-hidden="true"
        />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#262626] text-[#F5D042] text-xs font-semibold tracking-widest uppercase">
              Trusted Multi-Service Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#262626]">
              Excellence in <span className="text-amber-600">Catering, Security, Cleaning</span> &amp; Supply.
            </h1>
            <p className="text-stone-700 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Boledi Mahlako Enterprises delivers dependable, integrated operational services tailored to businesses, institutions, and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#262626] text-[#F5D042] px-7 py-3.5 rounded-md font-bold hover:bg-stone-800 transition"
              >
                Get a Free Quote <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-[#262626] text-[#262626] px-7 py-3.5 rounded-md font-semibold hover:bg-[#262626]/10 transition"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#262626]">
            Our Core Services
          </h2>
          <p className="mt-4 text-stone-600">
            Four essential divisions working together to keep your premises secure, clean, supplied, and catered to the highest standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#262626] text-[#F5D042] flex items-center justify-center mb-6">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#262626] mb-3">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">{service.description}</p>
                </div>
                <ul className="space-y-2 border-t border-stone-100 pt-4">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-700 font-medium">
                      <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section id="about" className="bg-[#EAE8E4] py-16 border-y border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#262626] mb-2">Single-Point Convenience</h3>
              <p className="text-stone-600 text-sm">
                Consolidate your catering, guarding, hygiene, and supply procurement under one accountable partner.
              </p>
            </div>
            <div className="p-6 md:border-x border-stone-300">
              <h3 className="text-xl font-bold text-[#262626] mb-2">Vetted &amp; Trained Teams</h3>
              <p className="text-stone-600 text-sm">
                Every division is staffed by experienced, compliance-focused professionals dedicated to service excellence.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#262626] mb-2">Responsive Turnaround</h3>
              <p className="text-stone-600 text-sm">
                Fast quotations, punctual deliveries, and direct communication whenever your operations need support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262626]">
              Let&apos;s Discuss Your Requirements
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Reach out directly via phone or email, or send us your service request for a tailored quotation.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:boledimahlako94@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-amber-500 transition"
              >
                <div className="w-11 h-11 rounded-lg bg-[#262626] text-[#F5D042] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-stone-500 uppercase font-semibold">Email Us</p>
                  <p className="text-sm sm:text-base font-bold text-[#262626] truncate">
                    boledimahlako94@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:0607444221"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-amber-500 transition"
              >
                <div className="w-11 h-11 rounded-lg bg-[#262626] text-[#F5D042] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase font-semibold">Primary Phone</p>
                  <p className="text-base font-bold text-[#262626]">060 744 4221</p>
                </div>
              </a>

              <a
                href="tel:0714630456"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200 hover:border-amber-500 transition"
              >
                <div className="w-11 h-11 rounded-lg bg-[#262626] text-[#F5D042] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase font-semibold">Alternative Phone</p>
                  <p className="text-base font-bold text-[#262626]">071 463 0456</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quote Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="text-2xl font-bold text-[#262626] mb-6">Send an Inquiry</h3>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Full Name / Company</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name or business"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 060 000 0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Catering Services</option>
                    <option>Security Solutions</option>
                    <option>Cleaning &amp; Hygiene</option>
                    <option>General Supply</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Project / Service Details</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your event, site location, quantities, or schedule..."
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#262626] text-[#F5D042] px-8 py-3.5 rounded-lg font-bold hover:bg-stone-800 transition cursor-pointer"
              >
                <Send size={18} /> Send Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#262626] text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold tracking-[0.2em] uppercase text-sm">
              Boledi Mahlako Enterprises
            </p>
            <p className="text-xs mt-1">
              Catering • Security • Cleaning • Supply
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:boledimahlako94@gmail.com" className="hover:text-[#F5D042] transition">
              boledimahlako94@gmail.com
            </a>
            <a href="tel:0607444221" className="hover:text-[#F5D042] transition">
              060 744 4221
            </a>
            <a href="tel:0714630456" className="hover:text-[#F5D042] transition">
              071 463 0456
            </a>
          </div>
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Boledi Mahlako Enterprises. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}