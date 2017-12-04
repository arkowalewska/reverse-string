//function reverses the order of characters in a word

var button = document.getElementById('button-reverse');

function reverseString() {

    var newString = document.getElementById('to-reverse').value;
    var result = document.getElementById('reverse-result');

    result.value = newString.split('').reverse().join('');
    
    document.getElementById('reverse-result').innerHTML = result.value;

}
button.addEventListener('click', function () {
    reverseString();
   
})
