"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SvgIcon } from "./SvgIcon";
import { useScramble } from "../../hooks/useScramble";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "home", delay: 0.2 },
    { href: "/brand", label: "brands", delay: 0.4 },
    { href: "/catalogue", label: "catalogue", delay: 0.6 },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-background to-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="w-full py-4 sm:px-6 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-row items-center gap-2"
            >
              <Link href="/" className="flex flex-row items-center gap-4 text-2xl font-light text-white">
                <SvgIcon />
                NOCTYRA
              </Link>
            </motion.div>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white transition-all duration-300 focus:outline-none"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="block h-8 w-8" />
                ) : (
                  <Menu className="block h-8 w-8" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[-1] overflow-y-auto bg-background"
          >
            <div className="absolute inset-0 z-0 bg-[url('https://64.media.tumblr.com/db40339f742ab4a86b17fe1d2e7f8e92/8c3a420cd2eb00e6-ad/s500x750/f0e709564599052956f67c68e0148e2a9bb7931d.gif')] bg-cover bg-center blur-3xl brightness-50"></div>

            <div className="flex min-h-screen flex-col items-center justify-center py-8">
              <div className="z-10 flex w-full flex-col items-center gap-8 space-y-8">
                {navLinks.map((link, index) => (
                  <div key={index} className="group">
                    <NavLink
                      index={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      delay={link.delay}
                    >
                      {link.label}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
  index,
  delay,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  index: number;
  delay: number;
}) {
  const { text, scramble, stopScramble } = useScramble(children as string);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease:"easeInOut" }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative text-6xl font-light text-neutral-400 uppercase tracking-wider w-full text-center"
    >
      <Link
        href={href}
        onClick={onClick}
        className="relative z-10 w-full text-center"
      >
        <motion.span className="z-10 group-hover:text-white transition-colors duration-300 ease-in-out w-full text-center">
          {text}
        </motion.span>
      </Link>
    </motion.div>
  );
}
