import { motion as Motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "95%", label: "Success Rate" },
  { value: "50+", label: "Hiring Partners" },
  { value: "₹20 LPA", label: "Highest Package" },
];

export default function StatsSection() {
  return (
    <div className="mt-20">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 rounded-2xl border border-gray-100 bg-white"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="p-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B73]">
              {stat.value}
            </h2>
            <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </Motion.div>
    </div>
  );
}
