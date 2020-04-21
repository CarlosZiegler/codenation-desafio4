'use strict'

const fibonacci = () => {

    let fibonacciArray = []
    let element = 0

    for (let index = 0; element < 350; index++) {

        if (index < 2) {
            fibonacciArray.push(index)
            continue
        }

        element = fibonacciArray[(index - 1)] + fibonacciArray[(index - 2)]
        fibonacciArray.push(element)

    }
    return fibonacciArray
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}
