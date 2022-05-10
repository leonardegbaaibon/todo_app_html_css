// Code for the ADD TODO BTN onClick(0)







const handleAddBtn = ()  => {
    // Setting attributes
    document.getElementById("root-div").setAttribute('style','background-color: rgb(199, 228, 253); padding: 3%; margin: 3%;');
    
    // Creating a div element for todolists
    var bigDiv = document.createElement("div")
    bigDiv.setAttribute("style","padding: 3%; background-color: aliceblue; margin: 2%;")
    var createNameDiv = document.createElement("div");
    createNameDiv.setAttribute("style","padding: 2%;")
    var createEmailDiv = document.createElement("div");
    createEmailDiv.setAttribute("style","padding: 2%;")
    var createTaskDiv = document.createElement("div");
    createTaskDiv.setAttribute("style","padding: 3%")
    
    var emailtxt = document.getElementById("email").value;
    var tasktxt = document.getElementById("task").value;
    var nametxt = document.getElementById("name").value;

    document.getElementById("email").value = "";
    document.getElementById("task").value = "";
    document.getElementById("name").value = "";

    var listTodo1 = document.createTextNode( nametxt);
    var listTodo2 = document.createTextNode( emailtxt);
    var listTodo3 = document.createTextNode( tasktxt);
    
    // Creating Edit button & delete button
    var editBtn = document.createElement("button");
    editBtn.setAttribute("style","background-color: rgb(248, 156, 17); padding: 1% 2% 1% 2%; font-weight: 800; margin: 1%; border: 0px; border-radius: 10%;");
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("style","background-color: rgb(248, 156, 17); padding: 1%; font-weight: 800;margin: 1%; border: 0px; border-radius: 10%;");
    
    var editText = document.createTextNode('Edit');
    var deleteTxt = document.createTextNode('Delete')

    // edit dutton
    editBtn.onclick = function(){onClick()};

    function onClick(){
        document.getElementById("email").value = emailtxt;
        document.getElementById("name").value = nametxt;
        document.getElementById("task").value = tasktxt;

    }


    console.log(emailtxt);
    console.log(tasktxt);
    if(nametxt.length && emailtxt.length && tasktxt.length !== 0){
        editBtn.appendChild(editText);
        deleteBtn.appendChild(deleteTxt);
        createNameDiv.appendChild(listTodo1);
        // createNameDiv.appendChild(listTodo2);
        // createNameDiv.appendChild(listTodo3);
        createEmailDiv.appendChild(listTodo2);
        createTaskDiv.appendChild(listTodo3);
        bigDiv.appendChild(createNameDiv);
        bigDiv.appendChild(createEmailDiv);
        bigDiv.appendChild(createTaskDiv);
        bigDiv.append(editBtn,deleteBtn);
        document.getElementById('root-div').append(bigDiv);

    }else{
        if(nametxt.length !==0 && emailtxt.length === 0 && tasktxt.length !== 0){
            alert("put down ur email")
        }else{
            if(nametxt.length == 0 && emailtxt.length ==0 && tasktxt.length ==0){
                alert("put down ur info bro")
            }
        }
        if(nametxt.length !==0 && emailtxt.length !== 0 && tasktxt.length === 0){
            alert("put down ur task")
        }
        if(nametxt.length === 0 && emailtxt.length !== 0 && tasktxt.length !== 0){
            alert("Put ur name down bro")
    }


}

if(nametxt){
    
}else{
}
}








