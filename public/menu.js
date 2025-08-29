$(document).ready(function(){
    function appendRow(data){
        $("main").append(`<div class="imgcontainer"><div><h1><${data.Name}/h1> <p>${data.Description}</p></div><img src=${data.File}></div>`)
    }
    fetch("http://localhost:5000/menu.json").then(response => {
        if(!response.ok){throw new Error("Network response was bad: " + response.statusText)}
        return response.json()
    }).then(data => {
        for(item of data){
            appendRow(item)
        }}
    )
})