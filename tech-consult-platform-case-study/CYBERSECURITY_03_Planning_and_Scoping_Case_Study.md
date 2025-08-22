# Cybersecurity Case Study: Chapter 3 - Project Planning and Scoping

## 3.1 Project Scope Statement

**Project:** Project Sentinel (MVP Deployment)

**Project Justification:** To counter the increasing speed and sophistication of cyber threats, our organization must evolve from manual, human-driven security responses to an autonomous, AI-powered defense system. This project will develop the foundational capability for this transformation.

**Project Deliverables (for MVP):**
1.  A deployed system of autonomous agents in our primary AWS environment.
2.  A real-time dashboard for the Security Operations Center (SOC) to monitor agent activity and threat detections.
3.  A performance report quantifying the reduction in Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) for the target threat.
4.  Comprehensive technical documentation for the agent framework and the trained AI model.

**In-Scope for MVP:**
-   **Threat Focus:** Detection and response to anomalous network traffic patterns consistent with **data exfiltration**.
-   **Environment:** Our primary **AWS cloud VPC**.
-   **System Components:**
    -   **Data Collection Agents:** Lightweight agents to collect network flow logs.
    -   **Analysis Engine:** An AI/ML model trained to identify data exfiltration patterns in real time.
    -   **Response Agents:** Agents capable of executing a single, predefined action: **isolating a compromised EC2 instance** by modifying its security group.
    -   **SOC Dashboard:** A dashboard to view alerts, agent actions, and model confidence scores.

**Out-of-Scope for MVP:**
-   Detection of other threat types (malware, insider threats, phishing, etc.).
-   Deployment to on-premise data centers or other cloud providers.
-   Automated responses beyond quarantining an instance (e.g., automated patching, terminating processes).
-   Advanced threat hunting or forensic analysis capabilities.

**Project Constraints:**
-   **Budget:** The project must operate within the approved R&D budget of $750,000.
-   **Timeline:** The MVP must be deployed and operational within 12 months.
-   **Data:** The project is dependent on the availability of high-quality historical network data for model training.

**Project Assumptions:**
-   Sufficient and representative network log data can be collected or simulated for training a high-accuracy detection model.
-   The AI model can achieve a false positive rate below the acceptable threshold of 0.1% to avoid disrupting business operations.
-   The security and IT infrastructure teams will provide the necessary access and support for agent deployment.

## 3.2 Work Breakdown Structure (WBS) - High Level

This WBS is structured to accommodate the project's significant R&D component.

1.  **Project Management**
    1.1. Detailed Planning & Roadmap
    1.2. Resource & Budget Management
    1.3. Stakeholder & CISO Reporting
    1.4. Risk Management
2.  **Phase 1: Research & Experimentation (Kanban)**
    2.1. Data Acquisition & Preparation
    2.2. Exploratory Data Analysis & Feature Engineering
    2.3. AI/ML Model Selection & Prototyping
    2.4. Offline Model Training & Tuning
    2.5. Model Validation & Performance Benchmarking
3.  **Phase 2: System Development (Scrum)**
    3.1. Agent Framework & Communication Protocol
    3.2. Real-time Data Ingestion Pipeline
    3.3. Analysis Engine (Model Serving Infrastructure)
    3.4. Response Module & Action Execution
    3.5. SOC Monitoring Dashboard UI
4.  **Phase 3: Integration & Simulated Testing**
    4.1. Integration of Validated Model into Analysis Engine
    4.2. "Cyber Range" Test Environment Setup
    4.3. Red Team / Blue Team Simulated Attack Scenarios
    4.4. Performance & False Positive Rate Testing
5.  **Phase 4: Deployment & Handover**
    5.1. Phased Production Deployment (Monitor-only mode first)
    5.2. Full Activation of Automated Response
    5.3. Training for SOC Analysts
    5.4. Handover to Operations

This phased WBS ensures that we build a solid research foundation before committing to full-scale development and that the system is rigorously tested before deployment.
