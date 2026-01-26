import { createContext, useState, useEffect } from 'react';

// Dark mode colors (night mode) - from colors.js
export const darkColors = {
    primary: '#213555',      // Dark Blue
    secondary: '#3E5879',    // Medium Blue
    accent: '#D8C4B6',       // Beige/Tan
    background: '#F5EFE7',   // Light Cream
};

// Light mode colors (day mode - inverted)
export const lightColors = {
    primary: '#F5EFE7',      // Light Cream
    secondary: '#D8C4B6',    // Beige/Tan
    accent: '#3E5879',       // Medium Blue
    background: '#213555',   // Dark Blue
};

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : true; // Default to dark mode
    });

    const colors = isDark ? darkColors : lightColors;

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    // Save preference to localStorage
    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
