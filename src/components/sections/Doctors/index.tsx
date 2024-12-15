import { motion } from 'framer-motion';
import { DoctorCard } from './DoctorCard';

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 5,
    experience: "15",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrician",
    rating: 4,
    experience: "10",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatologist",
    rating: 5,
    experience: "12",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    rating: 4,
    experience: "8",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400"
  }
];

export default function Doctors() {
  return (
    <section id='doctors' className="px-6 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Meet Our Expert Doctors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team of experienced healthcare professionals is here to provide you with the best medical care possible.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} index={index} />
        ))}
      </div>
    </section>
  );
}