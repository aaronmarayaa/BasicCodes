function myFunction() {
    var grade = Number(document.getElementById("result").value);
  
    if(grade >= 1 && grade<= 58 || grade >=101 ){
      document.getElementById('grade_classify').innerHTML = "";  
      }
      
    if(grade >= 59 && grade<= 74 ){
      document.getElementById('grade_classify').innerHTML = "Failed";  
      }
  
    if(grade >= 75 && grade<= 80 ){
      document.getElementById('grade_classify').innerHTML = "Good";  
      }
  
    if(grade>= 81 && grade<= 90 ){
      document.getElementById('grade_classify').innerHTML = "Very Good";
     }
  
    if(grade >= 91 && grade<= 100 ){
      document.getElementById('grade_classify').innerHTML = "Excellent";
     }
    }
  