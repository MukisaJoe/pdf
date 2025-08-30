# Workshop: Design an AI Use-Case & Map Human vs. Machine Roles

### Objective
To apply the principles of problem framing and system-level thinking to design a practical AI use-case from scratch. The key outcome of this workshop will be a "Human vs. Machine" map that clearly distinguishes the role of automated execution from the role of human judgment, creating a blueprint for a responsible hybrid system.

---

### Part 1: Brainstorm and Select a Domain (15 minutes)

1.  As a group, choose **one** of the following domains to focus on for this workshop:
    *   **Education:** Improving the learning experience.
    *   **Healthcare:** Improving patient care or clinic efficiency.
    *   **Small Business:** Helping a small business succeed.

2.  Within your chosen domain, brainstorm broad problems or challenges that real people face. (e.g., "Students in large online courses feel disconnected," "ER wait times are too long," "A local bakery wastes a lot of unsold bread each day").

3.  Vote on **one specific problem** your group will tackle for the rest of the session.

---

### Part 2: Deconstruct the Problem (20 minutes)

Now, take your broad problem and deconstruct it into a specific, AI-friendly **prediction task**. Use the framework from Lecture 4.1.

*   **Example (Domain: Small Business)**
    *   **Broad Problem:** "A local bakery wastes a lot of unsold bread each day."
    *   **Narrowed Focus:** "Better prediction of daily demand for different products."
    *   **AI Prediction Task:** "Based on historical sales data, weather forecasts, and local events (e.g., holidays, farmer's markets), **predict** the likely demand for croissants, baguettes, and sourdough loaves for tomorrow."

Work as a group to write a single, clear prediction statement for your chosen problem.

---

### Part 3: Map the Hybrid System (30 minutes)

This is the core of the workshop. On a whiteboard or a shared digital document, create a two-column map for your use-case. The goal is to clearly define what the machine does and what the human does.

**Template:**
| **Machine Execution (The AI's Role)** _What does the machine do? (Predict, Classify, Analyze, Generate)_ | **Human Judgment (The Human's Role)** _What does the human do? (Decide, Intervene, Empathize, Strategize)_ |
| :--- | :--- |
| | |

**Example Map for the "Bakery Demand" Predictor:**
| **Machine Execution (The AI's Role)** | **Human Judgment (The Human's Role)** |
| :--- | :--- |
| 1. Collects data (past sales, weather, local events calendar). | 1. **Sets the goal.** Is the priority to minimize waste to zero (and risk selling out) or to ensure popular items are always in stock (and risk some waste)? This is a strategic business decision. |
| 2. Analyzes the data to find patterns. | 2. **Interprets the AI's prediction.** The AI predicts demand for 100 sourdough loaves. The baker knows a new competitor just opened down the street (context the AI doesn't have) and decides to reduce that number to 80. |
| 3. Generates a demand forecast for each product for the next day (e.g., "100 sourdough, 150 croissants"). | 3. **Makes the final decision.** Based on the AI's prediction and their own expert intuition, the baker decides exactly how many of each item to bake. |
| 4. Presents the forecast on a simple dashboard for the head baker. | 4. **Executes the creative work.** The baker bakes the bread, applying their craft and skill. |
| 5. The next day, it records the actual sales data to refine its future predictions. | 5. **Manages exceptions.** A tour bus suddenly arrives. The baker uses their judgment to quickly bake an extra batch of croissants. |

---

### Part 4: Present and Discuss (20 minutes)

Each group will briefly present their use-case and their "Human vs. Machine" map.

**Discussion Questions for the whole class:**
*   What was the most challenging part of drawing the line between the machine's role and the human's role?
*   In your system, where is the biggest risk of bias or an unintended negative consequence?
*   How does keeping a "human in the loop" make your proposed system more effective, ethical, and resilient?

### Conclusion
The most powerful and responsible AI systems are not fully automated "black boxes." They are **hybrid systems** that are intentionally designed to combine the speed and scale of machine prediction with the wisdom, context, and ethical judgment of a skilled human. This mapping exercise is the essential blueprint for building such systems.
