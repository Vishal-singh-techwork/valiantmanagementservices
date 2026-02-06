import { useState } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechCorp India',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=c53030&color=fff&size=150&font-size=0.4',
      content: 'Valiant Management Services has been our security partner for over 5 years. Their professionalism and dedication to keeping our premises safe is unmatched. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Director, Greenfield Mall',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=1a365d&color=fff&size=150&font-size=0.4',
      content: 'The event security team from Valiant handled our annual fest with exceptional skill. Crowd management was seamless, and we received many compliments from attendees.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Owner, Sunrise Residency',
      image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=c53030&color=fff&size=150&font-size=0.4',
      content: 'As a housing society, safety is our top concern. Valiant\'s guards are well-trained, courteous, and vigilant. Our residents feel much safer with their 24/7 security coverage.',
      rating: 5,
    },
    {
      name: 'Dr. Meera Reddy',
      role: 'Administrator, City Hospital',
      image: 'https://ui-avatars.com/api/?name=Meera+Reddy&background=1a365d&color=fff&size=150&font-size=0.4',
      content: 'Hospital security requires a delicate balance of vigilance and compassion. Valiant\'s team handles both brilliantly. Their quick response during emergencies is commendable.',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Plant Manager, IndoSteel Ltd',
      image: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=c53030&color=fff&size=150&font-size=0.4',
      content: 'Industrial security is complex, but Valiant understood our needs perfectly. Their integrated approach with CCTV and physical security has significantly reduced incidents.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            What Our Clients
            <span className="text-gradient"> Say About Us</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our valued clients have to say about 
            their experience with Valiant Management Services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-secondary/10">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-secondary/20"
                />
                <div>
                  <h4 className="font-bold text-dark text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-dark hover:bg-secondary hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-dark hover:bg-secondary hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-secondary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8">Trusted by leading organizations across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">IndoSteel</div>
            <div className="text-2xl font-bold text-gray-400">Greenfield</div>
            <div className="text-2xl font-bold text-gray-400">CityBank</div>
            <div className="text-2xl font-bold text-gray-400">MetroMall</div>
          </div>
        </div>
      </div>
    </section>
  );
}
