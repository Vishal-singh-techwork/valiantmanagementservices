import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Users, Clock, Award, Phone } from 'lucide-react';

const SecurityGuards: React.FC = () => {
  const features = [
    "24/7 round-the-clock security coverage",
    "Trained and verified security personnel",
    "Regular patrolling and surveillance",
    "Access control and visitor management",
    "Incident reporting and documentation",
    "Emergency response protocols",
    "Uniformed and well-groomed guards",
    "Regular training and skill upgrades"
  ];

  const industries = [
    "Corporate Offices & IT Parks",
    "Residential Complexes & Gated Communities",
    "Shopping Malls & Retail Stores",
    "Hospitals & Healthcare Facilities",
    "Educational Institutions",
    "Industrial & Manufacturing Units",
    "Banks & Financial Institutions",
    "Hotels & Hospitality"
  ];

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Security Guards" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Security Guard Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">Professional manned guarding solutions with trained, verified, and reliable security personnel</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-secondary">Security Guards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional Security Guard" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="text-4xl font-bold">2500+</div>
                <div className="text-sm">Trained Guards</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider">Our Core Service</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-6">Professional Security Guard Services</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Valiant Management Services, we provide top-tier security guard services that form the backbone of our comprehensive security solutions. Our security guards are more than just watchmen – they are trained professionals who understand the importance of vigilance, customer service, and emergency response.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every security guard deployed by Valiant undergoes rigorous background verification, including police verification, reference checks, and document authentication. Our training program covers physical security, access control procedures, fire safety, first aid, customer service, and legal aspects of security work.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand that different environments require different security approaches. Whether it's a corporate office requiring professional demeanor, a residential complex needing friendly yet vigilant guards, or an industrial unit demanding strict access control – we tailor our security personnel deployment to match your specific requirements.
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
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Key Features of Our Guard Services</h2>
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

      {/* Industries Served */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Security Solutions for Every Sector</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                <Users className="w-10 h-10 text-secondary mx-auto mb-3" />
                <p className="font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider">Why Valiant</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-6">Why Choose Our Security Guards?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Verified & Background Checked</h3>
                    <p className="text-gray-600">Every guard undergoes thorough police verification, reference checks, and document authentication before deployment.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Professional Training</h3>
                    <p className="text-gray-600">Comprehensive training covering security procedures, customer service, emergency response, and legal aspects.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">24/7 Supervision</h3>
                    <p className="text-gray-600">Round-the-clock supervision with mobile supervisors, control room monitoring, and instant replacement guarantee.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Security Team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Need Professional Security Guards?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Contact us today to discuss your security requirements and get a customized quote</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request a Quote
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

export default SecurityGuards;
