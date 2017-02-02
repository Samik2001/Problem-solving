


var str1 = " "; //-- First I create a string to add the roman numerals into for the final output 

function romey_numels(a) {
  if(typeof a != "number" || a < 1 || a > 3000) {
    console.log("PLEASE ENTER A NUMBER BETWEEN 1 and 3000");
    return false;
    //--this is to check wether the number fits the given limits(i.e 1-3000) and if it doesn't, it returns as false along with a statement telling the person to enter a valid number
  }
  if(a >= 1 && a <= 3000) {
  while(a >= 1000) { 
    str1 = str1 + "M";
    a -= 1000;
    //--this loop and the ones succeeding it basically check the value of the number and if it is higher than, in this case 1000, it will add "M" to the string which denotes 1000 in roman numerals and subtracts a 1000 from the input value to account for the M being added
  }
  
  while(a >= 900 && a < 1000) {
    str1 = str1 + "CM";
    a -= 900;
    
  }
  

    
  while(a >= 500 && a < 900) {
    str1 = str1 + "D";
    a -= 500;
    
    }
    while(a >= 400 && a < 500) {
    str1 = str1 + "CD";
    a -= 400;
    
    }
    
    while(a >= 100 && a < 400) {
    str1 = str1 + "C";
    a -= 100;
    
    }
    
  while(a >= 90 && a < 100) {
    str1 = str1 + "XC";
    a -= 90;
    
    }
    
    while(a >= 50 && a < 90) {
    str1 = str1 + "L";
    a -= 50;
    
    }
    
    while(a >= 40 && a < 50) {
    str1 = str1 + "XL";
    a -= 40;
    
    }
    
    while(a >= 10 && a < 40) {
    str1 = str1 + "X";
    a -= 10;
    
    }
    
    while(a == 9) { //-- in this loop and the loop on line 77, I found that there's no need for the and in the if statement since in both cases IX or IV will only be put in when the value is 9 and 4 respectively and will not leave any other number behind
    str1 = str1 + "IX";
    a -= 9;
    
    }
    
    while(a >= 5 && a < 9) {
    str1 = str1 + "V";
    a -= 5;
    
    }
    
    while(a == 4) {
    str1 = str1 + "IV";
    a -= 4;
    
    }
    
    while(a >= 1 && a < 4) {
    str1 = str1 + "I";
    a -= 1;
    
    }
  }
    
  console.log(str1); 
  str1 = " "; //-- this is to reset the value of the string, without it, the function only works when called once, if called twice it will join both the roman numerals( you can take the line out and call the function twice to gain a better understanding what I mean)
}
