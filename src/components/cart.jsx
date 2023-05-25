export function Cart({ 
    items, 
    handleToggleItem,
    handleDeleteItem
}) {
    return (
        <ul className="lista-items">
            {
                items.map(({
                    id,
                    name,
                    hasBought,
                    amount
                }) => (
                    <li key={id}>
                        <div>
                            <input 
                                className="form-check-input"
                                type="checkbox"
                                checked={hasBought}
                                onChange={() => handleToggleItem(id)}
                            />
                            <span className={hasBought ? 'has-bought' : ''}>{name}</span>
                            <span className='amount'>• Quantidade: {amount}</span>
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteItem(id)}>
                            Deletar
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}