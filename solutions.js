//free code camp challenges that took me a while to finish, so I want to remember them

//binary to readable code
function binaryAgent(str) {
 return str.split(' ').map(e=> String.fromCharCode(parseInt(e,2))).join('')
}

binaryAgent(" 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// a code that check falty and truthy values in an object
function truthCheck(collection, pre) {
return collection.every((e,i)=>{
  return (e[pre])
})
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
//does this check whether the user has a sex assigned?
//could you put it on two lines to make it more readable?
//also this made me laugh pretty loudly.
