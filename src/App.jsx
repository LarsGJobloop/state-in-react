import './App.css'
import { Counter } from './components/Counter/Counter'
import { SearchField } from './components/SearchField/SearchField'

function App() {
  return (
    <div>
      <header>
        <h1>React state</h1>
      </header>
      <main>
        <section>
          <h1>Search Field</h1>
          <p>Noen informasjon om denne komponent</p>
          <SearchField />
        </section>

        <section>
          <h1>Counter</h1>
          <Counter />
        </section>
      </main>

      <footer>
        &copy; Lars G
      </footer>
    </div>
  )
}

export default App
