const display = document.getElementById("display")
function appendTODisplay(input) {
   display.value += input 
}
function calculate(input) {
try{
    display.value= eval(display.value);  }
    catch(error){
        display.value="error";
    }
}
function clearDisplay(input) {
    display.value="";

}