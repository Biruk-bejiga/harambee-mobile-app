# Harambee Student Portal - Mobile Application

A modern, production-ready student portal mobile application built with React Native, Expo, and featuring a beautiful UI with gradient designs and glassmorphism effects.

## 🎨 Features

- **Modern UI/UX**: Beautiful gradient-based design with glassmorphism effects
- **Dark Mode**: Sleek dark theme optimized for mobile viewing
- **Smooth Animations**: Micro-animations and transitions throughout the app
- **Responsive Design**: Works perfectly on all screen sizes

### Core Features

- ✅ **Login & Authentication**: Secure login with email/password and student ID options
- ✅ **Dashboard**: Overview with GPA, credits, quick actions, and recent activity
- ✅ **Grade Report**: View grades with color-coded badges, GPA visualization, and cumulative summary
- ✅ **Payments**: Track payment history with timeline view and filtering options
- ✅ **Course Management**: Add and drop courses with detailed information
- ✅ **Profile**: View and manage personal and Academic information
- ✅ **Department Info**: Access department details and slip documents

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npx expo start
   ```

3. **Run on a device:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

## 📱 Screens

###  1. Login Screen
- Gradient background with glassmorphic login card
- Email/password validation
- Student ID login option
- "Remember me" and "Forgot Password" options

### 2. Dashboard
- Welcome header with user avatar
- Quick stats cards (CGPA, Credits, Semester)
- Quick action buttons for common tasks
- Recent activity feed
- Department information

### 3. Grades
- Student information card
- Year and semester selectors
- Color-coded grade badges based on performance
- GPA visualization with circular progress indicators
- Cumulative grade summary table

### 4. Payments
- Total paid amount display with gradient card
- Tab navigation (Paid, Unpaid, Attachments)
- Timeline-based payment history
- Payment details with date and amount

### 5. Course Add
- Search and filter functionality
- Available courses with detailed information
- Add/remove course toggle
- Summary bar showing selected courses and total credits

### 6. Course Drop
- List of enrolled courses
- Warning message for drop deadlines
- Confirmation modal before dropping
- Course details (instructor, schedule, credits)

### 7. Profile
- Gradient header with editable avatar
- Personal and academic information
- Department details
- Settings (Dark mode, Notifications, Language)
- Logout option

### 8. Dropout/Slip
- University official header
- View and download slip options
- Academic information summary
- Department contact information

## 🎨 Design System

### Colors

The app uses a modern color palette with gradients:

- **Primary**: Purple to Blue gradient (#a855f7 → #3b82f6)
- **Secondary**: Pink to Purple gradient
- **Success**: Green tones for positive indicators
- **Warning**: Orange/Yellow for warnings
- **Error**: Red for errors and destructive actions

### Components

All UI components are reusable and themeable:

- `Button`: Multiple variants (primary, secondary, outline, ghost) with gradient support
- `Card`: Variants including glassmorphism and elevated styles
- `Input`: Floating label animation with validation states
- `GradientBackground`: Preset gradient combinations
- `Header`: Custom header with gradient background

## 📂 Project Structure

```
harambee-mobile-app/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── GradientBackground.tsx
│   │       ├── Header.tsx
│   │       └── index.ts
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── GradesScreen.tsx
│   │   ├── PaymentsScreen.tsx
│   │   ├── CourseAddScreen.tsx
│   │   ├── CourseDropScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── DropoutScreen.tsx
│   ├── theme/
│   │   └── colors.ts
│   ├── types/
│   │   └── index.ts
│   └── data/
│       └── mockData.ts
├── App.tsx
├── app.json
├── package.json
└── README.md
```

## 🔧 Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Stack & Tab navigators)
- **UI**: Custom components with React Native
- **Gradients**: expo-linear-gradient
- **State Management**: React Hooks
- **Backend Ready**: Prepared for Firebase/Firestore integration

## 🎯 Future Enhancements

### Planned Features

- [ ] Firebase Authentication integration
- [ ] Firestore database for real-time data
- [ ] Cloud Storage for documents
- [ ] Offline support with caching
- [ ] Push notifications
- [ ] Biometric authentication
- [ ] Multi-language support
- [ ] Light theme option
- [ ] Analytics and crash reporting
- [ ] Performance monitoring

## 📝 Development

### Running in Development

```bash
# Start metro bundler
npx expo start

# Run on iOS
npx expo start --ios

# Run on Android
npx expo start --android

# Clear cache
npx expo start -c
```

### Building for Production

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## 🐛 Known Issues

Currently using mock data for development. Backend integration coming soon.

## 📄 License

This project is proprietary software developed for Harambee University.

## 👥 Contact

For support or inquiries, contact the Registrar's Office at Harambee University.

---

**Built with ❤️ for Harambee University Students**
