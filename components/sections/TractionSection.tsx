"use client";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const userGrowthData = [
  { month: "Aug", users: 120 },
  { month: "Sep", users: 340 },
  { month: "Oct", users: 620 },
  { month: "Nov", users: 890 },
  { month: "Dec", users: 1100 },
  { month: "Jan", users: 1400 },
  { month: "Feb", users: 1800 },
  { month: "Mar", users: 2200 },
];

const dauData = [
  { day: "Mon", dau: 410 },
  { day: "Tue", dau: 520 },
  { day: "Wed", dau: 490 },
  { day: "Thu", dau: 610 },
  { day: "Fri", dau: 570 },
  { day: "Sat", dau: 680 },
  { day: "Sun", dau: 640 },
];

const metrics = [
  { value: "100K+", label: "AI Interactions", color: "text-teal" },
  { value: "40K+", label: "Users", color: "text-lavender" },
  { value: "5+", label: "Projects Delivered", color: "text-blue-400" },
  { value: "10+", label: "Enterprise Integrations", color: "text-green-400" },
  { value: "4.8★", label: "App Store Rating", color: "text-amber-400" },
  { value: "38%", label: "Avg Stress Reduction", color: "text-teal" },
  { value: "87%", label: "30-day Retention", color: "text-lavender" },
  { value: "12min", label: "Avg Daily Session", color: "text-blue-400" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg px-3 py-2 text-xs">
        <p className="text-slate-400">{label}</p>
        <p className="text-teal font-bold">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export function TractionSection() {
  return (
    <section id="traction" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/20 to-background pointer-events-none" />

      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <div className="pill-badge bg-green-500/10 border border-green-500/20 text-green-400 mb-6">
            Traction & Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Real growth,{" "}
            <span className="gradient-text-teal">real impact</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From 0 to 2,200+ users, NASSCOM recognition, and measurable mental health outcomes.
          </p>
        </motion.div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* User Growth Line Chart */}
          <motion.div
            className="glass rounded-2xl p-6 border border-teal/10 hover:border-teal/20 transition-all card-shine"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(45,212,191,0.04)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold mb-1">User Growth</h3>
            <p className="text-slate-500 text-sm mb-6">Aug 2024 — Mar 2025</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#2dd4bf"
                  strokeWidth={2.5}
                  dot={{ fill: "#2dd4bf", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#2dd4bf" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* DAU Area Chart */}
          <motion.div
            className="glass rounded-2xl p-6 border border-lavender/10 hover:border-lavender/20 transition-all card-shine"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(167,139,250,0.04)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="text-lg font-bold mb-1">Daily Active Users</h3>
            <p className="text-slate-500 text-sm mb-6">7-day rolling average</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={dauData}>
                <defs>
                  <linearGradient id="dauGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="day" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="dau"
                  stroke="#a78bfa"
                  strokeWidth={2.5}
                  fill="url(#dauGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Metrics grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-teal/15 transition-all duration-300 group card-shine relative overflow-hidden"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.25 }}
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
            >
              {/* Ambient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 50%, ${m.color === "text-teal" ? "rgba(45,212,191,0.05)" : m.color === "text-lavender" ? "rgba(167,139,250,0.05)" : m.color === "text-blue-400" ? "rgba(96,165,250,0.05)" : m.color === "text-green-400" ? "rgba(52,211,153,0.05)" : "rgba(251,191,36,0.05)"} 0%, transparent 70%)` }}
              />
              <AnimatedCounter
                value={m.value}
                className={`text-3xl font-black ${m.color} relative z-10`}
              />
              <p className="text-slate-500 text-xs mt-2 leading-tight relative z-10">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
