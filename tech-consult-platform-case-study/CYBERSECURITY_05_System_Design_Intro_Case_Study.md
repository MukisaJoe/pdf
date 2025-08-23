# Cybersecurity Case Study: Chapter 5 - Introduction to System Design and Analysis

## 5.1 System Definition

The "Project Sentinel" system is a **real-time, distributed, autonomous decision-support system**. Unlike a traditional monolithic application, it is a collection of independent but coordinated software components (agents and services) designed for a single purpose: to detect and respond to specific security threats automatically. The system's core function is to ingest vast amounts of security data, analyze it with advanced AI models, and execute pre-defined actions without human intervention.

## 5.2 System Boundaries

Defining the boundaries of this distributed system is critical for understanding its interactions and dependencies.

-   **Inside the System:**
    -   **Data Collection Agents:** Lightweight software deployed across the target environment (AWS VPC) to collect and forward network logs.
    -   **Data Pipeline:** A high-throughput messaging queue (e.g., Apache Kafka) that ingests data from the collection agents.
    -   **Analysis Engine:** A scalable service that consumes data from the pipeline and uses a trained ML model to score events for threats in real time.
    -   **Response Engine:** A service that receives high-confidence alerts from the analysis engine and triggers response actions.
    -   **Response Agents:** Agents deployed in the environment capable of executing specific actions (e.g., modifying a security group).
    -   **Control Plane & Dashboard:** A central service and web interface for SOC analysts to monitor the system, view alerts, and manually override actions.

-   **Outside the System (External Entities):**
    -   **Monitored Environment:** The enterprise's AWS cloud infrastructure that the agents observe and act upon.
    -   **SOC Analysts:** The human operators who use the system's dashboard, acting "on the loop" rather than "in the loop".
    -   **External Threat Intelligence Feeds:** Third-party data sources that can be used to enrich the data for the analysis engine.
    -   **IT Infrastructure:** The underlying compute, network, and storage resources provided by AWS.

## 5.3 Roles in Analysis and Design

The complexity of this project requires a fusion of specialized roles for analysis and design.
-   **System Analyst:** This is a collaborative function. The **Product Owner** defines the business requirements (e.g., "we need to reduce response time for data exfiltration"), while **Senior Security Researchers** and **Data Scientists** perform the technical analysis, defining the specific data patterns and model behaviors needed to meet that requirement.
-   **System Architect/Designer:** This role is led by **Senior ML and Distributed Systems Engineers**. They are responsible for designing the end-to-end architecture, from the lightweight agents to the scalable data pipeline and the resilient model serving infrastructure. They ensure the system is performant, secure, and reliable.

## 5.4 System Development Life Cycle (SDLC) Model

As established in our methodology, we will use a **Hybrid SDLC Model**. This is not just a project management choice but a fundamental system design decision.

-   **The Kanban Track (Research SDLC):** This track focuses on the lifecycle of the AI model itself: hypothesis, data gathering, experimentation, validation, and production-ready model. It is inherently exploratory.
-   **The Scrum Track (Engineering SDLC):** This track focuses on the lifecycle of the software that surrounds the model: the agents, pipelines, and dashboards. This work is more predictable and can be broken down into well-defined, deliverable increments in sprints.

This dual-track SDLC allows us to manage the uncertainty of AI research while still applying disciplined engineering practices to build the mission-critical infrastructure that will deploy the AI's intelligence.
