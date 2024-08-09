import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//custome Hook 
export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setiIsLoading] = useState(true);
    
    const getImages = async()=>{
      const images = await getGifs(category);
      setImages(images);
      setiIsLoading(false);
    };

    useEffect(()=>{
        getImages();
    },[]);
  return {
        images,
        isLoading
  }
}
