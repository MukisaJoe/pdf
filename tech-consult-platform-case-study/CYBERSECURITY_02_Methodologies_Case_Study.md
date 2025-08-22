# Cybersecurity Case Study: Chapter 2 - Project Management Methodology

## 2.1 Methodology Selection

"Project Sentinel" is a complex initiative with two distinct types of work: highly unpredictable Research and Development (R&D) and more predictable software engineering. A single methodology is ill-suited for this. Therefore, we will adopt a **Hybrid Methodology** that combines the strengths of **Kanban** for research and **Scrum** for development.

## 2.2 Justification for the Hybrid Model

A pure Scrum approach would be too rigid for our data science and security research team, whose work is exploratory by nature. Forcing research into fixed-length sprints can stifle creativity and lead to failed sprint commitments. Conversely, a pure Kanban approach would lack the structure needed for the software engineering team to build and deliver robust, production-grade software components in a predictable manner.

Our hybrid model addresses this by applying the right methodology to the right type of work:

-   **Kanban for the Research Team:**
    -   **Flexibility:** The research team (data scientists, security analysts) will use a Kanban board to manage their workflow. This allows them to pull tasks from a backlog of research questions and hypotheses as they have capacity, without the overhead of sprint planning.
    -   **Visualizing Flow:** The Kanban board will visualize the flow of research from "Hypothesis" -> "Experimenting" -> "Analyzing" -> "Validated Finding". This provides transparency into the R&D process.
    -   **Limiting Work-in-Progress (WIP):** WIP limits will be used to ensure the team stays focused and completes research tasks before starting new ones.

-   **Scrum for the Development Team:**
    -   **Structure & Predictability:** The software engineering team (building the agents, data pipelines, and dashboard) will use 2-week Scrum sprints. This provides the structure needed to deliver reliable, tested software increments.
    -   **Clear Goals:** Sprints will be focused on clear goals, such as "Build the data collection agent for network traffic" or "Implement V1 of the analysis engine based on the validated model from the research team."

## 2.3 Implementing the Hybrid Model: The Interface

The success of this model depends on the effective interface between the two teams.

-   **The "Translation" Meeting:** A bi-weekly meeting will be held between the Research Team Lead, the Product Owner, and the Development Team Lead. In this meeting, the research team's "Validated Findings" are presented. The Product Owner and tech leads then "translate" these findings into well-defined user stories and technical requirements for the Development Team's product backlog.
-   **Integrated Tooling:** A project management tool like Jira will be configured with two boards: a Kanban board for the Research Team and a Scrum board for the Development Team, both linked to the same master project backlog.
-   **The Role of the Product Owner:** The Product Owner plays a critical role in this model, managing the flow of work from the research pipeline into the development backlog and ensuring that both teams are aligned with the overall project vision and priorities.

This hybrid methodology provides the necessary flexibility for cutting-edge R&D while maintaining the disciplined execution required to build a mission-critical enterprise security product.
