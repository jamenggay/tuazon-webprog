import defaultArticles from "../data/article-content";

const ARTICLES_KEY = "articles";

export const getArticles = () => {
  const savedArticles = localStorage.getItem(ARTICLES_KEY);

  if (savedArticles) {
    return JSON.parse(savedArticles);
  }

  localStorage.setItem(ARTICLES_KEY, JSON.stringify(defaultArticles));
  return defaultArticles;
};

export const saveArticles = (articles) => {
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
};
