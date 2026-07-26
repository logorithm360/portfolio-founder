import { useState, type FormEvent } from 'react';
import { Mail, Globe, CheckCircle, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ContactForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmitContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'All fields are required!' });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! Thank you for getting in touch.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errData = await response.json().catch(() => ({}));
        setFormStatus({
          type: 'error',
          message: errData.detail || 'An error occurred while submitting. Please try again.',
        });
      }
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Failed to connect to backend server. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Let's{' '}
              <span className="bg-gradient-to-r from-[#06C853] to-[#E74A10] bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you have a specific systems development contract, high-concurrency architecture requests, or just want to discuss an
              exciting project concept—don't hesitate to reach out! I am highly responsive and ready to connect.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail size={18} className="text-[#06C853]" />
                <span>alex@example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Globe size={18} className="text-[#06C853]" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${
              theme === 'dark' ? 'bg-[#0D0704] border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <h4 className="font-bold text-sm mb-1">FastAPI Backend Message Dispatch</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Form submissions dynamically transmit data directly through our FastAPI backend API, showcasing proper database integration capabilities.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmitContact}
              className={`p-8 rounded-2xl border space-y-6 ${
                theme === 'dark' ? 'bg-slate-900/20 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              {formStatus.type && (
                <div className={`p-4 rounded-xl text-sm flex items-start space-x-2 ${
                  formStatus.type === 'success'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  <CheckCircle size={18} className="shrink-0 mt-0.5" />
                  <span>{formStatus.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-[#06C853]'
                        : 'bg-slate-50 border-slate-200 text-[#0D0704] focus:border-[#E74A10]'
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-[#06C853]'
                        : 'bg-slate-50 border-slate-200 text-[#0D0704] focus:border-[#E74A10]'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Your Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Alex! We would love to collaborate with you on..."
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-[#06C853]'
                      : 'bg-slate-50 border-slate-200 text-[#0D0704] focus:border-[#E74A10]'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#06C853] to-[#E74A10] hover:opacity-90 text-[#0D0704] font-bold py-3.5 rounded-xl transition-all shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Secure Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
