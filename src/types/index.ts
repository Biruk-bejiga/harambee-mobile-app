// User and Authentication Types
export interface User {
    id: string;
    studentId: string;
    name: string;
    email: string;
    avatar?: string;
    department: string;
    program: 'Undergraduate' | 'Graduate';
    admissionType: string;
    section: string;
    year: number;
    semester: number;
}

// Grade Types
export interface Grade {
    courseCode: string;
    courseName: string;
    creditHours: number;
    grade: string;
    gradePoint: number;
}

export interface GradeReport {
    year: number;
    semester: number;
    courses: Grade[];
    totalCredit: number;
    totalPoint: number;
    gpa: number;
}

export interface CumulativeGrades {
    previousSemester: {
        totalCredit: number;
        totalPoint: number;
        gpa: number;
    };
    previousCumulative: {
        totalCredit: number;
        totalPoint: number;
        gpa: number;
    };
    currentSemester: {
        totalCredit: number;
        totalPoint: number;
        gpa: number;
    };
    cumulative: {
        totalCredit: number;
        totalPoint: number;
        gpa: number;
    };
}

// Payment Types
export interface Payment {
    id: string;
    type: string;
    amount: number;
    currency: string;
    date: string;
    status: 'paid' | 'unpaid';
}

// Course Types
export interface Course {
    id: string;
    courseCode: string;
    courseName: string;
    creditHours: number;
    instructor?: string;
    schedule?: string;
    enrolled?: boolean;
}

// Department Types
export interface Department {
    name: string;
    head: string;
    contact: string;
    programs: string[];
    facultyCount: number;
}

// Navigation Types
export type RootStackParamList = {
    Login: undefined;
    Main: undefined;
    GradeDetail: { year: number; semester: number };
    PaymentDetail: { paymentId: string };
    CourseDetail: { courseId: string };
};

export type TabParamList = {
    Dashboard: undefined;
    Grades: undefined;
    Payments: undefined;
    CourseManagement: undefined;
    Profile: undefined;
};
