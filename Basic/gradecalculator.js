//student store 
//total possible score 

let gradeCalc = function(studentScore, maxScore){
   let gradePerc = (studentScore / maxScore ) * 100
    let Grade = ''
 
  
   if(gradePerc >= 90){
       Grade = 'A'
   
   } else if (gradePerc >= 80 ){
    Grade = 'B'
   }
   else if(gradePerc >= 70 ){
    Grade = 'C'
   }
   else if(gradePerc >= 60 ){
    Grade = 'D'
   }
   else{ Grade = 'F'}

   return `Your, mark is ${Grade} with ${gradePerc}%`


}
let result = gradeCalc(4,20)
console.log(result)