async function asyncSum(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguents must be of type number')
    }

    return a + b
}

async function execute(){
    asyncSum(58, 33).then(result => {
        console.log(result)
    })
}