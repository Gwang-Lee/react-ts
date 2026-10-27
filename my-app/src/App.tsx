import './App.css'
import Drink from './components/Drink'
import Greet from './components/Greet'
import Greet2 from './components/Greet2'
import InputValue from './components/InputValue'

function App() {
  return (
    <>
      <section className='app'>
        <h2>리엑트 기초 문법(Tpescript)</h2>
        <Drink/>
        {/* <InputValue/> */}
{/*          <Greet
          name="도경수"
          age={33}
          /> */}

{/*           <Greet2
            name="도경수"
            age={33}
          /> */}

      </section>
    </>
  )
}

export default App
