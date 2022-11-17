function myFunction() {
    var grade = Number(document.getElementById("result1").value);
      
    if(grade >= 1 && grade <= 89 ){
      document.getElementById('textMargin_angles').innerHTML = "Acute angle";  
      document.getElementById('angle').innerHTML = 
      `<style>
      #angle { 
      height: 90px;
      width: 100px;
      border-bottom: 1px solid red; 
      border-left: 2px solid red;
      transform: skew(-45deg);
      margin-top: 5%;
      margin-left: 45%;
      }  
      </style>`;  
      }
  
       else if(grade == 90){
      document.getElementById('textMargin_angles').innerHTML = "Right angle"; 
      document.getElementById('angle').innerHTML = 
    `<style>
      #angle{ 
      height: 90px; 
      width: 100px;
      border-bottom: 1px solid red;
      border-left: 2px solid red;
      transform: skew(-0deg);
      margin-top: 5%;
      margin-left: 42%;
      } 
      </style>`;   
      }
  
    else if(grade >= 91 && grade <= 179 ){
      document.getElementById('textMargin_angles').innerHTML = "Obtuse angle";
      document.getElementById('angle').innerHTML = 
      `<style> 
      #angle{
      height: 70px; 
      width: 100px;
      border-bottom: 1px solid red;
      border-left: 2px solid red;
      transform: skew(40deg);
      margin-top: 5%;
      margin-left: 35%;
      } 
      </style>`;         
     }
  
    else if(grade == 180 ){
      document.getElementById('textMargin_angles').innerHTML = "Straight line";
      document.getElementById('angle').innerHTML = 
      `<style>
      #angle {
      height: 50px;
      width: 180px;
      border-bottom: 1px solid red;
      margin-top: 5%;
      margin-left: 20%;
      }
      </style>`;
     }

        else{
           document.getElementById('textMargin_angles').innerHTML = " ";
           document.getElementById('angle').innerHTML = " ";
         } 
    }