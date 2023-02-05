function execute() {
    return new Promise((resolve, reject) => {
        console.log(' A promise está sendo executada...')
        setTimeout(() => {
            console.log('Resolvindo a promisse...')
            resolve('Resultado')
        })
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000);