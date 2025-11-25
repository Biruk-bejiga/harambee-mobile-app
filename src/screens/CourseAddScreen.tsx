import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card } from '../components/ui/Card';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { colors } from '../theme/colors';
import { mockAvailableCourses } from '../data/mockData';

export const CourseAddScreen = ({ navigation }: any) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [addedCourses, setAddedCourses] = useState<string[]>([]);

    const filteredCourses = mockAvailableCourses.filter(
        (course) =>
            course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.courseCode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddCourse = (courseId: string) => {
        if (addedCourses.includes(courseId)) {
            setAddedCourses(addedCourses.filter((id) => id !== courseId));
        } else {
            setAddedCourses([...addedCourses, courseId]);
        }
    };

    const CourseCard = ({ course }: any) => {
        const isAdded = addedCourses.includes(course.id);

        return (
            <Card style={styles.courseCard}>
                <View style={styles.courseHeader}>
                    <View style={styles.courseCodeBadge}>
                        <Text style={styles.courseCodeText}>{course.courseCode}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => handleAddCourse(course.id)}
                        style={[
                            styles.addButton,
                            isAdded && styles.addButtonActive,
                        ]}
                    >
                        <Text style={[styles.addButtonText, isAdded && styles.addButtonTextActive]}>
                            {isAdded ? '✓ Added' : '+ Add'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.courseName}>{course.courseName}</Text>

                <View style={styles.courseDetails}>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Credit Hours</Text>
                        <Text style={styles.detailValue}>{course.creditHours}</Text>
                    </View>
                    {course.instructor && (
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Instructor</Text>
                            <Text style={styles.detailValue}>{course.instructor}</Text>
                        </View>
                    )}
                    {course.schedule && (
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Schedule</Text>
                            <Text style={styles.detailValue}>{course.schedule}</Text>
                        </View>
                    )}
                </View>
            </Card>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header
                title="Course Add"
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

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search courses..."
                        placeholderTextColor={colors.dark.textMuted}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* Available Courses */}
                <Text style={styles.sectionTitle}>Available Courses</Text>

                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}

                {filteredCourses.length === 0 && (
                    <Card style={styles.emptyCard}>
                        <Text style={styles.emptyIcon}>📚</Text>
                        <Text style={styles.emptyText}>No courses found</Text>
                        <Text style={styles.emptySubtext}>
                            Try adjusting your search criteria
                        </Text>
                    </Card>
                )}
            </ScrollView>

            {/* Bottom Action Bar */}
            {addedCourses.length > 0 && (
                <View style={styles.bottomBar}>
                    <View style={styles.summaryContainer}>
                        <Text style={styles.summaryText}>
                            {addedCourses.length} course{addedCourses.length !== 1 ? 's' : ''} selected
                        </Text>
                        <Text style={styles.summarySubtext}>
                            {mockAvailableCourses
                                .filter((c) => addedCourses.includes(c.id))
                                .reduce((sum, c) => sum + c.creditHours, 0)}{' '}
                            total credits
                        </Text>
                    </View>
                    <Button
                        title="Submit"
                        onPress={() => { }}
                        size="medium"
                        style={styles.submitButton}
                    />
                </View>
            )}
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
        paddingBottom: 120,
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.dark.surface,
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 24,
        borderWidth: 2,
        borderColor: colors.dark.border,
    },
    searchIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 16,
        color: colors.dark.text,
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
    courseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    courseCodeBadge: {
        backgroundColor: colors.dark.card,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    courseCodeText: {
        fontSize: 13,
        fontWeight: '700',
        color: colors.primary[400],
    },
    addButton: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.accent.orange,
    },
    addButtonActive: {
        backgroundColor: colors.success,
        borderColor: colors.success,
    },
    addButtonText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.accent.orange,
    },
    addButtonTextActive: {
        color: '#ffffff',
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
    detailItem: {
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
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.dark.surface,
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: colors.dark.border,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 10,
    },
    summaryContainer: {
        flex: 1,
    },
    summaryText: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 4,
    },
    summarySubtext: {
        fontSize: 13,
        color: colors.dark.textSecondary,
    },
    submitButton: {
        paddingHorizontal: 32,
    },
});
