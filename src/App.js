import React from 'react';
import './App.css';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalContext';
import firebase from './firebase'
function App() {
  const messaging = firebase.messaging()
  messaging.requestPermission()
  .then(()=>{
    return messaging.getToken()
  })
  .then((token)=>{
    console.log('token',token)
  })
  return (
    <GlobalProvider>

      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
