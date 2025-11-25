export const colors = {
    // Primary gradient colors
    primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
    },

    // Secondary purple gradient
    secondary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
    },

    // Accent colors
    accent: {
        orange: '#fb923c',
        pink: '#f472b6',
        teal: '#2dd4bf',
        lime: '#84cc16',
    },

    // Semantic colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',

    // Grade colors
    grades: {
        A: '#10b981',   // Green
        'A-': '#34d399',
        'B+': '#3b82f6', // Blue
        B: '#60a5fa',
        'B-': '#93c5fd',
        'C+': '#f59e0b', // Orange
        C: '#fbbf24',
        'C-': '#fcd34d',
        D: '#ef4444',    // Red
        F: '#dc2626',
    },

    // Dark theme
    dark: {
        background: '#0f172a',
        surface: '#1e293b',
        card: '#334155',
        border: '#475569',
        text: '#f1f5f9',
        textSecondary: '#cbd5e1',
        textMuted: '#94a3b8',
    },

    // Light theme
    light: {
        background: '#ffffff',
        surface: '#f8fafc',
        card: '#ffffff',
        border: '#e2e8f0',
        text: '#0f172a',
        textSecondary: '#475569',
        textMuted: '#64748b',
    },

    // Overlay colors
    overlay: {
        dark: 'rgba(15, 23, 42, 0.8)',
        light: 'rgba(255, 255, 255, 0.8)',
    },

    // Gradients
    gradients: {
        primary: ['#a855f7', '#3b82f6'],      // Purple to Blue
        secondary: ['#ec4899', '#8b5cf6'],     // Pink to Purple
        success: ['#10b981', '#059669'],       // Green
        sunset: ['#fb923c', '#f87171'],        // Orange to Red
        ocean: ['#06b6d4', '#3b82f6'],         // Cyan to Blue
    },
};

export type ColorTheme = 'light' | 'dark';

export const getThemeColors = (theme: ColorTheme) => {
    return theme === 'dark' ? colors.dark : colors.light;
};
