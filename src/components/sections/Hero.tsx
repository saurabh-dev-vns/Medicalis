import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="md:w-1/2 space-y-6">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
        >
          Get the best online consultation at medicalis
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <div className="flex -space-x-4">
            {[
              "photo-1494790108377-be9c29b29330",
              "photo-1438761681033-6461ffad8d80",
              "photo-1472099645785-5658abf4ff4e"
            ].map((photo, index) => (
              <motion.img
                key={photo}
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="w-10 h-10 rounded-full border-2 border-white"
                src={`https://images.unsplash.com/${photo}?w=150`}
                alt="Patient"
              />
            ))}
          </div>
          <span className="text-2xl font-bold">10+</span>
          <p className="text-gray-600">Our Patients</p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-600 max-w-lg">
          Make an appointment for an online consultation with our doctors through our platform.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4">
          <Button variant="primary">Download App</Button>
          <Button variant="secondary">Learn More</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-8 md:mt-0"
      >
        <img
          src="https://res.cloudinary.com/dmnxjmy2o/image/upload/v1734279581/hero_bhmnrf.svg"
          alt="Doctor"
          className='w-3/4'
        />
      </motion.div>
    </motion.div>
  );
}