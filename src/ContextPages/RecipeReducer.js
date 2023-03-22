// reducer function for recipe context

function RecipeReducer(state, action) {
    console.log(action.type)
    // console.log(action.payload)
    switch (action.type) {
        case "Changed_recipe":
            return { ...state, recipe:action.payload};
        // case "Add_To_Fav":
        //     return { ...state, favourite:!state.favourite};

        // case "Remove_From_fav":
        //     return {
        //         ...state, favourite: state.favourite.filter((prod) => {
        //             return prod.id !== action.payload.id;
        //         })
        //     };

        case "Clear_Fav":
            return { ...state, favourite: [] };

        // for Sorting or Filtering Data
        case "Sort_By_QuickEasy":
            return { ...state, byQuickEasy: action.payload };

        case "Sort_By_Type":
            return { ...state, byType: action.payload };

        case "Sort_By_MealType":
            return { ...state, byMealType: action.payload };

        case "Sort_By_Rating":
            return { ...state, byRating: action.payload };

        case "Sort_By_SearchQuery":
            return { ...state, serachQuery: action.payload };

        case "Clear_Filter":
            return {
                ...state,
                byQuickEasy: '',
                byType: '',
                byMealType: '',
                byRating: 0,
                searchQuery: ''
            }
        default:
            return state;
    }
}

export default RecipeReducer