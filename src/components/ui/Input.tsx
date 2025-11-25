import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Animated,
    ViewStyle,
    TextInputProps,
} from 'react-native';
import { colors } from '../../theme/colors';

interface InputProps extends TextInputProps {
    label: string;
    error?: string;
    containerStyle?: ViewStyle;
    icon?: React.ReactNode;
    theme?: 'light' | 'dark';
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    containerStyle,
    icon,
    theme = 'dark',
    value,
    onFocus,
    onBlur,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const labelPosition = useState(new Animated.Value(value ? 1 : 0))[0];

    const themeColors = theme === 'dark' ? colors.dark : colors.light;

    const handleFocus = (e: any) => {
        setIsFocused(true);
        Animated.timing(labelPosition, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
        onFocus?.(e);
    };

    const handleBlur = (e: any) => {
        setIsFocused(false);
        if (!value) {
            Animated.timing(labelPosition, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
        onBlur?.(e);
    };

    const labelStyle = {
        top: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 0],
        }),
        fontSize: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
        }),
        color: error
            ? colors.error
            : isFocused
                ? colors.primary[500]
                : themeColors.textSecondary,
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
            <View
                style={[
                    styles.inputContainer,
                    {
                        backgroundColor: themeColors.surface,
                        borderColor: error
                            ? colors.error
                            : isFocused
                                ? colors.primary[500]
                                : themeColors.border,
                    },
                ]}
            >
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <TextInput
                    {...props}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={[
                        styles.input,
                        {
                            color: themeColors.text,
                        },
                        icon ? styles.inputWithIcon : undefined,
                    ]}
                    placeholderTextColor={themeColors.textMuted}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        position: 'absolute',
        left: 16,
        fontWeight: '500',
        zIndex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 2,
        marginTop: 20,
    },
    iconContainer: {
        paddingLeft: 16,
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    inputWithIcon: {
        paddingLeft: 8,
    },
    error: {
        color: colors.error,
        fontSize: 12,
        marginTop: 4,
        marginLeft: 16,
    },
});
