const sayHello = (person) => {
    if (!person){
        person = 'World';
    }
    console.log(`Hello ${person} !`)
}

module.exports = sayHello