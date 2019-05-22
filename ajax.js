// Создание переменной request
var request = new XMLHttpRequest();
// Настройка запроса
request.open('GET','processing.php',true);
// Подписка на событие onreadystatechange и обработка его с помощью анонимной функции
request.addEventListener('readystatechange', function() {
  // еcли состояния запроса 4 и статус запроса 200 (OK)
  if ((request.readyState==4) && (request.status==200)) {
    // например, выведем объект XHR в консоль браузера
    console.log(request);
    // и ответ (текст), пришедший с сервера в окне alert
    console.log(request.responseText);
    // получить элемент c id = welcome
    var welcome = document.getElementById('welcome');
    // заменить содержимое элемента ответом, пришедшим с сервера
    welcome.innerHTML = request.responseText;
  }
}); 
// Отправка запроса на сервер
request.send

$.ajax({
  type: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
}).done(function( msg ) {
  alert( "Data Saved: " + msg );
});