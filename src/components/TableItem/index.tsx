import * as C from "./styles"
import { Item } from "../../Types/Item"
import { formatDate } from "../../helpers/dateFilter"
import { categories } from "../../data/categories"
import lixeira from "../../Images/lixeira.png"

type Props ={
  item: Item
  list: Item[]
  key: number
  onDelete: (index :number) => void
}

export const TableItem = ({ item, list, key, onDelete } : Props) =>{
  const showalert = () =>{
    console.log(item.title)
    for(let i = 0; i < list.length; i++){
      if(item.title === list[i].title ){
        onDelete(i)
      }
    }
  }

  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color ={categories[item.category].color}>
        {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
          R$ {item.value} 
        </C.Value> 
      </C.TableColumn>
      <C.TableColumn>
        <C.lixeira onClick = {showalert} src={lixeira}></C.lixeira>
      </C.TableColumn>
      
    </C.TableLine>
  )
}