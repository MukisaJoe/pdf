# Cybersecurity Case Study: Chapter 12 - Project Charter: Project Sentinel

## Project Title: Project Sentinel (Autonomous Agent MVP)

---

### 1. Project Vision & Business Case
**Vision:** To fundamentally advance our cybersecurity posture from a reactive, human-dependent model to a proactive, AI-driven autonomous defense system.

**Business Case:** Cyber threats are evolving at a machine-speed pace that is outpacing the capabilities of human-led security operations. Project Sentinel is a strategic investment to build an autonomous system that can detect and respond to threats in seconds, not hours, drastically reducing our risk exposure.

---

### 2. Key Objectives & Success Criteria (MVP)

| Objective | Success Criteria (KPI) |
|---|---|
| **Dramatically Reduce Response Time** | - **MTTD:** < 1 minute (from ~6 hours)<br>- **MTTR:** < 5 minutes (from ~30 minutes) |
| **Ensure Operational Safety** | - **False Positive Rate:** < 0.1% |
| **Validate Autonomous Capability** | Successfully auto-remediate 95%+ of simulated attacks in the Cyber Range. |
| **Deliver on Schedule & Budget** | MVP deployed within 12 months and within the $750,000 budget. |

---

### 3. High-Level Scope (MVP)
**In-Scope:** The system will autonomously detect and respond to **network-based data exfiltration attempts** within our primary **AWS cloud environment**. The only automated response action will be to **quarantine the source EC2 instance**.
**Out-of-Scope:** All other threat types, all other environments, and any automated response actions beyond instance quarantine.

---

### 4. High-Level Timeline & Budget
-   **Total Duration:** 12 Months
-   **Total Budget:** $750,000

---

### 5. Key Stakeholders & Team
-   **Project Sponsor:** Chief Information Security Officer (CISO).
-   **Key Stakeholders:** Head of IT Infrastructure, Head of Security Operations Center (SOC).
-   **Core Team:** A specialized, cross-functional team of Security Researchers, Data Scientists, and Distributed Systems Engineers.

---

### 6. Architectural Overview
-   **Pattern:** Event-Driven Microservices Architecture.
-   **Key Technologies:** Go (Agents), Apache Kafka (Data Pipeline), Python (AI/ML Engine), Kubernetes (Deployment).
-   **Core Principle:** Asynchronous, decoupled services for resilience and scalability.

---

### 7. Major Risks (Top 3)
1.  **Operational Outage via False Positive:** An agent mistakenly quarantines a critical production server. (Mitigation: Extensive testing, human-in-the-loop for critical assets, monitor-only mode).
2.  **Sophisticated Model Evasion:** A novel attack bypasses the AI detection model. (Mitigation: Continuous adversarial testing via Red Team, defense-in-depth strategy).
3.  **Agent Compromise:** An attacker takes control of a Sentinel agent itself. (Mitigation: Hardened agents, Principle of Least Privilege, mTLS, agent behavior monitoring).

---

### 8. Project Approval

This charter summarizes the high-level plan for the Project Sentinel MVP. Approval of this document by the CISO authorizes the project to move into the funded research and development phase.

**Approved By:**

_________________________
**Chief Information Security Officer (CISO)**

**Date:** _________________
