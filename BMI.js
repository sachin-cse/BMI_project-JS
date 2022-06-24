function calculate(){
  var height = document.myform.height.value
  var weight = document.myform.weight.value
  if(height > 0 && weight > 0){
    var finalbmi =  Math.round(
      (weight / (height * height) * 10000)    
    )
  document.myform.bmi.value=finalbmi
  if(finalbmi < 18.5){
      document.myform.status.value="UnderWeight 😒";
      document.myform.status.style.color="#ffc44d";
    }
  if(finalbmi >= 18.5 && finalbmi < 24.9){
      document.myform.status.value="Normal 😍";
      document.myform.status.style.color="#0be881";
    }
  if(finalbmi > 25.0 && finalbmi < 29.9){
      document.myform.status.value="OverWeight 😮";
      document.myform.status.style.color="#ff884d";
    }
  if(finalbmi > 30){
      document.myform.status.value="Obese 😱";
      document.myform.status.style.color="#ff5e57";
    }
  }
  else{
    alert("Please Fill in everything correctly!");
  }
  
}