import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

const ItemLister = () => {
  const arr = ["Sing", "Write", "Cook", "Swim"];
  return (
    <div>
      <ItemForm />
      <ItemList items={arr}/>
    </div>
  );
};
export default ItemLister;
