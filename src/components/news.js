import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from "../styles/home.module.css";
import axios from "axios";
import newsCss from "../styles/news.module.css";
import search from "../images/search.png";
import $css from "../styles/currency.module.css";
import _ from "lodash";

export const News = () => {
  const [coindesk, setCoindesk] = useState([]);

  const options = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
    headers: {
      "X-RapidAPI-Key": "aaf2863073msh4e5d6e95bdeace4p10eeccjsn9414f80e815d",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCoindesk(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [coinTelegraph, setCoinTelegraph] = useState([]);

  const options1 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/cointelegraph",
    headers: {
      "X-RapidAPI-Key": "aaf2863073msh4e5d6e95bdeace4p10eeccjsn9414f80e815d",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options1)
      .then(function (response) {
        console.log(response.data);
        setCoinTelegraph(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [bitCoinist, setBitCoinist] = useState([]);

  const options2 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/bitcoinist",
    headers: {
      "X-RapidAPI-Key": "aaf2863073msh4e5d6e95bdeace4p10eeccjsn9414f80e815d",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data);
        setBitCoinist(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [decrypt, setDecrypt] = useState([]);

  const options3 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt",
    headers: {
      "X-RapidAPI-Key": "aaf2863073msh4e5d6e95bdeace4p10eeccjsn9414f80e815d",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options3)
      .then(function (response) {
        console.log(response.data);
        setDecrypt(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [bscNews, setBscNews] = useState([]);

  const options4 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/bsc",
    headers: {
      "X-RapidAPI-Key": "aaf2863073msh4e5d6e95bdeace4p10eeccjsn9414f80e815d",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options4)
      .then(function (response) {
        console.log(response.data);
        setBscNews(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [theGuardian, setTheGuardian] = useState([]);

  const options5 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/theguardian",
    headers: {
      "X-RapidAPI-Key": "aaf2863073msh4e5d6e95bdeace4p10eeccjsn9414f80e815d",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options5)
      .then(function (response) {
        console.log(response.data);
        setTheGuardian(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  //   console.log(coindesk);
  //   console.log(coinTelegraph);
  //   console.log(bitCoinist);
  //   console.log(decrypt);
  //   console.log(bscNews);
  //   console.log(theGuardian);

  const combinearray = _.zip(
    coindesk,
    coinTelegraph,
    bitCoinist,
    decrypt,
    bscNews,
    theGuardian
  );

  console.log(combinearray);

  return (
    <div>
      <div className={css.Navbar}>
        <ul>
          <li>CryptoYard</li>
          <Link to="/" className={css.linkStyle}>
            <li> Home </li>
          </Link>
          <Link to="/coins" className={css.linkStyle}>
            <li> Currencies </li>
          </Link>
          <li style={{ position: "relative", right: "7vw" }}>News</li>
          {/* <li>Community</li>
          <li>Settings</li> */}
        </ul>
      </div>

      <div className={newsCss.searchNews}>
        <input type="text" placeholder="search News"></input>
        <button type="submit">
          <img src={search}></img>
        </button>
      </div>

      <div className={newsCss.newsHeader}>
        <h2>
          Find out what's going on in the crypto market with latest crypto news{" "}
          <br />
          from your favorite and trusted news sources..............
        </h2>
      </div>

      <div className={newsCss.masterNewsArea}>
        <span style={{ fontSize: "2em", marginBottom: "5vh" }}> Coindesk</span>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {coindesk &&
            coindesk.map((item) => (
              <div className={$css.newContentSlide}>
                <div className={$css.newsTitle}> {item?.title} </div>
                <div
                  className={$css.newsImage}
                  style={{
                    backgroundImage: `url(${item?.thumbnail})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <div style={{ marginTop: "1.5vh" }}> {item?.description} </div>
                <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                  {item?.createdAt}
                </div>
              </div>
            ))}
        </div>

        <span style={{ fontSize: "2em", marginBottom: "5vh" }}>
          Coin Telegraph
        </span>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {coinTelegraph &&
            coinTelegraph.map((item) => (
              <div className={$css.newContentSlide}>
                <div className={$css.newsTitle}> {item?.title} </div>
                <div
                  className={$css.newsImage}
                  style={{
                    backgroundImage: `url(${item?.thumbnail})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <div style={{ marginTop: "1.5vh" }}> {item?.description} </div>
                <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                  {item?.createdAt}
                </div>
              </div>
            ))}
        </div>

        <span style={{ fontSize: "2em", marginBottom: "5vh" }}>BitCoinist</span>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {bitCoinist &&
            bitCoinist.map((item) => (
              <div className={$css.newContentSlide}>
                <div className={$css.newsTitle}> {item?.title} </div>
                <div
                  className={$css.newsImage}
                  style={{
                    backgroundImage: `url(${item?.thumbnail})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <div style={{ marginTop: "1.5vh" }}> {item?.description} </div>
                <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                  {item?.createdAt}
                </div>
              </div>
            ))}
        </div>

        <span style={{ fontSize: "2em", marginBottom: "5vh" }}>Decrypt</span>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {decrypt &&
            decrypt.map((item) => (
              <div className={$css.newContentSlide}>
                <div className={$css.newsTitle}> {item?.title} </div>
                <div
                  className={$css.newsImage}
                  style={{
                    backgroundImage: `url(${item?.thumbnail})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <div style={{ marginTop: "1.5vh" }}> {item?.description} </div>
                <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                  {item?.createdAt}
                </div>
              </div>
            ))}
        </div>

        <span style={{ fontSize: "2em", marginBottom: "5vh" }}>BSC News</span>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {bscNews &&
            bscNews.map((item) => (
              <div className={$css.newContentSlide}>
                <div className={$css.newsTitle}> {item?.title} </div>
                <div
                  className={$css.newsImage}
                  style={{
                    backgroundImage: `url(${item?.thumbnail})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <div style={{ marginTop: "1.5vh" }}> {item?.description} </div>
                <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                  {item?.createdAt}
                </div>
              </div>
            ))}
        </div>

        {/* <span style={{ fontSize: "2em", marginBottom: "5vh" }}>
          The Guardian
        </span>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {theGuardian &&
            theGuardian.map((item) => (
              <div
                className={$css.newContentSlide}
                style={{ border: "1px solid black" }}
              >
                <div className={$css.newsTitle}> {item?.title} </div>
                <div
                  className={$css.newsImage}
                  style={{
                    backgroundImage: `url(${item?.thumbnail})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <div style={{ marginTop: "1.5vh" }}> {item?.description} </div>
                <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                  {item?.createdAt}
                </div>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};
