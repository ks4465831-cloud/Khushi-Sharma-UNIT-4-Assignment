import { motion } from "framer-motion";

function StatCard({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="stat-card"
    >
      <h3>
        {icon} {title}
      </h3>

      <h1>{value}</h1>
    </motion.div>
  );
}

export default StatCard;