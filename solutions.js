//binary to readable code
function binaryAgent(str) {
 return str.split(' ').map(e=> String.fromCharCode(parseInt(e,2))).join('')
}

binaryAgent(" 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
