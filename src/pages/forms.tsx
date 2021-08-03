import { motion } from 'framer-motion'

export default function FormPage() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ backgroundColor: '#faf', height: 50, width: 50 }}
    />
  )
}