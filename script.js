document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {
  
  
  let button = document.querySelector(".submit");

  //input selector variables
  let name = document.querySelector("#name");
  let activity = document.querySelector("#activity");
  let season = document.querySelector("#season");
  let breakfast = document.querySelector("#breakfast");
  let holiday = document.querySelector("#holiday");
  let animal = document.querySelector("#animal");
  let display = document.querySelector(".display");

  //variables that will need updating after user input
  let userName;
  let userActivity;
  let userSeason;
  let userBreakfast;
  let userHoliday;
  let userAnimal;
  let totalScore;
  let imgSrc;
  let techCompany;
  
  
 button.onclick = function() {
   userName = name.value;
   userActivity = activity.value.toLowerCase();
   userSeason = season.value.toLowerCase();
   userBreakfast = breakfast.value.toLowerCase();
   userHoliday = holiday.value.toLowerCase();
   userAnimal = animal.value.toLowerCase();
   
   //console the value of user input
   console.log(userName);
   console.log(userActivity);
   console.log(userSeason);
   console.log(userBreakfast);
   console.log(userHoliday);
   console.log(userAnimal);
   
   /*var imgSrc ="https://media.giphy.com/media/22zgHX8aop488/giphy.gif";*/

  //calculate scores for each response
  //function to calculate activity score
   function activityScore(activity) {
     if (activity === "sports") {
       return 2;
     } else if (activity === "reading") {
       return 3;
     } else if (activity === "design") {
       return 4;
     } else if (activity === "coding") {
       return 5;
     } else {
       return 0;
     }
   }

   //function to calculate season score
   function seasonScore(season) {
     if (season === "summer") {
       return 2;
     } else if (season === "spring") {
       return 3;
     } else if (season === "fall") {
       return 4;
     } else if (season === "winter") {
       return 5;
     } else {
       return 0;
     }
   }

   //function to calculate breakfast score
   function breakfastScore(breakfast) {
     if (breakfast === "french toast") {
       return 2;
     } else if (breakfast === "waffles") {
       return 3;
     } else if (breakfast === "pancakes") {
       return 4;
     } else {
       return 0;
     }
   }

   //function to calculate holiday score
   function holidayScore(holiday) {
     if (holiday.length > 4) {
       return 2;
     } else if (holiday.length > 6 && holiday.length <= 9) {
       return 3;
     } else if (holiday.length > 9) {
       return 4;
     } else {
       return 0;
     }
   }

   //function to calculate animal score
   function animalScore(animal) {
     if (animal.length > 2) {
       return 2;
     } else if (animal.length > 4 && animal.length <= 9) {
       return 3;
     } else if (animal.length > 9) {
       return 4;
     } else {
       return 0;
     }
   }
   
   //update totalScore variable by calling each function with the user's values as the parameter
   totalScore = activityScore(userActivity) + seasonScore(userSeason) + breakfastScore(userBreakfast) + holidayScore(userHoliday) + animalScore(userAnimal);
   


   //function to display the result with userName, techCompnay, and imgSrc parameters
   function displayResult(userName, techCompany, imgSrc){
     display.innerHTML = `<h2>Congratulations, ${userName}! You're going to be working at ${techCompany}!</h2></br><img src="${imgSrc}">`;
    }
   
   //function for the result
   function result(totalScore) {
     if (totalScore > 21) {
       techCompany = "Google";
       imgSrc="https://media4.giphy.com/media/R2BtyXJgd2nh6/giphy.gif?cid=ecf05e47aqihh4w62tls1d57awmizcbjerdgyg0wyk7tk2sl&rid=giphy.gif&ct=g";
       displayResult(userName, techCompany, imgSrc);
     } else if (totalScore >16 && totalScore <= 21) {
       techCompany = "Apple";
       imgSrc="https://i.pinimg.com/originals/fc/90/a8/fc90a8a5bcb5a216c3137d26950fadcd.gif"
         displayResult(userName, techCompany, imgSrc);
     } else if (totalScore > 11 && totalScore <= 16) {
       techCompany = "Amazon";
       imgSrc="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2020/03/amazon-gif-logo.gif";
       displayResult(userName, techCompany, imgSrc);
     } else if (totalScore > 8 && totalScore <= 11) {
       techCompany = "Facebook";
       imgSrc="https://media.giphy.com/headers/facebook/FuLFvah0klRm.gif";
       displayResult(userName, techCompany, imgSrc);
     } else if (totalScore === 8) {
       techCompany = "Microsoft";
       imgSrc="https://i.gifer.com/U1m2.gif";
       displayResult(userName, techCompany, imgSrc);
     } else {display.innerHTML = `<h2>Make sure to answer all of the questions, ${userName}. We want to make sure we get this right!</h2>`;
        }
    }

   //call result function with totalScore argument
   result(totalScore);
   

};
  
}
