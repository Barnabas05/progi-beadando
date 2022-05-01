let kosar = []
const alma = 1

function add() {
    kosar.push(alma)
}

function minus() {
    kosar.pop(alma)
}

function clearAll() {
    kosar.length = 0
}

function getData(){
    alert(kosar.length + " " + "darab alma van a kosárban")
}
getData()
