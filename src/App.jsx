import { useReducer, useState } from "react";
import { Cart, Form } from "./components"
import { v4 as uuidv4 } from 'uuid';

import "./App.css";

function App() {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      name: 'Arroz',
      hasBought: false,
      amount: 1
    },
    {
      id: uuidv4(),
      name: 'Feijão',
      hasBought: true,
      amount: 2
    },
  ])

  function newItemReducer(state, action) {
    switch (action.type) {
      case 'amount': {
        console.log({ name: state.name, amount: Number(action.amount) })
        return {
          name: state.name,
          amount: Number(action.amount)
        };
      }
      case 'name': {
        console.log({ name: action.name, amount: state.amount })
        return {
          name: action.name,
          amount: state.amount
        };
      }
      case 'reset': {
        return { name: '', amount: 0 };
      }
    }
    throw Error('Operação inválida.');
  }

  const [newItem, dispatchNewItem] = useReducer(newItemReducer, { name: '', amount: 0})

  const handleAddItem = (e) => {
    e.preventDefault()
    if (newItem.name === '' || newItem.amount === 0 ) return alert('Preencha os campos corretamente.')

    setItems(prev => [...prev, {
      id: uuidv4(),
      name: newItem.name,
      amount: newItem.amount,
      hasBought: false
    }])
    dispatchNewItem({ type: 'reset' })
  }

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          hasBought: !item.hasBought
        }
      }
      return item
    })

    setItems(newItems)
  }

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)

    setItems(newItems)
  }

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <Cart
          items={items}
          handleToggleItem={handleToggleItem}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
      <Form
        newItem={newItem}
        dispatchNewItem={dispatchNewItem}
        handleAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;
