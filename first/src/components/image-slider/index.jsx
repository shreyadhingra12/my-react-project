import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
//   ✔ This is a React component.
// ✔ export default → So we can import it in App.js.
// ✔ The { url, limit = 5, page = 1 } is props with default values.
// This means:
// url → API link coming from App.js
// limit = 5 → default limit is 5
// page = 1 → default page is 1
// If App.js doesn’t pass limit/page → it uses these default values.

// State = data that changes and re-renders UI.
  const [images, setImages] = useState([]);//✔ images → List of images fetched from API
  const [currentSlider, setCurrentSlider] = useState(0);//✔ currentSlider → Which image is currently shown
  const [errormsg, setErrorMsg] = useState(null);//✔ errormsg → Stores error message
  const [loading, setLoading] = useState(false);//✔ loading → Shows loading message

  async function fetchImages(getUrl) {//✔ async:If a function contains operations that take time (like API calls), we mark it async.
  // This tells JS:“This function will run some slow tasks.”
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      //✔ await:This pauses the code until the result comes.
      //Without await, code moves ahead before data arrives → error.
      //API data arrives in JSON format.
      const data = await response.json();//This line converts it into a JavaScript object/array you can use.
      
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  function handlePrevious() {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  }
  function handleNext() {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  }
  useEffect(() => {
    if (url !== "") fetchImages(url);//✔ Whenever url changes → run fetchImages(url)
  }, [url]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errormsg !== null) {
    return <div>Error occurued ! {errormsg}</div>;
  }
  // JSX part (Images + Buttons)
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (//Display images
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlider === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlider === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={()=> setCurrentSlider(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
