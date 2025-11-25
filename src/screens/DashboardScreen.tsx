import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '../components/ui/Card';
import { colors } from '../theme/colors';
import { mockUser, mockCumulativeGrades } from '../data/mockData';

export const DashboardScreen = ({ navigation }: any) => {
    const QuickStatCard = ({ title, value, subtitle, gradient }: any) => (
        <Card variant="elevated" style={styles.statCard}>
            <LinearGradient
                colors={gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.statGradient}
            >
                <Text style={styles.statTitle}>{title}</Text>
                <Text style={styles.statValue}>{value}</Text>
                <Text style={styles.statSubtitle}>{subtitle}</Text>
            </LinearGradient>
        </Card>
    );

    const QuickActionButton = ({ icon, title, onPress, color }: any) => (
        <TouchableOpacity onPress={onPress} style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: color }]}>
                <Text style={styles.actionIconText}>{icon}</Text>
            </View>
            <Text style={styles.actionTitle}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <LinearGradient
                colors={colors.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.header}
            >
                <View style={styles.headerContent}>
                    <View>
                        <Text style={styles.greeting}>Hello,</Text>
                        <Text style={styles.userName}>{mockUser.name}</Text>
                        <Text style={styles.studentId}>{mockUser.studentId}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={styles.avatar}
                    >
                        <Text style={styles.avatarText}>
                            {mockUser.name.split(' ').map(n => n[0]).join('')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Quick Stats */}
                <View style={styles.statsContainer}>
                    <QuickStatCard
                        title="CGPA"
                        value={mockCumulativeGrades.cumulative.gpa.toFixed(2)}
                        subtitle="Cumulative"
                        gradient={colors.gradients.success}
                    />
                    <QuickStatCard
                        title="Credits"
                        value={mockCumulativeGrades.cumulative.totalCredit}
                        subtitle="Completed"
                        gradient={colors.gradients.ocean}
                    />
                    <QuickStatCard
                        title="Semester"
                        value={`${mockUser.year}.${mockUser.semester}`}
                        subtitle="Current"
                        gradient={colors.gradients.sunset}
                    />
                </View>

                {/* Quick Actions */}
                <Card style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.actionsGrid}>
                        <QuickActionButton
                            icon="📊"
                            title="View Grades"
                            color={colors.primary[500]}
                            onPress={() => navigation.navigate('Grades')}
                        />
                        <QuickActionButton
                            icon="💳"
                            title="Payments"
                            color={colors.secondary[500]}
                            onPress={() => navigation.navigate('Payments')}
                        />
                        <QuickActionButton
                            icon="➕"
                            title="Add Course"
                            color={colors.accent.teal}
                            onPress={() => navigation.navigate('CourseManagement', { screen: 'CourseAdd' })}
                        />
                        <QuickActionButton
                            icon="❌"
                            title="Drop Course"
                            color={colors.accent.orange}
                            onPress={() => navigation.navigate('CourseManagement', { screen: 'CourseDrop' })}
                        />
                    </View>
                </Card>

                {/* Recent Activity */}
                <Card style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>
                    <View style={styles.activityItem}>
                        <View style={[styles.activityDot, { backgroundColor: colors.success }]} />
                        <View style={styles.activityContent}>
                            <Text style={styles.activityTitle}>Payment Received</Text>
                            <Text style={styles.activityTime}>Tuition Fee - 2 hours ago</Text>
                        </View>
                    </View>
                    <View style={styles.activityItem}>
                        <View style={[styles.activityDot, { backgroundColor: colors.info }]} />
                        <View style={styles.activityContent}>
                            <Text style={styles.activityTitle}>Grade Posted</Text>
                            <Text style={styles.activityTime}>Financial Modeling - 1 day ago</Text>
                        </View>
                    </View>
                    <View style={styles.activityItem}>
                        <View style={[styles.activityDot, { backgroundColor: colors.warning }]} />
                        <View style={styles.activityContent}>
                            <Text style={styles.activityTitle}>Upcoming Deadline</Text>
                            <Text style={styles.activityTime}>Course Registration - 3 days left</Text>
                        </View>
                    </View>
                </Card>

                {/* Department Info */}
                <Card style={styles.section}>
                    <Text style={styles.sectionTitle}>Department</Text>
                    <View style={styles.departmentInfo}>
                        <Text style={styles.departmentName}>{mockUser.department}</Text>
                        <Text style={styles.departmentDetails}>
                            {mockUser.program} • Year {mockUser.year} • {mockUser.section}
                        </Text>
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
    header: {
        paddingTop: 60,
        paddingBottom: 24,
        paddingHorizontal: 20,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 4,
    },
    userName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 4,
    },
    studentId: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    avatarText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100,
    },
    statsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 12,
    },
    statCard: {
        flex: 1,
        padding: 0,
        overflow: 'hidden',
    },
    statGradient: {
        padding: 16,
        borderRadius: 16,
    },
    statTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 8,
    },
    statValue: {
        fontSize: 24,
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: 4,
    },
    statSubtitle: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    section: {
        marginBottom: 20,
        backgroundColor: colors.dark.surface,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 16,
    },
    actionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    actionButton: {
        width: '48%',
        alignItems: 'center',
        padding: 16,
        backgroundColor: colors.dark.card,
        borderRadius: 12,
    },
    actionIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    actionIconText: {
        fontSize: 24,
    },
    actionTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.dark.text,
        textAlign: 'center',
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    activityDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginTop: 4,
        marginRight: 12,
    },
    activityContent: {
        flex: 1,
    },
    activityTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.dark.text,
        marginBottom: 4,
    },
    activityTime: {
        fontSize: 13,
        color: colors.dark.textSecondary,
    },
    departmentInfo: {
        padding: 12,
        backgroundColor: colors.dark.card,
        borderRadius: 12,
    },
    departmentName: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 4,
    },
    departmentDetails: {
        fontSize: 14,
        color: colors.dark.textSecondary,
    },
});
