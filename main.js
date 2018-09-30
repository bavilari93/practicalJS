$(() => {
    var toDo = [];

    // get input 
    var input = document.getElementById('input');
    const result = document.getElementById('result');
    // event listener 

    // if enter add value to array
    document.body.onkeyup = function(e) {
        e.keyCode === 13 ? addValue() : console.log('add value');
    }
    // adds value to the array
    function addValue() {
        // display : flex for div that contains info
        result.style.display = 'flex';
        // add the input value to the array
        toDo.push(input.value);
        // create dom element 
        renderTask();

    }

    function renderTask(){
    	// add id numebr that it was created here  as a class or name  attribute
        let container = document.createElement('div');
        container.setAttribute('class', 'task');
        // inner text 
        let text = document.createElement('p'); 
        text.innerHTML = input.value;
        result.append(container);
        // add text to the som 
        container.append(text);
        // delete button 
        let deleteButton = document.createElement('button')
        let closeSymbol = document.createTextNode("\u00D7");
        deleteButton.append(closeSymbol);
        deleteButton.setAttribute('class', 'delete');
        container.append(deleteButton);

        deleteTask();
    }

    function deleteTask() {
    	const taskSelect = document.getElementsByClassName('task');
        const button = document.querySelectorAll('button');
        button.forEach((e, index) => {
        	console.log(taskSelect);
        	console.log(button)
            e.addEventListener('click', () => {
            	 	console.log(toDo.length);
                toDo.splice(index, 1)
                e.style.display="none";

               	taskSelect[index].style.display='none';
                })



            })

        }

    // add an event listener for x buttom to eliminate by ID of the array




    //iterate through the div by query selector all to find the id  


})