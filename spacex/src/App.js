import React, { useState } from "react";

import SearchData from "./SearchData";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: `url(
          "https://images.pexels.com/photos/23775/rocket-launch-space-discovery.jpg"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2>Space X search page 🚀</h2>
      <br />
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter search name"
      />

      <SearchData value={searchInput} />
    </div>
  );
};

export default App;
