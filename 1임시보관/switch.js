function greeter(country, userName) {
    let greet;

    switch (country.toLowerCase()) {
        case 'kr': case 'kor': case 'korea': case '한국': case '대한민국':
            greet = '안녕';
            break
        case 'us': case 'usa':
            greet = 'hi'
    }

    let howManyGreeting = `${greet}, ${userName}` ;

    console.log(howManyGreeting)
}

greeter('KR', 'mike')