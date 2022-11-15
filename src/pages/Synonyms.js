import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Synonyms = () => {
  const BASE_URL = "https://api.datamuse.com";

  const [searchValue, setSearchValue] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const fetchSynonyms = (searchterm) => {
     fetch(`${BASE_URL}/words?rel_syn=${searchterm}`)
       .then((response) => response.json())
       .then(setSynonyms);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!searchValue) {
      alert("Enter something!");
      return;
    }

    fetchSynonyms(searchValue)

    console.log(synonyms);

    // setSearchValue("");
  };

  const handleSynonymClicked = (searchterm) => {
    console.log(searchterm)

    setSearchValue(searchterm)
    
    fetchSynonyms(searchterm)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="text-3xl">Search for synonyms</h1>

      <form onSubmit={handleFormSubmit}>
        <TextField
          size="small"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          style={{ marginRight: "20px" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button variant="contained" size="large" onClick={handleFormSubmit}>
          Search
        </Button>
      </form>
      <p style={{ textDecoration: "underline" }}>
        Found {synonyms.length} synonyms:{" "}
      </p>
      <div className="synonym_grid">
        {synonyms.length > 0 &&
          synonyms.map((synonym, i) => (
            <p key={i} onClick={() => handleSynonymClicked(synonym.word)}>{synonym.word}</p>
        ))}
      </div>
    </div>
  );
};

export default Synonyms;
