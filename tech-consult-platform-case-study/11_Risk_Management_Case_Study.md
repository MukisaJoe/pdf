# Case Study: Chapter 11 - Risk Management

## 11.1 Approach to Risk Management

For the Tech Consult Platform project, we will practice proactive risk management. This involves identifying potential risks early, assessing their potential impact, and planning a response before they become issues. This process is continuous and will be a regular topic of discussion in sprint retrospectives and stakeholder meetings. Our primary tool for this is the Risk Register.

## 11.2 Risk Register

Below is the initial Risk Register for the MVP project. It will be updated throughout the project's lifecycle.

| ID | Risk Description | Category | Probability | Impact | Response Strategy |
|----|------------------|----------|-------------|--------|-------------------|
| **R01** | Key team member leaves the project mid-way. | **Schedule / Team** | Low | High | **Mitigate:** Ensure knowledge is shared through pair programming, thorough documentation, and comprehensive code reviews. Identify potential backup personnel for critical roles. |
| **R02** | The chosen technology (e.g., a specific library) has a critical bug or limitation. | **Technical** | Medium | Medium | **Mitigate:** Conduct proof-of-concept spikes for new or unfamiliar technologies before fully committing. Choose well-supported, mature libraries where possible. |
| **R03** | "Scope Creep" - Stakeholders request significant new features after the plan is set. | **Scope / Schedule** | High | High | **Avoid/Mitigate:** Enforce a strict change control process. The Product Owner will evaluate all new requests against the MVP goals and communicate the impact on schedule and budget to stakeholders. Non-essential features will be added to the post-MVP backlog. |
| **R04** | A major security vulnerability is discovered close to the launch date. | **Security / Schedule** | Medium | High | **Mitigate:** Integrate security testing throughout the development lifecycle (as per Chapter 10). Conduct a third-party penetration test at least one month before the planned launch to allow time for remediation. |
| **R05** | The project runs over the allocated budget of $150,000. | **Budget** | Medium | High | **Mitigate:** The Project Manager will track costs diligently and report on budget variance monthly. A 15% contingency fund is included in the budget to absorb minor overruns. Scope will be de-prioritized if necessary to stay within budget. |
| **R06** | The platform fails to attract a critical mass of users (both clients and consultants) post-launch. | **Business / Scope** | Medium | High | **Mitigate:** Involve a beta group of real users during UAT to ensure we are building a product they need. Develop and execute a targeted marketing plan starting before the launch. Focus the MVP on a core, high-value feature set. |
| **R07** | Integration with the external email service is more complex than anticipated. | **Technical / Schedule** | Low | Low | **Accept/Mitigate:** Initially, accept the risk as the impact is low. If it becomes a problem, a developer will be assigned to a spike to resolve the integration issues. |

## 11.3 Risk Monitoring

The Project Manager is responsible for maintaining the Risk Register. The register will be reviewed with the team during each Sprint Retrospective to identify any new risks and to assess the status of existing ones. High-impact risks will be a key discussion point in the monthly stakeholder updates.
