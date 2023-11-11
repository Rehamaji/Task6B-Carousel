import './App.css';
import React, {useState} from 'react';
import One from '../src/assets/img/1.jpg';
import Two from '../src/assets/img/2.jpg';
import Three from '../src/assets/img/3.jpg';
import Four from '../src/assets/img/4.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    let images = [
        One,
        Two,
        Three,
        Four
    ]
    const [activeIndex, setActiveIndex] = useState(1); // Start with the second image (index 1)

    const nextPrev = (direction) => {
        if (direction === 'prev') {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        } else {
            setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const indicator = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="App">
            <div className="d-flex">
                <button className="border pointer" onClick={() => nextPrev('prev')}>
                    <i className="fa-solid fa-circle-chevron-left fa-2xl"></i>
                </button>
                <img src={images[activeIndex]} alt="" className="img"/>
                <button className="border pointer" onClick={() => nextPrev('next')}>
                    <i className="fa-solid fa-circle-chevron-right fa-2xl"></i>
                </button>


            </div>
            <div className="d-flex mt-1">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => indicator(index)}
                        className={`cycle pointer ${index === activeIndex ? 'light' : ''}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};
export default App;
