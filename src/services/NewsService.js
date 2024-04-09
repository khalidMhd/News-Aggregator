import axios from "axios";

const nytApiKey = process.env.REACT_APP_NYT_API_KEY;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const NewsService = {
  async getArticlesByKeyword(keyword, date) {
    try {
      const [api1Response, api2Response] = await Promise.all([
        axios.get(
          `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&sortBy=publishedAt&apiKey=${newsApiKey}`
        ),
        axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&end_date=${date}&api-key=${nytApiKey}`
        ),
      ]);

      const normalizedApi1Data = await api1Response.data.articles.map(
        (item) => ({
          title: item?.title || item?.content,
          description: item?.description,
          content: item?.content,
          url: item?.url,
          urlToImage: item?.urlToImage,
          source: item?.source?.name,
          publishedAt: item?.publishedAt,
          author: item?.author,
          category: "",
        })
      );
      const normalizedApi2Data = await api2Response.data.response.docs.map(
        (item) => ({
          title: item?.headline.print_headline || item?.headline?.main,
          description: item?.lead_paragraph,
          content: item?.abstract,
          url: item?.web_url,
          urlToImage: `https://www.nytimes.com/${item?.multimedia[0]?.url}`,
          source: item?.source,
          category: item?.news_desk,
          publishedAt: item?.pub_date,
          author: `${item?.byline?.person[0]?.firstname} ${item?.byline?.person[0]?.lastname}`,
        })
      );

      return [...normalizedApi2Data, ...normalizedApi1Data];
    } catch (error) {
      console.error("Error fetching articles:", error);
      return [];
    }
  },

  // Implement other methods for fetching articles based on filters, personalized feed, etc.
};

export default NewsService;
