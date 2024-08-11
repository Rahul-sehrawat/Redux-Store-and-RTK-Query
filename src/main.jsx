import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {strore} from './app/store.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render( 
   <Provider store={strore}>
      <App />
   </Provider>
   
)
