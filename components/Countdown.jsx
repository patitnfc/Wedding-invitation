import { useEffect, useState } from "react";

export default function Countdown({ targetIso }) {
  const target = new Date(targetIso).getTime();
  const [t, setT] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const iv = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (24*60*60*1000));
      const hours = Math.floor((diff % (24*60*60*1000)) / (60*60*1000));
      const mins = Math.floor((diff % (60*60*1000)) / (60*1000));
      const secs = Math.floor((diff % (60*1000)) / 1000);
      setT({ days, hours, mins, secs });
    }, 1000);
    return () => clearInterval(iv);
  }, [target]);

  return (
    <div className="inline-flex gap-3 items-center p-4 bg-white/80 rounded-xl shadow-sm">
      <div className="text-center">
        <div className="text-2xl font-heading">{t.days}</div>
        <div className="text-xs">Days</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-heading">{t.hours}</div>
        <div className="text-xs">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-heading">{t.mins}</div>
        <div className="text-xs">Mins</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-heading">{t.secs}</div>
        <div className="text-xs">Secs</div>
      </div>
    </div>
  );
}
