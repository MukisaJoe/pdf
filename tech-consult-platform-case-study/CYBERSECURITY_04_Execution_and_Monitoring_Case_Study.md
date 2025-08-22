# Cybersecurity Case Study: Chapter 4 - Project Execution and Monitoring

## 4.1 Executing the Project Plan

The execution of "Project Sentinel" will be managed using our hybrid Kanban/Scrum model. The two teams will work in parallel but in a tightly coordinated fashion.

-   **Research Team (Kanban):** The data science and security research team will continuously pull research tasks from their backlog. Their primary focus is to validate hypotheses and produce high-quality, validated AI models. Their work is not time-boxed in the same way as the development team's.
-   **Development Team (Scrum):** The software engineering team will work in 2-week sprints to build the infrastructure, agent framework, and dashboard. Their work is directly fed by the validated findings from the research team, which are translated into backlog items by the Product Owner.

The **Bi-weekly Translation Meeting** is the most critical execution ceremony, where research outputs are converted into engineering inputs, ensuring the two streams of work remain synchronized.

## 4.2 Monitoring and Controlling the Project

Given the hybrid model, we will use different tools to monitor each stream of work, which will then roll up into an overall project status report for stakeholders.

-   **Kanban Monitoring:** We will monitor the **Cumulative Flow Diagram** for the research team's Kanban board. This will help us visualize bottlenecks and measure the average **cycle time** for a research hypothesis to move from conception to validation.
-   **Scrum Monitoring:** We will use standard Scrum metrics for the development team, including **sprint velocity** and **burndown charts**, to ensure predictability in the delivery of software components.
-   **Overall Project Monitoring:** The Project Manager will track progress against the high-level WBS milestones and report on **Schedule Variance (SV)** and **Cost Variance (CV)** monthly to the CISO and other stakeholders.
-   **Change Control:** A formal change control process will be strictly enforced. Any proposed change to the MVP scope must be approved by the CISO, with a full impact analysis on the budget and timeline provided by the Project Manager.

## 4.3 Key Performance Indicators (KPIs)

The success of Project Sentinel will be measured against a combination of R&D, project management, and operational security KPIs.

### R&D KPIs (Model Performance)

-   **Model Precision & Recall:** To measure the accuracy of our detection model. We will aim for high precision to minimize false positives.
-   **False Positive Rate:** The percentage of legitimate activities incorrectly flagged as threats. **This is a critical business metric, with a target of < 0.1% for the MVP.**
-   **Model Training Time:** The time it takes to retrain and deploy a new version of the model.

### Project Management KPIs

-   **Budget vs. Actuals:** Tracking the burn rate of the $750,000 budget.
-   **Milestone Completion Rate:** Tracking the on-time completion of the major phases outlined in the WBS.
-   **Research Throughput:** The number of research hypotheses validated per month.

### Operational Security KPIs (Business Value)

These are the ultimate measures of the project's success once the MVP is deployed.
-   **Mean Time to Detect (MTTD):** The average time taken from the start of a security incident to its detection. **Target: Reduce from ~6 hours (manual) to < 1 minute (autonomous).**
-   **Mean Time to Respond (MTTR):** The average time taken from detection to containment. **Target: Reduce from ~30 minutes (manual) to < 5 minutes (autonomous).**
-   **Number of Incidents Auto-Remediated:** The number of threats successfully handled by the agents without any human intervention.

By monitoring these KPIs, we can ensure that our R&D efforts are translating into a tangible improvement in our organization's security posture.
