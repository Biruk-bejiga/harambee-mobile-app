import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    GestureResponderEvent,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme/colors';

interface ButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    style?: ViewStyle;
    textStyle?: TextStyle;
    gradient?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    icon,
    style,
    textStyle,
    gradient = true,
}) => {
    const renderContent = () => (
        <>
            {loading ? (
                <ActivityIndicator color="#ffffff" style={styles.loader} />
            ) : (
                <>
                    {icon && <Text style={styles.icon}>{icon}</Text>}
                    <Text style={[styles.text, textStyles[size], textStyles[variant], textStyle]}>
                        {title}
                    </Text>
                </>
            )}
        </>
    );

    if (variant === 'primary' && gradient && !disabled) {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled || loading}
                activeOpacity={0.8}
                style={style}
            >
                <LinearGradient
                    colors={colors.gradients.primary}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.button, buttonStyles[size], disabled && styles.disabled]}
                >
                    {renderContent()}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
            style={[
                styles.button,
                buttonStyles[size],
                buttonStyles[variant],
                disabled && styles.disabled,
                style,
            ]}
        >
            {renderContent()}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    text: {
        fontWeight: '600',
        textAlign: 'center',
    },
    loader: {
        marginRight: 8,
    },
    icon: {
        marginRight: 8,
    },
    disabled: {
        opacity: 0.5,
    },
});

const buttonStyles = StyleSheet.create({
    small: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    medium: {
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    large: {
        paddingVertical: 16,
        paddingHorizontal: 32,
    },
    primary: {
        backgroundColor: colors.primary[600],
    },
    secondary: {
        backgroundColor: colors.secondary[600],
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primary[600],
    },
    ghost: {
        backgroundColor: 'transparent',
    },
});

const textStyles = StyleSheet.create({
    small: {
        fontSize: 14,
    },
    medium: {
        fontSize: 16,
    },
    large: {
        fontSize: 18,
    },
    primary: {
        color: '#ffffff',
    },
    secondary: {
        color: '#ffffff',
    },
    outline: {
        color: colors.primary[600],
    },
    ghost: {
        color: colors.primary[600],
    },
});
