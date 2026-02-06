import { Link } from 'react-router-dom';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Security Guards', href: '/services/security-guards' },
    { name: 'CCTV Surveillance', href: '/services/cctv-surveillance' },
    { name: 'Event Security', href: '/services/event-security' },
    { name: 'Personal Security', href: '/services/personal-security' },
    { name: 'Corporate Security', href: '/services/corporate-security' },
    { name: 'Housekeeping', href: '/services/housekeeping' },
  ];

  return (
    <footer className="bg-dark pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Footer Logo - Loads from /public/images/Valiant-Management-Service.png with fallback */}
            <Link to="/" className="inline-block mb-6 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/Valiant-Management-Service.png" 
                alt="Valiant Management Services - Professional Security Guard Services" 
                className="footer-logo h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain max-w-[180px] sm:max-w-[200px] md:max-w-[240px]"
                loading="lazy"
                onError={(e) => {
                  // Fallback chain: Try root folder, then external URL
                  const target = e.target as HTMLImageElement;
                  const currentSrc = target.src;
                  
                  if (currentSrc.includes('/images/Valiant-Management-Service.png')) {
                    // First fallback: Try root folder
                    target.src = '/Valiant-Management-Service.png';
                  } else if (!currentSrc.includes('valiantmanagementservices.com')) {
                    // Final fallback: External URL
                    target.src = 'https://valiantmanagementservices.com/wp-content/uploads/2026/01/Valiant-Management-Service.png';
                  }
                }}
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Valiant Management Services Pvt. Ltd. is a premier security solutions provider offering 
              comprehensive protection services across India since 2010.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
                >
                  {social === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {/* Head Office */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <span className="text-white text-sm font-medium">Head Office</span>
                  <p className="text-gray-400 text-sm">A-62 (Ground Floor), G.D. Colony, Mayur Vihar Phase 3, East Delhi – 110096</p>
                </div>
              </li>
              {/* Branch Office */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="text-white text-sm font-medium">Branch Office</span>
                  <p className="text-gray-400 text-sm">Y-13/372, 3rd Floor, Sector-12, Noida, Gautam Buddha Nagar, UP – 201301</p>
                </div>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:011-42182246" className="text-gray-400 hover:text-secondary transition-colors">011-42182246</a>
              </li>
              {/* Emails */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="space-y-1">
                  <a href="mailto:vms24x7@gmail.com" className="block text-gray-400 hover:text-secondary transition-colors text-sm">vms24x7@gmail.com</a>
                  <a href="mailto:info@valiantmanagementservices.com" className="block text-gray-400 hover:text-secondary transition-colors text-sm">info@valiantmanagementservices.com</a>
                </div>
              </li>
            </ul>

            {/* Emergency Contact */}
            <div className="mt-6 bg-gradient-to-r from-secondary to-accent p-4 rounded-xl">
              <p className="text-white/80 text-sm mb-1">24/7 Telephone</p>
              <a href="tel:011-42182246" className="text-white font-bold text-xl hover:text-white/90 transition-colors">011-42182246</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Valiant Management Services Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-secondary transition-colors">Terms of Service</Link>
            <Link to="/careers" className="text-gray-500 hover:text-secondary transition-colors">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
