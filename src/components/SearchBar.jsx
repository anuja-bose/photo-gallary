import { useContext, useState } from "react"
import { Button } from "react-bootstrap";
import PhotoGalleryContext from "../context/PhotoGalleryContext";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchKeyword } = useContext(PhotoGalleryContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleButtonSearch = () => {
    setSearchKeyword(searchValue);
    //setSearchValue("");
    console.log("before navigate");
    window.location.replace("/photos/search/"+searchValue);
    console.log("after navigate");
  }
  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchValue("");
      setSearchKeyword(searchValue);
      window.location.replace("/photos/search/"+searchValue);
    }
  }

  return (
    <div className="flex">
      <form className="form-inline">
        <div className="input-group">
          <input type="text" className="form-control search"
            placeholder="Search free high-resolution photos"
            aria-label="Username" value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterSearch}
            aria-describedby="basic-addon1"
            />

          <div className="input-group-prepend">
            <span id="basic-addon1">
              <Button
                onClick={handleButtonSearch}
                disabled={!searchValue}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></Button>

            </span>
          </div>
        </div>
      </form>



    </div>
  )
}

export default SearchBar