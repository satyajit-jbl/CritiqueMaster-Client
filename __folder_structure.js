/**
 * src/
│
├── assets/                   # Static assets (images, fonts, etc.)
│   ├── images/
│   ├── styles/               # Global CSS/SCSS files
│   └── fonts/
│
├── components/               # Reusable components
│   ├── common/               # Generic components (e.g., buttons, modals)
│   ├── layout/               # Layout-specific components
│   └── widgets/              # UI widgets (e.g., cards, tables)
│
├── context/                  # Context API for state management
│   ├── AuthContext.js        # Firebase auth context
│   └── JobContext.js         # Context for job-related state
│
├── firebase/                 # Firebase configuration and services
│   ├── config.js             # Firebase initialization
│   ├── auth.js               # Authentication utilities
│   └── firestore.js          # Firestore-related utilities
│
├── hooks/                    # Custom React hooks
│   ├── useAuth.js            # Hook for Firebase authentication
│   ├── useFirestore.js       # Hook for Firestore data
│   └── useJobs.js            # Hook for job-related actions
│
├── pages/                    # Pages for React Router
│   ├── auth/                 # Authentication-related pages
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── ForgotPassword.js
│   │
│   ├── dashboard/            # Dashboard pages
│   │   ├── index.js          # Main dashboard
│   │   └── JobDashboard.js   # Jobs dashboard
│   │
│   ├── jobs/                 # Job portal pages
│   │   ├── JobList.js        # List of jobs
│   │   ├── JobDetails.js     # Details for a specific job
│   │   └── PostJob.js        # Post a new job
│   │
│   └── others/               # Other pages
│       ├── About.js
│       ├── Contact.js
│       └── NotFound.js       # 404 page
│
├── routes/                   # React Router routes configuration
│   ├── PrivateRoute.js       # Protected routes for authenticated users
│   └── AppRoutes.js          # All application routes
│
├── services/                 # Service APIs
│   ├── jobService.js         # Job-related APIs
│   ├── userService.js        # User-related APIs
│   └── analyticsService.js   # Analytics-related APIs
│
├── store/                    # Redux or Zustand store (if needed)
│   ├── slices/               # Redux slices (if using Redux Toolkit)
│   │   ├── authSlice.js
│   │   ├── jobSlice.js
│   │   └── uiSlice.js
│   └── store.js              # Store configuration
│
├── utils/                    # Utility functions
│   ├── helpers.js            # Generic helper functions
│   ├── constants.js          # App-wide constants
│   └── validators.js         # Form validation functions
│
├── App.js                    # Main React component
├── index.js                  # Entry point
├── reportWebVitals.js        # Performance monitoring
└── setupTests.js             # Jest configuration for testing

 */