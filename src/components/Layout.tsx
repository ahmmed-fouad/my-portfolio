import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./ui/footer";
interface LayoutProps {
  children: ReactNode;
}
import { motion } from "framer-motion";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--bgCard))] backdrop-blur-sm border-b border-[hsl(var(--text))]">
        <Navbar />
      </header>

      <main className="pt-16 mx-12 h-full">
        {children}
        <div className="absolute inset-0 z-[-1]">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[hsl(var(--text))] rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
