import { useState } from "react";

const Search = (props) => {
  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formData);
  };
  return (
    <div className="search">
      <h2>Search Anime</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="f.g Full metal alcemist"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
