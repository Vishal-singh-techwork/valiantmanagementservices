import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, CheckCircle, Shield, Car, Phone, Award, Eye } from 'lucide-react';

const PersonalSecurity: React.FC = () => {
  const features = [
    "24/7 close protection",
    "Threat assessment & analysis",
    "Secure transportation",
    "Residential security",
    "Travel security planning",
    "Advance party services",
    "Counter-surveillance",
    "Emergency response"
  ];

  const clientTypes = [
    "Corporate Executives & CEOs",
    "Politicians & Public Figures",
    "Celebrities & Entertainment",
    "High Net Worth Individuals",
    "Business Families",
    "Foreign Dignitaries",
    "Witnesses Under Protection",
    "Threat-Exposed Individuals"
  ];

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/personal_security_hero.png"
            alt="Personal Security - Professional Bodyguard Service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Personal Security Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">Elite executive protection and personal security officers for VIPs and high-profile individuals</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-secondary">Personal Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider">Executive Protection</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-6">Elite Personal Security Officers</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                In an increasingly complex world, personal security is not a luxury – it's a necessity for those in the public eye, business leaders, and individuals facing specific threats. Valiant Management Services provides discreet, professional, and highly trained Personal Security Officers (PSOs) who ensure your safety without compromising your lifestyle.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our PSOs are selected from elite backgrounds – ex-military, paramilitary, and special forces personnel who bring years of tactical experience. They undergo additional training in executive protection protocols, threat assessment, defensive driving, first aid, and VIP etiquette. They know when to be visible and when to blend in, adapting to your preferences and the situation at hand.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Beyond physical protection, we offer comprehensive security planning. Our team conducts threat assessments, plans secure travel routes, coordinates advance parties for events, and provides residential security integration. Whether you need a single PSO or a full security detail, we customize our services to match your risk profile and requirements.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Private Consultation
                </Link>
                <a
                  href="tel:+919876543210"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Image - Professional Bodyguard / Personal Security */}
            <div className="relative">
              <img
                src="/images/security_guard_pso.png"
                alt="Professional Bodyguard - Personal Security Officer in Suit"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <Award className="w-8 h-8 mb-2" />
                <div className="text-sm">Ex-Military Personnel</div>
              </div>
              {/* Secondary Image - Security Team */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl overflow-hidden shadow-xl hidden lg:block border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Professional Security Guard in Uniform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Personal Security Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Close Protection</h3>
              <p className="text-gray-600">Round-the-clock personal protection by trained PSOs who accompany you everywhere, ensuring your safety at all times while maintaining discretion.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Secure Transportation</h3>
              <p className="text-gray-600">Secure vehicle services with trained drivers, route planning, and convoy management for safe travel between locations.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Threat Intelligence</h3>
              <p className="text-gray-600">Continuous threat assessment, intelligence gathering, and proactive measures to identify and neutralize potential risks before they materialize.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Who We Protect</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Our Clients Include</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                <UserCheck className="w-10 h-10 text-secondary mx-auto mb-3" />
                <p className="font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Need Personal Protection?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Confidential consultation available. All inquiries are handled with complete discretion.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalSecurity;
