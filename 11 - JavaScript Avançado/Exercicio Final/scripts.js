let transaction = []


function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transction-title')
    title.textContent = name
    return title
}

function createTransactionAmount(amount) {
    const span = document.createElement('span')

    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formatedAmount = formater.format(amount) 

    if(amount > 0) {
        span.textContent = `${formatedAmount} C`
        span.classList.add('credit')
    } else {
        span.textContent = `${formatedAmount} D`
        span.classList.add('debit')
    }

    return span
}

function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)

    container.append(title, amount)
    document.querySelector('#transactions').append(container)
}

async function fetichTransactions(){
    return await fetch('http://localhost:3000/transactions').then(res => res.json())
}

async function setup(){
    const results = await fetichTransactions()
    transaction.push(...results)
    transaction.forEach(renderTransaction)
}


document.addEventListener('DOMContentLoaded', setup)