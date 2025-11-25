import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card } from '../components/ui/Card';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { colors } from '../theme/colors';
import { mockEnrolledCourses } from '../data/mockData';

export const CourseDropScreen = ({ navigation }: any) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);

    const handleDropCourse = (course: any) => {
        setSelectedCourse(course);
        setShowConfirmModal(true);
    };

    const confirmDrop = () => {
        setShowConfirmModal(false);
        // Handle drop logic here
    };

    const CourseCard = ({ course }: any) => (
        <Card style={styles.courseCard}>
            <View style={styles.courseInfo}>
                <View style={styles.courseCodeBadge}>
                    <Text style={styles.courseCodeText}>{course.courseCode}</Text>
                </View>

                <Text style={styles.courseName}>{course.courseName}</Text>

                <View style={styles.courseDetails}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Credit Hours</Text>
                        <Text style={styles.detailValue}>{course.creditHours}</Text>
                    </View>
                    {course.instructor && (
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Instructor</Text>
                            <Text style={styles.detailValue}>{course.instructor}</Text>
                        </View>
                    )}
                    {course.schedule && (
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Schedule</Text>
                            <Text style={styles.detailValue}>{course.schedule}</Text>
                        </View>
                    )}
                </View>
            </View>

            <TouchableOpacity
                onPress={() => handleDropCourse(course)}
                style={styles.dropButton}
            >
                <Text style={styles.dropIcon}>✕</Text>
                <Text style={styles.dropText}>Drop</Text>
            </TouchableOpacity>
        </Card>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header
                title="Course Drop"
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
                    <Text style={styles.universityName}>HARAMBEE UNIVERSITY</Text>
                    <Text style={styles.office}>OFFICE OF REGISTRAR</Text>
                </Card>

                {/* Warning Message */}
                <Card style={styles.warningCard}>
                    <Text style={styles.warningIcon}>⚠️</Text>
                    <Text style={styles.warningTitle}>Important Notice</Text>
                    <Text style={styles.warningText}>
                        Dropping a course after the deadline may affect your academic record.
                        Please consult with your advisor before proceeding.
                    </Text>
                </Card>

                {/* Enrolled Courses */}
                <Text style={styles.sectionTitle}>Enrolled Courses</Text>

                {mockEnrolledCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}

                {mockEnrolledCourses.length === 0 && (
                    <Card style={styles.emptyCard}>
                        <Text style={styles.emptyIcon}>📚</Text>
                        <Text style={styles.emptyText}>No enrolled courses</Text>
                        <Text style={styles.emptySubtext}>
                            You haven't enrolled in any courses yet
                        </Text>
                    </Card>
                )}
            </ScrollView>

            {/* Confirmation Modal */}
            <Modal
                visible={showConfirmModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowConfirmModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalIcon}>
                            <Text style={styles.modalIconText}>⚠️</Text>
                        </View>

                        <Text style={styles.modalTitle}>Confirm Course Drop</Text>
                        <Text style={styles.modalText}>
                            Are you sure you want to drop:
                        </Text>

                        {selectedCourse && (
                            <View style={styles.modalCourseInfo}>
                                <Text style={styles.modalCourseName}>{selectedCourse.courseName}</Text>
                                <Text style={styles.modalCourseCode}>{selectedCourse.courseCode}</Text>
                            </View>
                        )}

                        <Text style={styles.modalWarning}>
                            This action cannot be undone. You may need to re-register for this course in a future semester.
                        </Text>

                        <View style={styles.modalButtons}>
                            <Button
                                title="Cancel"
                                onPress={() => setShowConfirmModal(false)}
                                variant="outline"
                                gradient={false}
                                style={styles.modalButton}
                            />
                            <Button
                                title="Drop Course"
                                onPress={confirmDrop}
                                style={[styles.modalButton, styles.dropConfirmButton]}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
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
        marginBottom: 20,
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
    universityName: {
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
    warningCard: {
        backgroundColor: colors.warning + '20',
        borderWidth: 1,
        borderColor: colors.warning,
        marginBottom: 24,
    },
    warningIcon: {
        fontSize: 32,
        marginBottom: 12,
    },
    warningTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.warning,
        marginBottom: 8,
    },
    warningText: {
        fontSize: 14,
        color: colors.dark.text,
        lineHeight: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 16,
    },
    courseCard: {
        backgroundColor: colors.dark.surface,
        marginBottom: 16,
    },
    courseInfo: {
        marginBottom: 16,
    },
    courseCodeBadge: {
        backgroundColor: colors.dark.card,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginBottom: 12,
    },
    courseCodeText: {
        fontSize: 13,
        fontWeight: '700',
        color: colors.primary[400],
    },
    courseName: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 12,
    },
    courseDetails: {
        gap: 8,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailLabel: {
        fontSize: 14,
        color: colors.dark.textSecondary,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.dark.text,
    },
    dropButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.error,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    dropIcon: {
        fontSize: 20,
        color: '#ffffff',
        marginRight: 8,
    },
    dropText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff',
    },
    emptyCard: {
        backgroundColor: colors.dark.surface,
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyIcon: {
        fontSize: 48,
        marginBottom: 16,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: colors.dark.textSecondary,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: colors.dark.surface,
        borderRadius: 20,
        padding: 24,
        width: '100%',
        maxWidth: 400,
    },
    modalIcon: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: colors.error + '20',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    modalIconText: {
        fontSize: 32,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.dark.text,
        textAlign: 'center',
        marginBottom: 12,
    },
    modalText: {
        fontSize: 15,
        color: colors.dark.textSecondary,
        textAlign: 'center',
        marginBottom: 16,
    },
    modalCourseInfo: {
        backgroundColor: colors.dark.card,
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
    },
    modalCourseName: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 4,
    },
    modalCourseCode: {
        fontSize: 14,
        color: colors.dark.textSecondary,
    },
    modalWarning: {
        fontSize: 13,
        color: colors.warning,
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 18,
    },
    modalButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    modalButton: {
        flex: 1,
    },
    dropConfirmButton: {
        backgroundColor: colors.error,
    },
});
