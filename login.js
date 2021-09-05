const login_box = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');
const owner = window.localStorage.getItem('ownerName');

const HIDDEN_CLASS = 'hidden';
const OWNER_NAME_KEY = 'ownerName';


const greeter =function ( owner ) {
    greeting.classList.remove( HIDDEN_CLASS );
    greeting.innerText = `Hello, ${ owner }`;
}

const loginSubmit = function ( event ) {
    const input = login_box[0].value;
    event.preventDefault();
    
    window.localStorage.setItem( OWNER_NAME_KEY, input );
    login_box.classList.add( HIDDEN_CLASS );
    greeter( input );
}

if ( !owner ) {
    login_box.classList.remove( HIDDEN_CLASS );
    login_box.addEventListener ( 'submit', loginSubmit );
} else {
    greeter( owner );
}

