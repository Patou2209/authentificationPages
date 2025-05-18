import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetings  = {
  databaseURL: "https://realtime-database-1f94c-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetings)
const database = getDatabase(app)
const itemInDataBase = ref (database, "items")


let inputFieldEl = document.getElementById('input-field')
let buttonEl = document.getElementById('button-element')

buttonEl.addEventListener('click', function () {
  let inputValue = inputFieldEl.value;
  push(itemInDataBase, inputValue)
  
  //showing items on the page

  let newParagraph = document.createElement('p')
  let container = document.getElementById('container')
  container.appendChild(newParagraph).textContent = inputValue
  //console.log(`${inputValue} added to database`)
  
})




