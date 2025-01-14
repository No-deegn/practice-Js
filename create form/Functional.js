//document.getElementById('main-form').addEventListener('submit' 'CheckForm');

function CheckForm(el){
//function CheckForm(event)
//event.preventDefault();
    //var el = document.getElementById('main-form');
    var name = document.getElementById('name').value;//var name = al.name.value;
var pass = el.pass.value;
var repass = el.repass.value;
var state = el.state.value;
var error = "";
if(name == "" || pass == "" || state == "")
error = "Заполните все поля";

else if(name.length <= 1 || name.length > 20){
error = "Введите корректное имя";
}
else if(pass != repass){
    error = "Пароли не совпадают";
}
else if(pass.split("&").length > 1) //split помогает разбить строку по определенному символу
error = "Некорректный пароль";

if(error != ""){
document.getElementById('mistake').innerHTML = error;

    
}else{
alert("Все данные корректно заполнены");
window.location = 'https://nihon-go.ru/yaponskie-slova-v-russkom-yazyke/';

}
return false;

}