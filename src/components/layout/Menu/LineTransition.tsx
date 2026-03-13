import { motion } from "framer-motion";

export default function LineTransition({ isVisible }: { isVisible: boolean }) {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="fixed inset-0 z-[40] pointer-events-none flex flex-col overflow-hidden">
      {rows.map((i) => (
        <motion.div
          key={i}
        
          initial={{ x: "110%" }}
          animate={{ x: isVisible ? "-2%" : "110%" }} //-150 y 110
          transition={{ 
            duration: 0.9, //1.2
            ease: [0.65, 0, 0.35, 1], 
            delay: i * 0.01 
          }}
          className="flex-1 bg-[#A3FF00] relative"
          style={{
            clipPath: "polygon(10% 0%, 95% 0%, 100% 50%, 95% 100%, 10% 100%, 0% 50%)",
            width: "150%",
            marginTop: "-1px",
            marginLeft: `${(i % 3) * -5}%`
          }}
        />
      ))}
    </div>
  );
}