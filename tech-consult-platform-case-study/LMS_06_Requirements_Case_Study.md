# LMS Case Study: Chapter 6 - Requirements Gathering and Analysis

## 6.1 Requirements Gathering Techniques
Requirements for the Emerging Tech LMS will be gathered through a user-centered design process, including:
-   **Interviews:** Conducting interviews with target users (mid-career tech professionals) to understand their learning goals and frustrations with existing platforms.
-   **Workshops:** Holding workshops with internal content creators to understand their needs for managing and uploading course materials.
-   **Prototyping:** Developing and testing interactive prototypes of the learning interface with a beta group of students.

All gathered requirements will be translated into user stories and managed in the product backlog.

## 6.2 User Roles (for V1.0)

-   **Student:** The primary user of the platform. Their goal is to learn new skills by enrolling in and completing courses.
-   **Administrator:** An internal user responsible for managing the platform, including uploading new courses, managing student accounts, and ensuring content quality.

## 6.3 Functional Requirements (User Stories)

This is a selection of high-level user stories for the V1.0 launch.

### Epic: Account & Profile Management
-   **As a** new student, **I want to** sign up for an account with my email, **so that** I can enroll in courses.
-   **As a** student, **I want to** manage my profile, including my name and password, **so that** my account is personalized and secure.
-   **As a** student, **I want to** see a dashboard of my enrolled courses and my progress in each, **so that** I can easily resume learning.

### Epic: Course Discovery & Enrollment
-   **As a** student, **I want to** browse a catalog of all available courses, **so that** I can see what the platform offers.
-   **As a** student, **I want to** search for courses by keyword and filter by technology (e.g., "AI", "Blockchain"), **so that** I can find relevant content quickly.
-   **As a** student, **I want to** view a detailed course landing page with a description, syllabus, and instructor bio, **so that** I can make an informed enrollment decision.
-   **As a** student, **I want to** enroll in a course with a single click, **so that** I can start learning immediately.

### Epic: Learning Experience
-   **As a** student, **I want to** view course content in a structured way, with sections and lessons, **so that** I can navigate the material easily.
-   **As a** student, **I want to** watch course videos in a high-quality, reliable video player with playback speed controls, **so that** I can have a good viewing experience.
-   **As a** student, **I want to** have my video progress saved automatically, **so that** I can pick up where I left off.
-   **As a** student, **I want to** take a multiple-choice quiz at the end of a course, **so that** I can test my knowledge.
-   **As a** student, **I want to** receive a downloadable PDF certificate upon successfully completing a course, **so that** I have proof of my achievement.

### Epic: Administration
-   **As an** administrator, **I want to** access a secure admin dashboard, **so that** I can manage the platform.
-   **As an** administrator, **I want to** upload, edit, and organize course content, including videos and quiz questions, **so that** I can manage the course library.
-   **As an** administrator, **I want to** view a list of all students and manage their accounts, **so that** I can provide customer support.

## 6.4 Non-Functional Requirements

-   **Performance:**
    -   Video startup time must be under 2 seconds.
    -   Page load times for course catalogs and dashboards must be under 3 seconds.
-   **Reliability:**
    -   The platform must maintain 99.9% uptime.
    -   Video streaming must be smooth and without buffering on a standard internet connection.
-   **Scalability:**
    -   The system must support at least 1,000 concurrent video streams during peak usage.
-   **Security:**
    -   Student data and progress must be kept secure and private.
    -   Course content (videos) must be protected from unauthorized downloading.
-   **Usability:**
    -   The learning interface must be extremely intuitive and accessible to users with varying levels of technical proficiency.
    -   The platform must be fully responsive and provide a seamless experience on desktop, tablet, and mobile browsers.
