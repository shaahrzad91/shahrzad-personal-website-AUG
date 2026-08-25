export type Project = {
  id: string;
  title: string;
  kind: string;
  context: string;
  challenge: string;
  role: string;
  solution: string;
  architecture: string;
  technologies: string[];
  impact: string;
  lesson?: string;
};

export const navItems = [
  ["About", "about"],
  ["Journey", "journey"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export const journey = [
  {
    date: "Academic foundation",
    title: "Software engineering to computer science",
    copy: "Engineering studies at Azad University led into graduate work at Concordia University, creating a foundation across software, data, and intelligent systems.",
    note: "Degree dates are not listed in the CV.",
  },
  {
    date: "2019 - 2020",
    title: "Research that made AI tangible",
    copy: "At Concordia, research moved from theory into working deep-learning systems for masked-face detection and trigger-word recognition.",
  },
  {
    date: "2021 - 2022",
    title: "Production-minded applied ML",
    copy: "At Inmindtechnologies, the work expanded into telecom prediction, additive-manufacturing anomaly detection, and large-scale data analysis.",
  },
  {
    date: "2022 - 2025",
    title: "AI connected to business decisions",
    copy: "At BDC, predictive services, responsible AI, and a generative-AI sales companion were built around real banking decisions and measurable outcomes.",
  },
  {
    date: "2025 - Present",
    title: "Consulting at enterprise scale",
    copy: "At EY, the current chapter centers on explainable generative-AI systems, complex rules, and high-stakes operational data.",
  },
];

export const experiences = [
  {
    company: "Ernst & Young LLP (EY)",
    role: "Senior Consultant - Data Scientist",
    date: "November 2025 - Present",
    story:
      "Shahrzad leads the development of an AI-driven payroll intelligence and validation framework for UPS California ET EY. The system uses retrieval-augmented generation to turn complex union agreements into operational rules, then connects those rules with large-scale payroll transactions through data pipelines and explainable AI. The goal is practical: detect compensation discrepancies, calculation errors, and compliance risks while improving payroll accuracy and reducing financial leakage.",
    tags: ["RAG", "Explainable AI", "Data pipelines", "Payroll intelligence"],
  },
  {
    company: "Business Development Bank of Canada (BDC)",
    role: "Data Scientist",
    date: "October 2022 - June 2025",
    story:
      "At BDC, Shahrzad worked across generative AI, predictive modelling, data engineering, and responsible AI. She developed a centralized AI Sales Companion that connected real-time client data with transformer models and LLMs, and built a prediction service to identify clients with high repeat-business potential. The work combined rigorous feature engineering and model management with a strong emphasis on interpretability, fairness, and stakeholder clarity.",
    tags: ["LangChain", "LightGBM", "MLflow", "Responsible AI", "Banking"],
  },
  {
    company: "Inmindtechnologies Inc.",
    role: "Data Scientist",
    date: "October 2021 - June 2022",
    story:
      "The work at Inmindtechnologies spanned telecom, advanced manufacturing, and business analytics. Shahrzad developed Bell Canada's order-completion prediction service from more than 10 million structured records, contributed an anomaly-detection model for 3D-printing AIoT, and applied data preparation and visualization to understand business performance during the COVID period.",
    tags: ["XGBoost", "LightGBM", "CNNs", "Feature engineering"],
  },
  {
    company: "Concordia University",
    role: "Graduate Research Assistant",
    date: "July 2019 - September 2020",
    story:
      "At Concordia, Shahrzad built deep-learning projects from the data layer upward. One explored masked-face detection with PyTorch Lightning and convolutional neural networks. Another synthesized audio data and trained an RNN-based trigger-word system that could run locally and activate a chosen task when it heard the word 'activate'.",
    tags: ["Python", "PyTorch Lightning", "CNN", "RNN", "Audio ML"],
  },
];

export const projects: Project[] = [
  {
    id: "payroll-intelligence",
    title: "AI Payroll Intelligence",
    kind: "Generative AI / Enterprise",
    context: "EY · Current work",
    challenge:
      "Translate complex union pay rules from unstructured agreements and validate them against large-scale payroll transactions.",
    role: "Led the development of the payroll intelligence and validation framework.",
    solution:
      "Used RAG to extract and operationalize union rules, then connected those rules to scalable payroll pipelines and an explainable validation layer.",
    architecture:
      "Unstructured agreements → RAG-based rule extraction → payroll data pipelines → explainable discrepancy and compliance checks.",
    technologies: ["RAG", "Generative AI", "Data pipelines", "Explainable AI"],
    impact:
      "Improved payroll accuracy and reduced financial leakage; the CV does not state a numeric result.",
  },
  {
    id: "sales-companion",
    title: "AI Sales Companion",
    kind: "Generative AI / Banking",
    context: "BDC",
    challenge:
      "Give sales teams a unified, current view of client history, profiles, and predictive insights.",
    role: "Developed the centralized AI companion and its real-time client-data integration.",
    solution:
      "Combined RAG and LangChain with transformer-based LLMs to support dynamic profiling, historical context, and predictive analytics.",
    architecture:
      "Real-time client data → retrieval layer → transformer/LLM reasoning → sales-facing profile and insights.",
    technologies: ["RAG", "LangChain", "LLMs", "Transformers"],
    impact: "$1M in new revenue within three months, as reported in the CV.",
  },
  {
    id: "repeat-business",
    title: "Repeat Business Prediction",
    kind: "Machine Learning / Banking",
    context: "BDC",
    challenge:
      "Identify client segments with high repeat-business potential across multi-domain banking data.",
    role: "Owned EDA, feature engineering, target definition, model development, tuning, and interpretability.",
    solution:
      "Built a LightGBM prediction service with tuned features and MLflow model management, designed for stakeholder clarity.",
    architecture:
      "Multi-domain banking data → engineered pipeline and target → tuned LightGBM model → managed prediction service.",
    technologies: ["LightGBM", "MLflow", "EDA", "Feature engineering"],
    impact: "Approximately $3M in annual revenue contribution, as reported in the CV.",
  },
  {
    id: "responsible-ai",
    title: "Responsible AI Framework",
    kind: "Responsible AI",
    context: "BDC",
    challenge:
      "Increase model accountability and reduce bias-related errors in a real-world AI system.",
    role: "Integrated fairness, transparency, and bias-mitigation techniques into the system.",
    solution:
      "Embedded responsible-data-use checks and clearer accountability into the working AI process.",
    architecture:
      "The CV verifies the fairness and transparency layer; add the detailed control flow here.",
    technologies: ["Fairness", "Bias mitigation", "Transparency", "Explainability"],
    impact: "Approximately 30% fewer bias-related errors, as reported in the CV.",
  },
  {
    id: "bell-order-prediction",
    title: "Bell Canada Order Prediction",
    kind: "Machine Learning / Telecom",
    context: "Inmindtechnologies",
    challenge:
      "Predict order completion and reduce expensive order fallout across more than 10 million structured records.",
    role: "Developed and deployed the prediction service, from cleansing through model tuning.",
    solution:
      "Engineered more than 20 predictive features and tuned XGBoost and LightGBM models on the cleaned dataset.",
    architecture:
      "10M+ records → cleansing and 20+ engineered features → XGBoost/LightGBM tuning → deployed prediction service.",
    technologies: ["XGBoost", "LightGBM", "Data cleansing", "Feature engineering"],
    impact:
      "22% improvement in prediction accuracy and an estimated $2M annual reduction in order-fallout costs.",
  },
  {
    id: "printing-anomaly",
    title: "3D Printing Anomaly Detection",
    kind: "Deep Learning / AIoT",
    context: "Inmindtechnologies",
    challenge:
      "Detect anomalies in an AIoT additive-manufacturing setting using prepared and augmented data.",
    role: "Worked on data wrangling, augmentation, scaling, and deep-learning modelling.",
    solution:
      "Modelled the problem with MobileNetV2 and a vanilla convolutional neural network.",
    architecture:
      "AIoT manufacturing data → wrangling, augmentation, and scaling → MobileNetV2 / CNN anomaly model.",
    technologies: ["MobileNetV2", "CNN", "Data augmentation", "AIoT"],
    impact: "The work resulted in an article published at ICAM 2021.",
  },
  {
    id: "face-mask-detection",
    title: "Face Mask Detection",
    kind: "Deep Learning / Research",
    context: "Concordia University",
    challenge:
      "Build and evaluate a masked-face detector from scratch, including cross-validation analysis.",
    role: "Implemented the project in Python from data preparation through model evaluation.",
    solution:
      "Used PyTorch Lightning and convolutional neural networks, comparing performance with and without cross-validation.",
    architecture:
      "Prepared image data → PyTorch Lightning training pipeline → CNN detector → cross-validation comparison.",
    technologies: ["Python", "PyTorch Lightning", "CNN", "Cross-validation"],
    impact:
      "The CV reports a 25% increase in cross-entropy when detecting masked faces; add further evaluation context if desired.",
  },
  {
    id: "trigger-word",
    title: "Trigger Word Detection",
    kind: "Deep Learning / Audio",
    context: "Concordia University",
    challenge:
      "Create an on-device speech-recognition system that responds reliably to a wake word.",
    role: "Synthesized audio, prepared train/dev datasets, trained the model, and produced a runnable local prediction.",
    solution:
      "Trained an RNN-based trigger-word model to recognize 'activate' and launch a chosen task on a laptop.",
    architecture:
      "Synthesized recordings → train/dev audio pipeline → RNN trigger-word model → local task activation.",
    technologies: ["RNN", "Audio processing", "Speech recognition", "Python"],
    impact: "90% accuracy on the laptop implementation, as reported in the CV.",
  },
];

export const skillGroups = [
  ["AI", ["Prediction services", "NLP", "Time-series forecasting", "Explainable AI"]],
  ["Machine Learning", ["Supervised learning", "Unsupervised learning", "Ensemble methods", "LightGBM", "XGBoost"]],
  ["Generative AI", ["RAG", "LangChain", "LLMs", "Transformer models"]],
  ["Deep Learning", ["Neural networks", "CNNs", "RNNs", "PyTorch Lightning"]],
  ["Data Engineering", ["Spark", "Data pipelines", "Pandas", "NumPy", "Snowflake"]],
  ["Programming", ["Python", "SQL", "Git"]],
  ["Cloud", ["Microsoft Azure", "Databricks", "Snowflake"]],
  ["MLOps", ["MLflow", "CI/CD", "Versioning", "Testing", "Monitoring"]],
  ["Responsible AI", ["Fairness", "Transparency", "Bias mitigation", "Ethical data use"]],
  ["Consulting", ["Stakeholder clarity", "Business strategy", "Corporate compliance", "Cross-functional communication"]],
  ["Leadership", ["Technical direction", "Client collaboration", "Business alignment"]],
] as const;

export const certifications = [
  ["Sep 2025", "Retrieval Augmented Generation (RAG)", "DeepLearning.AI"],
  ["Jul 2025", "Generative AI with Large Language Models", "DeepLearning.AI & AWS"],
  ["Apr 2025", "Generative AI Fundamentals", "Databricks"],
  ["Jan 2024", "Trustworthy and Responsible AI", "Mila"],
  ["Jun 2021", "Improving Deep Neural Networks", "DeepLearning.AI"],
  ["Feb 2021", "Neural Networks & Deep Learning", "DeepLearning.AI"],
  ["Oct 2020", "Sequence Models", "DeepLearning.AI"],
  ["Sep 2020", "Machine Learning Engineering for Production (MLOps)", "DeepLearning.AI"],
] as const;

export const interests = [
  ["LLMs", "Reasoning, evaluation, and useful enterprise patterns"],
  ["AI Agents", "Reliable workflows that connect models with real work"],
  ["RAG", "Grounded systems built around complex private knowledge"],
  ["Responsible AI", "Fair, explainable, accountable model behaviour"],
  ["Production AI", "From promising model to dependable product"],
  ["MLOps", "Monitoring, testing, and sustainable model operations"],
  ["Human-Centered AI", "Technology that supports judgment rather than replacing it"],
] as const;
