// settings
let slideDuration = 5000

updateSlides()

// update loop
let lastUpdate = Date.now()
let updateTimer = setInterval(function() {
    if (Date.now() - lastUpdate >= slideDuration) {
        lastUpdate = Date.now()

        // get slide elements in dom
        let previous = document.getElementsByClassName('previous')[0]
        let current = document.getElementsByClassName('current')[0]
        let next = document.getElementsByClassName('next')[0]

        // switch previous to next
        previous.classList.remove('previous')
        previous.classList.add('next')
        // switch current to previous
        current.classList.remove('current')
        current.classList.add('previous')
        // switch next to current
        next.classList.remove('next')
        next.classList.add('current')

        updateSlides()
    }
}, 100);

function updateSlides() {
    // get slide elements in dom
    let previous = document.getElementsByClassName('previous')[0]
    let current = document.getElementsByClassName('current')[0]
    let next = document.getElementsByClassName('next')[0]

    let url = 'https://i.ytimg.com/vi/xT-0x4AHLXA/maxresdefault.jpg'
    getJSON('https://dog.ceo/api/breeds/image/random', function(data) {
        console.log(data)
        next.innerHTML = '<img src="' + data.message + '">'
    })

    previous.innerHTML = ''
}

function getJSON(url, callback) {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callback(JSON.parse(request.responseText))
        }
    }
    request.open('GET', url, true)
    request.send(null)
}
