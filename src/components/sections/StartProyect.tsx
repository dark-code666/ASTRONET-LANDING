import { Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function StartProyect() {
  const recipientEmail = 'Info@astronet.dev';

  const [formData, setFormData] = useState({
    'First Name': '',
    'Last Name': '',
    'Email': '',
    'Business Name': '',
    'Message': '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init('Fg5TjazHY_PDg6qHv');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      await emailjs.send('service_pmjdr7o', 'template_m96gwmb', {
        to_email: recipientEmail,
        reply_to: formData.Email,
        from_name: `${formData['First Name']} ${formData['Last Name']}`,
        from_email: formData.Email,
        business_name: formData['Business Name'],
        message: formData.Message,
        first_name: formData['First Name'],
        last_name: formData['Last Name'],
        subject: `New enquiry from ${formData['Business Name'] || 'website'}`,
      });

      setMessage('Email sent successfully! We\'ll be in touch soon.');
      setFormData({
        'First Name': '',
        'Last Name': '',
        'Email': '',
        'Business Name': '',
        'Message': '',
      });
    } catch (err) {
      setError('Error sending email. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-[#050505] py-40 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center border-b border-zinc-100 dark:border-white/5">


      {/* CONTENEDOR DEL COHETE ANIMADO */}
      <div className="mb-12 relative flex items-center justify-center">
        {/*Cohete Principal con animación */}
        <div className="animate-bounce-slow">
          <Rocket size={56} className="text-zinc-950 dark:text-white rotate-[-45deg]" strokeWidth={1} />
        </div>

        {/* Puntos/Estrellas Decorativos*/}
        <div className="absolute top-0 right-[-20px] w-1.5 h-1.5 bg-zinc-300 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-[-10px] left-[-15px] w-1 h-1 bg-zinc-200 rounded-full animate-pulse"></div>

        {/* Estela de Propulsión */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-pulse delay-75"></div>
          <div className="w-1.5 h-1.5 bg-zinc-200 rounded-full animate-pulse delay-100"></div>
        </div>
      </div>


      {/*TEXTO PRINCIPAL*/}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-zinc-950 dark:text-white text-5xl md:text-7xl font-serif mb-8 leading-tight tracking-[-0.03em]">
          Start Your Project With Astronet
        </h1>
        <p className="text-zinc-500 dark:text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Whether you need a scalable SaaS platform, AI-powered systems, or dedicated offshore teams, Astronet helps you execute faster with reliable product-focused expertise.
        </p>
      </div>

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white">First Name</label>
          <input
            type="text"
            name="First Name"
            value={formData['First Name']}
            onChange={handleChange}
            required
            className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Last Name</label>
          <input
            type="text"
            name="Last Name"
            value={formData['Last Name']}
            onChange={handleChange}
            required
            className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Email</label>
          <input
            type="email"
            name="Email"
            value={formData['Email']}
            onChange={handleChange}
            required
            className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Business Name</label>
          <input
            type="text"
            name="Business Name"
            value={formData['Business Name']}
            onChange={handleChange}
            required
            className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Message</label>
          <textarea
            rows={5}
            name="Message"
            value={formData['Message']}
            onChange={handleChange}
            required
            className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors resize-none dark:bg-white/5 dark:border-white/10 dark:text-white"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-[#1a2b2b] dark:bg-[#A3FF00] text-white dark:text-zinc-950 py-5 rounded-md font-black text-xs uppercase tracking-[0.2em] hover:bg-[#253d3d] dark:hover:bg-[#b4ff33] transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Submit Enquiry'}
        </button>

        {message && (
          <div className="md:col-span-2 p-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md text-sm">
            {message}
          </div>
        )}

        {error && (
          <div className="md:col-span-2 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md text-sm">
            {error}
          </div>
        )}

        <p className="md:col-span-2 text-center text-zinc-400 dark:text-zinc-400 text-[10px] mt-4">
          Please note, by submitting this form, you are agreeing to the <br />
          terms in the <span className="text-zinc-900 dark:text-white underline cursor-pointer">Astronet Privacy Policy</span>.
        </p>
      </form>
    </section>
  );
}
