import './App.css'
import ListOfFood from './food/presentation/Components/ListOfFoods'
import ListOfUser from './users/components/ListOfUsers'

function App() {

  return (
    <>
      <ListOfUser />
      <div className='mt-8'>
      <ListOfFood />

      </div>
    </>
  )
}

export default App
