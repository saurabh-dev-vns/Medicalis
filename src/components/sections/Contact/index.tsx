import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export default function Contact() {
  return (
    <section id='contact' className="px-6 py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our services? We're here to help. Contact us through any of the following methods.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}