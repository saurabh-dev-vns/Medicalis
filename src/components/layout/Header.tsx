import { useState } from 'react';
import { Stethoscope, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Stethoscope className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">Medicalis</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '#' },
            { name: 'How it works', path: '#how-it-works' },
            { name: 'Doctors', path: '#doctors' },
            { name: 'Contact us', path: '#contact' }
          ].map((item, index) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              href={item.path}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="secondary">Login</Button>
          <Button variant="primary">Download App</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4">
              {['About us', 'How it works', 'Doctors', 'Contact us'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="py-2 text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="secondary">Login</Button>
                <Button variant="primary">Download App</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}