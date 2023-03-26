import "./AboutPage.css";

import Image1 from './image1.jpg'; // or .png, depending on your image format
import Image2 from './image2.jpg'; // or .png, depending on your image format
import Image3 from './images/image3.jpg'; // or .png, depending on your image format

function AboutPage() {
  return (
    <div className="w-screen h-screen bg-black" id="page__holder">
      <h3 className="capitalize text-8xl p-4" id="page-title">ABOUT</h3>
      <div className="image-container">
        <img src={Image1} alt="Image 1" className="image" />
        <img src={Image2} alt="Image 2" className="image" />
        <img src={Image3} alt="Image 3" className="image" />
      </div>
    </div>
  );
}


export default AboutPage;