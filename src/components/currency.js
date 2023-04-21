import React, { useEffect, useRef, useState } from "react";
import css from "../styles/home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
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
import $css from "../styles/currency.module.css";
import search from "../images/search.png";
import upArrow from "../images/upArrow.png";
import downArrow from "../images/downArrow.png";
import _, { lowerFirst } from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const Currency = () => {
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

  const [coinInfo1, setCoinInfo1] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .request(options2)
        .then(function (response) {
          console.log(response.data.data.coins);
          setCoinInfo(response.data.data.coins);
          setCoinInfo1(response.data.data);
          console.log("Jesus is God");
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  console.log(coinInfo1);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      responsive: true,
      plugins: {
        legend: true,
        title: { display: false, text: "Who Let them out" },
      },
      maintainAspectRatio: false,
    });
  }, []);

  let newCoinArray = [];
  let graph = [];

  coinInfo &&
    coinInfo.map((data) => {
      newCoinArray.push(data.sparkline);
    });
  for (let i = 0; i < 50; i++) {
    graph.push(newCoinArray[i]?.map((string) => parseFloat(string)));
  }

  // javascript for all the coins and their graph display
  let newCoinArray2 = [];
  let intArray = [];

  coinInfo &&
    coinInfo.map((data) => {
      newCoinArray2.push(data.sparkline);
    });
  for (let i = 0; i < 50; i++) {
    intArray.push(newCoinArray2[i]?.map((string) => parseFloat(string)));
  }

  const combinearray = _.zip(coinInfo, intArray);

  console.log(combinearray);

  const [chartOptions2, setChartOptions2] = useState({});

  useEffect(() => {
    setChartOptions2({
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

  let colors = "";

  let bullColor = "green";
  let bearColor = "red";
  const [ncolor, setNcolor] = useState("");
  const [visibility, setVisibility] = useState("hidden");
  const [inputValue, setInputValue] = useState("");

  const displaySearch = (e) => {
    setVisibility("visible");

    if (e.target.value == "") {
      setVisibility("hidden");
    }

    setInputValue(e.target.value);
  };

  const inputRef = useRef(null);

  console.log(coinInfo);

  // console.log(
  //   coinInfo.filter((item) => item.name.toLowerCase().includes(inputValue))
  // );

  const searchClear = () => {
    setVisibility("hidden");
  };

  const searchShow = () => {
    setVisibility("visible");
  };

  const [index, setIndex] = useState(0);

  let setMyIndex = () => {};

  // This is the data for the news of each coin

  const [coinNews, setCoinNews] = useState([]);

  const options4 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt",
    headers: {
      "X-RapidAPI-Key": "ab05e36d7cmsh2e30315d4df830fp15fa40jsn35c4f9206e1a",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options4)
      .then(function (response) {
        console.log("The coin news ");
        console.log(response.data);
        setCoinNews(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(coinNews);

  var regex = /bitcoin/;
  const write = "bitcoin";
  var string = "this is a boy his name is ekow , bitcoin andlove is a boy";

  console.log(string.includes(write));

  string.includes(write) == true
    ? console.log("True it exists")
    : console.log("False it doesnt");

  // console.log(regex.test(string));

  // console.log(string[36]);

  // let result = string.replace(/\s/g, "");

  // console.log(result);

  const [coinName, setCoinName] = useState("");

  console.log(index);

  console.log(coinInfo.data);

  console.log(coinInfo1.data);

  // PAGINATION
  // const [loadValue, setLoadValue] = useState(8);

  // const loadMoreFunction = () => {
  //   setLoadValue(loadValue + 3);
  // };

  console.log("Jesus is God");

  var value = "";

  // const numbEdits = (array, index, apiName) => {
  //   if (array[index]?.array[index][apiName].length === 9) {
  //     `${array[index]?.array[index][apiName].substring(0, 3)}.${array[
  //       index
  //     ]?.array[index][apiName].substring(3, 4)} M`;
  //   } else if (array[index]?.array[index][apiName].length === 10) {
  //     `${array[index]?.array[index][apiName].substring(0, 1)}.${array[
  //       index
  //     ]?.array[index][apiName].substring(1, 2)} BN`;
  //   } else if (array[index]?.array[index][apiName].length === 11) {
  //     `${array[index]?.array[index][apiName].substring(0, 2)}.${array[
  //       index
  //     ]?.array[index][apiName].substring(2, 3)} BN`;
  //   } else {
  //     array[index]?.array[index][apiName];
  //   }

  //   return value;
  // };

  return (
    <div onClick={searchClear}>
      <div className={css.Navbar}>
        <ul>
          <li>CryptoYard</li>
          <Link to="/" className={css.linkStyle}>
            <li> Home </li>
          </Link>
          <li> Currencies </li>
          <Link to="/news" className={css.linkStyle}>
            <li>News</li>
          </Link>
          {/* <li>Community</li>
          <li>Settings</li> */}
        </ul>
      </div>

      <div className={$css.nameHeader}>
        {`${coinInfo[index]?.name} - ${coinInfo[index]?.symbol} Price `}
      </div>
      <div className={$css.nameContent}>
        {coinInfo[index]?.name} live price in US Dollar USD. View value
        statistics, market cap and supply
      </div>

      <div className={$css.searchArea}>
        <input
          onChange={displaySearch}
          type="text"
          placeholder="Search"
          ref={inputRef}
          onClick={searchShow}
        ></input>
        <button type="submit">
          <img src={search}></img>
        </button>

        <div
          style={{
            visibility: visibility,
          }}
          className={$css.searchList}
        >
          {/* {coinInfo.map((item) => (
            <div style={{}} key={item?.name}>
              {item?.name}
            </div>
          ))} */}
          {coinInfo
            .filter((item) => item.name.toLowerCase().includes(inputValue))
            // .slice(0, loadValue)
            .map((item) => (
              <ul className={$css.searchBoxList}>
                <li onClick={(setMyIndex = () => setIndex(item.rank - 1))}>
                  <img src={item?.iconUrl} alt="logo"></img>
                  {item?.name}
                </li>
              </ul>
            ))}

          <span
            className={$css.loadMore}
            //  onClick={loadMoreFunction}
          >
            Load More
          </span>
        </div>
      </div>

      <select className={$css.selectValue}>
        <option value="1yr"> 1yr </option>
        <option value="3m"> 3m </option>
        <option value="1m"> 1m </option>
        <option value="7dy"> 7dy </option>
        <option value="24hr"> 24hr </option>
      </select>

      <ul className={$css.chartList}>
        <li> {`${coinInfo[index]?.name} Price Chart `} </li>
        <li> Change : {coinInfo[index]?.change} % </li>
        <li>
          {" "}
          {`Current ${coinInfo[index]?.name} Price : `}${coinInfo[index]?.price}
        </li>
      </ul>
      <div style={{ height: "60vh", width: "70vw" }}>
        <Line
          className={$css.LineGraph}
          options={chartOptions}
          {...(graph && graph[graph?.length] <= graph[0]
            ? (colors = "red")
            : (colors = "green"))}
          data={{
            labels: graph?.map(() => ""),
            datasets: [
              {
                label: "Price in USD",
                // data: newData,
                data: graph[index],
                fill: false,
                borderColor: "blue",
                tension: 0,
                pointBorderColor: "red",
                pointStyle: true,
                pointRadius: "1",
                drawBorder: false,
                borderWidth: 1.4,
              },
            ],
          }}
        />
      </div>

      <ul className={$css.extraInfo}>
        <li>
          <span className={$css.extraInfo_Header}>
            {coinInfo[index]?.name} Value Statistics
          </span>
          <span className={$css.extraInfo_head_content}>
            <br /> An overview showing the statistics of $
            {coinInfo[index]?.name}, sucha as the base and quote currency, the
            rank and trading volume.
          </span>
          <table className={$css.tableShow}>
            <tbody>
              <tr>
                <td>
                  Price to USD <span> $ {coinInfo?.price} </span>
                </td>
              </tr>
              <tr>
                <td>
                  Rank <span> {coinInfo[index]?.rank} </span>
                </td>
              </tr>
              <tr>
                <td>
                  24h Volume
                  <span>
                    {/* {numbEdits(coinInfo, index, "24hVolume")}
                    {value} */}

                    {coinInfo[index] &&
                    coinInfo[index]["24hVolume"].length === 9
                      ? `${
                          coinInfo[index] &&
                          coinInfo[index]["24hVolume"].substring(0, 3)
                        }.${
                          coinInfo[index] &&
                          coinInfo[index]["24hVolume"].substring(3, 4)
                        } M`
                      : coinInfo[index] &&
                        coinInfo[index]["24hVolume"].length === 10
                      ? `${
                          coinInfo[index] &&
                          coinInfo[index]["24hVolume"].substring(0, 1)
                        }.${
                          coinInfo[index] &&
                          coinInfo[index]["24hVolume"].substring(1, 2)
                        } BN`
                      : coinInfo[index] &&
                        coinInfo[index]["24hVolume"].length === 11
                      ? `${
                          coinInfo[index] &&
                          coinInfo[index]["24hVolume"].substring(0, 2)
                        }.${
                          coinInfo[index] &&
                          coinInfo[index]["24hVolume"].substring(2, 3)
                        } BN`
                      : coinInfo[index] && coinInfo[index]["24hVolume"]}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  Market Cap{" "}
                  <span>
                    {coinInfo[index]?.marketCap.length === 11
                      ? `${coinInfo[index]?.marketCap.substring(
                          0,
                          2
                        )}.${coinInfo[index]?.marketCap.substring(2, 3)} BN `
                      : coinInfo[index]?.marketCap.length === 12
                      ? `${coinInfo[index]?.marketCap.substring(
                          0,
                          3
                        )}.${coinInfo[index]?.marketCap.substring(3, 4)} BN `
                      : coinInfo[index]?.marketCap}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  All-time-high(daily avg,) <span> $ 65K </span>
                </td>
              </tr>
            </tbody>
          </table>
        </li>

        {/*   NOTE: THE API TO GIVE OUT THIS DATA DOESNT NOT WORK ANYNORE   <li>
          <span className={$css.extraInfo_Header}>Other stats info</span>

          <span className={$css.extraInfo_head_content}>
            <br /> An overview showing the statistics of Bitcoin, sucha as the
            base and quote currency, the rank and trading volume.
          </span>
          <table className={$css.tableShow}>
            <tbody>
              <tr>
                <td>
                  Number Of Markets <span> 21574 </span>
                </td>
              </tr>
              <tr>
                <td>
                  Number of Exchanges <span> 346 </span>
                </td>
              </tr>
              <tr>
                <td>
                  Approved Supply <span> / </span>
                </td>
              </tr>
              <tr>
                <td>
                  Total Supply <span> $ 48K </span>
                </td>
              </tr>
              <tr>
                <td>
                  Circulating Supply <span> $ 65K </span>
                </td>
              </tr>
            </tbody>
          </table>
        </li> */}

        {/* <li> What is bitcoin </li>

        <li> Bitcoin Links </li> */}
      </ul>

      <div className={$css.newsItems}>
        {coinNews &&
          coinNews.map((item) =>
            item?.title.includes(coinInfo[index]?.name) === true ? (
              <div className={$css.newContentSlide}>
                <div className={$css.newsTitle}> {item?.title} </div>
                <div
                  className={$css.newsImage}
                  style={{
                    backgroundImage: `url(${item?.thumbnail})`,
                    backgroundSize: "cover",
                  }}
                >
                  {console.log(item?.url)}
                </div>

                <div style={{ marginTop: "1.5vh" }}> {item?.description} </div>
                <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                  {" "}
                  {item?.createdAt}{" "}
                </div>
              </div>
            ) : (
              ""
            )
          )}
      </div>
      <div className={$css.displaySheet}>
        <table>
          <thead>
            <tr>
              <td>#</td> <td>Name</td> <td>Market Cap</td> <td>Change</td>
              <td>Volume</td> <td>Price</td>
            </tr>
          </thead>

          <tbody>
            {combinearray &&
              combinearray.map(([index, graph1]) => (
                <tr key={index?.rank}>
                  <td> {index?.rank} </td>
                  <td>
                    <img src={index?.iconUrl} alt="logo"></img> {index?.name} ({" "}
                    {index?.symbol} )
                  </td>
                  <td>
                    {" "}
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
                      : index?.marketCap.length === 10
                      ? `${index?.marketCap.substring(
                          0,
                          3
                        )}.${index?.marketCap.substring(3, 4)} M `
                      : index?.marketCap}{" "}
                  </td>
                  <td>
                    {index?.change.substring(0, 1) === "-" ? (
                      <span style={{ color: "red" }}>
                        {index?.change}%
                        <div className={$css.arrowDown}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </span>
                    ) : (
                      <span style={{ color: "green" }}>
                        {index?.change}%
                        <div className={$css.arrow}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </span>
                    )}
                  </td>
                  <td>
                    {index && index["24hVolume"].length === 7
                      ? `${index && index["24hVolume"].substring(0, 1)}.${
                          index && index["24hVolume"].substring(1, 2)
                        }M`
                      : index && index["24hVolume"].length === 8
                      ? `${index && index["24hVolume"].substring(0, 2)}.${
                          index && index["24hVolume"].substring(2, 3)
                        }M`
                      : index && index["24hVolume"].length === 9
                      ? `${index && index["24hVolume"].substring(0, 3)}.${
                          index && index["24hVolume"].substring(3, 4)
                        }M`
                      : index && index["24hVolume"].length === 10
                      ? `${index && index["24hVolume"].substring(0, 1)}.${
                          index && index["24hVolume"].substring(1, 2)
                        }BN`
                      : index && index["24hVolume"].length === 11
                      ? `${index && index["24hVolume"].substring(0, 2)}.${
                          index && index["24hVolume"].substring(2, 3)
                        }BN`
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
                        options={chartOptions2}
                        {...(graph1 && graph1[graph1?.length] <= graph1[0]
                          ? (colors = "green")
                          : (colors = "red"))}
                        data={{
                          labels: graph1?.map(() => ""),
                          datasets: [
                            {
                              label: "My First Dataset",
                              // data: newData,
                              data: graph1,
                              fill: false,
                              borderColor: {
                                ...(graph1 &&
                                graph1[graph1?.length] <= graph1[0]
                                  ? "green"
                                  : "red"),
                              },
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
  );
};

export default Currency;
