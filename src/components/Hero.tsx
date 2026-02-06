export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 lg:pt-28">
      {/* Background Image - Security Guard on Duty */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional Security Guard in Uniform on Duty"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Animated Shapes - Optimized for mobile */}
      <div className="absolute top-20 right-0 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-0 md:left-10 w-64 md:w-96 h-64 md:h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-white text-xs sm:text-sm font-medium">Trusted Security Partner Since 2010</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Professional
              <span className="text-gradient block">Security Solutions</span>
              For Your Peace of Mind
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Valiant Management Services provides comprehensive security solutions with highly trained professionals,
              cutting-edge technology, and 24/7 monitoring to protect what matters most to you.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/+919873636552?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20assist%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-xl transition-all group w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Quote
              </a>
              <a
                href="tel:+919873636552"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9873636552
              </a>
            </div>

            {/* Stats - Refined for mobile */}
            <div className="pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">500+</h3>
                  <p className="text-gray-300 text-[10px] md:text-sm mt-1">Clients Protected</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">2500+</h3>
                  <p className="text-gray-300 text-[10px] md:text-sm mt-1">Personnel</p>
                </div>
                <div className="col-span-2 md:col-span-1 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">14+</h3>
                  <p className="text-gray-300 text-[10px] md:text-sm mt-1">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Card - Visible on LG screens */}
          <div className="hidden lg:block relative">
            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Security Guard Patrolling Corporate Building"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">24/7 Protection</h4>
                    <p className="text-gray-400">Always On Guard</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gold text-dark px-6 py-3 rounded-full font-bold shadow-lg">
                ISO Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          className="flex flex-col items-center text-white/70 hover:text-white transition-all duration-300 group"
        >
          <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 hidden sm:block">Scroll Down</span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2 group-hover:border-white/70 transition-colors">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-scroll-down group-hover:bg-white"></div>
          </div>
        </a>
      </div>
    </section>
  );
}