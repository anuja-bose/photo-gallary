import { createContext, useState } from "react";
import useAxios from "../hooks/useAxios";

//Create context
const PhotoGalleryContext = createContext();

export const PhotoGalleryProvider = ({ children }) => {
 
    const [searchKeyword, setSearchKeyword] = useState('');
    let path = `/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`
    if(searchKeyword!==""){
        path = `search/photos?page=1&query=${searchKeyword}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    }
    const { response,setResponse, isLoading, error, fetchData } = useAxios(path);

    return (
        <PhotoGalleryContext.Provider
            value={{
                response,
                setResponse,
                isLoading,
                error,
                fetchData,
                searchKeyword,
                setSearchKeyword
            }}
        >
            {children}
        </PhotoGalleryContext.Provider>
    );
};

export default PhotoGalleryContext;
