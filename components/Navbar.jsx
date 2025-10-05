import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({ guestName }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <nav className="fixed w-full z-40 top-4 left-0 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between bg-white/60 backdrop-blur-md rounded-2xl p-3 shadow-sm">
        <div className="text-sm md:text-base">
          <Link href="/">
            <a className="font-heading text-lg md:text-xl">You're Invited</a>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm hidden md:inline-block">Hello{guestName ? `, ${guestName}` : ""}</span>
          <button
            onClick={() => setDark((s) => !s)}
            className="px-3 py-1 rounded-md border text-sm"
            aria-label="toggle theme"
          >
            {dark ? "Light" : "Dark"}
          </button>
          <a href="#rsvp" className="text-sm px-3 py-1 bg-accent-200 rounded-md hidden md:inline-block">RSVP</a>
        </div>
      </div>
    </nav>
  );
}
