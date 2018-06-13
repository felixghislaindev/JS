const getTip = amount =>{
    if(typeof amount ==='number'){
        return amount *.25
    } else {
        throw Error('must be a number')
    }
}
try{
    console.log(getTip('hello')) 
} catch(e){
    console.log('catch')
}
