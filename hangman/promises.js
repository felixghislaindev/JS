setTimeout(() => {
    console.log('time is up')
}, 2000)


//promise
const getDataPromise = (data) => new promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(`this is my resolve ${data}`)
    })
})

