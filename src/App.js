import Carousel from "./Component/Carousel";
import NavBar from "./Component/NavBar";
// import img1 from "./miscellaneous/2_corousel.png";
// import img2 from "./miscellaneous/2_corousel.svg";
// import img3 from "./miscellaneous/3_Corousel.png";

import NavBarHeader from "./Component/NavBarHeader";
import Footer from "./Component/Footer";
function App() {
  // let images = [img1, img2, img3];

  return (
    <>
      <NavBarHeader />

      {/* <Carousel images={images} /> */}
      <NavBar />
      <Footer />
    </>
  );
}

export default App;
