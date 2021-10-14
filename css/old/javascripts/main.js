import { preventSubmit } from './twittler.js';

(function() {
    //login (this page)
    const login_box = document.querySelector('#login-form');
    const greeting = document.querySelector('#greeting');
    const owner = window.localStorage.getItem('ownerName');

    // config hidden 'login (this page)'
    const HIDDEN_CLASS = 'hidden';
    const OWNER_NAME_KEY = 'ownerName';

    const twittler_login = document.querySelector('#twittler > .input > input[type="submit"]')

    
    const greeter =function ( owner ) {
        greeting.classList.remove( HIDDEN_CLASS );
        greeting.innerHTML = `☀️ Hola! ☀️<br> ${ owner }!`;
    }

    const loginSubmit = function ( event ) {
        const owner_name = login_box[0].value;
    
        window.localStorage.setItem( OWNER_NAME_KEY, owner_name );
        login_box.classList.add( HIDDEN_CLASS );
        greeter( owner_name );

        event.preventDefault();
    }

    if ( !owner ) {
        login_box.classList.remove( HIDDEN_CLASS );
        login_box.addEventListener ( 'submit', loginSubmit );
    } else {
        greeter( owner );
    }

    twittler_login.addEventListener('submit', preventSubmit)
}());
