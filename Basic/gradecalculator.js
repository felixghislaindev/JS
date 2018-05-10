//student store 
//total possible score 

let gradeCalc = function(studentScore, maxScore){
   let gradePerc = (studentScore / maxScore ) * 100

 
  
   if(gradePerc >= 90 && gradePerc <=100){
    return `Your, mark is A with ${gradePerc}%`
   } else if (gradePerc >= 80 && gradePerc <=89){
    return `Your, mark is B with ${gradePerc}%`
   }
   else if(gradePerc >= 70 && gradePerc <=79){
    return `Your, mark is C with ${gradePerc}%`
   }
   else if(gradePerc >= 60 && gradePerc <=69){
    return `Your, mark is D with ${gradePerc}%`
   }
   else{return `you can do better dont give hope ${gradePerc}%`}


}
let result = gradeCalc(14,20)
console.log(result)