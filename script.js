//Create own in Jsin Format

var resume =  {
"NAME":"Pavithran",
"AGE" : 27,
"Qualification": "MBA",
"ADDRESS":"Erode",
"Experience": 5,
"Hobbies":["playing cricket", "Playing foot ball", "Playing carrom", "etc.."],
Additional :{
 
    cell: 123567890,
    Place: "Erode",
    Stength:["No stage fear", "always positive", "No negative thinking"]

}

}

//For the given Json iterate over all loops (for, for in, for of, for each)


// First one For in loop

for (let key in resume ){

    console.log(`${key }: ${resume[key]}`)
}

// // for of loop 

for (let [n,m] of Object.entries(resume)){

    console.log(n+" :" + m )
}

// for of loop

for (let i of Object.values(resume)){

    console.log(i)
}

// for each


Object.keys(resume).forEach(function(key) {
    console.log(key + ": " + resume[key]);
  });

  
  
// Difference between windows screen &  document in javascript

//   window Object:

// The window object represents the entire browser window or the global context in which JavaScript code is executed.
// It provides access to various properties and methods related to the browser window itself, like dimensions, location, history, and more.
// It acts as the global object for JavaScript in a browser environment, meaning variables and functions declared globally are attached to the window object.
// It also contains other objects like navigator, location, history, etc., which provide information about the browser and control over the browser's behavior.
// Example:

// javascript
// Copy code
// window.innerWidth;
// window.alert('This is an alert');
// document Object:

// The document object represents the actual HTML document loaded in the browser window.
// It provides access to the structure and content of the document, allowing you to manipulate elements, change styles, and respond to events.
// It's part of the DOM (Document Object Model), which is a tree-like representation of the document's structure, allowing JavaScript to interact with HTML elements.
// It provides methods like getElementById, querySelector, etc., for accessing and manipulating elements in the document.
// Example:

// javascript
// Copy code
// document.getElementById('myElement'); // Returns the element with the specified ID
// document.createElement('div'); // Creates a new <div> element
// In summary, window is the global object that represents the entire browser window, while document is a property of the window object that represents the loaded HTML document and provides methods and properties for interacting with it.

// Keep in mind that in modern JavaScript and web development, direct manipulation of the window object is relatively rare, as most interactions occur within the context of the DOM using the document object and other DOM-related APIs.