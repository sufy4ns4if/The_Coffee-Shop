import InfiniteScroll from "./InfiniteScroll";

import Drop from "./Data_imgs/coffeeShopL/Drop.jpg";
import floc from "./Data_imgs/coffeeShopL/floc.jpg";
import luna from "./Data_imgs/coffeeShopL/luna.jpg";
import mazi from "./Data_imgs/coffeeShopL/mazi.jpg";
import melbrew from "./Data_imgs/coffeeShopL/melbrew.jpg";
import mercado from "./Data_imgs/coffeeShopL/mercado.jpg";
import mondo from "./Data_imgs/coffeeShopL/mondo.jpg";
import nyc from "./Data_imgs/coffeeShopL/nyc.jpg";

const images = [
    { src: Drop, alt: "Drop Coffee" },
    { src: floc, alt: "Floc Coffee" },
    { src: luna, alt: "Luna Coffee Bar" },
    { src: mazi, alt: "Mazi Coffee" },
    { src: melbrew, alt: "Melbrew Coffee" },
    { src: mercado, alt: "Mercado Coffee Bar" },
    { src: mondo, alt: "Mondo Cafe" },
    { src: nyc, alt: "NYC Cafe" },
];

export default function CoffeeGallery() {
    return (
        <section className="coffeeGallery" aria-label="Coffee gallery">
            <div className="galleryIntro">
                {/* <p className="eyebrow">A LITTLE COFFEE INSPIRATION</p>
                <h2>Made to <span>be savoured.</span></h2> */}
            </div>

            <InfiniteScroll speed={17} gap={13} direction="left"  pauseOnHover >
                {images.map((image) => (
                    <div className="galleryCard" key={image.alt}>
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </div>
                ))}
            </InfiniteScroll>
            
        </section>
    );
}
