# App Builder Case Study: Chapter 6 - Requirements

## 6.1 Requirements Gathering Process

Requirements for Project Fusion will be gathered primarily through **interactive, hands-on workshops** with our pilot group of non-technical business analysts. The process will be less about asking what they want and more about observing what they do with prototypes of the tool. This observational approach is key to building a truly intuitive product.

## 6.2 User Roles

-   **App Creator:** A non-technical employee from a business unit (e.g., HR, Finance) who needs to build a simple application to solve a specific business problem (e.g., track a process, manage a list).
-   **Platform Administrator:** A member of the central IT department responsible for managing the Fusion platform itself, monitoring resource usage, and having oversight of all generated applications.

## 6.3 Functional Requirements (User Stories)

### Epic: App Conception & Schema Design
-   **As an** App Creator, **I want to** describe the application I need in plain English, **so that** the system can understand my intent.
-   **As an** App Creator, **I want to** see the AI's suggested data schema in a simple, visual format, **so that** I can understand and verify it.
-   **As an** App Creator, **I want to** be able to make simple edits to the suggested schema (e.g., rename a field, change a field type from 'text' to 'date'), **so that** I can refine the data model.

### Epic: App Generation & Deployment
-   **As an** App Creator, **I want to** click a single "Build My App" button, **so that** the system automatically generates the database, backend API, and frontend UI.
-   **As an** App Creator, **I want to** be given a unique, secure URL for my new application once it's built, **so that** I can access it and share it with my team.
-   **As an** App Creator, **I want** my generated app to be deployed automatically, without me needing to understand servers or infrastructure.

### Epic: App Management
-   **As an** App Creator, **I want to** see a dashboard listing all the applications I have created, **so that** I can manage my portfolio of tools.
-   **As an** App Creator, **I want to** be able to delete an application I no longer need, **so that** I can clean up my workspace.

### Epic: Platform Administration
-   **As a** Platform Administrator, **I want to** see a list of all applications created across the organization, **so that** I have oversight.
-   **As a** Platform Administrator, **I want to** monitor the resource consumption (CPU, database size) of each generated application, **so that** I can manage costs.
-   **As a** Platform Administrator, **I want to** be able to archive or disable a generated app if it violates company policy, **so that** I can maintain governance.

## 6.4 Non-Functional Requirements

-   **Usability (Critical):**
    -   The entire process, from description to a deployed app, must be achievable by a target user with no prior coding experience.
    -   The user interface must be free of technical jargon.
    -   The System Usability Scale (SUS) score must be > 80.
-   **Performance:**
    -   The time from clicking "Build My App" to receiving a live URL should be less than **5 minutes**.
    -   The AI's response time for suggesting a schema should be less than **10 seconds**.
-   **Security:**
    -   All generated applications must be secure by default, with basic protections against common web vulnerabilities (XSS, CSRF).
    -   Generated applications must be isolated from each other; a bug in one app cannot affect another.
    -   All generated apps must enforce the company's standard single sign-on (SSO) for access.
-   **Maintainability of Generated Code:**
    -   The code produced by the generation services must be clean, well-structured, and follow company coding standards. This is crucial for the rare case where an app becomes mission-critical and needs to be handed over to the IT department for long-term maintenance and enhancement.
