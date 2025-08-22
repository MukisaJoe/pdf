# Cybersecurity Case Study: Chapter 9 - Managing Technical Projects and Teams

## 9.1 Project Team Roles and Responsibilities

"Project Sentinel" requires a cross-functional team of highly specialized experts. Standard web development roles are insufficient; we need a team structured for deep research and mission-critical engineering.

-   **Project Manager:** Responsible for the overall project timeline, budget ($750k), and high-level reporting to the CISO and executive stakeholders.
-   **Product Owner:** The single point of contact for defining the project's strategic goals. They prioritize which threats to target and what the business success criteria are (e.g., acceptable false positive rates).
-   **Research Team Lead:** A senior data scientist or security researcher who guides the R&D effort on the Kanban board and is responsible for the quality of the final AI model.
-   **Data Scientists / ML Engineers (3):** The core research team responsible for data analysis, feature engineering, model training, and validation.
-   **Security Researchers (2):** Domain experts who provide deep knowledge of threat actor techniques and help create realistic test scenarios.
-   **Scrum Master:** A dedicated facilitator for the Development Team, ensuring the Scrum process is followed and the team is operating efficiently.
-   **Software Engineers (4):** The core Development Team, with expertise in Go, Python, distributed systems, and Kafka. They build the production infrastructure, agents, and control plane.
-   **DevOps/MLOps Engineer:** A specialized engineer responsible for the Kubernetes cluster, the CI/CD pipeline for software, and the separate MLOps pipeline for deploying, monitoring, and retraining the AI models.

## 9.2 Team Structure

The project will operate with a **two-team structure** under a single Project Manager and Product Owner.

1.  **The Research Team (Kanban):** Comprised of the Research Lead, Data Scientists, and Security Researchers. They operate on a continuous flow model using a Kanban board to manage their experiments.
2.  **The Development Team (Scrum):** Comprised of the Software Engineers and the DevOps/MLOps Engineer, facilitated by the Scrum Master. They work in 2-week sprints to build the production system.

The **Product Owner** acts as the crucial link, translating the validated findings from the Research Team into a prioritized backlog for the Development Team.

## 9.3 Communication Plan

Our communication plan is designed to support the hybrid methodology and ensure tight alignment between all parties.

| Communication Event | Purpose | Frequency | Audience | Channel |
|---|---|---|---|---|
| **Dev Team Daily Scrum** | Sync on sprint progress, identify engineering blockers. | Daily | Development Team, Scrum Master | Video Stand-up |
| **Research Team Daily Sync** | Sync on research progress, data needs, and experiment results. | Daily | Research Team, Research Lead | Video Stand-up |
| **Sprint Planning** | Plan the Development Team's work for the next 2-week sprint. | Every 2 weeks | Development Team, PO, Scrum Master | Meeting |
| **Sprint Review** | Demonstrate the latest software increment from the dev team. | Every 2 weeks | Dev Team, PO, Scrum Master, Stakeholders | Live Demo |
| **The "Translation" Meeting** | **CRITICAL:** Research team presents validated findings. PO and tech leads create new backlog items for the dev team. | Every 2 weeks | PO, PM, Research Lead, Dev Lead | Mandatory Meeting |
| **CISO Stakeholder Briefing** | Report on overall project status, budget, risks, and major risks. | Monthly | PM, PO, CISO, IT Leadership | Formal Presentation |
| **Project-wide Chat** | For all informal, cross-team communication. | Continuous | Entire Project Sentinel Team | Slack |
| **Code & Infrastructure Reviews** | Ensure quality and share knowledge. | Continuous | Developers, DevOps Engineer | GitHub Pull Requests |

This structure provides both the flexibility needed for R&D and the discipline needed for engineering, with a communication backbone designed to keep the two tightly synchronized.
