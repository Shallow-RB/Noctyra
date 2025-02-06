"use client";

import { motion } from "framer-motion";
import { useScramble } from "../../hooks/useScramble";
import { useRouter } from "next/navigation";

interface EncryptButtonProps {
  initialText?: string;
  visible: boolean;
  delay: number;
  navigateTo: string;
  brandName?: string;
}

function getBorderColor(brandName: string): string {
  switch (brandName.toLowerCase()) {
    case "ducati":
      return "#e41f2d";
    case "yamaha":
      return "#053aa6";
    case "kawasaki":
      return "#00c951";
    case "bmw":
      return "#0166B1";
    case "honda":
      return "#FF0000";
    default:
      return "#ffffff";
  }
}

function EncryptButton({
  initialText = "Encrypt data",
  visible,
  delay,
  navigateTo,
  brandName,
}: EncryptButtonProps) {
  const { text, scramble, stopScramble } = useScramble(initialText);
  const router = useRouter();

  if (!visible) return null;

  const borderColor = getBorderColor(brandName ?? "");
  console.log(borderColor);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={() => router.push(navigateTo)}
      style={{ borderColor }}
      className="group relative w-[150px] overflow-hidden border-[1px] bg-transparent px-4 py-2 font-mono font-medium uppercase text-white transition-colors hover:bg-neutral-800"
    >
      <span>{text}</span>
    </motion.button>
  );
}

export default EncryptButton;
