import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { colors } from '../theme/colors';
import { mockUser, mockDepartment } from '../data/mockData';

export const ProfileScreen = ({ navigation }: any) => {
    const [darkMode, setDarkMode] = React.useState(true);
    const [notifications, setNotifications] = React.useState(true);

    const SettingItem = ({ icon, title, value, onPress, showSwitch, switchValue, onSwitchChange }: any) => (
        <TouchableOpacity
            style={styles.settingItem}
            onPress={onPress}
            disabled={showSwitch}
        >
            <View style={styles.settingLeft}>
                <Text style={styles.settingIcon}>{icon}</Text>
                <View>
                    <Text style={styles.settingTitle}>{title}</Text>
                    {value && <Text style={styles.settingValue}>{value}</Text>}
                </View>
            </View>
            {showSwitch ? (
                <Switch
                    value={switchValue}
                    onValueChange={onSwitchChange}
                    trackColor={{ false: colors.dark.border, true: colors.primary[600] }}
                    thumbColor={'#ffffff'}
                />
            ) : (
                <Text style={styles.chevron}>›</Text>
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Header with Avatar */}
            <LinearGradient
                colors={colors.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.header}
            >
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {mockUser.name.split(' ').map(n => n[0]).join('')}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.editAvatar}>
                        <Text style={styles.editAvatarText}>✎</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.userName}>{mockUser.name}</Text>
                <Text style={styles.userEmail}>{mockUser.email}</Text>
                <Text style={styles.studentId}>{mockUser.studentId}</Text>
            </LinearGradient>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Personal Information */}
                <Text style={styles.sectionTitle}>Personal Information</Text>
                <Card style={styles.card}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Department</Text>
                        <Text style={styles.infoValue}>{mockUser.department}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Program</Text>
                        <Text style={styles.infoValue}>{mockUser.program}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Admission Type</Text>
                        <Text style={styles.infoValue}>{mockUser.admissionType}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Section</Text>
                        <Text style={styles.infoValue}>{mockUser.section}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Year</Text>
                        <Text style={styles.infoValue}>{mockUser.year}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Semester</Text>
                        <Text style={styles.infoValue}>{mockUser.semester}</Text>
                    </View>
                </Card>

                {/* Department Information */}
                <Text style={styles.sectionTitle}>Department Details</Text>
                <Card style={styles.card}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Name</Text>
                        <Text style={styles.infoValue}>{mockDepartment.name}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Department Head</Text>
                        <Text style={styles.infoValue}>{mockDepartment.head}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Contact</Text>
                        <Text style={styles.infoValue}>{mockDepartment.contact}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Faculty Count</Text>
                        <Text style={styles.infoValue}>{mockDepartment.facultyCount}</Text>
                    </View>
                </Card>

                {/* Settings */}
                <Text style={styles.sectionTitle}>Settings</Text>
                <Card style={styles.settingsCard}>
                    <SettingItem
                        icon="🌙"
                        title="Dark Mode"
                        showSwitch
                        switchValue={darkMode}
                        onSwitchChange={setDarkMode}
                    />
                    <SettingItem
                        icon="🔔"
                        title="Notifications"
                        showSwitch
                        switchValue={notifications}
                        onSwitchChange={setNotifications}
                    />
                    <SettingItem
                        icon="🌐"
                        title="Language"
                        value="English"
                        onPress={() => { }}
                    />
                    <SettingItem
                        icon="📄"
                        title="View Slip"
                        onPress={() => navigation.navigate('Dropout')}
                    />
                    <SettingItem
                        icon="🔒"
                        title="Privacy Policy"
                        onPress={() => { }}
                    />
                    <SettingItem
                        icon="ℹ️"
                        title="About"
                        value="Version 1.0.0"
                        onPress={() => { }}
                    />
                </Card>

                {/* Logout Button */}
                <Button
                    title="Logout"
                    onPress={() => navigation.replace('Login')}
                    variant="outline"
                    gradient={false}
                    style={styles.logoutButton}
                    textStyle={styles.logoutText}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark.background,
    },
    header: {
        paddingTop: 60,
        paddingBottom: 32,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    avatarText: {
        fontSize: 36,
        fontWeight: '800',
        color: '#ffffff',
    },
    editAvatar: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.primary[600],
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#ffffff',
    },
    editAvatarText: {
        fontSize: 16,
        color: '#ffffff',
    },
    userName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 4,
    },
    studentId: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 12,
        marginTop: 8,
    },
    card: {
        backgroundColor: colors.dark.surface,
        marginBottom: 24,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.dark.border,
    },
    infoLabel: {
        fontSize: 14,
        color: colors.dark.textSecondary,
    },
    infoValue: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.dark.text,
        textAlign: 'right',
        flex: 1,
        marginLeft: 16,
    },
    settingsCard: {
        backgroundColor: colors.dark.surface,
        marginBottom: 24,
        padding: 0,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.dark.border,
    },
    settingLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingIcon: {
        fontSize: 24,
        marginRight: 16,
    },
    settingTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.dark.text,
        marginBottom: 2,
    },
    settingValue: {
        fontSize: 13,
        color: colors.dark.textSecondary,
    },
    chevron: {
        fontSize: 24,
        color: colors.dark.textMuted,
        fontWeight: '300',
    },
    logoutButton: {
        borderColor: colors.error,
        marginBottom: 20,
    },
    logoutText: {
        color: colors.error,
    },
});
