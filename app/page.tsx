"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Particles from "@/components/ui/Particles";

export default function Home() {
  const feautureVariants = [
    { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  ];
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#1e1e2e] to-[#101018] text-white">
      <Particles>
        <div className="w-full min-h-screen">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex px-6 py-4 items-center justify-between border-b border-gray-700"
          >
            <Link href={"/"}>
              <h1 className="text-3xl font-extrabold">ChatBox</h1>
            </Link>
            <div className="flex items-center gap-12">
              <motion.h4
                whileHover={{ scale: 1.1, color: "#a0a0a0" }}
                className="cursor-pointer text-lg"
                onClick={() =>
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </motion.h4>
              <motion.h4
                whileHover={{ scale: 1.1, color: "#a0a0a0" }}
                className="cursor-pointer text-lg"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </motion.h4>
              <motion.h4
                whileHover={{ scale: 1.1, color: "#a0a0a0" }}
                className="cursor-pointer text-lg"
                onClick={() =>
                  document
                    .getElementById("feature")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Features
              </motion.h4>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#3a3a3a" }}
                className="px-4 py-2 border border-gray-500 rounded-lg"
              >
                <Link href={"/login"}>Log in</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                <Link href={"/signUp"}>Sign Up</Link>
              </motion.button>
            </div>
          </motion.nav>
          <motion.section
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col w-full items-center justify-center text-center py-20 px-6"
            id="home"
          >
            <motion.h2
              className="text-5xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Chat Instantly. Anytime, Anywhere.
            </motion.h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Stay connected with seamless messaging, secure calls, and a smooth
              experience on any device.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-blue-500 text-lg rounded-lg hover:bg-blue-600"
            >
              <Link href={"/signUp"}>Start Chatting Now</Link>
            </motion.button>
          </motion.section>
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20 px-6 max-w-6xl mx-auto flex flex-row items-center gap-10"
            id="about"
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-1/2 glass p-8 flex items-center justify-center"
            >
              <Image
                src="/image.png"
                alt="ChatBox Interface"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-1/2 text-center md:text-left"
            >
              <h3 className="text-4xl font-bold mb-4">About ChatBox</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                ChatBox is a modern messaging platform designed for fast,
                secure, and seamless communication. Whether you're connecting
                with friends, family, or colleagues, our app ensures
                high-quality messaging, calls, and file sharing – all in one
                place.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-blue-500 text-lg rounded-lg hover:bg-blue-600"
              >
                <Link href={"/signUp"}>Join Now</Link>
              </motion.button>
            </motion.div>
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="py-10 px-6 text-center"
            id="feature"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-14"
            >
              Why Choose ChatBox?
            </motion.h3>
            <div className="grid grid-cols-3 gap-12 mb-14 max-w-7xl mx-auto">
              {[
                {
                  title: "Real-Time Messaging",
                  desc: "Stay connected with instant messages, delivered in real-time.",
                },
                {
                  title: "Profile Updated",
                  desc: "Your display picture has been changed successfully.",
                },

                {
                  title: "Easy to Use",
                  desc: "A simple and intuitive interface for a seamless experience.",
                },
                {
                  title: "Cross-Platform Support",
                  desc: "Use ChatBox on  tablet, and desktop seamlessly.",
                },
                {
                  title: "Voice & Video Calls",
                  desc: "High-quality voice & video calls anytime, anywhere.",
                },
                {
                  title: "Profile Changes Saved",
                  desc: "Your name, email, or phone number has been updated successfully.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={feautureVariants[i % feautureVariants.length]}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="p-6 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <footer className="py-6 text-center border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ChatBox. All rights reserved.
            </p>
          </footer>
        </div>
      </Particles>
    </div>
  );
}
