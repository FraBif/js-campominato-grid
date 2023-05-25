
const button = document.getElementById('button');

button.addEventListener('click', function () {
    const gridElement = document. getElementById("grid");
    gridElement.innerHTML = "" ;
    gridElement.classList.add("grid");


    for (let i = 1 ; i <= 100 ; i++){
        const newCell = createElement("div", "cell");
        let number = i
        newCell.innerHTML = (number);

        newCell.addEventListener ("click", function() {
            newCell.classList.toggle("selected");
            console.log(number);
        }); 
        
        gridElement.appendChild(newCell);
    }

   
    function createElement(tagName, className){
        const cellElement = document.createElement(tagName);
        cellElement.className = className;

        return cellElement;
    }

});