import { useDispatch, useSelector } from "react-redux";
import { filteredCategory, getSelectedCategory } from "../../redux/dishesSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            <p onClick={() => {dispatch(filteredCategory(category))}} className={selectedCategory === category ? 
            "categoryButtonSelected" : "categoryButton"}>{category}</p>
        </div>
    )
}
export default Filter;