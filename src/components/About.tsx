export function About() {
  const features = [
    { icon: '🛡️', title: 'Licensed & Insured', desc: 'Fully licensed security company with comprehensive insurance coverage' },
    { icon: '👥', title: 'Trained Personnel', desc: 'Rigorously trained and background-verified security professionals' },
    { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer support and emergency response' },
    { icon: '📍', title: 'Pan India Presence', desc: 'Operating across major cities with local expertise' },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Security Guard Team in Uniform"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] md:aspect-auto"
              />
            </div>

            {/* Decorative Elements - Hidden or adjusted on small mobile */}
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-48 md:w-72 h-48 md:h-72 bg-secondary/10 rounded-2xl -z-0"></div>
            <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-2xl -z-0"></div>

            {/* Experience Badge - Simplified for mobile */}
            <div className="absolute -bottom-4 md:-bottom-8 left-4 md:left-8 bg-white shadow-xl rounded-2xl p-4 md:p-6 z-20">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-white">14+</span>
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] md:text-sm uppercase tracking-wide">Years of</p>
                  <p className="text-dark font-bold text-base md:text-lg">Excellence</p>
                </div>
              </div>
            </div>

            {/* Secondary Image Badge - Visible on MD+ */}
            <div className="absolute -top-4 -right-4 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white hidden sm:block">
              <img
                src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="CCTV Security Camera Surveillance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3">
                About Valiant Management Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                Your Trusted Partner in
                <span className="text-gradient"> Professional Security</span>
              </h2>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Valiant Management Services Pvt. Ltd. is a leading security solutions provider committed to
              delivering exceptional protection services. Founded with a vision to redefine security standards,
              we have grown to become one of the most trusted names in the industry.
            </p>

            {/* Features Grid - 1 col on mobile, 2 col on SM+ */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark text-sm md:text-base">{feature.title}</h4>
                    <p className="text-gray-500 text-[11px] md:text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary to-dark p-5 md:p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Our Mission</h4>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    To provide world-class security solutions that exceed client expectations while maintaining
                    the highest standards of professionalism, integrity, and reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all group"
              >
                Learn More About Us
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
