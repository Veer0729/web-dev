# HTML: 

<!-- boilerplate code - wo code jo likhna hi padega

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>apple</h1>
    <p>Lorem <b>ipsum</b> <i>dolor</i> sit amet.</p>
    <p>2<sup>2</sup> = 4</p>
    <p>CO<sub>2</sub> is a gas. </p>
    <h2>appl</h2>
    <p>Lorem ipsum dolor <br> sit amet consectetur.</p>
    <h3>appl</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, alias.</p>
    <hr>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <h4>appl</h4>
    <ol> Ordered list
        <li>aplpe</li>
        <li>aplpe</li>
        <li>aplpe</li>
        <li>aplpe</li>
        <li>aplpe</li>
    </ol>
    <hr>

    <ul> Unordered list
        <li>aplpe</li>
        <li>aplpe</li>
        <li>aplpe</li>
        <li>aplpe</li>
        <li>aplpe</li>
    </ul>
    <hr>

    <a target = "_blank" href="https://www.google.com"> open google</a>
    <hr>

    <img src="https://images.unsplash.com/photo-1721332154161-847851ea188b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gameboy">
    <hr>

    <form>
        <label for="a">name</label>
        <br>
        <input id="a" type="text" placeholder="name">
        <br>
        <input type="email" placeholder="email">
        <br>
        <input type="password" placeholder="password">
        <br>
        <input type="checkbox">
        <br>
        <input name="b" type="radio">male
        <br>
        <input name="b" type="radio">female
        <br>
        <input name="b" type="radio">others
        <br>
        <input type="file">
        <br>
        <input type="range">
        <br>
        <input type="date">
        <br>
        <input type="submit">
        <br>
        <input type="color">

    </form>
</body>
</html> -->


# CSS:
--> units for width and height : px(pixel), %(takes value from parent), vw(takes value from child), vh, em, rem
--> max-width & max-height - works like a hook, can't extend more than this
--> min-width & min-height - works like a hook, can't decrease more than this
--> line height - used for alligning words written
--> text-align - Used for text allignment (right, left, centre, justify)
--> Padding: used for defining the space between the element and the border of the element
    ex:  padding: 0 30px; (0 for up and down and 30 for left and right)
--> border: provides border to our elements (border: 3px solid black, border-radius: 115px)
--> font-weight: 500; (for the thickness of our font)

--> Block element: Will not allow anyone to be on it's side, it should be alone in a row. (Can change it's a width and height)
--> Inline element: Allows to place something on it's side if there is space. (Cannot change it's a width and height)
--> Inline block: Allows to place something on it's side (Can also  change it's a width and height)

--> Posiiton absolute: Allows our element to be positioned on upper layer, by default every element is on layer 0.
--> Position relative: changes the position of the HTML element relative to where it normally appears.
--> margin-right: 5px; Provides gap between a particular element.

background: to change bg....
    background: linear-gradient
    background-position:
    background-size: cover;
    background: url();
    background-position;

--> CSS flex: when we want elements side by side....the parent becomes the flexbox...there are two axis (y-axis: cross. x-axis: main)....it's a single dimensional property.

## Flex Container (display: flex;)
A flex container becomems flexible by setting the display property to flex.
1. flex-direction: column-reverse; (to reverse the column)
2. flex-direction: row-reverse; (to reverse the row)
3. flex-wrap: wrap; (boxes change position according to size of parent)
4. gap: 10px; (for putting a gap between all the boxes) 
5. justify-content: space-around; (to change the position of child in x axis)
6. align-items: center; (change the position in y axis)
7. align-content: space-evenly; (for making any changes in between boxes)
8. flex-direction: column; (converts justify content to y axis and align content to x axis)

## Flex child items
the child element of a flex container automatically becomes flex items. 
1. order:1; (used to change the order of the box)
2. flex-grow: 1; (grows a box width on the remaining area)
3. flex-shrink: 1; (descrease a box width)
4. flex-flow: wrap column; ( sets the direction and wrapping behavior of a flex container)
5. flex-axis: 100px; (defines the initial width of a particular child)
6. flex-basis: 25%; (puts a default width)
7. flex: 0 0 200px; (short form for grow, shrink and basis)
8. align-self: felx-start; (puts our particular box at start)


--> Pseudo-elements: har element ke paas ek possibility hoti hai ki woh chahe to inactive do after and before naam ke properties ko activate kar sakta hai
    ::before{
        content: wersdvssf; (wil write this before the contents of element)
    }
    ::after{

    }
    ::first-line
    ::first-letter
    ::selection

--> Pseudo-classes: 
    ::hover
    ::active
    ::focus
    ::nth-child(n)

--> Colour Science:
css mein color ki value 0 se max 255 tak hai

r - 255
g - 255
b - 255

--> CSS grid:
## Grid Container (these properties are used for whole container)
1. display: grid; (this property is used for our containers)
2. row-gap: 10px; (will put a 10px gap between out boxes)
3. column-gap: 10px; (will put a 10px gap between out boxes)
4. grid-template-columns; 20px 20px; (to modify width)
5. grid-template-rows; 20px 20px; (to modify height)
6. justify-content: center; (can change the whole position of our grid in x axis)
7. align-content: center; (modifies the position of the grid in y axis)
8. align-items: center; (modifies the position according to the box's height and width )
    
## Grid Child Items (these properties are used for child inside the container)
1. justify-self: Center; (can center a particular box we select on x axis)
2. align-self: center; (can center a particular box we select in y axis)
3. grid-column: 1/3; (to change the width of a column)
4. grid-row: 1/3; (to change the height of a column)
note: we have to define our row or column end 1 more than needed
ex: if i need it to expand it from 1 to 2 i need to put up 1/3
    grid-area: 1/1 3/3; (can be used to define row and column in one line...can also change the position of that box)

# Responsiveness using html and css
--> Understanding units
        % - percentage, used to take the height or weigth of parent
        vw (view port width), vh (view port height) - total width of the device, can also be used for height
        vmax - Takes the size of the maximum view port
        vmin - takes the size of the min view port
        em - assigns font size to parents and gives other font size accordingly
        rem - 1rem = 16px

# CSS Animations
    @keyframes anime(any name you want) {
        from (initial position){
            left: 0
        }
        to (final position){
            left: 60%
        }
    }

1. animation-name: anime; (write this on you element you want to move)
2. animation-duration: 2s; (in how much time it has to get to final position)
3. animation-delay: 1s; (dosent start the animation immediately, gives it time of 1s)
4. from and to are used for only final and initial position, if we want to take our element through a different route
    we will use percentage:
        0%{
            left: 0
        }
        50%{
            left: 60%
        }
        100%{

        }

5. animation-fill-mode: forwards; (takes on the values of final position and dosent return to it's inital state 
    after animation is done)
6. animation-iteration-count: 2; (animtion will work 2 times)
7. animation-direction: alternate; (we can set the direction to reverse, forward)
8. animation-timing-function: ease-in-out; (starts slow, ends fast)

# Javascript 

 CONSOLE LOG PROMPT
 console.log('hello');
 console.warn('harsh sharma') // shows as yellow colour
 console.error('veer sharma') // shows as red colour
 alert("hey) (shows a pop on the top of the server)
 prompt("tell ur name) (shows a pop up like alert but with a space to fill)

 VARIABLES AND CONSTANTS
 --> variables and constants are used to store and change data (can't change data in constants)
 var a = 12;

 COMPLIER AND INTERPRETOR
  --> These are translators used for converting english code to machine code.
  --> complier comvertes code into machine code
  --> interpretor converts code into byte code
  --> js uses interpretor
  --> jit complier : uses the power of interpretor which converts the code faster and complier which runs the code faster.

 WINDOW
 --> Many features which are frequently used in js are usaually not in js, but in our browser. these are called window bucket.

 FUNCTIONS
 --> Reusable code
 --> functions which return nothing returns undefined
 --> undefined: a value given when there is no value in the variable
 --> Using any particular identity/element without it's declaration givea an error, and that erroe is not defined error.
 --> null is recieved when something is not found

 HOW TO LOOP AN ARRAYS
 
 var arr = [1,2,3,4,5];

 ar.forEach(function (val){
    console.log(val);
 });

 OBJECTS
 --> A way to put details about a identity

 var obj = {
    name: "harsh",
    age:25,
    email: "kuch@kuch.com"
    contact: 342344343535 
 };

 to access the info = obj.age

 SYNCHRONOUS AND ASYNCHRONOUS
 --> in synchronous, the code runs line by line
 --> in asynchronous, all the codes runs together and whichever gets complied fast is presented.

 ADVANCE JS:

// this call apply bind
 --> this keywords are the words which make sense in programming language (if, for, while, etc...)
    // global - window
       console.log(this);

    // function - window
       function abcd(){
        console.log(this);
       }
    
    // method - object
       var obj = {
        name: function(){
            console.log(this);
        }
        age: 25,
        email: "wvedbvefve"
    }
    obj.name();

    // fnc inside method (es5) - window
    var obj2 = {
        sayName: function(){
            console.log(this.age);
            function childfnc(){
                console.log(this);
            }
            childfnc();
        },
        age: 25
    }
    obj2.sayName();

    // fnc inside method (es6) - object
    var obj3 = {
        sayName function(){
            const child = ()=>{
                console.log(this);
            }
            child();
        }
    }
    obj3.sayName();

    // constructor fnc mein thid ki value - new blank object
    function add(){
        console.log(this);
    }

    const ans = new add();

    // event listener mein this ki value - that element jispar event lis. laga ----------
    document.querySelector("button")
    .addEventListener("click", function()){
        console.log(this);
    }

    // call apply bind
    // three ways to call a function by making a boject this
    // call() - Invoke Function Immediately with Custom this
        greet.call(person, "Hello", "!");

    // apply() - Similar to call(), but Uses an Array for Arguments
        functionName.apply(object, [arg1, arg2, ...]);

    // bind() - Returns a New Function with Bound this
        const boundGreet = greet.bind(person, "Hey", "!!!");
        boundGreet();  // Calling the returned function

# Javascript animation

--> Dom = Document object manipulation
    In simple words DOM means HTML tag with the full contorl in js
    DOM manupilation: Body mein kuch bhi change karna ya manipulation karna.

Accessing elements:

    // select and save

        id
        var kuchbhi = document.querySelector('button');

        class
        var classabcd = document.querySelector('.abcd');

        tag
        var h3 = document.querySelector('h3');

        if there are multiple h3:
        var h3 = document.querySelectorAll('h3');

Modifying Elements:

    // to modify text:
        var h1 = document.querySelector('h1');
        h1.textContent = "harsh"
        h1.innerHTML = '<i>hello<i>'; // we use inner html when we want to use tags

Manipulating Styles and Classes:

    // to change Colour
        h1.style.color = 'red';
        h1.style.fontFamily = 'gilroy';
        h1.style.fontSize = '16px';

    // to modify classes
        h1.classList.add('makeitred');
        h1.classList.remove('makeitred');

Creating and Deleting elements:

    createElement()
    appendChild()
    removeChild()

Event Handling:

    var btn = document.querySelector("button");
    btn.addEventListener('click', function(){
        alert();
    });

# GSAP (GreenSock Animation Platform)
--> Animation library
--> google >> gsap cdn >> copy link >> paste just on top of javascript link
--> in vs code >> gsap.to("#box", {              // Target the element with the id 'box' to animate
                    x: 1000,                     // Move the element 1000 pixels to the right on the x-axis
                    duration: 2,                 // The animation will take 2 seconds to complete
                    delay: 1,                    // The animation will start 1 second after the script is run
                    rotate: 360,                 // The element will rotate 360 degrees
                    backgroundColor: "blue"      // The element's background color will change to blue
})

                --> gsap.to is used for moving from initial to final postion with the other requirements.
                --> gsap.from is used for moving from final position to initial position with all the values already inherited.
--> stagger: 1 (for bringing up element at a break of 1 second)
--> vartl = gsap.timeline (does our animation on one element at a time)

# ScrollTrigger
 google >> ScrollTrigger(2nd last) cdn >> copy link >> paste just down of gsap link
scrollTrigger: {
    trigger: "page2 #circle",  // The element with id 'circle' inside 'page2' will trigger the animation when it comes into view.
    scroller: "body",          // The entire body of the page is used as the scroll container.
    markers: true,             // Shows markers in the browser for debugging to indicate the start/end of the trigger area.
    scrub: true,               // Ensures the animation progresses as you scroll, making it linked to scroll position.
    pin: true                  // the element stays fixed for a portion of the scroll before continuing normally.
}

# Locomotive

google >> locomotive js cdn >> locomotive.js & locomotive.css cdn >> paste on html

--> smooth scrolling link
    const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

# Reactjs
--> very very less page reloads
--> extreme use of reusable components
--> very efficiient and have many opportunities

A javascript library to maintain the frontend efficiently.
effecient and lighweight.
jsx -> html with superpowers

# Javascript (Revision and advance)

word: has no meaning in javascript
keyword: has some meaning

// const = value can't change
// var = for storing value
// let a = 12 (for assigning value)

// hoisting: variable and functions are hoisted means their declarations are moved on top of the code.

// refrences = [], {}, ()
aise koi bhi value jisse copy 


*diff between var let const*

there are two versions of js:
1) js5
2) js6
we use these both together

// var old js mein tha
>   var function scoped hota hai = var apne parent fnc mein kahi bhi use ho sakta hai
>   it add itself to window object
>       window obejct matlab kuch features jo js browser se borrow karta hai

function abcd(){
    for(){
        console.log(i);
    }
    console.log(i);
}

// let const new js mein hai
>   yeh braces scoped hota hai
>   it can't add itself

*execution context* 
>   It's a function container where a function's code is executed and it's created whenever a function is called, it conations three things:
1) Variable in the main function
2) functions inside the parent function
3) lexical environment
>   it's a kind of a chain that confirm that we can't use the children's functions variable but the parent's.

*how to copy refrence values*
var a = [1,2,3,4,5]
var b = [...a]
    this is called spread operator, it now copies the value of a to b.

*truthy and falsy*
truthy values which are defined
falsy values like 0, NaN, not defined, document.all

*foreach forin*
>   for each is used for elements in arrays

var a = [1,2,3,4,5,6]
a.forEach(function(val){
    console.log(val + 2);
})
>   it doesent effect our main array and creates a temp copy

// forin
    for elements in object

var obj = {
    name: "harsh",
    age: 24,
    city: "bhopal"
}

for(var key in obj){
    console.log(key, obj[key])
}

*callback function*
>   aisa code jo ek particulr time ya condition ke baad chalta hai

*first class function*
>   fnc ko variable ki tarah use kar sakte hai

functon abcd(a){
    a();
}
abcd(function(){console.log("hello");})

*Higher order function*
>   A higher order function takes another function as an argument and return another function as output

*constructor*
>   A constructor function is a special type of function in JavaScript that is used to create objects.

function Person(name, age) {
  this.name = name;  // properties
  this.age = age;

  this.sayHello = function() {  // method
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

const person1 = new Person("Veer", 20);
const person2 = new Person("Aryan", 22);

*new keyword*
>   creates a new function for a constructor function

function Abcd(){
    this.var a = 12;
}

new Abcd{
    var a = 12;
}

*iife*

immediately invoked function expression
functions ko turant chalane ke liye, is tareeke se hum log private variable bana paye

var ans = (function(){
    var privatevar = 12;

    return{
        getter: function(){
            console.log(privatevar);
        },
        setter: function(val){
            privateval = val;
        }
    }
})

*prototype*
>   Some helper functions given to object

// Prototype inheritance
>   Can inherit from parent prototype

var humans = {
    canfly: false,
    cantalk: true,
    canwalk: true
}

var kvstudents = {
    smuggledrugs: true,
    canfight: true
}

kvstudents__proto__ = humans;

*this call apply bind*

// call apply bind = these are used for changing the value of a func from this to a particular object

function abcd(){
    console/log(this.age);
}

var obj = {age: 24}
abcd.call(obj)

*sync and async*
 sync means when the tasks happenes one by one

 console.log("hello")

 async means when all the tasks start together and the output is given as the work done first by someone.

 setTimeout(function(){ 
 }, 12000)

*4 pillars of DOM*

// 1. Selection of Element:
    var a = document.querySelector("h1")
    console.log(a)

// Changing HTML
    var a = document.querySelector("h1)
    a.innerHTML = "Changed HTML"

// Changing CSS
    a.style.color = "red"
    a.style.backgroundColor = "black"

// Event Listener
    a.addEventListener("click",function(){
        console.log("hey")
    })

// For selecting multiple elements
    var b = document.querySelectorAll("h1")