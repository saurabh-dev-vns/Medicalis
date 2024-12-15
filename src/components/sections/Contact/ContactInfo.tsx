import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email",
    details: "contact@medicalis.com",
    link: "mailto:contact@medicalis.com"
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Healthcare Ave, Medical District, NY 10001",
    link: "#"
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactInfo.map((info, index) => (
        <motion.a
          key={index}
          href={info.link}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <info.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{info.title}</h3>
            <p className="text-gray-600">{info.details}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}