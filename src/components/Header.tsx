import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Security Guards', href: '/services/security-guards' },
        { name: 'CCTV Surveillance', href: '/services/cctv-surveillance' },
        { name: 'Event Security', href: '/services/event-security' },
        { name: 'Personal Security', href: '/services/personal-security' },
        { name: 'Corporate Security', href: '/services/corporate-security' },
        { name: 'Housekeeping', href: '/services/housekeeping' },
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo - Loads from /public/images/Valiant-Management-Service.png with fallback */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/Valiant-Management-Service.png"
              alt="Valiant Management Services - Professional Security Guard Services"
              className="nav-logo h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[72px] w-auto object-contain max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px]"
              loading="eager"
              onError={(e) => {
                // Fallback chain: Try root folder, then external URL
                const target = e.target as HTMLImageElement;
                const currentSrc = target.src;

                if (currentSrc.includes('/images/Valiant-Management-Service.png')) {
                  // First fallback: Try root folder
                  target.src = '/Valiant-Management-Service.png';
                } else if (!currentSrc.includes('valiantmanagementservices.com')) {
                  // Final fallback: External URL
                  target.src = 'https://valiantmanagementservices.com/Valiant-Management-Service.png';
                }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 transition-colors duration-200 font-medium text-sm xl:text-base tracking-wide relative ${isActive(link.href) ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
                        }`}
                    >
                      {link.name}
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px]">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.href}
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${location.pathname === subLink.href
                                ? 'text-secondary bg-secondary/5'
                                : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                              }`}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`transition-colors duration-200 font-medium text-sm xl:text-base tracking-wide relative group ${isActive(link.href) ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
                      }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Section - WhatsApp Get Quote Button Only */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/+919873636552?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20assist%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold text-sm xl:text-base transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <div
          className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-primary/95 backdrop-blur-lg transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div
            className={`relative h-full flex flex-col items-center justify-center p-8 transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'
              }`}
          >
            {/* Close Button Inside Overlay */}
            <button
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="w-full text-center" style={{ transitionDelay: `${idx * 50}ms` }}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-center gap-3 text-white transition-colors font-semibold text-2xl py-2"
                      >
                        {link.name}
                        <svg className={`w-6 h-6 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-secondary' : 'text-white/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                        <div className="flex flex-col gap-4 bg-white/5 rounded-2xl p-4">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              className="text-gray-300 hover:text-secondary transition-colors font-medium text-lg"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block transition-colors font-semibold text-2xl py-2 ${isActive(link.href) ? 'text-secondary scale-110' : 'text-white hover:text-secondary'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="w-full pt-8">
                <a
                  href="https://wa.me/+919873636552?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20assist%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold text-xl text-center transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get Quote
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
