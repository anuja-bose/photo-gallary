import { useContext, useState } from "react"
import { Button } from "react-bootstrap";
import { PhotoGalleryContext } from "../App";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(PhotoGalleryContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    //setSearchValue("");
    setSearchImage(searchValue);
  }
  const handleEnterSearch = e => {
    if (e.key === 'Enter') {
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      //setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    <div className="flex">
      <input
        className=""
        type="search"
        placeholder="Search free high-resolution photos"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <Button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      > 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg></Button>
    </div>
  )
}

export default SearchBar