import { User, Grade, Payment, Course, Department, GradeReport, CumulativeGrades } from '../types';

export const mockUser: User = {
    id: '1',
    studentId: 'STD2025001',
    name: 'Biruk Bejiga',
    email: 'biruk.bejiga@student.harambee.edu.et',
    department: 'Accounting and Finance',
    program: 'Undergraduate',
    admissionType: 'Ext',
    section: 'Section A',
    year: 3,
    semester: 3,
};

export const mockGrades: Grade[] = [
    {
        courseCode: 'AcFn 3052',
        courseName: 'Financial Modeling',
        creditHours: 2,
        grade: 'A',
        gradePoint: 4.0,
    },
    {
        courseCode: 'Mgmt 3050',
        courseName: 'Operations Research',
        creditHours: 3,
        grade: 'B-',
        gradePoint: 2.67,
    },
];

export const mockGradeReport: GradeReport = {
    year: 3,
    semester: 3,
    courses: mockGrades,
    totalCredit: 5,
    totalPoint: 16.25,
    gpa: 3.25,
};

export const mockCumulativeGrades: CumulativeGrades = {
    previousSemester: {
        totalCredit: 13,
        totalPoint: 37.25,
        gpa: 2.87,
    },
    previousCumulative: {
        totalCredit: 101,
        totalPoint: 295.75,
        gpa: 2.93,
    },
    currentSemester: {
        totalCredit: 5,
        totalPoint: 16.25,
        gpa: 3.25,
    },
    cumulative: {
        totalCredit: 106,
        totalPoint: 312.0,
        gpa: 2.94,
    },
};

export const mockPayments: Payment[] = [
    {
        id: '1',
        type: 'Tuition Fee',
        amount: 630,
        currency: 'Birr',
        date: '2025-11-11',
        status: 'paid',
    },
    {
        id: '2',
        type: 'Tuition Fee',
        amount: 630,
        currency: 'Birr',
        date: '2025-10-13',
        status: 'paid',
    },
    {
        id: '3',
        type: 'Semester Registration Fee',
        amount: 200,
        currency: 'Birr',
        date: '2025-10-13',
        status: 'paid',
    },
    {
        id: '4',
        type: 'Tuition Fee',
        amount: 1050,
        currency: 'Birr',
        date: '2025-05-26',
        status: 'paid',
    },
    {
        id: '5',
        type: 'Semester Registration Fee',
        amount: 200,
        currency: 'Birr',
        date: '2025-05-26',
        status: 'paid',
    },
];

export const mockTotalPaid = mockPayments.reduce((sum, payment) =>
    payment.status === 'paid' ? sum + payment.amount : sum, 0
);

export const mockAvailableCourses: Course[] = [
    {
        id: '1',
        courseCode: 'MGMT4022',
        courseName: 'Management of Financial Institutions',
        creditHours: 3,
        instructor: 'Dr. Ahmed Hassan',
        schedule: 'Mon/Wed 10:00-11:30',
        enrolled: false,
    },
    {
        id: '2',
        courseCode: 'MGMT4012',
        courseName: 'Innovation Management and Entrepreneurship',
        creditHours: 3,
        instructor: 'Prof. Sarah Williams',
        schedule: 'Tue/Thu 14:00-15:30',
        enrolled: false,
    },
    {
        id: '3',
        courseCode: 'ACFN4015',
        courseName: 'Advanced Financial Analysis',
        creditHours: 4,
        instructor: 'Dr. John Smith',
        schedule: 'Mon/Wed/Fri 13:00-14:00',
        enrolled: false,
    },
];

export const mockEnrolledCourses: Course[] = [
    {
        id: '10',
        courseCode: 'AcFn 3052',
        courseName: 'Financial Modeling',
        creditHours: 2,
        instructor: 'Dr. Mohammed Ali',
        schedule: 'Tue/Thu 10:00-11:00',
        enrolled: true,
    },
    {
        id: '11',
        courseCode: 'Mgmt 3050',
        courseName: 'Operations Research',
        creditHours: 3,
        instructor: 'Prof. Abebe Tadesse',
        schedule: 'Mon/Wed 15:00-16:30',
        enrolled: true,
    },
];

export const mockDepartment: Department = {
    name: 'Accounting and Finance',
    head: 'Dr. Solomon Kebede',
    contact: '+251 11 123 4567',
    programs: ['B.Sc in Accounting', 'B.Sc in Finance', 'MBA in Finance'],
    facultyCount: 24,
};
