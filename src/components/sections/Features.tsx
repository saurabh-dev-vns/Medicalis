import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

export default function Features() {
  const features = [
    {
      title: "Finding your preferred specialist doctor",
      description: "You can find the specialist you want according to what you need to consult your needs.",
      image: "photo-1622253692010-333f2da6031d"
    },
    {
      title: "Consult online with your doctor",
      description: "You can make an appointment with your doctor when you need an online appointment.",
      image: "photo-1581056771107-24ca5f033842"
    }
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Features you will get from our app
        </h2>
        <p className="text-gray-600">
          We have several features that will make it easier for you to consult with doctors and others
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={`https://images.unsplash.com/${feature.image}?w=400`}
              alt={feature.title}
              className="rounded-lg shadow-md"
            />
          </Card>
        ))}
      </div>
    </section>
  );
}