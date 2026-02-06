import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  options?: string[];
  isForm?: boolean;
  formType?: 'name' | 'phone' | 'email' | 'service' | 'location' | 'complete';
}

interface UserData {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
}

const services = [
  'Security Guards',
  'CCTV Surveillance',
  'Event Security',
  'Personal Security',
  'Corporate Security',
  'Housekeeping Services'
];

const initialMessages: Message[] = [
  {
    id: 1,
    type: 'bot',
    content: '👋 Welcome to Valiant Management Services! I\'m your virtual security assistant. How can I help you today?',
    options: [
      'About Company',
      'Our Services',
      'Office Locations',
      'Contact Details',
      'Get a Quote'
    ]
  }
];

const companyInfo = `Valiant Management Services Pvt. Ltd. is a leading security services provider in India with over 14+ years of experience. We specialize in providing comprehensive security solutions including armed and unarmed guards, CCTV surveillance, event security, personal protection, and corporate security services.

🏆 500+ Satisfied Clients
👥 2500+ Trained Personnel
📍 Offices in Delhi & Noida
⏰ 24/7 Service Availability

We are committed to delivering excellence in security services with highly trained professionals who ensure the safety of your premises, people, and assets.`;

const officeInfo = `📍 **Head Office:**
A-62 (Ground Floor), G.D. Colony, Mayur Vihar Phase 3, East Delhi – 110096
📞 Phone: 011-42182246

📍 **Branch Office:**
Y-13/372, 3rd Floor, Sector-12, Noida, Gautam Buddha Nagar, UP – 201301

📧 **Email:**
• vms24x7@gmail.com
• info@valiantmanagementservices.com

⏰ **Working Hours:** 24/7 - We Never Close`;

const contactInfo = `📞 **Phone:** 011-42182246
📧 **Email:** vms24x7@gmail.com, info@valiantmanagementservices.com

📍 **Head Office:** A-62, G.D. Colony, Mayur Vihar Phase 3, East Delhi – 110096
📍 **Branch Office:** Y-13/372, Sector-12, Noida, UP – 201301

🌐 **Website:** www.valiantmanagementservices.com`;

type ActivePanel = 'none' | 'menu' | 'chat';

export function FloatingWidget() {
  const [activePanel, setActivePanel] = useState<ActivePanel>('none');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: ''
  });
  const [currentFormStep, setCurrentFormStep] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<string>('');
  const [showNotification, setShowNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for custom event to toggle chatbot from MobileBottomNav
  useEffect(() => {
    const handleToggleChatbot = () => {
      setActivePanel(prev => prev === 'chat' ? 'none' : 'chat');
      // Scroll to top if we are opening it, for better focus
      if (activePanel !== 'chat') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('toggle-chatbot', handleToggleChatbot);
    return () => window.removeEventListener('toggle-chatbot', handleToggleChatbot);
  }, [activePanel]);

  // Hide notification after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const togglePanel = (panel: ActivePanel) => {
    if (activePanel === panel) {
      setActivePanel('none');
    } else {
      setActivePanel(panel);
      setShowNotification(false);
    }
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{9,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateEmail = (email: string): boolean => {
    if (!email) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addBotMessage = (content: string, options?: string[], isForm?: boolean, formType?: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        content,
        options,
        isForm,
        formType: formType as Message['formType']
      }]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (content: string) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      content
    }]);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);

    setTimeout(() => {
      switch (option) {
        case 'About Company':
          addBotMessage(companyInfo, ['Our Services', 'Office Locations', 'Get a Quote', 'Back to Menu']);
          break;
        case 'Our Services':
          const servicesContent = `🛡️ **Our Security Services:**

1. **Security Guards** - Trained & verified guards for residential, commercial & industrial premises

2. **CCTV Surveillance** - Installation, monitoring & maintenance of security cameras

3. **Event Security** - Professional security for corporate events, weddings, concerts & exhibitions

4. **Personal Security** - PSO services for executives, VIPs & high-profile individuals

5. **Corporate Security** - Comprehensive security solutions for offices & commercial buildings

6. **Housekeeping Services** - Professional facility management & cleaning services

Which service would you like to know more about?`;
          addBotMessage(servicesContent, [...services, 'Get a Quote', 'Back to Menu']);
          break;
        case 'Office Locations':
          addBotMessage(officeInfo, ['Get Directions - Head Office', 'Get Directions - Noida Office', 'Contact Details', 'Back to Menu']);
          break;
        case 'Contact Details':
          addBotMessage(contactInfo, ['Call Now', 'Send Email', 'Get a Quote', 'Back to Menu']);
          break;
        case 'Get a Quote':
        case 'Request Callback':
          addBotMessage('Great! Let me collect a few details so our team can assist you better. 📝\n\nPlease enter your **Full Name**:', undefined, true, 'name');
          setCurrentFormStep('name');
          break;
        case 'Call Now':
          window.location.href = 'tel:011-42182246';
          addBotMessage('📞 Connecting you to our office... If the call doesn\'t connect automatically, please dial: 011-42182246', ['Back to Menu']);
          break;
        case 'Send Email':
          window.location.href = 'mailto:vms24x7@gmail.com';
          addBotMessage('📧 Opening your email app... You can also email us directly at vms24x7@gmail.com', ['Back to Menu']);
          break;
        case 'Get Directions - Head Office':
          window.open('https://www.google.com/maps/dir/?api=1&destination=Mayur+Vihar+Phase+3+East+Delhi+110096', '_blank');
          addBotMessage('🗺️ Opening Google Maps for Head Office directions...', ['Get Directions - Noida Office', 'Back to Menu']);
          break;
        case 'Get Directions - Noida Office':
          window.open('https://www.google.com/maps/dir/?api=1&destination=Sector+12+Noida+Uttar+Pradesh+201301', '_blank');
          addBotMessage('🗺️ Opening Google Maps for Noida Office directions...', ['Get Directions - Head Office', 'Back to Menu']);
          break;
        case 'Back to Menu':
          addBotMessage('How else can I help you today?', ['About Company', 'Our Services', 'Office Locations', 'Contact Details', 'Get a Quote']);
          break;
        case 'Security Guards':
        case 'CCTV Surveillance':
        case 'Event Security':
        case 'Personal Security':
        case 'Corporate Security':
        case 'Housekeeping Services':
          const serviceDetails: { [key: string]: string } = {
            'Security Guards': `🛡️ **Security Guards Service**

Our trained security guards provide comprehensive protection for:
• Residential complexes & apartments
• Commercial buildings & offices
• Industrial sites & factories
• Retail stores & malls
• Banks & ATMs

✅ PSARA Licensed Guards
✅ Background Verified
✅ Regular Training
✅ 24/7 Availability

Would you like to get a quote for this service?`,
            'CCTV Surveillance': `📹 **CCTV Surveillance Service**

Complete CCTV solutions including:
• HD & IP Camera Installation
• DVR/NVR Setup
• Remote Monitoring
• 24/7 Surveillance Center
• Annual Maintenance Contracts

We serve residential, commercial & industrial clients with state-of-the-art surveillance technology.

Would you like to get a quote for this service?`,
            'Event Security': `🎪 **Event Security Service**

Professional security for all types of events:
• Corporate conferences & seminars
• Weddings & private parties
• Concerts & exhibitions
• Sports events
• Political gatherings

✅ Crowd Management
✅ Access Control
✅ VIP Protection
✅ Emergency Response

Would you like to get a quote for this service?`,
            'Personal Security': `👤 **Personal Security Service**

Close protection services for:
• Business executives
• Politicians & VIPs
• Celebrities
• High-net-worth individuals
• Foreign dignitaries

Our PSOs are ex-military/paramilitary trained with expertise in threat assessment and defensive tactics.

Would you like to get a quote for this service?`,
            'Corporate Security': `🏢 **Corporate Security Service**

Comprehensive security for businesses:
• Access Control Systems
• Visitor Management
• Employee Verification
• Security Audits
• Crisis Management

We protect 500+ corporate sites across Delhi NCR.

Would you like to get a quote for this service?`,
            'Housekeeping Services': `🧹 **Housekeeping Services**

Professional facility management:
• Office Cleaning
• Floor Maintenance
• Washroom Hygiene
• Pantry Services
• Waste Management

Eco-friendly solutions with trained housekeeping staff.

Would you like to get a quote for this service?`
          };
          addBotMessage(serviceDetails[option] || 'Service details coming soon...', ['Get a Quote', 'Other Services', 'Back to Menu']);
          break;
        case 'Other Services':
          addBotMessage('Which service would you like to know about?', [...services, 'Back to Menu']);
          break;
        default:
          addBotMessage('I\'m not sure I understand. How can I help you?', ['About Company', 'Our Services', 'Office Locations', 'Contact Details', 'Get a Quote']);
      }
    }, 300);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const value = inputValue.trim();
    setInputValue('');
    setFormErrors('');
    addUserMessage(value);

    setTimeout(() => {
      switch (currentFormStep) {
        case 'name':
          if (value.length < 2) {
            setFormErrors('Please enter a valid name');
            addBotMessage('⚠️ Please enter a valid name (at least 2 characters):', undefined, true, 'name');
            return;
          }
          setUserData(prev => ({ ...prev, name: value }));
          addBotMessage(`Thanks ${value}! 👍\n\nNow please enter your **Phone Number** (required):`, undefined, true, 'phone');
          setCurrentFormStep('phone');
          break;
        case 'phone':
          if (!validatePhone(value)) {
            setFormErrors('Please enter a valid phone number');
            addBotMessage('⚠️ Please enter a valid phone number (10+ digits):', undefined, true, 'phone');
            return;
          }
          setUserData(prev => ({ ...prev, phone: value }));
          addBotMessage('Great! 📱\n\nPlease enter your **Email Address** (optional - press Enter to skip):', undefined, true, 'email');
          setCurrentFormStep('email');
          break;
        case 'email':
          if (value && !validateEmail(value)) {
            setFormErrors('Please enter a valid email');
            addBotMessage('⚠️ Please enter a valid email address (or press Enter to skip):', undefined, true, 'email');
            return;
          }
          setUserData(prev => ({ ...prev, email: value || 'Not provided' }));
          addBotMessage('Which **service** are you interested in?', services, true, 'service');
          setCurrentFormStep('service');
          break;
        case 'location':
          setUserData(prev => ({ ...prev, location: value || 'Not provided' }));
          completeForm({ ...userData, location: value || 'Not provided' });
          break;
      }
    }, 300);
  };

  const handleServiceSelect = (service: string) => {
    if (currentFormStep === 'service') {
      addUserMessage(service);
      setUserData(prev => ({ ...prev, service }));
      setTimeout(() => {
        addBotMessage('Almost done! 📍\n\nPlease enter your **Location/City** (optional - press Enter to skip):', undefined, true, 'location');
        setCurrentFormStep('location');
      }, 300);
    } else {
      handleOptionClick(service);
    }
  };

  const completeForm = (finalData: UserData) => {
    setCurrentFormStep(null);

    const summary = `✅ **Thank You, ${finalData.name}!**

Your details have been received:
📱 Phone: ${finalData.phone}
📧 Email: ${finalData.email}
🛡️ Service: ${finalData.service}
📍 Location: ${finalData.location}

Our team will call you shortly to assist you further. You can also reach us directly at:

📞 **011-42182246**

Is there anything else I can help you with?`;

    addBotMessage(summary, ['Call Now', 'Our Services', 'Office Locations', 'Back to Menu']);

    setUserData({
      name: '',
      phone: '',
      email: '',
      service: '',
      location: ''
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (currentFormStep === 'email' || currentFormStep === 'location') {
        handleFormSubmit(e as unknown as React.FormEvent);
      } else if (inputValue.trim()) {
        handleFormSubmit(e as unknown as React.FormEvent);
      }
    }
  };

  const resetChat = () => {
    setMessages(initialMessages);
    setCurrentFormStep(null);
    setUserData({ name: '', phone: '', email: '', service: '', location: '' });
    setInputValue('');
    setFormErrors('');
  };

  return (
    <>
      {/* Main Floating Widget Container */}
      {/* Main Floating Widget Container - Adjusted bottom for mobile bottom nav, GLOBAL HIDE ON MOBILE when closed */}
      <div className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-[90] flex flex-col items-end gap-3 px-2 sm:px-0 ${activePanel === 'none' ? 'hidden sm:flex' : 'flex'}`}>

        {/* Scroll to Top Button - Only visible when scrolled, HIDDEN ON MOBILE */}
        {showScrollTop && activePanel === 'none' && (
          <button
            onClick={scrollToTop}
            className="hidden sm:flex w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full shadow-lg items-center justify-center text-white transition-all duration-300 hover:scale-110 animate-fade-in"
            title="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

        {/* Quick Actions Menu */}
        {activePanel === 'menu' && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 mb-2 animate-slide-up w-72">
            <div className="space-y-3">
              {/* Phone Call */}
              <a
                href="tel:+919873636552"
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-white transition-all duration-200 hover:shadow-lg group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Call Us Now</p>
                  <p className="text-xs text-white/80">+91 9873636552</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+919873636552?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20assist%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] rounded-xl text-white transition-all duration-200 hover:shadow-lg group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">WhatsApp Chat</p>
                  <p className="text-xs text-white/80">Quick Response</p>
                </div>
              </a>

              {/* Chat with Bot */}
              <button
                onClick={() => setActivePanel('chat')}
                className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary rounded-xl text-white transition-all duration-200 hover:shadow-lg group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">Chat with Us</p>
                  <p className="text-xs text-white/80">24/7 Support Available</p>
                </div>
              </button>

              {/* Office Phone */}
              <a
                href="tel:011-42182246"
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary rounded-xl text-white transition-all duration-200 hover:shadow-lg group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Office Landline</p>
                  <p className="text-xs text-white/80">011-42182246</p>
                </div>
              </a>
            </div>
          </div>
        )}

        {/* Chatbot Window - Adjusted bottom for mobile bottom nav */}
        {activePanel === 'chat' && (
          <div className="fixed inset-x-0 bottom-16 sm:inset-auto sm:bottom-24 sm:right-6 w-full sm:w-96 h-[85vh] sm:h-[600px] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up z-[70]">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-4 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm sm:text-base">Valiant Security Assistant</h3>
                <p className="text-white/80 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online | 24/7 Support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetChat}
                  className="text-white/70 hover:text-white p-2 transition-colors rounded-full hover:bg-white/10"
                  title="Reset Chat"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={() => setActivePanel('none')}
                  className="text-white/70 hover:text-white p-2 transition-colors rounded-full hover:bg-white/10 sm:hidden"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${message.type === 'user'
                      ? 'bg-secondary text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                      }`}
                  >
                    <p className="text-sm sm:text-base whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                    {message.options && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              if (currentFormStep === 'service' && services.includes(option)) {
                                handleServiceSelect(option);
                              } else {
                                handleOptionClick(option);
                              }
                            }}
                            className="bg-gray-100 hover:bg-secondary hover:text-white text-gray-700 text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 border border-gray-200 hover:border-secondary active:scale-95"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-none p-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input Area */}
            {currentFormStep && (
              <form onSubmit={handleFormSubmit} className="p-4 border-t border-gray-200 bg-white pb-safe">
                {formErrors && (
                  <p className="text-red-500 text-xs mb-2 px-2">{formErrors}</p>
                )}
                <div className="flex gap-2">
                  <input
                    type={currentFormStep === 'email' ? 'email' : currentFormStep === 'phone' ? 'tel' : 'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      currentFormStep === 'name' ? 'Enter your name...' :
                        currentFormStep === 'phone' ? 'Enter phone number...' :
                          currentFormStep === 'email' ? 'Enter email (optional)...' :
                            currentFormStep === 'location' ? 'Enter city/location...' :
                              'Type a message...'
                    }
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm sm:text-base bg-gray-50"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="w-12 h-12 bg-secondary hover:bg-accent rounded-full flex items-center justify-center text-white transition-all active:scale-90 shadow-lg shadow-secondary/20"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                {(currentFormStep === 'email' || currentFormStep === 'location') && (
                  <p className="text-[10px] text-gray-400 mt-2 text-center uppercase tracking-wider font-medium">Press Enter to skip</p>
                )}
              </form>
            )}

            {/* Quick Actions */}
            {!currentFormStep && (
              <div className="p-4 border-t border-gray-200 bg-white grid grid-cols-3 gap-2 pb-safe">
                <a
                  href="tel:+919873636552"
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase">Call</span>
                </a>
                <a
                  href="https://wa.me/+919873636552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase">WhatsApp</span>
                </a>
                <button
                  onClick={() => handleOptionClick('Get a Quote')}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase">Quote</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Notification Bubble - HIDDEN ON MOBILE */}
        {showNotification && activePanel === 'none' && (
          <div className="hidden sm:block bg-white rounded-xl shadow-xl p-3 max-w-[220px] animate-bounce-slow mb-2 relative">
            <p className="text-sm text-gray-700 font-medium">👋 Need help? We're here 24/7!</p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
          </div>
        )}

        {/* Main Toggle Button - HIDDEN ON MOBILE because of Bottom Nav Support Trigger */}
        <button
          onClick={() => togglePanel(activePanel === 'none' ? 'menu' : 'none')}
          className={`hidden sm:flex w-16 h-16 rounded-full shadow-2xl items-center justify-center transition-all duration-300 ${activePanel !== 'none'
            ? 'bg-gray-700 hover:bg-gray-800 rotate-0'
            : 'bg-gradient-to-r from-secondary to-accent hover:shadow-secondary/50'
            }`}
          aria-label={activePanel !== 'none' ? 'Close menu' : 'Open help menu'}
        >
          {activePanel !== 'none' ? (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative">
              {/* Shield Icon with Chat Bubble */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {/* Notification dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></span>
            </div>
          )}
        </button>
      </div>
    </>
  );
}

export default FloatingWidget;
