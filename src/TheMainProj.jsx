import "./Stylization.css";
import Search from "./Components/Search";
import CoffeeGallery from "./Components/CoffeeGallery";

export default function TheMainProj() {
    return (
        <main className="MainApplication">
            <Search />
            <CoffeeGallery />

        <CoffeeGallery /><CoffeeGallery /><CoffeeGallery /><CoffeeGallery /><CoffeeGallery /><CoffeeGallery /><CoffeeGallery />

        </main>
    );
}
