import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('c12_theme');
      if (stored) return stored === 'dark';
      return false; // Default to light (white and black)
    } catch {
      return false;
    }
  });

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    if (next) {
      root.classList.add('dark');
      try {
        localStorage.setItem('c12_theme', 'dark');
      } catch {}
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('c12_theme', 'light');
      } catch {}
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      type="button"
      id="theme-toggle"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-black dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300" />
      ) : (
        <Moon className="w-4 h-4 text-black" />
      )}
    </button>
  );
};
