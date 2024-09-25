import './App.css'
import Header from './components/Header';
import NewsList from './components/NewsList';
import AddsList from './components/AddsList';
import CurrencyRatesList from './components/CurrencyRatesList';
import CardsList from './components/CardsList';
import MainWidget from './components/MainWidget';

function App() {
  return (
    <>
      <Header />
      <div className='top-container'>
        <NewsList />
        <AddsList />
      </div>
      <CurrencyRatesList />
      <MainWidget />
      <CardsList />
    </>
  )
}


export default App
