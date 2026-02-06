import React from 'react';
import { Shield, Lock, Eye, FileText, Users, Bell } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-200">Your privacy is important to us</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <span>Home</span>
              <span>/</span>
              <span className="text-secondary">Privacy Policy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <div className="bg-gray-50 rounded-lg p-4 mb-8 flex items-center gap-3">
              <FileText className="w-5 h-5 text-secondary" />
              <span className="text-gray-600">Last Updated: January 2025</span>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Valiant Management Services Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our security services. Please read this privacy policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this privacy policy.
              </p>

              {/* Section 1 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">1. Information We Collect</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">We may collect information about you in various ways, including:</p>
                  
                  <h3 className="text-xl font-semibold text-primary mt-6">Personal Data</h3>
                  <p className="text-gray-600">When you engage our security services, apply for employment, or contact us, we may collect personally identifiable information such as:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Full name and contact details (phone number, email address, postal address)</li>
                    <li>Government-issued identification documents for security personnel verification</li>
                    <li>Employment history and background check information</li>
                    <li>Payment and billing information for service contracts</li>
                    <li>CCTV footage and surveillance data collected at client premises</li>
                    <li>Access control logs and visitor records</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mt-6">Automatically Collected Data</h3>
                  <p className="text-gray-600">When you visit our website, we automatically collect certain information including:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">2. How We Use Your Information</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">We use the information we collect for various purposes, including:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Providing, maintaining, and improving our security services</li>
                    <li>Processing service requests and managing client accounts</li>
                    <li>Conducting background verification for security personnel</li>
                    <li>Communicating with you about services, updates, and promotional offers</li>
                    <li>Ensuring the safety and security of our clients' premises</li>
                    <li>Complying with legal obligations and regulatory requirements</li>
                    <li>Investigating and preventing fraudulent or illegal activities</li>
                    <li>Training and quality assurance purposes</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">3. Information Sharing and Disclosure</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations (background verification agencies, IT service providers)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulations</li>
                    <li><strong>Client Reporting:</strong> Incident reports and surveillance data shared with contracted clients</li>
                    <li><strong>Law Enforcement:</strong> When necessary to protect public safety or assist in criminal investigations</li>
                    <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">4. Data Security</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Encrypted data transmission using SSL/TLS protocols</li>
                    <li>Secure storage systems with access controls</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee training on data protection practices</li>
                    <li>Physical security measures at our offices and data centers</li>
                  </ul>
                  <p className="text-gray-600 mt-4">While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.</p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Bell className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">5. Your Rights</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">You have certain rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Access:</strong> Request access to the personal data we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
                    <li><strong>Objection:</strong> Object to processing of your data for marketing purposes</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  </ul>
                  <p className="text-gray-600 mt-4">To exercise any of these rights, please contact us using the details provided below.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600">Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse all or some cookies, or to alert you when websites set or access cookies. If you disable cookies, some parts of our website may become inaccessible or not function properly.</p>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">7. Data Retention</h2>
                <p className="text-gray-600">We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. CCTV footage is typically retained for 30-90 days unless required longer for investigation purposes. Employment records are retained as per applicable labor laws.</p>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-600">We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>
              </div>

              {/* Contact Section */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Valiant Management Services Pvt. Ltd.</strong></p>
                  <p>Email: info@valiantmanagementservices.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Address: Corporate Office, New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
