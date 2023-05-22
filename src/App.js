import './App.css'
import { Provider } from 'react-redux'

import store from './redux/store'

import { AddPhoto } from './components/AddPhoto'
import { ListPhoto } from './components/ListPhoto'

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <AddPhoto />
        <ListPhoto />
      </div>
    </Provider>
  )
}
