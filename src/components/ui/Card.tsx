import React from 'react';
import {
    View,
    StyleSheet,
    ViewStyle,
    Platform,
} from 'react-native';
import { colors } from '../../theme/colors';

interface CardProps {
    children: React.ReactNode;
    style?: ViewStyle;
    variant?: 'default' | 'glass' | 'elevated';
    theme?: 'light' | 'dark';
}

export const Card: React.FC<CardProps> = ({
    children,
    style,
    variant = 'default',
    theme = 'dark',
}) => {
    const themeColors = theme === 'dark' ? colors.dark : colors.light;

    return (
        <View
            style={[
                styles.card,
                {
                    backgroundColor: themeColors.card,
                    borderColor: themeColors.border,
                },
                variant === 'glass' && styles.glass,
                variant === 'elevated' && styles.elevated,
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
    },
    glass: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        ...Platform.select({
            ios: {
                backdropFilter: 'blur(10px)',
            },
        }),
    },
    elevated: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
});
