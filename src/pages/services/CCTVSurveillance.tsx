import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, CheckCircle, Monitor, Wifi, HardDrive, Phone, Eye, Shield } from 'lucide-react';

const CCTVSurveillance: React.FC = () => {
  const features = [
    "HD & 4K camera systems",
    "Night vision capabilities",
    "Remote monitoring access",
    "Cloud storage solutions",
    "Motion detection alerts",
    "24/7 recording & playback",
    "Mobile app integration",
    "Professional installation"
  ];

  const services = [
    {
      icon: Camera,
      title: "Camera Installation",
      description: "Professional installation of IP cameras, dome cameras, PTZ cameras, and bullet cameras for comprehensive coverage"
    },
    {
      icon: Monitor,
      title: "Central Monitoring",
      description: "24/7 monitoring from our state-of-the-art control room with trained operators watching your premises"
    },
    {
      icon: HardDrive,
      title: "Recording & Storage",
      description: "DVR/NVR systems with local storage and cloud backup options for secure footage retention"
    },
    {
      icon: Wifi,
      title: "Remote Access",
      description: "View live footage and recordings from anywhere using smartphone apps and web portals"
    }
  ];

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="CCTV Surveillance" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">CCTV Surveillance</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">Advanced video surveillance systems with 24/7 monitoring and cutting-edge technology</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-secondary">CCTV Surveillance</span>
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
              <span className="text-secondary font-semibold uppercase tracking-wider">Electronic Security</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-6">Complete CCTV Solutions</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                In today's security landscape, CCTV surveillance is no longer optional – it's essential. Valiant Management Services provides comprehensive video surveillance solutions that combine cutting-edge technology with professional monitoring to give you complete peace of mind.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our CCTV systems go beyond simple recording. We offer intelligent surveillance with features like motion detection, facial recognition capabilities, license plate reading, and behavior analytics. Whether you need to monitor a single entrance or secure an entire campus, we design and deploy systems that meet your exact requirements.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                What sets us apart is our integrated approach – we don't just install cameras and leave. Our 24/7 control room can actively monitor your premises, respond to alerts, and coordinate with on-ground security personnel and local authorities when needed. This combination of technology and human oversight provides security that pure automation cannot match.
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

            {/* Image - CCTV Surveillance System */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="CCTV Surveillance Camera System" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <Eye className="w-8 h-8 mb-2" />
                <div className="text-sm">24/7 Live Monitoring</div>
              </div>
              {/* Secondary CCTV Monitor Image - Security Monitoring Room */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl overflow-hidden shadow-xl hidden lg:block border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/60504/security-camera-monitoring-surveillance-60504.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Security Monitoring Control Room with Multiple CCTV Screens"
                  className="w-full h-full object-cover"
                />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">CCTV Services We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Features</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Advanced CCTV Features</h2>
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

      {/* Types of Cameras */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Camera Types</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Camera Options Available</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Dome Cameras</h3>
              <p className="text-gray-600">Discreet indoor cameras ideal for retail stores, offices, and lobbies with 360° coverage options</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Bullet Cameras</h3>
              <p className="text-gray-600">Weatherproof outdoor cameras for perimeter security, parking lots, and building exteriors</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">PTZ Cameras</h3>
              <p className="text-gray-600">Pan-Tilt-Zoom cameras for large areas requiring active monitoring and tracking capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Security?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Get a free site survey and customized CCTV solution proposal for your premises</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Schedule Free Survey
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

export default CCTVSurveillance;
