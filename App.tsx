import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Screens
import { LoginScreen } from './src/screens/LoginScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { GradesScreen } from './src/screens/GradesScreen';
import { PaymentsScreen } from './src/screens/PaymentsScreen';
import { CourseAddScreen } from './src/screens/CourseAddScreen';
import { CourseDropScreen } from './src/screens/CourseDropScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { DropoutScreen } from './src/screens/DropoutScreen';

import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const CourseStack = createNativeStackNavigator();

// Course Management Stack Navigator
function CourseManagementNavigator() {
    return (
        <CourseStack.Navigator screenOptions={{ headerShown: false }}>
            <CourseStack.Screen name="CourseAdd" component={CourseAddScreen} />
            <CourseStack.Screen name="CourseDrop" component={CourseDropScreen} />
        </CourseStack.Navigator>
    );
}

// Main Tab Navigator with Icons
function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: colors.primary[400],
                tabBarInactiveTintColor: colors.dark.textMuted,
                tabBarShowLabel: true,
                tabBarLabelStyle: styles.tabLabel,
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Grades"
                component={GradesScreen}
                options={{
                    tabBarLabel: 'Grades',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'bar-chart' : 'bar-chart-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="CourseManagement"
                component={CourseManagementNavigator}
                options={{
                    tabBarLabel: 'Courses',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'book' : 'book-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Payments"
                component={PaymentsScreen}
                options={{
                    tabBarLabel: 'Payments',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'card' : 'card-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

// Main App Navigation
export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading/splash screen
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <StatusBar style="light" />
                <ActivityIndicator size="large" color={colors.primary[500]} />
            </View>
        );
    }

    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animation: 'slide_from_right',
                    }}
                >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Main" component={MainTabNavigator} />
                    <Stack.Screen name="Dropout" component={DropoutScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark.background,
    },
    tabBar: {
        backgroundColor: colors.dark.surface,
        borderTopWidth: 1,
        borderTopColor: colors.dark.border,
        paddingTop: 8,
        paddingBottom: 8,
        height: 70,
    },
    tabLabel: {
        fontSize: 11,
        fontWeight: '600',
        marginTop: 4,
    },
});
