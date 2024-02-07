
const Dish = ({dish}) => {
    return(
        <div key={dish.id}>
            <img src={`${dish.img}.jpg`} alt="dish"/>
           <p>{dish.name}</p>
           <p>$ {dish.price}</p>
           <button>How many portions?</button>
           <button>Add to cart</button>
        </div>
    )
}
export default Dish;