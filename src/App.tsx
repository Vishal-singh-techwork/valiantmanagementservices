import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

// Lazy load components for performance
const Hero = lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const FloatingWidget = lazy(() => import('./components/FloatingWidget').then(m => ({ default: m.FloatingWidget })));

// Pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Careers = lazy(() => import('./pages/Careers'));
const Gallery = lazy(() => import('./pages/Gallery'));

// Service Pages
const SecurityGuards = lazy(() => import('./pages/services/SecurityGuards'));
const CCTVSurveillance = lazy(() => import('./pages/services/CCTVSurveillance'));
const EventSecurity = lazy(() => import('./pages/services/EventSecurity'));
const PersonalSecurity = lazy(() => import('./pages/services/PersonalSecurity'));
const CorporateSecurity = lazy(() => import('./pages/services/CorporateSecurity'));
const Housekeeping = lazy(() => import('./pages/services/Housekeeping'));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Wrapper to trigger fade-in animation on route change
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-fade-in">
      {children}
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
};

// Page Headers Layout
const PageLayout = ({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) => (
  <div className="pt-24 lg:pt-28">
    <section className="bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-200">{subtitle}</p>
        </div>
      </div>
    </section>
    {children}
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Suspense fallback={null}>
          <FloatingWidget />
        </Suspense>

        <main>
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<PageLayout title="About Us" subtitle="India's Trusted Security Partner Since 2010"><About /><WhyChooseUs /></PageLayout>} />
                <Route path="/services" element={<PageLayout title="Our Services" subtitle="Comprehensive Security Solutions for Every Need"><Services /><CTA /></PageLayout>} />
                <Route path="/contact" element={<PageLayout title="Contact Us" subtitle="Get in touch with our security experts"><Contact /></PageLayout>} />

                {/* Footer Pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/gallery" element={<Gallery />} />

                {/* Service Pages */}
                <Route path="/services/security-guards" element={<SecurityGuards />} />
                <Route path="/services/cctv-surveillance" element={<CCTVSurveillance />} />
                <Route path="/services/event-security" element={<EventSecurity />} />
                <Route path="/services/personal-security" element={<PersonalSecurity />} />
                <Route path="/services/corporate-security" element={<CorporateSecurity />} />
                <Route path="/services/housekeeping" element={<Housekeeping />} />
              </Routes>
            </PageWrapper>
          </Suspense>
        </main>

        <div className="pb-16 lg:pb-0">
          <Footer />
        </div>
        <MobileBottomNav />
      </div>
    </Router>
  );
}

export default App;
