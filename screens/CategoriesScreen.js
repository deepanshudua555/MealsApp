import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTiles from "../components/CategoryGridTiles";

function renderCategoryItem(itemData) {
  return <CategoryGridTiles title = {itemData.item.title} color={itemData.item.color}/>;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

