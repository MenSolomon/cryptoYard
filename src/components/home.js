import React, { useEffect, useRef, useState } from "react";
import css from "../styles/home.module.css";
import axios from "axios";
import yahoo from "../images/yahoo.png";
import coindesk from "../images/coindesk.png";
import coinjournal from "../images/coinjournal.png";
import cointelegraph from "../images/cointelegraph.png";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import $css from "../styles/currency.module.css";

import {
  Chart as ChartJS,
  CategoryScale, // x axis
  LinearScale, // y axis
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";
import _ from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const Home = () => {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/stats",
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  let [realData, setData] = useState({});

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(realData);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line
  }, []);

  const options2 = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const [coinInfo, setCoinInfo] = useState([]);

  useEffect(() => {
    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data.data.coins);
        setCoinInfo(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line
  }, []);

  // const options3 = {
  //   method: "GET",
  //   url: "https://crypto-news16.p.rapidapi.com/news/all",
  //   headers: {
  //     "X-RapidAPI-Key": "a9589c3647msh3a018635fee2fe8p194c30jsnbbc0154afcc5",
  //     "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
  //   },
  // };

  const [yahoo1, setYahoo] = useState([]);
  const [coindesk1, setCoindesk] = useState([]);
  const [coinjournal1, setCoinjournal] = useState([]);
  const [cointelegraph1, setCointelegraph] = useState([]);
  // const [coinninja1, setCoinninja] = useState([]);

  const options3 = {
    method: "GET",
    url: "https://crypto-news16.p.rapidapi.com/news/all",
    headers: {
      "X-RapidAPI-Key": "4dbfa69a2emshd96804ec3c890a5p158e0cjsn1636205859a0",
      "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options3)
      .then(function (response) {
        console.log(response.data);
        setYahoo(response.data.yahoo);
        setCoindesk(response.data.coindesk);
        setCoinjournal(response.data.coinjournal);
        setCointelegraph(response.data.cointelegraph);
        // setCoinninja(response.data.coinninja);

        console.log(yahoo1);
        console.log(coindesk1);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line
  }, []);

  let linkUrl = () => {};

  let linkUrl2 = () => {};
  let linkUrl3 = () => {};
  let linkUrl4 = () => {};
  let linkUrl5 = () => {};

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      responsive: true,
      plugins: {
        legend: false,
        title: { display: false, text: "Who Let them out" },
        maintainAspectRatio: false,
      },
      scales: {
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },

        x: {
          grid: {
            display: false,
          },

          ticks: {
            display: false,
          },
        },
      },
    });
  }, []);

  let newCoinArray = [];
  let intArray = [];

  coinInfo &&
    coinInfo.map((data) => {
      newCoinArray.push(data.sparkline);
    });
  for (let i = 0; i < 50; i++) {
    intArray.push(newCoinArray[i]?.map((string) => parseFloat(string)));
  }

  const combinearray = _.zip(coinInfo.slice(0, 10), intArray.slice(0, 10));

  console.log(combinearray);

  // let test = ["1.2222232", "2.3213123213123123", "0.432432423432324"];
  // console.log(test.map((string) => parseFloat(string)));
  // // console.log(intArray.slice(0, 10));

  let colors = "";

  const [isOpen, setIsOpen] = useState(false);

  const setVisible = () => {
    setIsOpen(true);
  };

  const modalStyle = {
    backgroundColor: "black",
    transform: "translate(-50px,-50px)",
    width: "30vw",
    height: "40vh",
    position: "fixed",
    left: "50vw",
    top: "40vh",
    zIndex: "1000",
  };

  const [toggle, setToggle] = useState("left");

  const [backColor, setBackColor] = useState("white");

  const toggleMove = () => {
    if (toggle === "left") {
      setToggle("right");
      setBackColor("rgba(0,0,0,.7)");
    } else {
      setToggle("left");
      setBackColor("white");
    }
  };

  /*
      4 - 6 add K
    1000000

    100000000
    7-9 add M

    100000000000
    10 - 12 bn 
    13-15 trn
 */

  //     {/* {realData.data.totalCoins}  */}
  //     {  {myTotalCoins.length} === 4
  //     ? `${myTotalCoins.substring(0, 1)} K`
  //     : realData.data?.totalCoins.length === 5
  //     ? `${realData.data?.totalCoins.length.substring(
  //         0,
  //         2
  //       )}.${realData.data?.totalCoins.length.substring(2, 3)} K`
  //     : realData.data?.totalCoins.length === 6
  //     ? `${realData.data?.totalCoins.length.substring(0, 3)} K`
  //     : realData.data?.totalCoins}
  // </td>

  console.log(coinInfo.data);

  return (
    <div style={{ backgroundColor: backColor, minHeight: "600vh" }}>
      <div className={css.toggle} onClick={toggleMove}>
        <div
          className={css.onoff}
          style={{ float: toggle, transition: "all .4s ease-in-out" }}
          onClick={toggleMove}
        ></div>
      </div>

      <div className={css.Navbar}>
        <ul>
          <li>CryptoYard</li>
          <li> Home </li>
          <Link to="/coins" className={css.linkStyle}>
            <li> Currencies </li>
          </Link>
          <Link to="/news" className={css.linkStyle}>
            <li>News</li>
          </Link>
          <li></li>
          <li onClick={setVisible}></li>
        </ul>
      </div>
      <Modal
        style={modalStyle}
        open={isOpen}
        closeModal={() => setIsOpen(false)}
        altClose={() => (isOpen === true ? setIsOpen(false) : null)}
      >
        This Modal
      </Modal>
      <div className={css.tableLayout}>
        <table>
          <tr>
            <th>Total Coins</th>
            <th> Total 24h Volume </th>
          </tr>

          <tr>
            <td>
              {/* {realData.data.totalCoins}  */}
              {realData.data?.totalCoins.toString().length === 5
                ? `${realData.data?.totalCoins
                    .toString()
                    .substring(0, 2)}.${realData.data?.totalCoins
                    .toString()
                    .substring(2, 3)} K`
                : realData.data?.totalCoins}
            </td>
            <td>
              {realData.data?.total24hVolume.length === 11
                ? `${realData.data?.total24hVolume.substring(0, 2)} BN`
                : realData.data?.total24hVolume.length === 10
                ? `${realData.data?.total24hVolume.substring(
                    0,
                    1
                  )}.${realData.data?.total24hVolume.substring(1, 2)} BN`
                : realData.data?.total24hVolume}
            </td>
          </tr>

          <tr>
            <th> Total Market Cap </th> <th> Total Market </th>
          </tr>

          <tr>
            <td>
              {realData.data?.totalMarketCap.length === 13
                ? `${realData.data?.totalMarketCap.substring(
                    0,
                    1
                  )}.${realData.data?.totalMarketCap.substring(1, 2)} TRN `
                : realData.data?.totalMarketCap}{" "}
            </td>
            <td>
              {realData.data?.totalMarkets.toString().length === 5
                ? `${realData.data?.totalMarkets
                    .toString()
                    .substring(0, 2)}.${realData.data?.totalMarkets
                    .toString()
                    .substring(2, 3)} K`
                : realData.data?.totalMarkets}
            </td>
          </tr>
        </table>
      </div>

      <div className={css.ranking}>
        <div className={css.rankHeading}> Top 10 Cryptos In The World </div>

        <div className={css.displaySheet}>
          <table>
            <thead>
              <tr>
                <td>#</td> <td>Name</td> <td>Market Cap</td> <td>Change</td>
                <td>Volume</td> <td>Price</td>
              </tr>
            </thead>

            <tbody>
              {combinearray &&
                combinearray.map(([index, graph]) => (
                  <tr key={index?.rank}>
                    <td> {index?.rank} </td>
                    <td>
                      <img src={index?.iconUrl} alt="logo"></img> {index?.name}{" "}
                      ( {index?.symbol} )
                    </td>
                    <td>
                      {index?.marketCap.length === 11
                        ? `${index?.marketCap.substring(
                            0,
                            2
                          )}.${index?.marketCap.substring(2, 3)} BN `
                        : index?.marketCap.length === 12
                        ? `${index?.marketCap.substring(
                            0,
                            3
                          )}.${index?.marketCap.substring(3, 4)} BN `
                        : index?.marketCap}
                    </td>

                    <td>
                      {" "}
                      {index?.change.substring(0, 1) === "-" ? (
                        <span style={{ color: "red" }}>
                          {" "}
                          {index?.change}%
                          <div className={$css.arrowDown}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </span>
                      ) : (
                        <span style={{ color: "green" }}>
                          {" "}
                          {index?.change}%{" "}
                          <div className={$css.arrow}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </span>
                      )}
                    </td>
                    <td>
                      {index && index["24hVolume"].length === 9
                        ? `${index && index["24hVolume"].substring(0, 3)}.${
                            index && index["24hVolume"].substring(3, 4)
                          } M`
                        : index && index["24hVolume"].length === 10
                        ? `${index && index["24hVolume"].substring(0, 1)}.${
                            index && index["24hVolume"].substring(1, 2)
                          } BN`
                        : index && index["24hVolume"].length === 11
                        ? `${index && index["24hVolume"].substring(0, 2)}.${
                            index && index["24hVolume"].substring(2, 3)
                          } BN`
                        : index && index["24hVolume"]}{" "}
                    </td>
                    <td>
                      <div>
                        {/* {setFake(index.sparkline)}
                      {setNewData(fake.map((string) => parseInt(string, 10)))} */}

                        <Line
                          style={{
                            position: "relative",
                            right: "1vw",
                            height: "8vh",
                            width: "4vw",
                          }}
                          options={chartOptions}
                          {...(graph && graph[graph?.length] <= graph[0]
                            ? (colors = "red")
                            : (colors = "green"))}
                          data={{
                            labels: graph?.map(() => ""),
                            datasets: [
                              {
                                label: "My First Dataset",
                                // data: newData,
                                data: graph,
                                fill: false,
                                borderColor: colors,
                                tension: 0.4,
                                pointBorderColor: "red",
                                pointStyle: false,
                                pointRadius: "0.3",
                                drawBorder: false,
                                borderWidth: 1.4,
                              },
                            ],
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={css.cryptoNews}>
        <div className={css.cryptoHead}> Latest Crypto News </div>

        <div className={css.yahooNews}>
          <img src={yahoo} alt="Yahoo Finance News"></img>

          {yahoo1.slice(0, 5).map((data) => (
            <div
              style={{
                width: "14.5vw",
                height: "70vh",
                position: "relative",
                top: "20vh",
                right: "16vw",
                marginRight: "1vw",
                border: "1px solid black ",
                cursor: "pointer",
              }}
              onClick={
                (linkUrl = () => {
                  window.location.replace(`${data.url}`);
                })
              }
            >
              <h3> {data.title} </h3>

              <p> {data.description} </p>
              <span style={{ fontSize: "0.8em", fontWeight: "bold" }}>
                {" "}
                {data.date}{" "}
              </span>
            </div>
          ))}
        </div>

        <div className={css.coindeskNews}>
          <img src={coindesk} alt="Coindesk News"></img>

          {coindesk1.slice(0, 5).map((data) => (
            <div
              style={{
                width: "14.5vw",
                height: "70vh",
                position: "relative",
                top: "50vh",
                right: "16vw",
                marginRight: "1vw",

                cursor: "pointer",
              }}
              onClick={
                (linkUrl2 = () => {
                  window.location.replace(`${data.url}`);
                })
              }
            >
              <h3> {data.title} </h3>

              <p> {data.description} </p>
              <span style={{ fontSize: "0.8em", fontWeight: "bold" }}>
                {data.date}
              </span>
            </div>
          ))}
        </div>

        <div className={css.coinjournalNews}>
          <img src={coinjournal} alt="Coinjournal News"></img>

          {coinjournal1.slice(0, 5).map((data) => (
            <div
              style={{
                width: "14.5vw",
                height: "70vh",
                position: "relative",
                top: "60vh",
                right: "16vw",
                marginRight: "1vw",

                cursor: "pointer",
              }}
              onClick={
                (linkUrl3 = () => {
                  window.location.replace(`${data.url}`);
                })
              }
            >
              <h3> {data.title} </h3>

              <p> {data.description} </p>
              <span style={{ fontSize: "0.8em", fontWeight: "bold" }}>
                {data.date}
              </span>
            </div>
          ))}
        </div>

        <div className={css.cointelegraphNews}>
          <img src={cointelegraph} alt="Coinjournal News"></img>

          {cointelegraph1.slice(0, 5).map((data) => (
            <div
              style={{
                width: "14.5vw",
                height: "70vh",
                position: "relative",
                top: "115vh",
                right: "16vw",
                marginRight: "1vw",

                cursor: "pointer",
              }}
              onClick={
                (linkUrl3 = () => {
                  window.location.replace(`${data.url}`);
                })
              }
            >
              <h3> {data.title} </h3>

              <p> {data.description} </p>
              <span style={{ fontSize: "0.8em", fontWeight: "bold" }}>
                {data.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// data.coins (name,symbol,iconUrl , change , 24hVolume , rank , marketCap)

export default Home;

// <div className={css.coinninjaNews}>
// <img src={coinninja} alt="Coinninja News"></img>

// {coinninja1.slice(0, 5).map((data) => (
//   <div
//     style={{
//       width: "14.5vw",
//       height: "70vh",
//       position: "relative",
//       top: "115vh",
//       right: "16vw",
//       marginRight: "1vw",

//       cursor: "pointer",
//     }}
//     onClick={
//       (linkUrl3 = () => {
//         window.location.replace(`${data.url}`);
//       })
//     }
//   >
//     <h3> {data.title} </h3>

//     <p> {data.description} </p>
//     <span style={{ fontSize: "0.8em", fontWeight: "bold" }}>
//       {data.date}
//     </span>
//   </div>
// ))}
// </div>
