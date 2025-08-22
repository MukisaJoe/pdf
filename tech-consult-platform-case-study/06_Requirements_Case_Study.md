# Case Study: Chapter 6 - Requirements Gathering and Analysis

## 6.1 Requirements Gathering Techniques

For the Tech Consult Platform, requirements will be gathered through a combination of techniques to ensure a comprehensive understanding of user needs:
-   **Stakeholder Interviews:** One-on-one sessions with initial investors and industry experts.
-   **User Persona Development:** Creating detailed personas for our primary users (Clients and Consultants).
-   **Competitive Analysis:** Reviewing existing freelance and consultancy platforms to identify standard features and potential differentiators.
-   **Prototyping & Feedback:** Creating interactive wireframes and sharing them with a small group of potential users to gather early feedback.

Requirements will be captured as **User Stories** in the Product Backlog.

## 6.2 User Roles

-   **Client:** A user who wants to hire technical talent for a project. They are typically business owners, project managers, or CTOs.
-   **Consultant:** A user who is a technology professional seeking freelance work. They have specific skills and experience.
-   **Administrator:** An internal user responsible for platform oversight, user support, and content moderation.

## 6.3 Functional Requirements (User Stories)

This is a selection of high-level user stories for the MVP, grouped by epic.

### Epic: User Account Management
-   **As a** new user (Client or Consultant), **I want to** be able to sign up for an account using my email and a password, **so that** I can access the platform.
-   **As a** registered user, **I want to** be able to log in and out of my account, **so that** I can securely manage my activities.
-   **As a** consultant, **I want to** create and edit my profile, including my skills, experience, and portfolio, **so that** I can attract potential clients.
-   **As a** client, **I want to** create and edit my profile, including my company information, **so that** consultants know who I am.

### Epic: Project Lifecycle
-   **As a** client, **I want to** post a new project with a title, detailed description, required skills, and budget, **so that** I can attract bids from qualified consultants.
-   **As a** client, **I want to** view and manage all the projects I have posted on my dashboard, **so that** I can keep track of their status.
-   **As a** consultant, **I want to** search and filter the list of open projects, **so that** I can find work that matches my skills.
-   **As a** consultant, **I want to** submit a proposal (bid) for a project, including my proposed fee and a cover letter, **so that** I can apply for jobs.
-   **As a** client, **I want to** review the proposals and consultant profiles for my project, **so that** I can choose the best candidate.
-   **As a** client, **I want to** accept a proposal to award the project to a consultant, **so that** work can officially begin.

### Epic: Communication
-   **As a** client or consultant, **I want to** have a private messaging system for my active projects, **so that** we can communicate securely and efficiently.
-   **As a** user, **I want to** receive email notifications for key events (e.g., new bid, message received, project awarded), **so that** I stay informed.

## 6.4 Non-Functional Requirements

-   **Performance:**
    -   The web application must load in under 3 seconds on a standard broadband connection.
    -   API responses must be returned in under 500ms for typical requests.
-   **Security:**
    -   All user data, especially passwords, must be securely hashed and stored.
    -   The platform must be protected against common web vulnerabilities (e.g., XSS, CSRF, SQL Injection).
    -   All traffic must be encrypted using HTTPS.
-   **Usability:**
    -   The user interface must be intuitive and easy to navigate for non-technical users.
    -   The platform must be responsive and work seamlessly on modern web browsers on desktop and mobile devices.
-   **Reliability:**
    -   The platform must have an uptime of at least 99.9%.
    -   The system should have a robust backup and recovery plan to prevent data loss.
-   **Scalability:**
    -   The architecture must be designed to handle a growing number of users and projects without a significant degradation in performance.
