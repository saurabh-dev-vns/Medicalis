import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  image: string;
  index: number;
}

export function DoctorCard({ name, specialty, rating, experience, image, index }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative aspect-square overflow-hidden"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{specialty}</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({rating}.0)</span>
        </div>
        <p className="text-sm text-gray-600">{experience} years experience</p>
      </div>
    </motion.div>
  );
}