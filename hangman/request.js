// a callback function is calling a fuction from within a function 


// const getCountryDetails = (code, callback) =>{

// }

   
    //cretaing geolocation function


    
    
    
    
    
    
    
    
    
    
    
    
    
    // new Promise((resolve,reject) => {
    // //     //   making an http request 
    // const request = new XMLHttpRequest()
    // // openeing the request 
    // request.open('GET', 'http://restcountries.eu/rest/v2/all')
    // request.send()

    // // handeling the request and getting result 
    // request.addEventListener('readystatechange', (e) =>{
    // if(e.target.readyState === 4 && e.target.status === 200){
    // const data = JSON.parse(e.target.responseText)
    // const country = data.find((country) => country.alpha2Code === code)
    //     resolve(country.name)
    
    // } else if(e.target.readyState === 4){
    // reject('unable to fetch data')

    // }
    // })
    // })
    

    // callback function 


    // making an http request 

    const getPuzzle = async (wordCount) => {
        const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if(response.status === 200){
            const data = await response.json()
            return data.puzzle
        }else{
            throw new Error('Unable to get puzzle')
        }
        
    }
 
    const geoLocation = async () =>{
        //marking resquest to url and parsin data 
        const response = await fetch('http://ipinfo.io/json?token=cb9036424e61f6')
        if(response.status === 200){
            const data = await response.json()
            return data
        } else{
            throw new Error('Data could not be fetched')
        }
        
    }

    const getCountryDetails = async(code) => {
        const response = await fetch('http://restcountries.eu/rest/v2/all')
        if(response.status === 200){
            const data = await response.json()
            return data.find((country) => country.alpha2Code === code)
        } else{
            throw new Error('Data could not be fetched')
        }
    }

    
    const getCurrentCountry = async () =>{
        const code = await geoLocation()
        const country = await getCountryDetails( code.country)
        return country 
    }

// async excution we can do other things while wating for another code to run, stick to async code when writting code, will note block other unrelated code from running providing better user experirence
//sync excution has to wait for something to finish before something else run blockling
//A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain