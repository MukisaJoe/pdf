# App Builder Case Study: Chapter 3 - Project Planning and Scoping

## 3.1 Project Scope Statement

**Project:** Project Fusion (Internal App Builder MVP)

**Project Justification:** To reduce the growing backlog of requests for simple internal applications on the central IT department and to empower business units to automate their own processes with tailored, data-driven tools.

**Project Deliverables (for MVP):**
1.  The deployed, functional V1.0 of the Fusion platform, accessible to a pilot group of users.
2.  A set of training materials and documentation for the pilot group.
3.  A final report detailing the results and feedback from the pilot program, with recommendations for a V2.0.

**In-Scope Features for MVP:**
The MVP will focus on the core "text-to-CRUD-app" user journey:
-   A user interface where a user can describe a data entity in natural language (e.g., "I need a way to track office laptops with fields for serial number, assigned user, and purchase date").
-   An AI-powered service that parses the text and suggests a structured data schema (e.g., `laptop` table with fields: `serial_number: TEXT`, `assigned_user: TEXT`, `purchase_date: DATE`).
-   The ability for the user to review and approve the suggested schema.
-   An automated backend generation service that creates a new database table and a corresponding set of RESTful API endpoints for CRUD (Create, Read, Update, Delete) operations.
-   An automated frontend generation service that creates a standard, non-customizable web interface for the application, including a data table view and forms for creating/editing entries.

**Out-of-Scope Features for MVP:**
-   Customizing the UI of the generated application (e.g., changing colors, layouts).
-   Defining relationships between different data models (e.g., linking a "user" table to the "laptop" table).
-   Complex field validation rules (e.g., "serial number must start with 'SN'").
-   User roles and permissions within the generated applications.
-   Connecting to external data sources or APIs.

**Project Constraints:**
-   **Budget:** The project must be completed within the allocated internal budget of $450,000.
-   **Timeline:** The MVP must be ready for the pilot program within 9 months.
-   **Pilot Group:** The project is dependent on the active and consistent participation of the pilot user group from HR, Finance, and Operations.

**Project Assumptions:**
-   A fine-tuned Large Language Model (LLM) can achieve sufficient accuracy in translating natural language descriptions into structured data schemas.
-   The generated applications can be securely hosted within our existing cloud infrastructure.
-   The pilot users have a genuine need for the simple CRUD applications the MVP can generate.

## 3.2 Work Breakdown Structure (WBS) - High Level

This WBS is structured around the core components of the app builder platform.

1.  **Project Management**
    1.1. Detailed Project & Sprint Planning
    1.2. Pilot User Group Management
    1.3. Stakeholder Reporting
2.  **Phase 1: Core AI Engine Development**
    2.1. Research & Selection of base LLM
    2.2. Data Collection & Fine-Tuning
    2.3. Natural Language to Schema Service (API)
3.  **Phase 2: Backend Generation Service**
    3.1. Dynamic Database Schema Creator
    3.2. Dynamic API Endpoint Generator (e.g., Django model to REST API)
4.  **Phase 3: Frontend Generation Service**
    4.1. Standard UI Component Library
    4.2. Dynamic Form & Table Generator (e.g., JSON schema to React form)
5.  **Phase 4: Fusion Platform UI/UX**
    5.1. Main User Dashboard
    5.2. App Creation Wizard Interface
    5.3. Generated App Hosting & Access
6.  **Phase 5: Pilot Program & Evaluation**
    6.1. Onboarding & Training of Pilot Users
    6.2. Feedback Collection & Analysis
    6.3. Final Report & V2.0 Recommendations

This WBS breaks down a highly complex project into manageable, parallel streams of work, focusing on delivering the core value proposition first.
