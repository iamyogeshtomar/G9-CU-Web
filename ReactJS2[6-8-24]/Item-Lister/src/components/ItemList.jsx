import Item from "./Item"

const ItemList = ({items}) => {
  return (
    {items.map((item, index)=>(
        <Item item={item} key={index}/>
      ))}
  )
}
export default ItemList