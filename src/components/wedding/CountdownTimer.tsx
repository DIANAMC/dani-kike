import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-08-21T12:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const CountdownUnit = ({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col items-center"
  >
    <span className="font-display text-4xl md:text-5xl font-medium text-primary-foreground leading-none">
      {String(value).padStart(2, "0")}
    </span>
    <span className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mt-2">
      {label}
    </span>
  </motion.div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.9 }}
      className="mt-10 flex items-center gap-6 md:gap-10 justify-center"
    >
      <CountdownUnit value={timeLeft.days} label="Días" delay={1.9} />
      <span className="font-display text-3xl text-primary-foreground/50 pb-4">:</span>
      <CountdownUnit value={timeLeft.hours} label="Horas" delay={2.0} />
      <span className="font-display text-3xl text-primary-foreground/50 pb-4">:</span>
      <CountdownUnit value={timeLeft.minutes} label="Minutos" delay={2.1} />
      <span className="font-display text-3xl text-primary-foreground/50 pb-4">:</span>
      <CountdownUnit value={timeLeft.seconds} label="Segundos" delay={2.2} />
    </motion.div>
  );
};

export default CountdownTimer;
