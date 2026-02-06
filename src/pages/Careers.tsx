import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Users, CheckCircle, Send, Shield, Award, Heart, TrendingUp } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Security Guard",
    location: "Multiple Locations (Delhi NCR)",
    type: "Full-time",
    experience: "0-2 years",
    description: "We are looking for dedicated and vigilant Security Guards to protect our clients' premises. You will be responsible for monitoring surveillance systems, patrolling premises, and ensuring the safety of people and property.",
    requirements: [
      "Minimum 10th pass (12th preferred)",
      "Age between 21-45 years",
      "Physical fitness and good health",
      "Basic communication skills in Hindi/English",
      "Clean background with no criminal record",
      "Ex-servicemen preferred but not mandatory"
    ]
  },
  {
    id: 2,
    title: "Security Supervisor",
    location: "Delhi, Gurugram, Noida",
    type: "Full-time",
    experience: "3-5 years",
    description: "Seeking experienced Security Supervisors to lead and manage security teams at client sites. You will oversee daily security operations, handle shift scheduling, conduct training, and ensure compliance with security protocols.",
    requirements: [
      "Minimum 12th pass (Graduate preferred)",
      "3+ years of experience in security industry",
      "Leadership and team management skills",
      "Good communication in Hindi and English",
      "Computer literacy for report writing",
      "Valid security certification preferred"
    ]
  },
  {
    id: 3,
    title: "CCTV Operator",
    location: "Delhi NCR",
    type: "Full-time / Shift-based",
    experience: "1-3 years",
    description: "Looking for alert and technically skilled CCTV Operators to monitor surveillance systems and respond to security incidents. You will operate CCTV equipment, maintain logs, and coordinate with on-ground security personnel.",
    requirements: [
      "Minimum 12th pass",
      "Experience with CCTV monitoring systems",
      "Basic computer knowledge",
      "Attention to detail and alertness",
      "Ability to work in rotational shifts",
      "Good observation and reporting skills"
    ]
  },
  {
    id: 4,
    title: "Personal Security Officer (PSO)",
    location: "Pan India",
    type: "Full-time",
    experience: "5+ years",
    description: "Seeking highly trained Personal Security Officers for executive protection assignments. You will provide close protection to VIPs, assess threats, plan secure travel routes, and ensure client safety at all times.",
    requirements: [
      "Ex-military/paramilitary/police background preferred",
      "Minimum 5 years of security experience",
      "Valid driving license",
      "First aid and defensive training certification",
      "Excellent physical fitness",
      "Willingness to travel extensively"
    ]
  },
  {
    id: 5,
    title: "Security Manager",
    location: "Delhi (Head Office)",
    type: "Full-time",
    experience: "8-10 years",
    description: "Senior position for an experienced Security Manager to oversee operations across multiple client sites. You will develop security strategies, manage client relationships, handle crisis situations, and lead a team of supervisors.",
    requirements: [
      "Graduate (MBA preferred)",
      "8+ years in security industry with 3+ years in management",
      "Strong leadership and client management skills",
      "Knowledge of security regulations and compliance",
      "Excellent communication and presentation skills",
      "Proficiency in MS Office and security management software"
    ]
  },
  {
    id: 6,
    title: "Housekeeping Staff",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "0-2 years",
    description: "Hiring Housekeeping Staff for facility management services at corporate offices, residential complexes, and commercial establishments. You will maintain cleanliness and hygiene standards across assigned areas.",
    requirements: [
      "Minimum 8th pass",
      "Prior housekeeping experience preferred",
      "Knowledge of cleaning equipment and chemicals",
      "Physical fitness for manual work",
      "Honest and reliable character",
      "Willingness to work in shifts"
    ]
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Job Security",
    description: "Stable employment with long-term career growth opportunities in a growing industry"
  },
  {
    icon: Award,
    title: "Training & Development",
    description: "Regular training programs, skill development, and certification opportunities"
  },
  {
    icon: Heart,
    title: "Employee Benefits",
    description: "ESI, PF, insurance coverage, and other statutory benefits for all employees"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear promotion pathways from Guard to Supervisor to Manager positions"
  }
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  experience?: string;
  resume?: string;
}

const Careers: React.FC = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{9,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateResume = (file: File | null): string | undefined => {
    if (!file) return 'Resume is required';
    
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a PDF, DOC, or DOCX file';
    }
    
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return 'File size must be less than 5MB';
    }
    
    return undefined;
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.position) {
      errors.position = 'Please select a position';
    }

    if (!formData.experience) {
      errors.experience = 'Please select your experience';
    }

    const resumeError = validateResume(resumeFile);
    if (resumeError) {
      errors.resume = resumeError;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    
    // Clear error if valid file
    if (file) {
      const error = validateResume(file);
      if (error) {
        setFormErrors(prev => ({ ...prev, resume: error }));
      } else {
        setFormErrors(prev => ({ ...prev, resume: undefined }));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Prevent multiple clicks
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Store application data in sessionStorage for reference (optional)
    sessionStorage.setItem('applicationData', JSON.stringify({
      name: formData.name,
      position: formData.position,
      email: formData.email,
      phone: formData.phone,
      resumeName: resumeFile?.name,
      submittedAt: new Date().toISOString()
    }));
    
    // Redirect to contact page with query parameter
    navigate('/contact?source=application&position=' + encodeURIComponent(formData.position));
  };

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Team" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">Build a rewarding career with India's trusted security services company. We're always looking for dedicated professionals to join our growing team.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
              <span>Home</span>
              <span>/</span>
              <span className="text-secondary">Careers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Why Join Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Benefits of Working at Valiant</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider">Opportunities</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Current Job Openings</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Explore our current vacancies and find the perfect role for your skills and experience</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className={`bg-white rounded-xl p-6 border-2 transition-all cursor-pointer ${
                  selectedJob?.id === job.id 
                    ? 'border-secondary shadow-xl' 
                    : 'border-gray-100 hover:border-secondary/50 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Briefcase className="w-4 h-4" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                <button 
                  className="mt-4 text-secondary font-semibold hover:text-secondary-dark flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedJob(job);
                  }}
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Selected Job Details */}
          {selectedJob && (
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">{selectedJob.title}</h3>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-secondary" />
                  {selectedJob.location}
                </span>
                <span className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4 text-secondary" />
                  {selectedJob.type}
                </span>
                <span className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700">
                  <Briefcase className="w-4 h-4 text-secondary" />
                  {selectedJob.experience}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{selectedJob.description}</p>
              <h4 className="font-bold text-primary mb-3">Requirements:</h4>
              <ul className="space-y-2">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold uppercase tracking-wider">Apply Now</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">Submit Your Application</h2>
              <p className="text-gray-600 mt-4">Fill out the form below and our HR team will get back to you within 48 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                    } focus:ring-2 focus:border-transparent outline-none transition-all`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                    } focus:ring-2 focus:border-transparent outline-none transition-all`}
                    placeholder="Enter your email"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                    } focus:ring-2 focus:border-transparent outline-none transition-all`}
                    placeholder="Enter your phone number"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Position Applying For *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.position ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                    } focus:ring-2 focus:border-transparent outline-none transition-all`}
                  >
                    <option value="">Select Position</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                  {formErrors.position && <p className="text-red-500 text-sm mt-1">{formErrors.position}</p>}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Years of Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.experience ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary'
                  } focus:ring-2 focus:border-transparent outline-none transition-all`}
                >
                  <option value="">Select Experience</option>
                  <option value="fresher">Fresher (No Experience)</option>
                  <option value="1-2">1-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5-10">5-10 Years</option>
                  <option value="10+">10+ Years</option>
                </select>
                {formErrors.experience && <p className="text-red-500 text-sm mt-1">{formErrors.experience}</p>}
              </div>

              {/* Resume Upload */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Upload Resume * <span className="text-gray-400 font-normal">(PDF, DOC, DOCX - Max 5MB)</span></label>
                <div className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                  formErrors.resume ? 'border-red-500 bg-red-50' : resumeFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-secondary'
                }`}>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleResumeChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {resumeFile ? (
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-green-700 font-medium">{resumeFile.name}</p>
                        <p className="text-green-600 text-sm">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                        }}
                        className="ml-2 text-gray-500 hover:text-red-500"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-gray-400 text-sm">PDF, DOC, DOCX (Max 5MB)</p>
                    </>
                  )}
                </div>
                {formErrors.resume && <p className="text-red-500 text-sm mt-1">{formErrors.resume}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Cover Letter <span className="text-gray-400 font-normal">(Optional)</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Brief description of your background, skills, and why you want to join Valiant..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                Or send your resume directly to: <a href="mailto:vms24x7@gmail.com" className="text-secondary hover:underline">vms24x7@gmail.com</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
