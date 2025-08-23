# App Builder Case Study: Chapter 12 - Project Charter: Project Fusion

## Project Title: Project Fusion (Internal "Vibe-Coding" App Builder MVP)

---

### 1. Project Vision & Business Case
**Vision:** To empower our employees by providing a tool that allows them to solve their own business problems, fostering a culture of innovation and dramatically increasing operational agility.

**Business Case:** Our central IT department has a significant backlog of requests for simple internal applications (trackers, lists, forms). Project Fusion will create a self-service, AI-powered platform enabling non-technical employees to build these apps themselves in hours, not months. This will free up IT resources to focus on more complex, strategic initiatives.

---

### 2. Key Objectives & Success Criteria (MVP)

| Objective | Success Criteria (KPI) |
|---|---|
| **Empower Non-Technical Users** | - **Time to First App:** < 1 hour for a new user.<br>- **System Usability Scale (SUS) Score:** > 80. |
| **Prove Technical Viability** | Successfully generate and deploy secure, functional CRUD applications from natural language input. |
| **Reduce IT Burden** | Pilot users successfully build 5+ applications that would otherwise have been IT project requests. |
| **Deliver on Schedule & Budget** | MVP ready for pilot program within 9 months and within the $450,000 budget. |

---

### 3. High-Level Scope (MVP)
**In-Scope:** An AI-powered wizard that takes a natural language description of a data model and generates a secure, deployed web application with a standard CRUD user interface.
**Out-of-Scope:** Custom UI themes, complex business logic/workflows, and relationships between data models.

---

### 4. High-Level Timeline & Budget
-   **Total Duration:** 9 Months
-   **Total Budget:** $450,000

---

### 5. Key Stakeholders & Team
-   **Project Sponsors:** Head of IT, Head of Operations.
-   **Key Stakeholders:** Pilot User Group from HR, Finance, and Operations.
-   **Core Team:** A cross-functional team of a Product Owner, UX Designer, AI/ML Engineers, and Backend/Frontend Engineers.

---

### 6. Architectural Overview
-   **Pattern:** Orchestrated Microservices Architecture.
-   **Key Technologies:** React (Studio UI), Python/FastAPI (AI Service), Python/Jinja2 (Backend Gen), Node.js (Frontend Gen), Go (Deployment), Kubernetes (Hosting).
-   **Core Principle:** A pipeline of specialized services that work together to translate user intent into a fully deployed application.

---

### 7. Major Risks (Top 3)
1.  **Poor User Experience:** The tool is too complex for non-technical users, leading to low adoption. (Mitigation: A dedicated UX designer and bi-weekly hands-on user workshops).
2.  **Inaccurate AI Model:** The AI fails to reliably convert user descriptions into correct data schemas. (Mitigation: Tightly scoped MVP, human-in-the-loop schema validation UI).
3.  **Governance & "Shadow IT":** The tool leads to the proliferation of unsupported, mission-critical apps. (Mitigation: Involve IT governance from day one, build an admin oversight dashboard).

---

### 8. Project Approval

This charter summarizes the high-level plan for the Project Fusion MVP. Approval of this document authorizes the project to move into the funded development phase.

**Approved By:**

_________________________
**Project Sponsor (Head of IT)**

**Date:** _________________
