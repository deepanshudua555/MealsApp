import { View, FlatList,StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealsItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealsItemProps} />;
  }

  return (
    <View styile={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  
