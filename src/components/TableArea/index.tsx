import * as C from './styles'
import { Item } from '../../Types/Item'
import { TableItem } from '../TableItem'

type Props ={
  list: Item[]
  onDelete: (index :number) => void
}

export const TableArea = ({ list,onDelete}: Props) =>{
  return(
    <C.Table>
      <thead>
        <tr>
            <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
            <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
            <C.TableHeadColumn>Título</C.TableHeadColumn>
            <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
            <C.TableHeadColumn width={100}>Excluir</C.TableHeadColumn>
          

        </tr>
      </thead>
      <tbody>
        {list.map((item, index)=>(
          <TableItem onDelete={onDelete} list ={list} key ={index} item={item}/>
          
        ))}
      </tbody>
    </C.Table>
  )
}