import { useState, useEffect } from "react";
import * as C from "./App.Styles";
import { Item } from "./Types/Item";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth,filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)


  useEffect(() =>{
    setFilteredList(filterListByMonth(list,currentMonth))
  },[list, currentMonth])
  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) =>{
    let newList =[...list]
    newList.push(item)
    setList(newList) 
  }

  const handleDeleteItem = (index: number) =>{
    let newList =[...list]
    newList.splice(index, 1)
    setList(newList)
  }

  useEffect(()=>{
    let incomeCount= 0
    let expenseCount= 0

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      }else{
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  },[filteredList])

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Financeiro</C.HeaderText>
      </C.Header>
      <C.body>
        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income ={income}
        expense ={expense}
        />

        <InputArea onAdd={handleAddItem}/>

        <TableArea onDelete={handleDeleteItem} list={filteredList}/>


      </C.body>
    </C.Container>
  )
}

export default App;
