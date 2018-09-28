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
        toDo.push(input.value);

        // render content iteration
        toDo.map((e)=>{
        	let container = document.createElement('div');
        	container.setAttribute('class', 'task');
        	console.log(container);
        	let text = document.createElement('p').innerHTML= e;
        	result.append(container);
        	container.append(text);

        	console.log(toDo);
        })

        
    }


})