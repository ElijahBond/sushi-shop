import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
    return (
        <>
            {/* <Cart /> */}
            <Header />
            <main>
                <Meals />
            </main>
        </>
    )
};

export default App;