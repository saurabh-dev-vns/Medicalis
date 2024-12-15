import { Search, Calendar, Video, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Step } from './Step';

const steps = [
  {
    icon: Search,
    title: "Find Your Doctor",
    description: "Search and filter through our network of qualified healthcare professionals"
  },
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Select a convenient time slot and schedule your consultation"
  },
  {
    icon: Video,
    title: "Virtual Consultation",
    description: "Connect with your doctor through our secure video platform"
  },
  {
    icon: CheckCircle,
    title: "Get Treatment",
    description: "Receive personalized treatment plans and prescriptions"
  }
];

export default function HowItWorks() {
  return (
    <section id='how-it-works' className="px-6 py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          How Medicalis Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get started with Medicalis in just a few simple steps. Our streamlined process ensures you get the care you need, when you need it.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <Step key={index} {...step} step={index} />
        ))}
      </div>
    </section>
  );
}