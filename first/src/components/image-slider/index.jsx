import { useEffect, useState } from "react";



export default function ImageSlider({ url, limit=5 ,page=1}) {
    const [image,setImage]=useState([]);
    const [currentSlider,setCurrentSlider]=useState(0);
    const [errormsg,setErrorMsg]= useState(null);
    const [loading,setLoading]= useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);

            const response= await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImage(data)
                setLoading(false)
            }
            
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if (url !== '') fetchImages(url)
    },[url])

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }
    if (errormsg !== null) {
        return <div>Error occurued ! {errormsg}</div>
    }
  return <div className="container"></div>;
}
