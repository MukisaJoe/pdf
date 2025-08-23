# App Builder Case Study: Chapter 7 - System Modeling

## 7.1 The Purpose of Modeling

For "Project Fusion," system models are essential for understanding the two levels of the system: the user's experience in the "Studio" and the complex pipeline of services that work behind the scenes to generate an application. The following diagrams use Mermaid syntax to visualize these aspects.

## 7.2 Use Case Diagram

This diagram illustrates the primary functions of the Fusion platform from the perspective of its users.

**Actors:**
-   **App Creator:** The internal employee building an application.
-   **Platform Administrator:** The IT user who manages the Fusion platform.

**Diagram (using Mermaid Syntax):**

```mermaid
graph TD
    subgraph "Fusion App Builder Platform"
        UC1(Define App Vibe)
        UC2(Review & Approve Schema)
        UC3(Generate Application)
        UC4(Manage My Apps)
        UC5(Administer Platform)

        subgraph "Internal Generation Steps"
          direction LR
          G1(Generate Backend)
          G2(Generate Frontend)
          G3(Deploy Application)
        end
    end

    App_Creator[App Creator]
    Admin[Platform Administrator]

    App_Creator -- "Performs" --> UC1
    App_Creator -- "Performs" --> UC2
    App_Creator -- "Initiates" --> UC3
    App_Creator -- "Performs" --> UC4

    Admin -- "Performs" --> UC5

    UC3 -- "includes" --> G1
    UC3 -- "includes" --> G2
    UC3 -- "includes" --> G3
```
*Note: The diagram shows the App Creator's journey from defining the "vibe" to managing their created apps. The `Generate Application` use case is a high-level function that includes the three core internal steps: generating the backend, frontend, and deploying the result.*

## 7.3 Component Diagram

This diagram details the microservices architecture of the Fusion platform itself.

**Components:**
-   **Fusion Studio:** The user-facing React SPA.
-   **Orchestration API:** The main backend API that the Studio talks to.
-   **AI Core Service:** A specialized service for NLP and schema generation.
-   **Code Generation Services:** Separate services for generating backend (Django) and frontend (React) code.
-   **Deployment Service:** A service that interfaces with the cloud provider to deploy the generated code.
-   **Platform DB:** PostgreSQL database for the Fusion platform itself.

**Diagram (using Mermaid Syntax):**

```mermaid
graph TD
    App_Creator[App Creator]

    subgraph "Fusion Platform Backend"
        Orchestration[Orchestration API]
        AI_Core[AI Core Service]
        Backend_Gen[Backend Gen. Service]
        Frontend_Gen[Frontend Gen. Service]
        Deployment[Deployment Service]
        Platform_DB[(Platform DB <br> PostgreSQL)]
    end

    subgraph "Browser"
        Studio[<--> Fusion Studio <br> React SPA]
    end

    subgraph "Cloud Infrastructure"
       Generated_App[<--> Generated App <br> Hosted Container]
    end

    App_Creator -- "Uses" --> Studio
    Studio -- "1. Send Vibe" --> Orchestration
    Orchestration -- "2. Get Schema" --> AI_Core
    Orchestration -- "3. Generate Code" --> Backend_Gen
    Orchestration -- "4. Generate UI" --> Frontend_Gen
    Orchestration -- "5. Deploy" --> Deployment
    Deployment -- "Creates" --> Generated_App
    Orchestration -- "Stores App Metadata" --> Platform_DB
```
*Note: This diagram shows the complex workflow orchestrated by the main **Orchestration API**. The **Studio** sends the user's "vibe" (1). The orchestrator calls the **AI Core Service** to get a schema (2). It then calls the **Backend** (3) and **Frontend** (4) generation services. Finally, it tells the **Deployment Service** to deploy the new application (5). The **Platform DB** stores metadata about the apps created.*

These models clearly separate the user's simple experience from the complex, multi-service pipeline that powers the platform.
