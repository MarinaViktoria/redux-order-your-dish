import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>What kind of food do you like?</h1>
            <div class="categories">
                {["SEAFOOD", "SALADS", "APPETIZERS", "ITALIAN", "ALL"].map(category => <Filter category={category}/>)}
            </div>
        </div>
    )
}
export default AllCategories;