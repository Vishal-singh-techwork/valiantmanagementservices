import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, Shield, Lock, Users, Phone, Camera, FileText } from 'lucide-react';

const CorporateSecurity: React.FC = () => {
  const features = [
    "Lobby & reception security",
    "Access control management",
    "Visitor management systems",
    "Parking lot security",
    "Floor patrolling",
    "CCTV monitoring",
    "Fire safety compliance",
    "Emergency response planning"
  ];

  const industries = [
    "IT & Software Companies",
    "Banks & Financial Services",
    "Manufacturing Plants",
    "Pharmaceutical Companies",
    "Retail & Shopping Centers",
    "Healthcare Facilities",
    "Educational Institutions",
    "Government Buildings"
  ];

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Corporate Security" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Corporate Security Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">Comprehensive security solutions for businesses, offices, and industrial facilities</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-secondary">Corporate Security</span>
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
                src="https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Corporate Security" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <Building2 className="w-8 h-8 mb-2" />
                <div className="text-sm">500+ Sites Secured</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider">Business Security</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-6">Protecting Your Business Assets</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Corporate security is about more than just guarding the front door. It's about protecting your employees, assets, information, and reputation. Valiant Management Services provides integrated security solutions that address the complex security needs of modern businesses.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our corporate security services begin with a thorough security audit of your premises. We identify vulnerabilities, assess risks, and develop a comprehensive security plan that combines manned guarding, electronic surveillance, access control, and procedural measures. Our security personnel are trained to handle the specific requirements of corporate environments – from managing visitor access and screening deliveries to responding to emergencies.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand that corporate security must be professional yet unobtrusive. Our guards are trained in corporate etiquette, customer service, and communication skills. They represent your company's image while ensuring security is never compromised.
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

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Our Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Corporate Security Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Access Control</h3>
              <p className="text-gray-600">Comprehensive access management including ID verification, biometric systems, visitor passes, and restricted area protocols.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Surveillance</h3>
              <p className="text-gray-600">24/7 CCTV monitoring, recorded surveillance, and integration with central monitoring stations for real-time response.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Manned Security</h3>
              <p className="text-gray-600">Trained security officers for reception, lobby, parking, and floor duties with professional demeanor and presentation.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Emergency Response</h3>
              <p className="text-gray-600">Fire safety protocols, evacuation planning, first response training, and coordination with emergency services.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Compliance</h3>
              <p className="text-gray-600">Security audits, compliance documentation, statutory requirements, and regular security assessments.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Facility Security</h3>
              <p className="text-gray-600">Perimeter protection, parking management, loading dock security, and after-hours building security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Features</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">What Our Corporate Security Includes</h2>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">We Secure All Business Types</h2>
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

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Secure Your Business Today</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Get a free security audit and customized proposal for your organization</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Security Audit
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

export default CorporateSecurity;
