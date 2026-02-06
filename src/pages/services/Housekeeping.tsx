import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, Building2, Users, Phone, Leaf, Clock, Award } from 'lucide-react';

const Housekeeping: React.FC = () => {
  const features = [
    "Daily cleaning & maintenance",
    "Deep cleaning services",
    "Sanitization & disinfection",
    "Washroom maintenance",
    "Pantry management",
    "Waste management",
    "Floor care & polishing",
    "Facade & glass cleaning"
  ];

  const industries = [
    "Corporate Offices & IT Parks",
    "Hospitals & Healthcare",
    "Hotels & Hospitality",
    "Shopping Malls & Retail",
    "Educational Institutions",
    "Residential Complexes",
    "Industrial Facilities",
    "Banks & Financial Institutions"
  ];

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Housekeeping Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Housekeeping Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">Professional facility management and housekeeping solutions for spotless, hygienic premises</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-secondary">Housekeeping</span>
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
              <span className="text-secondary font-semibold uppercase tracking-wider">Facility Management</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-6">Professional Housekeeping Excellence</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                A clean, well-maintained facility speaks volumes about your organization. It impacts employee productivity, customer impressions, and overall hygiene standards. Valiant Management Services provides comprehensive housekeeping and facility management services that keep your premises spotless, safe, and welcoming.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our housekeeping teams are trained professionals who understand that cleaning is more than just sweeping and mopping. They follow systematic processes, use appropriate cleaning agents and equipment, maintain hygiene standards, and ensure every corner of your facility meets the highest cleanliness standards. From daily maintenance to specialized deep cleaning, we handle it all.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                In the post-pandemic world, sanitization and disinfection have become critical. Our teams are trained in proper sanitization protocols, use hospital-grade disinfectants, and follow CDC guidelines to ensure your facility is not just clean, but hygienically safe for everyone.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Get a Quote
                </Link>
                <a 
                  href="tel:+919876543210" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional Housekeeping" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <Sparkles className="w-8 h-8 mb-2" />
                <div className="text-sm">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Housekeeping Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Daily Cleaning</h3>
              <p className="text-gray-600">Regular cleaning and maintenance of all areas including offices, common areas, lobbies, and workspaces to maintain daily hygiene standards.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Deep Cleaning</h3>
              <p className="text-gray-600">Intensive cleaning services including carpet shampooing, upholstery cleaning, floor stripping, and comprehensive sanitization.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Eco-Friendly Options</h3>
              <p className="text-gray-600">Green cleaning solutions using environmentally friendly products that are safe for people and the planet.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Washroom Services</h3>
              <p className="text-gray-600">Complete washroom maintenance including regular cleaning, supplies replenishment, and hygiene management.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Pantry Management</h3>
              <p className="text-gray-600">Pantry and cafeteria upkeep, tea/coffee service, and kitchen maintenance for corporate facilities.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Specialized Cleaning</h3>
              <p className="text-gray-600">Specialized services including facade cleaning, high-rise window cleaning, post-construction cleanup, and industrial cleaning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Features</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">What Our Housekeeping Includes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Industries Served</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Facilities We Maintain</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                <Building2 className="w-10 h-10 text-secondary mx-auto mb-3" />
                <p className="font-medium text-gray-700">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional Cleaning Team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider">Why Valiant</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-6">Why Choose Our Housekeeping?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Trained & Verified Staff</h3>
                    <p className="text-gray-600">All housekeeping staff undergo background verification and professional training.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Quality Cleaning Products</h3>
                    <p className="text-gray-600">We use premium cleaning agents and modern equipment for best results.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Supervision & Quality Checks</h3>
                    <p className="text-gray-600">Regular supervision and quality audits ensure consistent service standards.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Flexible Scheduling</h3>
                    <p className="text-gray-600">Services available in day/night shifts as per your operational needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Need Professional Housekeeping?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Get a customized facility management proposal for your organization</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Quote
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

export default Housekeeping;
