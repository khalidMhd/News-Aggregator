import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import NewsService from "../services/NewsService";
import Loader from "../components/Loader";

const NewsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [filter, setFilter] = useState({
    source: "",
    author: "",
    category: "",
  });

  const handleSearch = async (keyword, date) => {
    setIsLoading(true);

    setFilter({
      source: "",
      author: "",
      category: "",
    });
    const results = await NewsService.getArticlesByKeyword(keyword, date);
    setArticles(results);
    setFilterList(results);
    setIsLoading(false);
  };

  const filterArticleHandler = async (params) => {
    const results = await filterList.filter(
      (item) =>
        item.author == params.author ||
        item.source == params.source ||
        item.category == params.category
    );
    setArticles(results);
  };

  const handleFilter = (type, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [type]: value,
    }));
  };

  useEffect(() => {
    filterArticleHandler(filter);
  }, [filter]);
  return (
    <div className="container">
      <h1>News Aggregator</h1>
      <SearchBar onSearch={handleSearch} />
      <Filters articles={filterList} filter={filter} onFilter={handleFilter} />
      <ArticleList articles={articles} />
      {isLoading && <Loader />}
    </div>
  );
};

export default NewsScreen;
