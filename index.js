function calculateBMI() {
   //Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

   //You are going to write the code here before the curly braces 👇🏻

   let heightinMeters = height / 100;
   let vrcalculateBMI = (weight   / (heightinMeters * heightinMeters));




    if(vrcalculateBMI < 18.5){
      alert(`Result: Underweight`)
    }
    else if(vrcalculateBMI <= 24.9){
      alert("Result: Healthy Weight")
    }
    else if(vrcalculateBMI <= 29.9){
      alert("Result: OverWeight")
    }
    else {
      alert("Result: Above Obesity")
    }



    alert(`your BMI is ${vrcalculateBMI}`);

    if(age >= 19 && age <= 24)
    {
      if(vrcalculateBMI >= 19 && vrcalculate <= 24)
      {
        alert("Healthy");
      }
      else{
        alert("NOT Healthy");
      }
    }
    else if(age >= 25 && age <= 34)
    {
      if(vrcalculateBMI >= 20 && vrcalculateBMI <= 25)
      {
        alert("Healthy");
      }
      else{
        alert("NOT Healthy");
      }
    }
    else if(age >= 35 && age <= 54)
    {
      if(vrcalculateBMI >= 21 && vrcalculate <= 26)
      {
        alert("Healthy");
      }
      else{
        alert("NOT Healthy");
      }
    }
    else if(age >= 45 && age <= 54)
    {
      if(vrcalculateBMI >= 22 && vrcalculate <= 27)
      {
        alert("Healthy");
      }
      else{
        alert("NOT Healthy");
      }
    }
    else if(age >= 55 && age <= 64)
    {
      if(vrcalculateBMI >= 23 && vrcalculate <= 28)
      {
        alert("Healthy");
      }
      else{
        alert("NOT Healthy");
      }
    }
    else if(age > 65)
    {
      if(vrcaculateBMI <= 24 && vrcalculateBMI >= 29)
      {
        alert("Healthy");
      }
      else{
        alert("NOT Healthy");
      }
    }

}


