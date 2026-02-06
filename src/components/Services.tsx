import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Security Guards',
      slug: 'security-guards',
      description: 'Trained and uniformed security personnel for residential, commercial, and industrial premises with 24/7 vigilance.',
      features: ['Armed & Unarmed Guards', 'Patrolling Services', 'Access Control'],
      image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'CCTV Surveillance',
      slug: 'cctv-surveillance',
      description: 'State-of-the-art CCTV installation and monitoring services with remote access and 24/7 surveillance coverage.',
      features: ['HD Cameras', 'Remote Monitoring', 'Cloud Storage'],
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Event Security',
      slug: 'event-security',
      description: 'Comprehensive security management for corporate events, concerts, weddings, and large public gatherings.',
      features: ['Crowd Management', 'VIP Protection', 'Emergency Response'],
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Personal Security',
      slug: 'personal-security',
      description: 'Executive protection and personal bodyguard services for VIPs, celebrities, and high-net-worth individuals.',
      features: ['Close Protection', 'Threat Assessment', 'Travel Security'],
      image: '/images/personal_security_card.png',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Corporate Security',
      slug: 'corporate-security',
      description: 'Tailored security solutions for corporate offices, IT parks, and business establishments with integrated systems.',
      features: ['Access Management', 'Fire Safety', 'Risk Assessment'],
      image: 'https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Housekeeping Services',
      slug: 'housekeeping',
      description: 'Professional housekeeping and facility management services to maintain clean and hygienic premises.',
      features: ['Daily Cleaning', 'Deep Sanitization', 'Waste Management'],
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 md:mb-6">
            Comprehensive Security
            <span className="text-gradient"> Solutions</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We offer a wide range of security services tailored to meet the unique needs of
            residential, commercial, and industrial clients across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover shadow-sm hover:border-secondary/20 flex flex-col"
            >
              {/* Service Image */}
              <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent"></div>
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center text-secondary shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  <div className="w-8 h-8 md:w-10 md:h-10">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6 flex-1 flex flex-col">
                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] md:text-sm text-gray-500">
                      <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Read More Link */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-secondary font-bold text-sm group/link hover:gap-3 transition-all duration-300 relative overflow-hidden self-start"
                >
                  <span className="relative z-10">Read More</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover/link:w-full transition-all duration-300"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100">
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Need a customized security solution? Let's discuss your requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-white px-8 py-3 md:py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-secondary/30 transition-all text-sm md:text-base w-full sm:w-auto justify-center"
          >
            Get Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
