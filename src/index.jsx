import ReactDOM from 'react-dom'
import App from './app'
import Store from './Redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
