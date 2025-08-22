# Case Study: Chapter 5 - Introduction to System Design and Analysis

## 5.1 System Definition

The "Tech Consult Platform" is an information system designed to facilitate interactions within a two-sided marketplace. It is a web-based application comprising several interconnected components: a user-facing frontend, a backend application server, a database, and interfaces to external services. Its primary purpose is to enable clients to post technology projects and for consultants to bid on and work on these projects in a seamless and trusted environment.

## 5.2 System Boundaries

Defining the system's boundaries is crucial for understanding its scope.

-   **Inside the System:**
    -   **Frontend Application:** The React-based single-page application (SPA) that users interact with in their web browsers.
    -   **Backend Application:** The Django-based server that handles business logic, data processing, and API requests.
    -   **Database:** The PostgreSQL database that stores all platform data, including user profiles, projects, bids, and messages.
    -   **Application Server:** The web server (e.g., Gunicorn) that runs the Django application.

-   **Outside the System (External Entities):**
    -   **Users:** Clients, Consultants, and Administrators who interact with the system via the frontend.
    -   **Email Service:** An external service (e.g., SendGrid, AWS SES) for sending transactional emails (e.g., registration confirmation, notifications).
    -   **Payment Gateway:** (Future Scope) An external service (e.g., Stripe, PayPal) for handling financial transactions.

## 5.3 Roles in Analysis and Design

-   **System Analyst:** This role will be primarily filled by the **Product Owner**. They are responsible for analyzing the needs of the business and the users, defining the requirements, and ensuring the system solves the right problems. They bridge the gap between business stakeholders and the technical team.
-   **System Designer:** This role will be shared among the **Lead Backend and Frontend Developers**, sometimes referred to as System Architects in a larger team. They are responsible for translating the requirements defined by the Product Owner into a viable technical design, including the system architecture, database schema, and component interfaces.

## 5.4 System Development Life Cycle (SDLC) Model

As established in our project methodology, we will use an **Agile (Iterative) SDLC model**, specifically Scrum.

This choice is a direct response to the needs of the project:
-   **Requirement Volatility:** We anticipate that user feedback will lead to changes in requirements. An iterative model allows us to incorporate these changes in successive development cycles (sprints).
-   **Incremental Delivery:** The model enables us to deliver a functional piece of the system at the end of each two-week sprint. This allows for early and continuous feedback, reducing the risk of building the wrong product.
-   **Collaboration:** The Agile SDLC emphasizes close collaboration between the Product Owner, developers, and stakeholders, ensuring the final system aligns with business goals.

The SDLC will consist of a series of sprints, each containing a cycle of planning, requirements analysis, design, implementation, and testing, culminating in a potentially shippable product increment. This approach contrasts sharply with a linear Waterfall model, which would be too rigid for a new product in a competitive market.
