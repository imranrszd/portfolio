import { motion } from "framer-motion";

function BackgroundGlow() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#05070d]">
      {/* deep gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.12),transparent_40%)]" />

      {/* animated glow orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-blue-500/25 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 -right-32 w-[420px] h-[420px] bg-blue-500/25 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-140px] left-[35%] w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[150px]"
      />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
    </div>
  );
}

export default BackgroundGlow;