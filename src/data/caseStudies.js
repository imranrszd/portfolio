export const caseStudies = [
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis",
    subtitle: "Goodreads Review Classification Case Study",
    tech: "Python, Excel, RapidMiner",
    year: 2025,
    type: "analysis",

    image1: "images/sentiment1.png",
    image2: "images/sentiment3.png",
    pipelineImage: "images/sentiment2.png",

    description:
      "A data scraping and sentiment analysis case study that collects Goodreads reviews for The Metamorphosis and analyzes reader sentiment using rating-based labels and text classification preparation.",

    problem:
      "Goodreads reviews contain large amounts of reader opinion, but the feedback is unstructured and difficult to summarize manually. This project explores how review text and rating data can be converted into structured sentiment categories to understand overall reader perception and prepare the dataset for classification experiments.",

    dataset:
      "The dataset was scraped from Goodreads review pages for The Metamorphosis. It includes review text, star ratings, reviewer information, review dates, and related review metadata. The raw reviews were transformed into a structured dataset so they could be cleaned, labeled, analyzed, and used for sentiment classification.",

    methodology:
      "The project followed a data analysis workflow starting from web scraping, raw data collection, data cleaning, sentiment label creation, exploratory review analysis, and machine learning preparation. Python was used for scraping and preprocessing, Excel was used for manual inspection, and RapidMiner was used to support text classification experiments.",

    cleaning: [
      "Removed duplicated reviews to prevent repeated opinions from affecting sentiment distribution.",
      "Handled missing or incomplete review text to keep only usable records for analysis.",
      "Cleaned unnecessary symbols, spacing issues, and inconsistent formatting from the review text.",
      "Converted star ratings into sentiment categories, such as negative, neutral, and positive.",
      "Standardized the dataset into analysis-ready columns for review text, rating, and sentiment label.",
      "Prepared cleaned text data for text mining and classification experiments in RapidMiner.",
    ],

    questions: [
      "What is the overall sentiment distribution of Goodreads reviews for The Metamorphosis?",
      "Do the star ratings show more positive, neutral, or negative reader responses?",
      "What text patterns appear frequently in positive and negative reviews?",
      "Are low-rated reviews mainly caused by writing style, story difficulty, or reader interpretation?",
      "Can the cleaned review dataset be used for sentiment classification experiments?",
    ],

    insights: [
      "The review dataset showed mixed reader sentiment, which is expected for a literary work like The Metamorphosis because readers often react differently to its abstract themes and writing style.",
      "Higher-rated reviews generally indicate appreciation for the book’s symbolism, psychological depth, and literary value, while lower-rated reviews suggest difficulty with the story, pacing, or writing style.",
      "Rating-based sentiment labeling made it easier to separate reviews into positive, neutral, and negative groups, allowing the dataset to be analyzed beyond raw text alone.",
      "Cleaning the review text improved consistency by reducing duplicate entries, incomplete reviews, and unnecessary noise that could affect text classification results.",
      "The project shows that Goodreads review data can be transformed from unstructured opinions into structured sentiment data that supports both analysis and machine learning experiments.",
    ],

    recommendations: [
      "Use the sentiment distribution to quickly summarize public reader perception instead of relying only on the average star rating.",
      "Analyze negative reviews separately to identify the main reasons readers disliked the book, such as confusing themes, slow pacing, or writing difficulty.",
      "Include neutral reviews as a separate category instead of forcing all reviews into only positive or negative labels, since literary reviews often contain mixed opinions.",
      "Expand the dataset by collecting reviews from more books in the same genre to compare whether similar sentiment patterns appear across classic literature.",
      "Improve the classification experiment by testing different preprocessing steps, such as stopword removal, tokenization, TF-IDF weighting, and feature selection.",
      "Compare multiple classification models in RapidMiner to evaluate which model performs best for predicting review sentiment.",
    ],

    toolsUsed: [
      "Python",
      "BeautifulSoup / Playwright",
      "Excel",
      "RapidMiner",
      "Data cleaning",
      "Text preprocessing",
      "Sentiment labeling",
      "Text classification preparation",
    ],

    links: {
      github: "",
      dashboard: "",
    },
  }, {
    id: "covid-dashboard",
    title: "COVID-19 Mortality Dashboard",
    subtitle: "Malaysia COVID-19 Death Trends & Public Health Risk Analysis",
    tech: "Power BI, Excel, Data Visualization",
    year: 2025,
    type: "analysis",

    image1: "images/data1.png",
    image2: "images/data2.png",

    description:
      "An interactive Power BI case study that analyzes COVID-19 mortality trends in Malaysia using demographic, vaccination, comorbidity, BID, citizenship, and state-level death data.",

    problem:
      "COVID-19 death data can be difficult to understand when presented only through raw datasets or static reports. This project addresses the need for a clearer and more interactive way to explore mortality patterns in Malaysia, especially across age groups, vaccination status, comorbidities, gender, citizenship, BID status, and state distribution.",

    dataset:
      "The project used Malaysia COVID-19 death linelist data from Data.gov.my, provided by the Ministry of Health Malaysia. The dataset contains person-level COVID-19 fatality records, including date information, age, gender, vaccination dates and brands, comorbidity status, state, Malaysian citizenship status, and brought-in-dead status.",

    methodology:
      "The project followed a descriptive and exploratory analysis approach using Excel for data preparation and Power BI for dashboard development. The workflow included business understanding, stakeholder requirements, analytical objectives, data collection, data understanding, data preparation, exploratory data analysis, and dashboard storytelling.",

    cleaning: [
      "Renamed unclear columns to make the dataset easier to understand, such as changing generic date fields into clearer names like date_announced.",
      "Converted binary values such as 0 and 1 into readable labels like Yes and No for clearer interpretation in Power BI.",
      "Prepared key fields related to age, gender, comorbidity, state, vaccination brand, vaccination dose date, citizenship, and BID status.",
      "Improved dataset readability, consistency, and compatibility before building the dashboard visuals.",
    ],

    questions: [
      "How did COVID-19 death trends vary across different states in Malaysia?",
      "How did comorbidities and age influence COVID-19 death rates?",
      "What role did gender, comorbidities, and brought-in-dead status play in mortality patterns?",
      "How did COVID-19 vaccination status impact death trends over time?",
      "How did COVID-19 deaths compare between Malaysian and non-Malaysian citizens?",
    ],

    dashboardFeatures: [
      "Year and state filters for interactive exploration.",
      "Yearly death trend visualization to show the rise and decline of COVID-19 deaths over time.",
      "State-level comparison to identify regions with higher recorded deaths.",
      "Age distribution chart to highlight vulnerable age groups.",
      "Gender trend analysis to compare male and female death patterns.",
      "Comorbidity and BID status visuals to show health-risk and access-to-care factors.",
      "Vaccination status chart to compare deaths by vaccine dose category over time.",
      "Citizenship comparison to analyze Malaysian and non-Malaysian death distribution.",
    ],

    insights: [
      "The dashboard recorded 37,351 COVID-19 deaths, with the highest spike occurring in 2021.",
      "Deaths were highest among elderly groups, especially around the 60 to 80 age range.",
      "Selangor recorded the highest number of deaths, followed by states such as Johor and Sabah.",
      "Male deaths were generally higher than female deaths across the pandemic period.",
      "A notable portion of deaths were classified as brought-in-dead, suggesting possible delays in treatment or healthcare access.",
      "Deaths declined after the vaccination rollout became more established, especially from 2022 onward.",
      "Vaccination status, age, comorbidities, geography, and healthcare access all contributed to the overall mortality pattern.",
    ],

    recommendations: [
      "Prioritize elderly groups and individuals with health risks during future public health emergencies.",
      "Use state-level monitoring to target healthcare resources in high-risk regions.",
      "Strengthen early intervention and emergency response systems to reduce brought-in-dead cases.",
      "Continue public education on vaccination and booster importance during infectious disease outbreaks.",
      "Use interactive dashboards to support faster and clearer public health decision-making.",
    ],

    toolsUsed: [
      "Power BI",
      "Microsoft Excel",
      "Data cleaning",
      "Exploratory data analysis",
      "Dashboard design",
      "Data storytelling",
    ],

    links: {
      github: "",
      dashboard: "",
    },
  }, {
    id: "telco-churn-dashboard",
    title: "Telco Customer Churn Dashboard",
    subtitle: "Customer Retention & Churn Behavior Case Study",
    tech: "Tableau, Excel, Data Visualization",
    year: 2025,
    type: "analysis",

    image1: "images/telco-data1.png",
    image2: "images/telco-data2.png",

    description:
      "An interactive telco customer churn dashboard built to understand customer retention patterns, identify high-risk customer segments, and explore factors linked to customer churn.",

    problem:
      "The telco company wants to understand why some customers are leaving while others remain active. This analysis explores churn status, customer activity timeline, gender, age distribution, and payment method to identify which customer groups may have higher churn risk.",

    dataset:
      "The dataset contains telco customer information such as churn status, gender, age, payment method, and last transaction or activity date. These fields were used to analyze customer retention behavior and compare churn rates across different customer segments.",

    methodology:
      "The project followed a simple data analysis workflow: clean the customer data, prepare churn-related fields, build visualizations in Tableau, and interpret the dashboard to identify patterns in customer churn behavior.",

    cleaning: [
      "Cleaned gender values so customers could be grouped correctly.",
      "Prepared churn status categories to separate active customers from churned customers.",
      "Grouped customer ages into bins to make the age distribution easier to understand.",
      "Checked payment method categories such as cash, cheque, and credit card.",
      "Prepared the last transaction date field to analyze customer activity over time."
    ],

    questions: [
      "Are there more active customers or churned customers?",
      "When did customer activity start to decline?",
      "Which gender group has the higher churn rate?",
      "Which payment method is linked with higher churn?",
      "Which age groups make up most of the customer base?"
    ],

    insights: [
      "The telco company has a serious churn issue because churned customers slightly outnumber active customers, with 501 churned customers compared to 495 active customers.",
      "Customer activity was strongest around 2011 to 2012, but it dropped noticeably after 2012, suggesting that many customers became inactive or stopped using the service after that period.",
      "Female customers show a much higher churn rate at 66.96%, compared to male customers at 36.68%. This suggests that the company may need to investigate whether service experience, pricing, plan suitability, or customer support differs by segment.",
      "Payment method appears to be strongly related to churn. Customers using cheque have the highest churn rate at 73.53%, followed by cash at 69.18%, while credit card users have a much lower churn rate at 39.75%.",
      "Most customers are concentrated around the 30 to 60 age range, meaning retention strategies should focus heavily on this core customer group."
    ],

    recommendations: [
      "Investigate why female customers are churning at a much higher rate, especially around plan pricing, service quality, support experience, or package suitability.",
      "Encourage customers to move from cheque or cash payments to more convenient automatic or card-based payment methods, since credit card users show a lower churn rate.",
      "Create targeted retention campaigns for cheque and cash users because these payment groups show the highest churn risk.",
      "Monitor customers with no recent transactions or activity and send early reactivation offers before they fully churn.",
      "Review what changed after 2012, such as pricing, service coverage, competitors, or customer experience, because the timeline shows a clear decline after that period."
    ],

    story:
      "This dataset is about a telco company trying to understand why customers are leaving. The company had customer activity between 2009 and 2014, with activity peaking around 2011 and 2012. After 2012, customer activity dropped, suggesting that many customers stopped using the service or became inactive. The churn problem is serious because churned customers slightly outnumber active customers. Female customers show a much higher churn rate than male customers, and payment method also appears important because cheque and cash users have much higher churn rates compared to credit card users. The main finding is that the telco company is losing customers, especially among female customers and customers using cheque or cash payment methods. The company should investigate the experience of high-churn groups, improve payment convenience, and create retention campaigns for customers who are more likely to leave.",

    toolsUsed: [
      "Tableau",
      "Excel",
      "Data cleaning",
      "Customer segmentation",
      "Churn analysis",
      "Dashboard design",
      "Data storytelling"
    ],

    links: {
      github: "",
      dashboard: ""
    }
  },
];