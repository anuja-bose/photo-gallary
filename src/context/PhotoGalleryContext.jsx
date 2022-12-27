import { createContext, useState } from "react";
import useAxios from "../hooks/useAxios";

//Create context
const PhotoGalleryContext = createContext();

export const PhotoGalleryProvider = ({ children }) => {
 
    const [searchKeyword, setSearchKeyword] = useState('');
    const { response,setResponse, isLoading, error, fetchData } = useAxios(`/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`);

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
