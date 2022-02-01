// Оператор switch
let status = prompt('Enter a status:');
switch (status) {
    // Можно так:
    case '500' : console.log('500'); break;
    // Можно и так:
    case '404' : {
        console.log('404');
    } break;
    // Можно и так:
    case '300' : {
        console.log('404');
        break;
    }
    case '301' : console.log('301'); break;
    default : console.log('Welcome!');
}

