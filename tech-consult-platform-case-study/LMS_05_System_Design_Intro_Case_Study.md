# LMS Case Study: Chapter 5 - Introduction to System Design and Analysis

## 5.1 System Definition

The "Emerging Tech LMS" is a content-delivery information system. Its primary function is to provide a structured and engaging learning experience to students through a web-based application. The system comprises a collection of software components, including a user-facing frontend, a backend application server for business logic, a PostgreSQL database for data persistence, and specialized services for handling video content.

## 5.2 System Boundaries

Defining the system's boundaries is essential for managing complexity and focusing development efforts.

-   **Inside the System:**
    -   **Frontend Application:** The React-based single-page application (SPA) that students use to browse courses, watch videos, and take quizzes.
    -   **Backend Application:** The Django server that manages user accounts, course data, student progress, quiz results, and certificate issuance. It exposes a REST API for the frontend.
    -   **Database:** The PostgreSQL database that stores all structured data, such as user information, course structures, and quiz scores.
    -   **Video Processing Service:** An internal service responsible for transcoding uploaded video content into various formats suitable for web streaming.
    -   **Admin CMS:** A section of the application for administrators to manage courses, users, and content.

-   **Outside the System (External Entities):**
    -   **Users:** Students and Administrators are the primary actors interacting with the system.
    -   **Content Creators:** Instructors who create the course materials (videos, documents, quiz questions) but interact with the system via the Admin CMS, not as a separate user role in the V1.0.
    -   **Content Delivery Network (CDN):** An external service (e.g., Amazon CloudFront) used to distribute video content globally for fast and reliable streaming.
    -   **Email Service:** An external service (e.g., SendGrid) for sending transactional emails like enrollment confirmations and password resets.

## 5.3 Roles in Analysis and Design

-   **System Analyst:** This function is primarily carried out by the **Product Owner**. They are responsible for researching user needs, analyzing the market, and translating these insights into detailed functional and non-functional requirements for the LMS.
-   **System Designer:** This is a collaborative role led by the **Lead Backend and Frontend Developers**. They are responsible for designing the overall system architecture, database schema, API contracts, and component interactions to meet the specified requirements in a scalable and maintainable way.

## 5.4 System Development Life Cycle (SDLC) Model

As established in our project methodology, we will use an **Agile (Iterative) SDLC model** based on the Scrum framework.

This iterative approach is critical for an LMS project for several reasons:
-   **Evolving User Experience:** The ideal way to present course material and assess learning is not always clear at the start. The iterative model allows us to build a basic course player and quiz engine, gather feedback from beta students, and refine the experience in subsequent sprints.
-   **Technical Complexity:** Features like video streaming and progress tracking can have unforeseen technical challenges. The SDLC allows us to tackle these in focused sprints, de-risking the project incrementally.
-   **Alignment with Content Creation:** The iterative nature allows the platform's feature set to evolve in alignment with the content being produced, ensuring a seamless fit between the technology and the educational material.

This model provides the flexibility needed to build a successful and engaging learning platform in a dynamic and competitive market.
