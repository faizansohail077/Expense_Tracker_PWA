import React, { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)



    const onSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            }
            setText('')
            setAmount(0)
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text" id="text" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative-expense,positive-income)</label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} onClick={(e) => setAmount(e.target.value)} type="number" placeholder="Enter number" id="amount" />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
