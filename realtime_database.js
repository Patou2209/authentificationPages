import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetings  = {
  databaseURL: "https://realtime-database-1f94c-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetings)
const database = getDatabase(app)
const itemInDataBase = ref (database, "items") // this is the reference to the database; where we will be adding the items


let inputFieldEl = document.getElementById('input-field')
let buttonEl = document.getElementById('button-element')

buttonEl.addEventListener('click', function () {
  let inputValue = inputFieldEl.value;
  push(itemInDataBase, inputValue)

  //clearing the input field after adding the item to the database
  clearInputField()
  
  //showing items on the page

  let newParagraph = document.createElement('p')
  let container = document.getElementById('container')
  container.appendChild(newParagraph).textContent = inputValue
  //console.log(`${inputValue} added to database`)
   
})

function clearInputField() {
  inputFieldEl.value = ""
}

// to add items to the database when the enter key is pressed
/*inputFieldEl.addEventListener('keyup', function (event) {
  if (event.key === "Enter") {
    let inputValue = inputFieldEl.value;
    push(itemInDataBase, inputValue)
    
    //showing items on the page

    let newParagraph = document.createElement('p')
    let container = document.getElementById('container')
    container.appendChild(newParagraph).textContent = inputValue
  }
} */



//fetching data from the database
//complexe exemple
onValue(itemInDataBase, function(snapshot) {
  let itemsArray = Object.values(snapshot.val()) // this will convert the object to an array
  console.log(itemsArray)
  let container = document.getElementById('container')
  container.innerHTML = ""
  for (let i = 0; i < itemsArray.length; i++) {
    let newParagraph = document.createElement('p')
    container.appendChild(newParagraph).textContent = itemsArray[i] // this will show the items on the page
  }
})
//simple example
/*onValue(itemInDataBase, function(snapshot) {
  let itemsArray = Object.values(snapshot.val())
  console.log(itemsArray)
})*/






