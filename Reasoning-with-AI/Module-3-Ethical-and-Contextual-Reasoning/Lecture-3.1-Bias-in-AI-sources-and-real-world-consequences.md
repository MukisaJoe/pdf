# Lecture 3.1: Bias in AI — Sources and Real-World Consequences

### Introduction: What is AI Bias?
AI bias is not about a machine having "prejudices" in the human sense. Rather, **AI bias is a systematic pattern of errors in an AI's output that leads to unfair or inequitable outcomes for specific groups.**

It's not a rare technical glitch; it's a feature of how AI is built and trained today. Understanding bias is not optional—it's a fundamental responsibility for anyone who uses, builds, or makes decisions based on AI. The danger of AI is not that it is secretly malicious, but that it can be mindlessly, systematically, and scale-ably unfair.

---

### Where Does Bias Come From? The Three Primary Sources

1.  **Data Bias (The Root Cause):** The data used to train an AI is the single largest source of bias. If the data is biased, the AI will be biased. It's that simple.
    *   **Historical Bias:** The data reflects the biases of the past. If you train an AI on decades of loan application data, it may learn to be biased against women or minorities because those biases were present in the historical decisions. The AI learns to perpetuate the past.
    *   **Representation Bias:** The data fails to accurately represent the diversity of the real world. If a facial recognition system is trained on a dataset composed of 80% white faces, its performance will be significantly worse for people of color.
    *   **Measurement Bias:** The way data is collected or the proxy used for a real-world outcome is flawed. For example, using "arrest rate" as a proxy for "crime rate" is inherently biased, as it reflects policing priorities, not the actual distribution of crime.

2.  **Algorithmic Bias:** The design of the algorithm itself can create or amplify bias. A social media algorithm designed solely to maximize "user engagement" might learn that polarizing or outrageous content is the most "engaging," leading it to create echo chambers and push users towards extremism. The goal of the algorithm shapes its behavior.

3.  **Human Interaction Bias:** Bias can be introduced by the people who build and use the AI.
    *   **Labeler Bias:** The humans who are paid to label data for training (e.g., "this is a cat," "this is a dog") bring their own conscious and unconscious biases to the task.
    *   **Feedback Loops:** If users interact with an AI's biased outputs in a way that confirms the bias (e.g., clicking on a biased news recommendation), the AI learns that its biased output was "correct" and creates a self-reinforcing feedback loop.

---

### Real-World Consequences: Case Studies

AI bias is not an abstract academic problem. It has severe, real-world consequences.

*   **Hiring:** In 2018, it was revealed that an AI recruiting tool designed to screen resumes was systematically penalizing female candidates. Because it was trained on 10 years of data from a male-dominated tech industry, it had learned that male-associated words were predictors of success and that resumes containing the word "women's" (e.g., "captain of the women's chess club") should be down-ranked.

*   **Healthcare:** A 2019 study found that a widely used US algorithm for predicting which patients required extra medical care was dramatically biased against Black patients. The algorithm used "healthcare cost" as a proxy for "health need." However, due to systemic inequities, Black patients at the same level of sickness often generated lower healthcare costs. The result: Black patients who were much sicker were not being recommended for the extra care they needed.

*   **Criminal Justice:** Predictive policing algorithms, trained on historical arrest data, have been shown to disproportionately target minority neighborhoods. This leads to over-policing in those areas, which leads to more arrests, which are then fed back into the algorithm, "proving" its original bias was correct in a dangerous, self-fulfilling prophecy.

### Conclusion: A Problem of Reasoning, Not Just Code
You cannot simply "delete" bias from a dataset, because you would be deleting a reflection of our world. Addressing AI bias is fundamentally a problem of **human reasoning**. It requires us to ask critical questions: "What does 'fairness' mean in this context?" "Whose interests are being served by this AI?" "What are the potential unintended consequences?"

Our role is to be the final ethical filter, to understand the limitations of the data, and to bring the contextual awareness that the machine will always lack.
