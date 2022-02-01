// Оператор break

while (true){
   const age = +prompt('How old are you?');
   if (age){
       alert(`You are ${age} years old!`);
       break;
   }else {
       alert('Enter a number!');
   }
}