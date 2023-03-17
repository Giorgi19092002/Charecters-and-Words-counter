let textarea = document.getElementById('content')
let cCount = document.getElementById('Ccounter')
let wCount = document.getElementById('Wcounter')


textarea.oninput = () => {
    let charecters = textarea.value
    cCount.innerHTML = charecters.replace(/\s,/g,'').length

    let words = textarea.value.split(' ').filter((item) => {
        return item !== ''
    })

    wCount.innerHTML = words.length

}