# 02: Core Machine Learning Concepts

With a solid foundation in place, it's time to dive into core machine learning (ML) concepts. These algorithms and techniques are not only powerful in their own right but also form the building blocks for more advanced topics in deep learning.

## 1. Supervised Learning

Supervised learning is the most common type of ML. It involves learning a function that maps inputs to outputs based on a labeled dataset (i.e., data with known outcomes).

### a. Regression
Predicting a continuous value. (e.g., predicting the price of a house).

*   **Linear Regression:** The "hello world" of machine learning. Understand how it works, including the cost function (like Mean Squared Error) and the optimization algorithm (like Gradient Descent).

### b. Classification
Predicting a discrete label. (e.g., classifying an email as "spam" or "not spam").

*   **Logistic Regression:** Despite its name, it's used for classification. Understand the sigmoid function and how it's used to model probabilities.
*   **k-Nearest Neighbors (k-NN):** A simple yet powerful instance-based learning algorithm.
*   **Support Vector Machines (SVMs):** A powerful classifier that finds the optimal hyperplane to separate data.
*   **Decision Trees and Random Forests:** Tree-based models that are highly interpretable. Random Forests are an ensemble of Decision Trees and are often very powerful.

**Recommended Resources:**
*   **Course:** [Andrew Ng's Machine Learning Specialization on Coursera](https://www.coursera.org/specializations/machine-learning-introduction) - This is arguably the most popular introductory ML course in the world. It provides a great overview of these topics.
*   **Book:** "An Introduction to Statistical Learning" by Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani. It's a more accessible version of the classic "The Elements of Statistical Learning" and has a free PDF version online.

## 2. Unsupervised Learning

Unsupervised learning deals with unlabeled data, trying to find patterns and structure on its own.

### a. Clustering
Grouping similar data points together.

*   **K-Means Clustering:** A popular and intuitive clustering algorithm.

### b. Dimensionality Reduction
Reducing the number of variables in your data while preserving as much information as possible.

*   **Principal Component Analysis (PCA):** A widely used technique for dimensionality reduction.

**Recommended Resources:**
*   The same resources from the supervised learning section (Andrew Ng's course and "An Introduction to Statistical Learning") cover these topics well.
*   **Visualizations:** Check out this article on [visualizing PCA](https://setosa.io/ev/principal-component-analysis/).

## 3. The Machine Learning Workflow

Knowing the algorithms is one thing; applying them is another. Understanding the end-to-end process is crucial for any ML engineer.

**Key Steps:**
1.  **Data Collection:** Gathering data from various sources.
2.  **Data Preprocessing:** Cleaning the data (handling missing values, outliers) and scaling/normalizing features.
3.  **Feature Engineering:** Creating new features from existing ones to improve model performance. This is often where the most value is created.
4.  **Model Selection:** Choosing the right algorithm for the task.
5.  **Model Training:** Training the model on the data. This involves splitting the data into training, validation, and test sets.
6.  **Model Evaluation:** Assessing the model's performance using appropriate metrics (e.g., accuracy, precision, recall, F1-score for classification; Mean Squared Error (MSE), R-squared for regression). Understand the concept of a confusion matrix.
7.  **Hyperparameter Tuning:** Adjusting the model's hyperparameters to find the best performance. Techniques include Grid Search and Random Search.
8.  **Deployment:** Making the model available for use in a production environment.

**Key Concepts to Master:**
*   **Train/Validation/Test Split:** The importance of splitting your data to avoid overfitting.
*   **Cross-Validation:** A robust technique for model evaluation.
*   **The Bias-Variance Tradeoff:** The fundamental challenge in ML. Underfitting (high bias) vs. Overfitting (high variance).

**Recommended Resources:**
*   **Book:** "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow" by Aurélien Géron. This book is fantastic for bridging the gap between theory and practice.
*   **Documentation:** The [Scikit-learn documentation](https://scikit-learn.org/stable/user_guide.html) is excellent and provides great explanations of all these concepts.

---

By the end of this section, you should be able to take a dataset, preprocess it, train different models, evaluate their performance, and choose the best one for the job. This hands-on experience is invaluable.
