import { useState } from "react"
import * as C from "./styles"
import { Item } from "../../Types/Item"
import { categories } from "../../data/categories"

type Props = {
  onAdd: (item :Item) => void

}

export const InputArea = ({ onAdd }: Props) =>{
  const [data, setData] = useState("")
  const [categoria, setCategoria] = useState("")
  const [titulo, setTitulo] = useState("")
  const [valor, setValor] =useState(0)

  let categoryKeys: string[] = Object.keys(categories);



  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(data).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoria)) {
      errors.push('Categoria inválida!');
    }
    if(titulo === '') {
      errors.push('Título vazio!');
    }
    if(valor <= 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(data),
        category: categoria,
        title: titulo,
        value: valor
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setData('');
    setCategoria('');
    setTitulo('');
    setValor(0);
  }

  return(
      <C.Container>
        <C.InputArea>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input value={data} onChange={e => setData(e.target.value)} type="date"/>
        </C.InputArea>
        
        <C.InputArea>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={categoria} onChange={e => setCategoria(e.target.value)}>
          <>
          <option></option>
          {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
          </>
        </C.Select>
        </C.InputArea>

        <C.InputArea>
        <C.InputTitle >Título</C.InputTitle>
        <C.Input value={titulo} onChange={e => setTitulo(e.target.value)} type="text"/>
        </C.InputArea>

        <C.InputArea>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input value={valor} onChange={e => setValor(parseFloat(e.target.value))} type="number"/>
        </C.InputArea>


        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.Container>
  )
}