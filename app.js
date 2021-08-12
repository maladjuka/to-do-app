let d=new Date();
let day=d.getDay();
let year=d.getFullYear();
let month=d.getMonth();
let date=d.getDate();

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

switch(new Date().getMonth())
{
  case 0:
    month="January";
    break;
  case 1:
    month="February";
    break;
  case 2:
    month="March";
    break;
  case 3:
    month="April";
    break;
  case 4:
    month="May";
    break;
  case 5:
    month="June";
    break;
  case 6:
    month="July";
    break;
  case 7:
    month="August";
    break;
  case 8:
    month="September";
    break;
  case 9:
    month="October";
    break;
  case 10:
    month="November";
    break;
  case 11:
    month="December";}

     
    var logo=document.getElementsByClassName('logo')[0];
    logo.innerHTML=day +',  '+ date +'. '+' '+ month+'  ' + year+'.';

    const todos=[];
    const inputField=document.getElementById('todo');
    const countTD=0;
    const toDoList=document.getElementById('todo-list')

    inputField.addEventListener('keypress', createToDoS);

    function createToDoS(e){
      if(e.key==='Enter' && inputField.value != ""){


        
        const toDoLi=document.createElement('li');
        toDoLi.className="todo-in-list"
        toDoLi.innerHTML=`      
		<span class="todo__checkbox">
			<img src="icon-check.svg" alt="" class="todo__check"/>
		</span>
		<p class="todo__text">${inputField.value}</p> `
toDoList.appendChild(toDoLi);

inputField.value=null;


        
      }
      var checkedBox=document.querySelectorAll('.todo__check')
      var checked=document.querySelectorAll('.todo-in-list');

    for(let i=0;i<checked.length;i++){

      for(let j=0;j<checkedBox.length; j++){checked[i].addEventListener('click', changeColor)


      function changeColor(){
        checkedBox[i].style.background='red'
        checked[i].classList.add('finished-todos')

        checked[i].style.textDecoration='line-through';

  }

  checked[i].addEventListener('dblclick', newColor)
  function newColor(){
    checkedBox[i].style.removeProperty('background')

checked[i].style.textDecoration='none'
checked[i].classList.remove('finished-todos')


  }






      }

      
  let clearBtn=document.getElementById('clear-Btn');
  clearBtn.addEventListener('click', clearFinished);
  
  function clearFinished(){
  
    if (checked[i].classList.contains("finished-todos")) {
      checked[i].remove();
    }

    
          }



}
          
          
          }

         let red=document.querySelector('.finished-todos');
          
          
    
    
   