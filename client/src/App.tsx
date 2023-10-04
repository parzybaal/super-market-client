import './App.scss'
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

function App() {

  return (
    <> 
    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
    </>
  )
}

export default App
