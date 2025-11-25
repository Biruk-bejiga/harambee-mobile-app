import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme/colors';

interface GradientBackgroundProps {
    children: React.ReactNode;
    colors?: string[];
    style?: ViewStyle;
    variant?: 'primary' | 'secondary' | 'sunset' | 'ocean';
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
    children,
    colors: customColors,
    style,
    variant = 'primary',
}) => {
    const gradientColors = customColors || colors.gradients[variant];

    return (
        <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.gradient, style]}
        >
            {children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
});
