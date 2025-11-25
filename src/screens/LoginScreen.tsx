import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GradientBackground } from '../components/ui/GradientBackground';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { colors } from '../theme/colors';

export const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validateForm = () => {
        let valid = true;
        const newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleLogin = async () => {
        if (!validateForm()) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigation.replace('Main');
        }, 1500);
    };

    return (
        <GradientBackground variant="primary">
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Logo Section */}
                    <View style={styles.logoContainer}>
                        <View style={styles.logoCircle}>
                            <Text style={styles.logoText}>HU</Text>
                        </View>
                        <Text style={styles.universityName}>
                            YUNIIVARSIITII HARRAAMBEE
                        </Text>
                        <Text style={styles.universityNameEn}>HARAMBEE UNIVERSITY</Text>
                        <Text style={styles.office}>OFFICE OF REGISTRAR</Text>
                    </View>

                    {/* Login Card */}
                    <Card variant="glass" style={styles.loginCard}>
                        <Text style={styles.welcomeText}>Welcome Back</Text>
                        <Text style={styles.subtitle}>Sign in to continue</Text>

                        <View style={styles.formContainer}>
                            <Input
                                label="Email Address"
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text);
                                    setErrors({ ...errors, email: '' });
                                }}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                error={errors.email}
                                theme="dark"
                            />

                            <Input
                                label="Password"
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text);
                                    setErrors({ ...errors, password: '' });
                                }}
                                secureTextEntry
                                error={errors.password}
                                theme="dark"
                            />

                            <TouchableOpacity onPress={() => { }}>
                                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                            </TouchableOpacity>

                            <Button
                                title="Sign In"
                                onPress={handleLogin}
                                loading={loading}
                                style={styles.loginButton}
                            />

                            <View style={styles.divider}>
                                <View style={styles.dividerLine} />
                                <Text style={styles.dividerText}>OR</Text>
                                <View style={styles.dividerLine} />
                            </View>

                            <Button
                                title="Sign in with Student ID"
                                onPress={() => { }}
                                variant="outline"
                                gradient={false}
                                style={styles.studentIdButton}
                                textStyle={styles.studentIdButtonText}
                            />
                        </View>
                    </Card>

                    {/* Footer */}
                    <Text style={styles.footer}>
                        Don't have an account?{' '}
                        <Text style={styles.footerLink}>Contact Registrar</Text>
                    </Text>
                </ScrollView>
            </KeyboardAvoidingView>
        </GradientBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 24,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        borderWidth: 3,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    logoText: {
        fontSize: 36,
        fontWeight: '800',
        color: '#ffffff',
    },
    universityName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 4,
    },
    universityNameEn: {
        fontSize: 18,
        fontWeight: '700',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 4,
    },
    office: {
        fontSize: 12,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
    },
    loginCard: {
        marginBottom: 24,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 24,
    },
    formContainer: {
        marginTop: 8,
    },
    forgotPassword: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'right',
        marginBottom: 24,
    },
    loginButton: {
        marginBottom: 24,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    dividerText: {
        color: 'rgba(255, 255, 255, 0.6)',
        paddingHorizontal: 16,
        fontSize: 12,
        fontWeight: '600',
    },
    studentIdButton: {
        borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    studentIdButtonText: {
        color: '#ffffff',
    },
    footer: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        fontSize: 14,
    },
    footerLink: {
        color: '#ffffff',
        fontWeight: '700',
    },
});
