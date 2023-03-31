import React, { useEffect, useState } from "react";
import "./Search.css";
const Search = () => {
  const [Search, setSearch] = useState([]);
  const [SearchData, setSearchData] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  //
  function GetData() {
    fetch("https://navadhiti-server.onrender.com/fields")
      .then((res) => res.json())
      .then((res) => {
        setSearch(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // useEffect
  useEffect(() => {
    GetData();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    const FilterResult =
      Search &&
      Search.filter(
        (item) =>
          item.type.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.label.toLowerCase().includes(e.target.value.toLowerCase())
      );
    setSearchData(FilterResult);
  };
  //console.log("SearchData",SearchData);
  //console.log(value)

  //
  useEffect(() => {
    if (value === "") {
      setShowBox(false);
    }
    if (value !== "") {
      setShowBox(true);
    }
  }, [value]);

  const handleCick = (key) => {
    setData(key);
    setShowBox(false);
  };

  return (
    <div>
      <div>
        <input
          placeholder="Please enter type or label here..."
          type="text"
          onChange={handleChange}
        />
        <button onChange={handleChange}>Search</button>
      </div>
      {showBox && (
        <div className="main_div">
          {SearchData &&
            SearchData.map((el) => (
              <div className="single">
                <h5 onClick={() => handleCick(el.key)}>{el.key}</h5>
              </div>
            ))}
        </div>
      )}

      <div className="click_data">{data}</div>
    </div>
  );
};

export default Search;
