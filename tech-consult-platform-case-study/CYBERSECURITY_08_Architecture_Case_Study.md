# Cybersecurity Case Study: Chapter 8 - High-Level System Architecture

## 8.1 Architectural Goals

The architecture of "Project Sentinel" is fundamentally driven by its mission-critical, real-time requirements:
-   **High Throughput:** The system must ingest and process millions of security events per second without data loss.
-   **Low Latency:** Decisions must be made in seconds, not minutes.
-   **High Availability:** The system must be operational 24/7/365 with no single point of failure.
-   **Scalability:** Each component of the system must be able to scale independently to meet demand.
-   **Security:** The platform itself must be hardened against attack.

## 8.2 Architectural Pattern: Event-Driven Microservices

To meet these demanding goals, we will use an **Event-Driven Microservices Architecture**. The system is decomposed into small, independent, and specialized services that communicate with each other asynchronously through a central message bus.

**Justification:**
-   **Decoupling:** This pattern decouples the data producers (collector agents) from the data consumers (the analysis engine). The analysis engine doesn't need to know about the collectors; it just consumes data from the message bus. This makes the system highly resilient. If the analysis engine goes down, the data pipeline will buffer the data, and no events will be lost.
-   **Independent Scalability:** Each microservice (e.g., data ingestion, analysis, response) can be scaled independently. If we need to process more data, we can add more instances of the analysis engine without touching any other part of the system.
-   **Technology Flexibility:** It allows us to use the best programming language and framework for each specific job (e.g., Go for high-performance agents, Python for machine learning).

## 8.3 Technology Stack

-   **Data Collection & Response Agents:** Written in **Go**. Go is chosen for its high performance, small binary size, and excellent support for concurrency, making it ideal for lightweight, efficient agents.
-   **Data Pipeline:** **Apache Kafka**. Kafka is the industry standard for building real-time, high-throughput, and durable data pipelines. It will act as the central nervous system for our platform.
-   **Analysis Engine:** A **Python-based** microservice. The core AI/ML model will be developed using libraries like **TensorFlow** or **PyTorch**. The service will use a stream-processing library like **Faust** to consume data from Kafka and apply the model in real time.
-   **Control Plane & API:** A **Go**-based microservice providing a gRPC or REST API for the dashboard. Go is chosen here for its performance and type safety.
-   **SOC Dashboard:** A **React** Single-Page Application (SPA) providing a real-time view into the system.
-   **Databases:**
    -   **PostgreSQL:** For storing relational data like agent registration, user accounts for the dashboard, and system configuration.
    -   **AWS Quantum Ledger Database (QLDB):** For the audit trail, providing a transparent, immutable, and cryptographically verifiable transaction log of all agent detections and actions.
    -   **Prometheus / TimescaleDB:** For storing time-series metrics about the system's performance and health.
-   **Deployment:** The entire system will be containerized with **Docker** and orchestrated with **Kubernetes** on AWS (using **Amazon EKS**). This is essential for managing the deployment, scaling, and networking of a complex microservices application.

## 8.4 Asynchronous Communication Flow

1.  **Collector Agents** produce event messages (VPC flow logs) and publish them to a "raw_logs" topic in **Kafka**.
2.  The **Analysis Engine** service consumes messages from the "raw_logs" topic.
3.  When a threat is detected, the Analysis Engine produces a new message (an "alert") and publishes it to an "alerts" topic in Kafka.
4.  The **Response Engine** and the **Control Plane** are both consumers of the "alerts" topic.
5.  Upon receiving an alert, the Response Engine sends a command to the appropriate **Response Agent**.
6.  The Control Plane stores the alert and pushes it to the **SOC Dashboard** via WebSockets for real-time display.

This event-driven, asynchronous flow ensures the system is highly scalable and resilient.
