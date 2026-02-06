import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Phone, Star } from 'lucide-react';

const EventSecurity: React.FC = () => {
  const features = [
    "Crowd management & control",
    "VIP protection services",
    "Entry point screening",
    "Perimeter security",
    "Emergency evacuation planning",
    "Coordination with local police",
    "Parking lot security",
    "Lost & found management"
  ];

  const eventTypes = [
    "Corporate Events & Conferences",
    "Weddings & Social Functions",
    "Concerts & Music Festivals",
    "Sports Events & Matches",
    "Political Rallies & Gatherings",
    "Trade Shows & Exhibitions",
    "Religious Events & Ceremonies",
    "Private Parties & Celebrations"
  ];

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Event Security" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Event Security Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">Professional event security for safe, successful, and memorable occasions</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-secondary">Event Security</span>
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
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Event Security Team" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <Star className="w-8 h-8 mb-2" />
                <div className="text-sm">500+ Events Secured</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider">Event Protection</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-6">Comprehensive Event Security Solutions</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Events bring people together, and with crowds come unique security challenges. Whether you're organizing a corporate conference for 100 attendees or a music festival for thousands, Valiant Management Services provides the expertise and personnel to ensure your event runs smoothly and safely.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our event security services begin long before the first guest arrives. We conduct thorough venue assessments, identify potential risks, develop comprehensive security plans, and coordinate with local authorities. On the day of your event, our trained security personnel manage access points, control crowds, protect VIPs, and respond swiftly to any incidents.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand that every event is unique. A wedding requires a different approach than a political rally. Our security coordinators work closely with event organizers to understand the specific requirements, guest profile, and potential concerns, tailoring our security deployment accordingly.
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
            <span className="text-secondary font-semibold uppercase tracking-wider">What We Provide</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Event Security Features</h2>
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

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Events We Cover</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Types of Events We Secure</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                <Calendar className="w-10 h-10 text-secondary mx-auto mb-3" />
                <p className="font-medium">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">How We Secure Your Event</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Consultation</h3>
              <p className="text-gray-600">Understand your event requirements, guest count, venue, and specific concerns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Site Survey</h3>
              <p className="text-gray-600">Conduct venue assessment, identify risks, and plan security deployment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Execution</h3>
              <p className="text-gray-600">Deploy trained personnel, manage access, monitor crowds, and ensure safety</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Review</h3>
              <p className="text-gray-600">Post-event debrief, incident documentation, and feedback for improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Planning an Event?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Let us handle the security so you can focus on making your event a success</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Event Quote
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

export default EventSecurity;
