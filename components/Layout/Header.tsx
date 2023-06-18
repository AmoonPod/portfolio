
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import Logo from "../icons/Logo";
function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className='py-8'>
      <div className='flex items-center justify-between'>
        <Logo />
        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          type='button'
          className='rounded-md p-2 bg-gray-200 dark:bg-gray-700'
          aria-label={resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
