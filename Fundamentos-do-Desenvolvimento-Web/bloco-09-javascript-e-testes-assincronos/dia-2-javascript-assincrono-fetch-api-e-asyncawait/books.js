const fetch = require('node-fetch');

async function batata() {
    try {
        const response = await fetch('https://www.anapioficeandfire.com/api/books')
        const data = await response.json()

        return data;
    } catch (error) {
        console.log('erro', error)
    }
}

async function foo () {
    console.log(await batata());
}

foo()

// fetch('https://www.anapioficeandfire.com/api/books').then(response => response.json()).then(data => console.log(data)).catch(error => log(error))

