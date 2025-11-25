import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme/colors';

interface HeaderProps {
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    gradient?: boolean;
    transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
    title,
    leftIcon,
    rightIcon,
    onLeftPress,
    onRightPress,
    gradient = true,
    transparent = false,
}) => {
    const content = (
        <View style={styles.content}>
            <View style={styles.leftContainer}>
                {leftIcon && (
                    <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
                        {leftIcon}
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
            </View>
            <View style={styles.rightContainer}>
                {rightIcon && (
                    <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
                        {rightIcon}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );

    if (transparent) {
        return <View style={[styles.header, styles.transparent]}>{content}</View>;
    }

    if (gradient) {
        return (
            <LinearGradient
                colors={colors.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.header}
            >
                {content}
            </LinearGradient>
        );
    }

    return (
        <View style={[styles.header, { backgroundColor: colors.dark.surface }]}>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
    transparent: {
        backgroundColor: 'transparent',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        width: 40,
        alignItems: 'flex-start',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    rightContainer: {
        width: 40,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',
    },
    iconButton: {
        padding: 8,
    },
});
