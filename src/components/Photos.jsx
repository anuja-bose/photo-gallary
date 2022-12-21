import { useContext } from "react"
import { PhotoGalleryContext } from "../App"
import ShadowLoading from "./ShadowLoading";
import SinglePhoto from "./SinglePhoto";

const Photos = () => {
  const { response, isLoading, searchImage } = useContext(PhotoGalleryContext);
  
  return (
    <>
      <h1>Results for {searchImage || 'Cats'}</h1>
      <div>
        {isLoading ? <ShadowLoading item={10} /> : response.map((data, key) => <SinglePhoto key={key} data={data} />)}
      </div>
    </>
  )
}

export default Photos