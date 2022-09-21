import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './app'
import './app.css'
import Store from './redux/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<Provider store={Store}>
	<App />
</Provider>)
