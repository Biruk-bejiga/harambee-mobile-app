import React, { useState } from 'react';
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
import { colors } from '../theme/colors';
import { mockUser, mockGrades, mockCumulativeGrades } from '../data/mockData';

export const GradesScreen = ({ navigation }: any) => {
    const [selectedYear, setSelectedYear] = useState(3);
    const [selectedSemester, setSelectedSemester] = useState(3);

    const getGradeColor = (grade: string) => {
        return colors.grades[grade as keyof typeof colors.grades] || colors.dark.textSecondary;
    };

    const CircularProgress = ({ value, max, label }: any) => {
        const percentage = (value / max) * 100;
        const color = percentage >= 85 ? colors.success : percentage >= 70 ? colors.info : colors.warning;

        return (
            <View style={styles.progressContainer}>
                <View style={[styles.progressCircle, { borderColor: color }]}>
                    <Text style={[styles.progressValue, { color }]}>{value.toFixed(2)}</Text>
                    <Text style={styles.progressLabel}>{label}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header
                title="Grade Report"
                leftIcon={<Text style={styles.iconText}>‹</Text>}
                onLeftPress={() => navigation.goBack()}
            />

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Student Info Card */}
                <Card variant="glass" style={styles.studentCard}>
                    <LinearGradient
                        colors={['rgba(168, 85, 247, 0.3)', 'rgba(59, 130, 246, 0.3)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.studentCardGradient}
                    >
                        <View style={styles.logoPlaceholder}>
                            <Text style={styles.logoText}>HU</Text>
                        </View>
                        <View style={styles.studentInfo}>
                            <Text style={styles.office}>OFFICE OF REGISTRAR</Text>
                            <View style={styles.infoRow}>
                                <Text style={styles.infoLabel}>Name</Text>
                                <Text style={styles.infoValue}>{mockUser.name}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <Text style={styles.infoLabel}>Department</Text>
                                <Text style={styles.infoValue}>{mockUser.department}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <Text style={styles.infoLabel}>Admission</Text>
                                <Text style={styles.infoValue}>{mockUser.admissionType}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <Text style={styles.infoLabel}>Year</Text>
                                <Text style={styles.infoValue}>{mockUser.year}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <Text style={styles.infoLabel}>Semester</Text>
                                <Text style={styles.infoValue}>{mockUser.semester}</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </Card>

                {/* Selectors */}
                <View style={styles.selectors}>
                    <TouchableOpacity style={styles.selector}>
                        <Text style={styles.selectorText}>Year {selectedYear} ▼</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selector}>
                        <Text style={styles.selectorText}>Semester {selectedSemester} ▼</Text>
                    </TouchableOpacity>
                </View>

                {/* Grades Table */}
                <Card style={styles.gradesCard}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderText, { flex: 2 }]}>Course Name</Text>
                        <Text style={[styles.tableHeaderText, { flex: 1, textAlign: 'center' }]}>C.H</Text>
                        <Text style={[styles.tableHeaderText, { flex: 1, textAlign: 'center' }]}>Grade</Text>
                    </View>

                    {mockGrades.map((grade, index) => (
                        <View key={index} style={styles.tableRow}>
                            <View style={{ flex: 2 }}>
                                <Text style={styles.courseName}>{grade.courseName}</Text>
                                <Text style={styles.courseCode}>{grade.courseCode}</Text>
                            </View>
                            <Text style={[styles.tableCell, { flex: 1, textAlign: 'center' }]}>
                                {grade.creditHours}
                            </Text>
                            <View style={[styles.gradeCell, { flex: 1 }]}>
                                <View
                                    style={[
                                        styles.gradeBadge,
                                        { backgroundColor: getGradeColor(grade.grade) },
                                    ]}
                                >
                                    <Text style={styles.gradeText}>{grade.grade}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </Card>

                {/* GPA Summary */}
                <Card style={styles.summaryCard}>
                    <View style={styles.progressRow}>
                        <CircularProgress value={mockCumulativeGrades.currentSemester.gpa} max={4} label="Current GPA" />
                        <CircularProgress value={mockCumulativeGrades.cumulative.gpa} max={4} label="CGPA" />
                    </View>
                </Card>

                {/* Cumulative Table */}
                <Card style={styles.cumulativeCard}>
                    <Text style={styles.cumulativeTitle}>Grade Summary</Text>
                    <View style={styles.cumulativeTable}>
                        <View style={styles.cumulativeHeader}>
                            <Text style={[styles.cumulativeHeaderText, { flex: 2 }]}></Text>
                            <Text style={[styles.cumulativeHeaderText, { flex: 1 }]}>Credit</Text>
                            <Text style={[styles.cumulativeHeaderText, { flex: 1 }]}>Point</Text>
                            <Text style={[styles.cumulativeHeaderText, { flex: 1 }]}>GPA</Text>
                        </View>

                        <View style={styles.cumulativeRow}>
                            <Text style={[styles.cumulativeLabel, { flex: 2 }]}>Previous Semester</Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.previousSemester.totalCredit}
                            </Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.previousSemester.totalPoint}
                            </Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.previousSemester.gpa.toFixed(2)}
                            </Text>
                        </View>

                        <View style={styles.cumulativeRow}>
                            <Text style={[styles.cumulativeLabel, { flex: 2 }]}>Previous Cumulative</Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.previousCumulative.totalCredit}
                            </Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.previousCumulative.totalPoint}
                            </Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.previousCumulative.gpa.toFixed(2)}
                            </Text>
                        </View>

                        <View style={styles.cumulativeRow}>
                            <Text style={[styles.cumulativeLabel, { flex: 2 }]}>Current Semester</Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.currentSemester.totalCredit}
                            </Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.currentSemester.totalPoint}
                            </Text>
                            <Text style={[styles.cumulativeValue, { flex: 1 }]}>
                                {mockCumulativeGrades.currentSemester.gpa.toFixed(2)}
                            </Text>
                        </View>

                        <View style={[styles.cumulativeRow, styles.cumulativeTotal]}>
                            <Text style={[styles.cumulativeLabel, styles.totalText, { flex: 2 }]}>Cumulative</Text>
                            <Text style={[styles.cumulativeValue, styles.totalText, { flex: 1 }]}>
                                {mockCumulativeGrades.cumulative.totalCredit}
                            </Text>
                            <Text style={[styles.cumulativeValue, styles.totalText, { flex: 1 }]}>
                                {mockCumulativeGrades.cumulative.totalPoint}
                            </Text>
                            <Text style={[styles.cumulativeValue, styles.totalText, { flex: 1 }]}>
                                {mockCumulativeGrades.cumulative.gpa.toFixed(2)}
                            </Text>
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
    studentCard: {
        padding: 0,
        overflow: 'hidden',
        marginBottom: 20,
    },
    studentCardGradient: {
        padding: 20,
        borderRadius: 16,
    },
    logoPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        alignSelf: 'center',
    },
    logoText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#ffffff',
    },
    office: {
        fontSize: 12,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        marginBottom: 16,
    },
    studentInfo: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 12,
        padding: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    },
    infoLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    infoValue: {
        fontSize: 14,
        fontWeight: '700',
        color: '#ffffff',
    },
    selectors: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    selector: {
        flex: 1,
        backgroundColor: colors.dark.surface,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    selectorText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.dark.text,
    },
    gradesCard: {
        backgroundColor: colors.dark.surface,
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: colors.dark.card,
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    tableHeaderText: {
        fontSize: 13,
        fontWeight: '700',
        color: colors.dark.text,
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.dark.border,
        alignItems: 'center',
    },
    courseName: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.dark.text,
        marginBottom: 2,
    },
    courseCode: {
        fontSize: 12,
        color: colors.dark.textSecondary,
    },
    tableCell: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.dark.text,
    },
    gradeCell: {
        alignItems: 'center',
    },
    gradeBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        minWidth: 40,
        alignItems: 'center',
    },
    gradeText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#ffffff',
    },
    summaryCard: {
        backgroundColor: colors.dark.surface,
        marginBottom: 20,
    },
    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    progressContainer: {
        alignItems: 'center',
    },
    progressCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.dark.card,
    },
    progressValue: {
        fontSize: 28,
        fontWeight: '800',
    },
    progressLabel: {
        fontSize: 12,
        color: colors.dark.textSecondary,
        marginTop: 4,
    },
    cumulativeCard: {
        backgroundColor: colors.dark.surface,
        marginBottom: 20,
    },
    cumulativeTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 16,
    },
    cumulativeTable: {
        backgroundColor: colors.dark.card,
        borderRadius: 12,
        overflow: 'hidden',
    },
    cumulativeHeader: {
        flexDirection: 'row',
        backgroundColor: colors.primary[600],
        padding: 12,
    },
    cumulativeHeaderText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#ffffff',
        textAlign: 'center',
    },
    cumulativeRow: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.dark.border,
    },
    cumulativeLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.dark.text,
    },
    cumulativeValue: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.dark.text,
        textAlign: 'center',
    },
    cumulativeTotal: {
        backgroundColor: colors.dark.surface,
        borderBottomWidth: 0,
    },
    totalText: {
        fontWeight: '800',
        color: colors.primary[400],
    },
});
