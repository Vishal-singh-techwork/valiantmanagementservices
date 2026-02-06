import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [appliedPosition, setAppliedPosition] = useState('');
  const [activeMap, setActiveMap] = useState<'head' | 'branch'>('head');

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{9,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isFormValid = (): boolean => {
    return (
      formData.name.trim().length >= 2 &&
      validateEmail(formData.email) &&
      formData.subject.trim().length > 0 &&
      formData.message.trim().length >= 10 &&
      (formData.phone === '' || validatePhone(formData.phone))
    );
  };

  // Check for application submission query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const source = searchParams.get('source');
    const position = searchParams.get('position');

    if (source === 'application') {
      setApplicationSubmitted(true);
      if (position) {
        setAppliedPosition(decodeURIComponent(position));
      }

      // Clear the query parameters from URL after reading
      setTimeout(() => {
        navigate('/contact', { replace: true });
      }, 100);

      // Auto-hide the message after 10 seconds
      setTimeout(() => {
        setApplicationSubmitted(false);
      }, 10000);
    }
  }, [location.search, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
      setFormErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Office locations data
  const offices = {
    head: {
      title: 'Head Office',
      address: 'A-62 (Ground Floor), G.D. Colony, Mayur Vihar Phase 3, East Delhi – 110096',
      phone: '011-42182246',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890123!2d77.29876!3d28.60789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sMayur%20Vihar%20Phase%203%2C%20East%20Delhi%2C%20Delhi%20110096!5e0!3m2!1sen!2sin!4v1234567890',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Mayur+Vihar+Phase+3+East+Delhi+110096',
    },
    branch: {
      title: 'Branch Office',
      address: 'Y-13/372, 3rd Floor, Sector-12, Noida, Gautam Buddha Nagar, UP – 201301',
      phone: null,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1234567890123!2d77.31234!3d28.59456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f99999999%3A0x1234567890abcdef!2sSector%2012%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sector+12+Noida+Uttar+Pradesh+201301',
    },
  };


  return (
    <section id="contact" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Application Submitted Confirmation Banner */}
        {applicationSubmitted && (
          <div className="mb-8 bg-green-50 border-2 border-green-400 rounded-2xl p-4 md:p-6 shadow-lg animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-1 md:mb-2">
                  🎉 Application Submitted Successfully!
                </h3>
                <p className="text-green-700 text-sm md:text-base leading-relaxed">
                  Thank you for applying{appliedPosition ? ` for the "${appliedPosition}" position` : ''}!
                  Your application has been received. Our HR team will review your details and contact you within 48 hours.
                </p>
              </div>
              <button
                onClick={() => setApplicationSubmitted(false)}
                className="text-green-600 hover:text-green-800 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 md:mb-6">
            Get In Touch
            <span className="text-gradient"> With Us</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Ready to secure your premises? Contact us today for a free consultation and
            customized security solutions tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-12 border border-gray-100 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-dark mb-6">Request a Quote</h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 text-sm">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-dark font-medium mb-1.5 md:mb-2 text-sm">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-200'
                      } focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <p className="text-red-500 text-[10px] mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-dark font-medium mb-1.5 md:mb-2 text-sm">Phone <span className="text-gray-400 font-normal md:inline hidden">(Optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-gray-200'
                      } focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm`}
                    placeholder="+91 123 456 7890"
                  />
                  {formErrors.phone && <p className="text-red-500 text-[10px] mt-1">{formErrors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-dark font-medium mb-1.5 md:mb-2 text-sm">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm`}
                  placeholder="john@example.com"
                />
                {formErrors.email && <p className="text-red-500 text-[10px] mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-dark font-medium mb-1.5 md:mb-2 text-sm">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="security-guards">Security Guards</option>
                  <option value="cctv-surveillance">CCTV Surveillance</option>
                  <option value="event-security">Event Security</option>
                  <option value="corporate-security">Corporate Security</option>
                  <option value="housekeeping">Housekeeping</option>
                </select>
              </div>

              <div>
                <label className="block text-dark font-medium mb-1.5 md:mb-2 text-sm">Message *</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 md:py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-200'
                    } focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none text-sm`}
                  placeholder="Your security requirements..."
                />
                {formErrors.message && <p className="text-red-500 text-[10px] mt-1">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                className={`w-full bg-gradient-to-r from-secondary to-accent text-white px-8 py-3 md:py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${isSubmitting || !isFormValid()
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:shadow-xl hover:shadow-secondary/40'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {/* Head Office */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-dark text-base md:text-lg mb-1">{offices.head.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">{offices.head.address}</p>
                    <a href={`tel:${offices.head.phone}`} className="text-secondary font-bold text-sm hover:text-accent transition-colors">
                      {offices.head.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-dark rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-dark text-base md:text-lg mb-1">{offices.branch.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2">{offices.branch.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 relative group">
              <div className="h-64 sm:h-80 lg:h-72">
                <iframe
                  src={activeMap === 'head' ? offices.head.mapUrl : offices.branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                ></iframe>

                <div className="absolute top-4 left-4 flex gap-2">
                  <button
                    onClick={() => setActiveMap('head')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeMap === 'head' ? 'bg-secondary text-white shadow-lg' : 'bg-white shadow-sm'
                      }`}
                  >
                    Head Office
                  </button>
                  <button
                    onClick={() => setActiveMap('branch')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeMap === 'branch' ? 'bg-primary text-white shadow-lg' : 'bg-white shadow-sm'
                      }`}
                  >
                    Branch Office
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex flex-wrap gap-4">
              <a href="mailto:vms24x7@gmail.com" className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-center gap-3 hover:bg-white hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-dark lg:hidden xl:inline">Email Support</span>
              </a>
              <a href="tel:011-42182246" className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-center gap-3 hover:bg-white hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-dark lg:hidden xl:inline">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
