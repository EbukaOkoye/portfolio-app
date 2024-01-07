import {useState, useEffect} from 'react'

const useImageSlider = (images, interval = 3000) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return clearInterval(imageInterval);
    }, [images, interval])

  return {
    activeIndex,
    nextSlide: () => setActiveIndex((prevIndex) => (prevIndex + 1) % images.length),
  }
}

export default useImageSlider