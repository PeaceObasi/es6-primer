import logger, { appName, dummyFunction, genericFunction, multiplier, multiplier2} from './tools.js';

//logger("Just testing");

logger ("Welcome! We are having fun with modularity in JS");

logger ("Welcome! The application name is" +appName + ". There is a function that returns" + dummyFunction ());

/**Introducing template literals */
logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}". `);

logger(genericFunction ());

logger(multiplier (10,29))

//logger(multiplier2 (3, 1, 4, 5))

try {
    const product = multiplier2 (3);
    logger(product);
}catch (error){
    logger(error.message)
}

logger(genericFunction2(2, 3, 4, 6, 8, 9, 10.5, 12));


let person1 = new Person("Pius", "Onobhayedo", "Male", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);

logger(person1.firstName);
logger(person2.firstName);

logger(`The initial height of ${person2.firstName} is ${person2.height}`);
person2.height = 1.7;
logger(`The new height of ${person2.firstName} is ${person2.height}`);

logger((CustomMath.sqrt(100)));

let user1 = new User("piuso", "mypassword", "Pius", "Onobhayedo", "Male", undefined);

logger(`The username of ${user1.firstName} is ${user1.username}`);
