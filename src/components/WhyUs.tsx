export function WhyUs() {
  const reasons = [
    {
      number: '01',
      title: 'Experienced Team',
      description: 'Our security personnel come from military, police, and paramilitary backgrounds with extensive training.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Modern Technology',
      description: 'We leverage cutting-edge surveillance systems, GPS tracking, and real-time reporting tools.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: '24/7 Monitoring',
      description: 'Our command center operates round-the-clock for continuous monitoring and rapid response.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Customized Solutions',
      description: 'Every client receives a tailored security plan designed to address their specific needs and concerns.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Quick Response',
      description: 'Our emergency response teams are strategically positioned for rapid deployment when needed.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Competitive Pricing',
      description: 'Premium security services at competitive rates with flexible packages for all budgets.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-12 md:py-20 bg-gradient-to-br from-dark via-primary to-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Your Security is Our
            <span className="text-gold"> Top Priority</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            With over 14 years of experience, Valiant Management Services has established itself as a
            leader in the security industry through unwavering commitment to excellence.
          </p>
        </div>

        {/* Features Grid - 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <div className="w-6 h-6 md:w-8 md:h-8">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <span className="text-gold text-[10px] md:text-sm font-bold tracking-widest">{reason.number}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar - Responsive layout */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-secondary to-accent rounded-3xl p-6 md:p-12 shadow-2xl shadow-secondary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-2">
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-1 md:mb-2">500+</h3>
              <p className="text-white/80 text-[10px] md:text-sm font-medium uppercase tracking-wider">Happy Clients</p>
            </div>
            <div className="p-2">
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-1 md:mb-2">2500+</h3>
              <p className="text-white/80 text-[10px] md:text-sm font-medium uppercase tracking-wider">Personnel</p>
            </div>
            <div className="p-2">
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-1 md:mb-2">50+</h3>
              <p className="text-white/80 text-[10px] md:text-sm font-medium uppercase tracking-wider">Cities Covered</p>
            </div>
            <div className="p-2">
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-1 md:mb-2">99%</h3>
              <p className="text-white/80 text-[10px] md:text-sm font-medium uppercase tracking-wider">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
