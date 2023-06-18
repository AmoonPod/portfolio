import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import MdcWhite from "../../public/mdc-white.png";
import MdcBlack from "../../public/mdc-black.png";
const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Image src={theme === 'dark' ? MdcWhite : MdcBlack} alt="Logo" width={100} />
  );
};

export default Logo;
