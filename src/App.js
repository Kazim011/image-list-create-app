import "./app.css";
import { useState } from "react";
import searchİmages from "./api";
import SearchBar from "./companents/SearchBar";
import ImageList from "./companents/ImageList";

function App() {
  const [images, setİmages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchİmages(term);

    setİmages(result);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
