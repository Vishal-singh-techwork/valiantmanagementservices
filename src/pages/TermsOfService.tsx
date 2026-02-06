import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Clock } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-200">Please read these terms carefully before using our services</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <span>Home</span>
              <span>/</span>
              <span className="text-secondary">Terms of Service</span>
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
              <span className="text-gray-600">Effective Date: January 2025</span>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Welcome to Valiant Management Services Pvt. Ltd. These Terms of Service ("Terms") govern your use of our security services, website, and all related services provided by Valiant Management Services Pvt. Ltd. ("Company," "we," "our," or "us"). By engaging our services or accessing our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>

              {/* Section 1 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">1. Services Overview</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">Valiant Management Services provides comprehensive security solutions including but not limited to:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Manned guarding services (security guards, supervisors, officers)</li>
                    <li>CCTV surveillance installation, monitoring, and maintenance</li>
                    <li>Event security and crowd management</li>
                    <li>Personal security and executive protection</li>
                    <li>Corporate and industrial security solutions</li>
                    <li>Housekeeping and facility management services</li>
                    <li>Access control and visitor management systems</li>
                    <li>Security consulting and risk assessment</li>
                  </ul>
                  <p className="text-gray-600 mt-4">The specific services, scope, and terms will be defined in individual service agreements or contracts entered into between the Company and the Client.</p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">2. Client Responsibilities</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">As a client of Valiant Management Services, you agree to:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide accurate and complete information required for service delivery</li>
                    <li>Ensure safe working conditions for our security personnel at your premises</li>
                    <li>Provide necessary facilities such as guard rooms, restrooms, and break areas as applicable</li>
                    <li>Cooperate with our security protocols and recommendations</li>
                    <li>Make timely payments as per the agreed payment terms</li>
                    <li>Notify us immediately of any security incidents or concerns</li>
                    <li>Not engage our personnel in activities outside the scope of the service agreement</li>
                    <li>Comply with all applicable laws and regulations related to security services</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">3. Service Agreements and Contracts</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">All security services are governed by individual service agreements that specify:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Scope of services and deliverables</li>
                    <li>Service locations and deployment details</li>
                    <li>Number of personnel and shift schedules</li>
                    <li>Pricing, payment terms, and billing cycles</li>
                    <li>Contract duration and renewal terms</li>
                    <li>Termination clauses and notice periods</li>
                    <li>Service level agreements (SLAs) and performance metrics</li>
                  </ul>
                  <p className="text-gray-600 mt-4">In case of any conflict between these Terms and a specific service agreement, the terms of the service agreement shall prevail.</p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">4. Payment Terms</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Payment terms will be specified in the service agreement (typically monthly billing)</li>
                    <li>Invoices are payable within 15-30 days of invoice date unless otherwise agreed</li>
                    <li>Late payments may attract interest charges as specified in the agreement</li>
                    <li>We reserve the right to suspend services for overdue payments exceeding 30 days</li>
                    <li>All prices are subject to applicable taxes (GST) as per government regulations</li>
                    <li>Annual rate revisions may apply based on minimum wage changes and inflation</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">5. Limitation of Liability</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">While we strive to provide the highest quality security services:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Our liability is limited to the fees paid for services during the period in which the incident occurred</li>
                    <li>We are not liable for losses caused by circumstances beyond our reasonable control (force majeure)</li>
                    <li>We do not guarantee prevention of all security incidents but commit to due diligence and professional response</li>
                    <li>Clients are advised to maintain appropriate insurance coverage for their assets and premises</li>
                    <li>We are not liable for indirect, consequential, or punitive damages</li>
                  </ul>
                  <p className="text-gray-600 mt-4">We maintain comprehensive liability insurance and will work with clients to address any valid claims arising from our negligence.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary m-0">6. Termination</h2>
                </div>
                <div className="pl-15 space-y-4">
                  <p className="text-gray-600">Either party may terminate the service agreement:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>With written notice as specified in the agreement (typically 30-90 days)</li>
                    <li>Immediately in case of material breach by the other party</li>
                    <li>Immediately if the other party becomes insolvent or enters bankruptcy</li>
                  </ul>
                  <p className="text-gray-600 mt-4">Upon termination:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>All outstanding payments become immediately due</li>
                    <li>We will remove our personnel and equipment from client premises</li>
                    <li>Confidential information must be returned or destroyed by both parties</li>
                    <li>Provisions regarding confidentiality and liability survive termination</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">7. Confidentiality</h2>
                <p className="text-gray-600">Both parties agree to maintain the confidentiality of proprietary information shared during the course of the service relationship. This includes business information, security protocols, client data, and operational details. This obligation continues even after termination of services.</p>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">8. Non-Solicitation</h2>
                <p className="text-gray-600">During the term of service and for a period of 12 months after termination, the Client agrees not to directly hire or solicit for employment any security personnel deployed by us at the Client's premises without prior written consent.</p>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">9. Intellectual Property</h2>
                <p className="text-gray-600">All intellectual property, including but not limited to security protocols, training materials, software, and operational procedures developed by Valiant Management Services remain our exclusive property. Clients are granted a limited license to use such materials only during the service period and only for the purposes of receiving our services.</p>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">10. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-600">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or our services shall be resolved through:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Good faith negotiations between the parties</li>
                  <li>Mediation by a mutually agreed mediator if negotiations fail</li>
                  <li>Arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in New Delhi</li>
                </ul>
              </div>

              {/* Section 11 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">11. Amendments</h2>
                <p className="text-gray-600">We reserve the right to modify these Terms at any time. Material changes will be communicated to clients with reasonable notice. Continued use of our services after such modifications constitutes acceptance of the updated Terms.</p>
              </div>

              {/* Section 12 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">12. Severability</h2>
                <p className="text-gray-600">If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
              </div>

              {/* Contact Section */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">For any questions regarding these Terms of Service, please contact us:</p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Valiant Management Services Pvt. Ltd.</strong></p>
                  <p>Email: legal@valiantmanagementservices.com</p>
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

export default TermsOfService;
