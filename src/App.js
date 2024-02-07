
import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className="blockOne">
        <AllCategories/>
        <Cart/>
      </div>
      <div className="blockTwo">
        <Dishes/>
      </div>
    </div>
  );
}

export default App;
