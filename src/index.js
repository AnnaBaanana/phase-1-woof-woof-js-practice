const pupsURL = "http://localhost:3000/pups"
let toggle = 1;


/*function createPups(pup) {
    const span = document.createElement('span')
    span.textContent=pup.name
    span.id = pup.id
}*/

function renderData() {
    fetch(`${pupsURL}`).then(res => res.json()).then(data => {
        console.log(data)
        const dogBar = document.querySelector('#dog-bar')
        console.log(dogBar)
        data.forEach((pup) => {
            console.log(pup.name)
            const span = document.createElement('span')
            span.textContent=pup.name
            span.id = pup.id
            dogBar.append(span)
            span.addEventListener('click', (e)=> {
                console.log(e)
                const dogInfo = document.querySelector('#dog-info')
                dogInfo.innerHTML=""
                const image = document.createElement('img')
                image.src=`${pup.image}`
                const h2 = document.createElement('h2')
                h2.textContent=pup.name
                const dogBtn = document.createElement('button')
                dogBtn.type="submit"
                dogBtn.id = 'dogBtn'
                console.log(pup.isGoodDog)
                let dogVal;
                let newVal;
                if (pup.isGoogDog == false) {
                    dogVal = "Bad"
                    newVal = "Good"
                } else {
                    dogVal = "Bad"
                    newVal = "Good"}
                console.log(dogVal) 
                console.log(newVal)     
                dogInfo.append(h2, image, dogBtn)
                console.log(dogBtn)
                //button text is not updating currently
                dogBtn.textContent=dogVal
                dogBtn.addEventListener('click', (e) => {
                    console.log(e)
                    fetch(`${pupsURL}/${pup.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            isGoodDog: newVal
                        })
                    }).then(res=> res.json()).then(data=> console.log(data))
                })
            })
    })
})
}

function filterToggle() {
    const filter = document.querySelector('#good-dog-filter')
    //let toggle = 1;
    //console.log(filter)
    filter.addEventListener('click', (e)=> {
        console.log(e)
        if (toggle === 1) {
            toggle = 0;
            filter.textContent = 'Filter good dogs: ON'
        } else {
            toggle = 1;
            filter.textContent = 'Filter good dogs: OFF'
        }

    })
}

function domLoaded() {
    document.addEventListener('DOMContentLoaded', ()=>{
        console.log('DOM loaded')
        renderData()
        filterToggle()
    })
}

domLoaded()