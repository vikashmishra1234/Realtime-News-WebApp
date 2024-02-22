import React, {  useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
const NewsCard = (props) => {
  const [News, setNews] = useState();
  const [page, setPage] = useState(1);
  const [totalArt, setTotalArt] = useState("");
  const [Loading,setLoading]=useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=48e55c194ddd4511afa3f2227239fc27&page=1&pageSize=15`
      );
      let Info = await data.json();
      setLoading(false)
      setTotalArt(Info.totalResults);

      setNews(Info.articles);
      console.log(News);
    };
    News?'':getData()
   
  }, [News]);




  
  const handlePrevious = async () => {
    setPage(page - 1);
    setLoading(true)
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=48e55c194ddd4511afa3f2227239fc27&page=${
        page - 1
      }&pageSize=15`
    );
    let Info = await data.json();
    setLoading(false)
    setTotalArt(Info.totalResults);

    setNews(Info.articles);

  };

  const handleNext = async () => {
  
    if (page + 1 > Math.ceil(totalArt / 15)) {
      
    } else {
      setPage(page + 1);
      setLoading(true)
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=48e55c194ddd4511afa3f2227239fc27&page=${
          page + 1
        }&pageSize=15`
      );
      let Info = await data.json();
      setLoading(false)
      setTotalArt(Info.totalResults);
      console.log(Info.totalResults, "this is total result");
      setNews(Info.articles);
    }
  };

  return (
    <div className="container w-100">
      <h2 className="pb-4 pt-3 fs-1 m-auto mb-3 text-center"> Top-Headlines</h2>
     {Loading?<Spinner/>:''}
      <div className="row">
        {News?News.map((news) => (
          
          <div className="col-md-4 mb-3"  key={news.url}>
            <Card
              title={news.title ? news.title : ""}
              imgUrl={
                news.urlToImage
                  ? news.urlToImage
                  : "https://images.moneycontrol.com/static-mcnews/2024/02/market_up_higher-3-770x433.jpg"
              }
             
              content={
                news.content
                  ? news.content
                  : "Read More about it on clicking the button below"
              }
              more={news.url}
            />
          </div>
        )):''}
      </div>
      <div className="d-flex w-100 justify-content-around mt-3">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={handlePrevious}
        >
          previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNext}
          disabled = {page + 1 > Math.ceil(totalArt / 15)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
