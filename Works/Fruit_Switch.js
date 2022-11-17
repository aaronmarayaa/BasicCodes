function myFunction() {
    var grade = (document.getElementById("result1").value);
    switch(grade){
    case "Apple":
      document.getElementById('fruit_text').innerHTML = "Apple is a Fruit";
     break;
  
    case "Mango":
      document.getElementById('fruit_text').innerHTML = "Mango is a Fruit"; 
      break;
  
    case "Pineapple":
      document.getElementById('fruit_text').innerHTML = "Pineapple is a Fruit"; 
      break;
  
      case "":
      document.getElementById('fruit_text').innerHTML = "";
     break;
  
    default:
      document.getElementById('fruit_text').innerHTML = "Not a fruit";
      break;
    }
  }
  