import { motion } from 'framer-motion';


/*Este es segunda opcion*/
export default function ScrollingText() {
  const words = "ASTRONET • SOFTWARE DEVELOPMENT • INNOVATION • DIGITAL STRATEGY • ";
  
  return (
    <div className="relative flex overflow-hidden bg-zinc-950 py-10 border-y border-zinc-900">
      <motion.div
        className="flex whitespace-nowrap text-[8vw] font-black uppercase tracking-tighter text-zinc-800/30"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span className="pr-10">{words}</span>
        <span className="pr-10">{words}</span>
      </motion.div>
    </div>
  );
}