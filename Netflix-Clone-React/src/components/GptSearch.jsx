import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";
import { useState } from "react";

const GptSearch = () => {
  const [busyIndicatorForGPTSearch, setBusyIndicatorForGPTSearch]= useState(false);
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar busyIndicatorForGPTSearch={busyIndicatorForGPTSearch} setBusyIndicatorForGPTSearch={setBusyIndicatorForGPTSearch} />
      <GptMovieSuggestions  />
    </div>
  );
};

export default GptSearch;
