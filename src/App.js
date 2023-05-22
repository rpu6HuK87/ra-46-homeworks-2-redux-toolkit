import './App.css'

import { Provider } from 'react-redux'

import store from './redux/store'
// import Counter from "./components/Counter";
import { FactsList } from './components/FactsList'
export default function App() {
  return (
    <Provider store={store}>
      <FactsList />
    </Provider>
  )
}
