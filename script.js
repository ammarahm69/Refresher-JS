function chat() {
    let inputfeild = document.getElementById('inp');
    let button = document.getElementById('btn');
    let msgoutput = document.getElementById('q');
    if (inputfeild.value == 'hi') {
        msgoutput.innerHTML += `<li>Hello how I can assit you ?</li>`
    } else if (inputfeild.value == 'how are you ?') {
        msgoutput.innerHTML += `I'm fine .`
    }
}

let bikeList = {
    suzuki: {
        Hayabusa: {
            model: 2010,
            enginepower: '1200cc',
            avg: '18 km/hr'
        },
    },
    honda: {
        motorBike: {
            model: 1989,
            enginepower: '70 cc',
            avg: '6 km/hr'
        },
    },
    kawasaki: {
        NinjaH2R: {
            model: 2017,
            enginepower: '2000 cc',
            avg: '60 km/hr',
        },
    }

}
for (var key in bikeList) {
    console.log(key);
    for (var key1 in bikeList[key]) {
        console.log(key1);
        console.log(bikeList[key][key1]);
    }
}
