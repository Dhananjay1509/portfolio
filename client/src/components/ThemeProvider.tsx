import { createContext, useContext, useEffect } from "react";

type Theme = "dark";

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme: Theme = "dark";

  useEffect(() => {
    // Always apply dark theme to document
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add("dark");
    // Remove any saved theme from localStorage since we only use dark mode now
    localStorage.removeItem("theme");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}