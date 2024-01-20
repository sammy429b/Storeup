
const images = [
  new URL("../Data/banner_mens.png", import.meta.url).href,
  new URL("../Data/banner_women.png", import.meta.url).href,
  new URL("../Data/banner_kids.png", import.meta.url).href,
];
function Carousel() {
  return (
    <>
      <div className="w-full carousel rounded-box">
        {images.map((image, index) => (
          <div className="carousel-item w-full">
            <img
              src={new URL(`${image}`, import.meta.url).href}
              id="item1"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Carousel;
