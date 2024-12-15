import { Calendar, Video, Pill } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export default function Services() {
  const services = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Make Appointment",
      description: "Schedule a visit with the doctor of your choice"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Virtual Consultation",
      description: "Connect with doctors through video calls"
    },
    {
      icon: <Pill className="w-8 h-8 text-blue-600" />,
      title: "Online Pharmacy",
      description: "Get prescriptions and medicine delivered"
    }
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          We will serve you with healthcare services
        </h2>
        <p className="text-gray-600">
          We provide a variety of services that can make it easier for you to fulfill your needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          </Card>
        ))}
      </div>
    </section>
  );
}