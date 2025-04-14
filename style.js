//  modal calculator
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// modal for music
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal


// modal for safari
var modal3 = document.getElementById("myModal3");


// Get the button that opens the modal
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}

// modal for calender
var modal4 = document.getElementById("myModal4");


// Get the button that opens the modal
var btn = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal4.style.display = "none";
}

// modal for joke
var modal5 = document.getElementById("myModal5");


// Get the button that opens the modal
var btn = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal5.style.display = "none";
}
// modal for cv
var modal6 = document.getElementById("myModal6");


// Get the button that opens the modal
var btn = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal6.style.display = "none";
}

// modal for vscode
var modal7 = document.getElementById("myModal7");


// Get the button that opens the modal
var btn = document.getElementById("myBtn7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close7")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal7.style.display = "none";
}
// modal for notes
var modal8 = document.getElementById("myModal8");


// Get the button that opens the modal
var btn = document.getElementById("myBtn8");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close8")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal8.style.display = "none";
}

// modal for to-do
var modal9 = document.getElementById("myModal9");


// Get the button that opens the modal
var btn = document.getElementById("myBtn9");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close9")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal9.style.display = "none";
}
// modal for projects
var modal10 = document.getElementById("myModal10");


// Get the button that opens the modal
var btn = document.getElementById("myBtn10");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close10")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal10.style.display = "none";
}







// When the user clicks anywhere outside of the modal, close it
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
  }

  clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
  }

  delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
          this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
  }

  compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
          case '+':
              computation = prev + current
              break
          case '-':
              computation = prev - current
              break
          case '*':
              computation = prev * current
              break
          case '÷':
              computation = prev / current
              break    
          default:
              return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
  }

  getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits =  stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
          integerDisplay = ''
      } else {
          integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
      } else {
          return integerDisplay
      }
  }

  updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
      this.previousOperandTextElement.innerText = 
      `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
  } else {
      this.previousOperandTextElement.innerText = ''
  }
  }
}







const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})








  /* top-time  */

  const date = document.getElementById("date");
  const day = document.getElementById("day");
  const month = document.getElementById("month");
 
  
  const today = new Date();
  
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  console.log(today);
  
  date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
  day.innerHTML = weekDays[today.getDay()];
  month.innerHTML = allMonths[today.getMonth()];





function getDateTime() {
      var now     = new Date(); 
      var hour    = now.getHours();
      var minute  = now.getMinutes(); 

      if(hour.toString().length == 1) {
           hour = '0'+hour;
      }
      if(minute.toString().length == 1) {
           minute = '0'+minute;
      }
      var dateTime = +hour+':'+minute;
       return dateTime;
  }

  // example usage: realtime clock
  setInterval(function(){
      currentTime = getDateTime();
      document.getElementById("digital-clock").innerHTML = currentTime;
  }, 1000);

  // to-do
  const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
} 

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
     }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


// Make the DIV element draggable:
