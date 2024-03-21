// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let megician :string []= ["David Copperfield", "Harry Houdini", "Criss Angel", "Dynamo"];
function make_great(megicianArray: string[]){

    for(let i=0; i<megicianArray.length; i++){
        megician[i]= 'The Great ' + megicianArray[i]
    }
}

function show_magicians(megicians:string[]){
    megicians.forEach(megiciansName => {
        console.log(megiciansName)
    });
}
make_great(megician);
show_magicians(megician);
