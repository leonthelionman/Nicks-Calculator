var display = ''
var value
//////Digits
//decimal
document.querySelector("#decimal").addEventListener('click',decimal)
function decimal(){
    display = display +'.'
    document.getElementById('Output').value = display;    
}
//ZERO
document.querySelector("#zeroDigit").addEventListener('click',zero)
function zero(){
    display = display +'0'
    document.getElementById('Output').value = display;    
}
//ONE
document.querySelector("#oneDigit").addEventListener('click',one)
function one(){
    display = display +'1'
    document.getElementById('Output').value = display;    
}
//TWO
document.querySelector("#twoDigit").addEventListener('click',two)
function two(){
    display = display +'2'
    document.getElementById('Output').value = display;    
}
//Three
document.querySelector("#threeDigit").addEventListener('click',three)
function three(){
    display = display +'3'
    document.getElementById('Output').value = display;    
}
//Four
document.querySelector("#fourDigit").addEventListener('click',four)
function four(){
    display = display +'4'
    document.getElementById('Output').value = display;    
}
//Five
document.querySelector("#fiveDigit").addEventListener('click',five)
function five(){
    display = display +'5'
    document.getElementById('Output').value = display;    
}
//Six
document.querySelector("#sixDigit").addEventListener('click',six)
function six(){
    display = display +'6'
    document.getElementById('Output').value = display;    
}
//Seven
document.querySelector("#sevenDigit").addEventListener('click',seven)
function seven(){
    display = display +'7'
    document.getElementById('Output').value = display;    
}
//Eight
document.querySelector("#eightDigit").addEventListener('click',eight)
function eight(){
    display = display +'8'
    document.getElementById('Output').value = display;    
}
//Nine
document.querySelector("#nineDigit").addEventListener('click',nine)
function nine(){
    display = display +'9'
    document.getElementById('Output').value = display;    
}

//////OPERATORS
//Plus
document.querySelector("#plus").addEventListener('click',plus)
function plus() {
    display = display + '+'
    document.getElementById('Output').value = display; 
}
//minus
document.querySelector("#minus").addEventListener('click',minus)
function minus() {
    display = display + '-'
    document.getElementById('Output').value = display; 
}
//divide
document.querySelector("#divid").addEventListener('click',divid)
function divid() {
    display = display + '/'
    document.getElementById('Output').value = display; 
}
//multiply
document.querySelector("#multiply").addEventListener('click',multiply)
function multiply() {
    display = display + '*'
    document.getElementById('Output').value = display; 
}

//////MATH
document.querySelector("#equal").addEventListener('click',equal)
function equal(){
    value =  eval(display);
    document.getElementById('math').value = value; 
}

//////Clear
document.querySelector("#clear").addEventListener('click',clear)
function clear(){
    displayOld = display
    valueOld = value
    display = ""
    value = ""
    document.getElementById('Output').value = ""
    document.getElementById('math').value = "" 

    document.getElementById('OutputSave').value = displayOld

    if (valueOld === undefined){
        document.getElementById('mathSave').value = ""  
    }else{
        document.getElementById('mathSave').value = valueOld     
    }
    
}

//////Copy
var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('#math');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});