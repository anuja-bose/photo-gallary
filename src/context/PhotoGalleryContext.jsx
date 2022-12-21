import { createContext, useState } from "react";
import axios from "axios";
import CONFIG from "../util/config.json";
const PhotoGalleryContext = createContext();

const unsplashAxios = axios.create({
    baseURL: `${CONFIG.API_UNSPLASH_BASE_URL}`,
});

export const PhotoGalleryProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchPhotos = async () => {
        let res = await unsplashAxios.get(`/photos/?client_id=${CONFIG.CLIENT_ID}`);
        setPhotos(res.data);
        setLoading(false);
    };

    return (
        <PhotoGalleryContext.Provider
            value={{
                fetchPhotos,
                photos,
                loading
            }}
        >
            {children}
        </PhotoGalleryContext.Provider>
    );
};

export default PhotoGalleryContext;
