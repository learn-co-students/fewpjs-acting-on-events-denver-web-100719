let dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#FF69B4"

dodger.style.bottom = '0px'

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '')
    let left = parseInt(leftNumbers, 10)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener('keydown', event => {
    if (event.key === "ArrowLeft"){
        moveDodgerLeft()
    }
})

function moveDodgerRight() {
    let rightNumbers = dodger.style.right.replace('px', '')
    let right = parseInt(rightNumbers, 10)

    if (right < 467.5) {
        dodger.style.right = `${right + 1}px`
    }
}

document.addEventListener('keydown', event => {
    if (event.key === "ArrowRight"){
        moveDodgerRight()
    }
})


