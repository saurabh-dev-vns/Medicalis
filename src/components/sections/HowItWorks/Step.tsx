import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export function Step({ icon, title, description, step }: StepProps) {
  const IconComponent = icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: step * 0.2 }}
      className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-sm"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4"
      >
        <IconComponent className="w-6 h-6 text-blue-600" />
      </motion.div>
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {step + 1}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
}