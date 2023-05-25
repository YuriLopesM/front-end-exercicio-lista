export function Form({
    newItem,
    dispatchNewItem,
    handleAddItem
}) {
    return (
        <form className="form-add-item" onSubmit={e => e.preventDefault()}>
            <fieldset>
                <div className="form-group mb-3">
                    <label htmlFor="item">Adicionar Novo Item na Lista:</label>
                    <input
                        type="text"
                        value={newItem.name || ''}
                        className="form-control" id="item"
                        onChange={e => dispatchNewItem({
                            type: 'name',
                            name: e.target.value
                        })}
                    />
                    <label htmlFor="amount">Insira a quantidade:</label>
                    <input
                        type="number"
                        value={newItem.amount || 0}
                        min={0}
                        className="form-control" id="amount"
                        onChange={e => dispatchNewItem({
                            type: 'amount',
                            amount: e.target.value
                        })}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={e => handleAddItem(e)}
                >
                    Adicionar
                </button>
            </fieldset>
        </form>
    )
}