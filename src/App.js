import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Meals />
            </main>
        </div>
    )
};

export default App;