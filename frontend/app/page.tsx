"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-zinc-800 selection:text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center space-y-8 text-center px-6"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm font-medium text-zinc-300 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Platform in development
        </motion.div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              RehearseMe
            </span>
          </h1>
          <p className="mx-auto max-w-lg text-lg md:text-xl text-zinc-400 font-light">
            AI-powered mock interviews to help you land your dream job.
          </p>
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-12"
        >
          <div className="h-[1px] w-12 bg-zinc-800 mx-auto mb-6"></div>
          <p className="text-sm font-semibold tracking-[0.3em] text-zinc-500 uppercase">
            Coming Soon
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
