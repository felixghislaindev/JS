//student store 
//total possible score 

let gradeCalc = (studentScore, maxScore) =>{
    if(typeof studentScore === 'number' && typeof maxScore === 'number'){
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
    } else {
        throw Error('please enter a number')
    }

}

try{
    let result = gradeCalc('he',20)
    // check if number is entered
    console.log(result)
} catch(e){
    console.log(e.message)
}



