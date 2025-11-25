import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '../components/ui/Card';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { colors } from '../theme/colors';
import { mockUser, mockDepartment } from '../data/mockData';

export const DropoutScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header
                title="Slip"
                leftIcon={<Text style={styles.iconText}>‹</Text>}
                onLeftPress={() => navigation.goBack()}
            />

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* University Header */}
                <Card variant="glass" style={styles.headerCard}>
                    <View style={styles.logoPlaceholder}>
                        <Text style={styles.logoText}>HU</Text>
                    </View>
                    <Text style={styles.universityTitle}>YUNIIVARSIITII HARRAAMBEE</Text>
                    <Text style={styles.universityNameEn}>HARAMBEE UNIVERSITY</Text>
                    <Text style={styles.office}>OFFICE OF REGISTRAR</Text>
                </Card>

                {/* Your Slip Section */}
                <Card style={styles.section}>
                    <Text style={styles.sectionTitle}>Your Slip</Text>

                    <TouchableOpacity style={styles.actionCard}>
                        <View style={styles.actionIcon}>
                            <Text style={styles.actionIconText}>👁️</Text>
                        </View>
                        <View style={styles.actionContent}>
                            <Text style={styles.actionTitle}>View slip</Text>
                            <Text style={styles.actionSubtitle}>View your slip in the app</Text>
                        </View>
                        <Text style={styles.chevron}>›</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionCard}>
                        <View style={styles.actionIcon}>
                            <Text style={styles.actionIconText}>⬇️</Text>
                        </View>
                        <View style={styles.actionContent}>
                            <Text style={styles.actionTitle}>Download</Text>
                            <Text style={styles.actionSubtitle}>Download your slip, and access it in downloads</Text>
                        </View>
                        <Text style={styles.chevron}>›</Text>
                    </TouchableOpacity>
                </Card>

                {/* Academic Information */}
                <Card style={styles.section}>
                    <Text style={styles.sectionTitle}>Academic</Text>

                    <View style={styles.infoItem}>
                        <View style={styles.infoDot}>
                            <Text style={styles.infoDotText}>•</Text>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.infoLabel}>Department</Text>
                            <Text style={styles.infoValue}>{mockUser.department}</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <View style={styles.infoDot}>
                            <Text style={styles.infoDotText}>•</Text>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.infoLabel}>Program</Text>
                            <Text style={styles.infoValue}>{mockUser.program}</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <View style={styles.infoDot}>
                            <Text style={styles.infoDotText}>•</Text>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.infoLabel}>Admission Type</Text>
                            <Text style={styles.infoValue}>{mockUser.admissionType}</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <View style={styles.infoDot}>
                            <Text style={styles.infoDotText}>•</Text>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.infoLabel}>Section</Text>
                            <Text style={styles.infoValue}>{mockUser.section}</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <View style={styles.infoDot}>
                            <Text style={styles.infoDotText}>•</Text>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.infoLabel}>Year</Text>
                            <Text style={styles.infoValue}>{mockUser.year}</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <View style={styles.infoDot}>
                            <Text style={styles.infoDotText}>•</Text>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.infoLabel}>Semester</Text>
                            <Text style={styles.infoValue}>{mockUser.semester}</Text>
                        </View>
                    </View>
                </Card>

                {/* Department Information */}
                <Card style={styles.section}>
                    <Text style={styles.sectionTitle}>Department Information</Text>

                    <View style={styles.deptInfo}>
                        <Text style={styles.deptName}>{mockDepartment.name}</Text>
                        <View style={styles.deptDetails}>
                            <View style={styles.deptRow}>
                                <Text style={styles.deptLabel}>Head:</Text>
                                <Text style={styles.deptValue}>{mockDepartment.head}</Text>
                            </View>
                            <View style={styles.deptRow}>
                                <Text style={styles.deptLabel}>Contact:</Text>
                                <Text style={styles.deptValue}>{mockDepartment.contact}</Text>
                            </View>
                            <View style={styles.deptRow}>
                                <Text style={styles.deptLabel}>Faculty:</Text>
                                <Text style={styles.deptValue}>{mockDepartment.facultyCount} members</Text>
                            </View>
                        </View>
                    </View>
                </Card>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark.background,
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100,
    },
    iconText: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: '300',
    },
    headerCard: {
        alignItems: 'center',
        marginBottom: 24,
    },
    logoPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    logoText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#ffffff',
    },
    universityTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 4,
    },
    universityNameEn: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 4,
    },
    office: {
        fontSize: 12,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.9)',
    },
    section: {
        backgroundColor: colors.dark.surface,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 16,
    },
    actionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.dark.card,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    actionIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: colors.primary[600] + '20',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    actionIconText: {
        fontSize: 24,
    },
    actionContent: {
        flex: 1,
    },
    actionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.dark.text,
        marginBottom: 4,
    },
    actionSubtitle: {
        fontSize: 13,
        color: colors.dark.textSecondary,
    },
    chevron: {
        fontSize: 24,
        color: colors.dark.textMuted,
        fontWeight: '300',
        marginLeft: 8,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    infoDot: {
        width: 32,
        alignItems: 'center',
        paddingTop: 2,
    },
    infoDotText: {
        fontSize: 20,
        color: colors.primary[400],
    },
    infoContent: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 14,
        color: colors.dark.textSecondary,
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.dark.text,
    },
    deptInfo: {
        backgroundColor: colors.dark.card,
        padding: 16,
        borderRadius: 12,
    },
    deptName: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.dark.border,
    },
    deptDetails: {
        gap: 12,
    },
    deptRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deptLabel: {
        fontSize: 14,
        color: colors.dark.textSecondary,
        width: 80,
    },
    deptValue: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.dark.text,
        flex: 1,
    },
});
