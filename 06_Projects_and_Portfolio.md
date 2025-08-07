# 06: Projects and Portfolio

Knowledge is theoretical until it's applied. A strong portfolio of projects is the single most important asset for landing a top-tier AI/ML job. It's proof that you can not only understand the concepts but also build real-world solutions.

Your goal is to create a GitHub profile that showcases a handful of high-quality, well-documented projects.

## Guiding Principles for Your Portfolio

*   **Quality over Quantity:** 3-4 impressive, end-to-end projects are far more valuable than a dozen simple tutorial-based ones.
*   **The README is Your Project's Front Page:** Every project *must* have a detailed `README.md`. It should explain:
    *   **The Problem:** What problem are you solving?
    *   **The Data:** Where did you get your data? What does it look like?
    *   **Your Approach:** What models and techniques did you use? Why?
    *   **Results:** How did your model perform? Include metrics and visualizations.
    *   **How to Run:** Instructions for setting up the environment and running your code.
*   **Show End-to-End Skills:** The best projects don't just end with a trained model (`.pkl` or `.pt` file). Show you can take it to the next level:
    *   Wrap your model in a simple API using **FastAPI**.
    *   Containerize the application using **Docker**.
    *   (Bonus) Deploy it to a cloud service.
*   **Choose Unique Projects:** While classic datasets are great for learning, try to find a unique angle or a novel dataset for your main portfolio pieces. This will help you stand out.

## Project Ideas by Level

This list provides a path from foundational projects to state-of-the-art LLM applications.

### Level 1: Core Machine Learning

These projects will solidify your understanding of the classic ML workflow using **Scikit-learn**.

1.  **House Price Prediction (Regression):**
    *   **Dataset:** Use the Ames Housing dataset from Kaggle.
    *   **Task:** Predict the final sale price of houses.
    *   **Skills to Showcase:** Data cleaning, feature engineering (handling categorical and numerical data), training multiple regression models (Linear Regression, Ridge, Lasso), hyperparameter tuning, and model evaluation (MSE, R-squared).

2.  **Customer Churn Prediction (Classification):**
    *   **Dataset:** Use a customer churn dataset from Kaggle or a similar source.
    *   **Task:** Predict whether a customer will churn (cancel their subscription).
    *   **Skills to Showcase:** Handling imbalanced data (a very common real-world problem), training various classifiers (Logistic Regression, Random Forest, SVM), and evaluating using appropriate metrics (Precision, Recall, F1-score, AUC-ROC).

### Level 2: Deep Learning

Move beyond Scikit-learn and start using **PyTorch** or **TensorFlow/Keras**.

1.  **Image Classification on CIFAR-10 (CNN):**
    *   **Dataset:** The CIFAR-10 dataset (built into PyTorch/TensorFlow).
    *   **Task:** Classify small 32x32 images into 10 categories (e.g., airplane, car, bird).
    *   **Skills to Showcase:** Building a Convolutional Neural Network from scratch, understanding convolutional and pooling layers, using techniques like Dropout and Batch Normalization, and tracking experiments with tools like Weights & Biases.

2.  **Sentiment Analysis on Movie Reviews (RNN/LSTM):**
    *   **Dataset:** The IMDB movie review dataset.
    *   **Task:** Classify a movie review as positive or negative.
    *   **Skills to Showcase:** Text preprocessing and tokenization, understanding word embeddings (like GloVe or Word2Vec), and building and training an LSTM or GRU to handle sequential data.

### Level 3: LLMs and Generative AI (The Main Event)

These are the projects that will get you noticed for top LLM engineer roles. Focus your energy here.

1.  **The RAG Q&A Bot (The #1 Portfolio Project):**
    *   **Task:** Build a question-answering bot over a specific set of documents. This is the most practical and important LLM application pattern.
    *   **Project Idea:** Choose a domain you're interested in. For example, create a bot that can answer questions about the rules of a complex board game, a specific open-source library's documentation, or the content of a book like "The Lord of the Rings".
    *   **Skills to Showcase:**
        *   Using an LLM application framework (**LangChain** or **LlamaIndex**).
        *   Loading and chunking documents.
        *   Generating embeddings using a Hugging Face model.
        *   Storing and retrieving documents from a **vector database** (start with Chroma or FAISS).
        *   Prompt engineering to create a robust Q&A chain.
        *   Wrapping the final application in a **FastAPI** backend and a simple **Streamlit** frontend.

2.  **Fine-tuning an Open-Source LLM:**
    *   **Task:** Take a smaller open-source model (e.g., from the **Mistral**, **Llama**, or **Phi** family) and fine-tune it for a specific task.
    *   **Project Idea:** Find a dataset of a particular style. For example, a dataset of philosophical quotes, legal text, or even all the tweets from a specific personality. Fine-tune the model to generate text in that style.
    *   **Skills to Showcase:** Using the **Hugging Face** `transformers` and `peft` (Parameter-Efficient Fine-Tuning) libraries, understanding the fine-tuning process (e.g., with LoRA), and evaluating the performance of the fine-tuned model.

3.  **Building a Simple LLM Agent:**
    *   **Task:** Create a simple agent that can use tools to answer questions.
    *   **Project Idea:** Build an agent that can answer questions requiring current information or calculations. Give it two tools: a "Search" tool (that uses a search API like Tavily or DuckDuckGo) and a "Calculator" tool (that can execute simple math).
    *   **Skills to Showcase:** Understanding agentic loops (e.g., ReAct), prompt engineering for tool use, and using frameworks like LangChain that have agent capabilities.

---

Start with the core ML projects to build your confidence, but aim to complete at least one, if not two, of the Level 3 projects. A well-executed RAG bot is probably the single best project you can have in your portfolio right now.
