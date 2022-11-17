function myFunction(){
    var a = Number(document.getElementById('first_num').value);
    var b = Number(document.getElementById('second_num').value);
    var c = Number(document.getElementById('third_num').value);
    
      if (a > b && a > c){
        document.getElementById('result').innerHTML = ( a + " is the biggest number")
      }
    
      else if (b > a && b > c){
        document.getElementById('result').innerHTML = ( b + " is the biggest number")
      }
    
      else if (c > a && c > b){
        document.getElementById('result').innerHTML = ( c + " is the biggest number")
      }
    
      else if (a == b && a > c || a == c && a > c){
        document.getElementById('result').innerHTML = ( a + " is the biggest number")
      }
    
      else if (b == a && b > c || b == c && b > a){
        document.getElementById('result').innerHTML = ( b + " is the biggest number")
      }
    
      else if (c == a && c > b || c == b && c > a){
        document.getElementById('result').innerHTML = ( c + " is the biggest number")
      }
    
      else if (a == " " && b == " " && c == " "){
        document.getElementById('result').innerHTML = (" ")
      }
    
     else if (a == c && a == b && b == a && b == c && c == a && c == b){
        document.getElementById('result').innerHTML = ( "They are all equal")
      }
    
      else{
        document.getElementById('result').innerHTML = (" ")
      }
    }