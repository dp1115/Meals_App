import { FlatList } from "react-native";
import {CATEGORIES} from "../data/dummy-data";

import CategoriesGridTile from "../components/CategoriesGridTile";

function CategoriesScreen({navigation}){

    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview');
        }
        return (
            <CategoriesGridTile 
            title = {itemData.item.title} 
            color={itemData.item.color} 
            Press={pressHandler}/>
        );
    }
    return (
    <FlatList 
    data={CATEGORIES}
    keyExtractor = {(item)=>item.id} 
    renderItem={renderCategoryItem}
    numColumns={2}
    />
    );
}


export default CategoriesScreen;