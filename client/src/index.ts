import {App} from "./app"
import ReactDOM from "react-dom";
ReactDOM.render(App(), document.querySelector('#root'))
fetch('http://localhost:3000').then(res=>res.json()).then(res=>console.log(res))
