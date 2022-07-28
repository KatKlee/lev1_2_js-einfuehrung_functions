/* Funktion Ausgabe von "Hallo" */
function word() {
    console.log('Hallo')
}

word()

// Arrow Function
let sayHello = () => console.log('Hallo')

sayHello()




/* ----------------------------------- */

/* Funktion mit Summe von x=2 und y=3 */
function sum(x, y) {
    console.log(x + y)
}

sum(2, 3)

// Arrow Function
let summe = (x, y) => console.log(x + y)

summe(2, 3)




/* ----------------------------------- */

/* Funktion, die eine Multiplikation zweier Zahlen als Alert ausgibt */
function multiAlert(zahlA, zahlB) {
    alert(zahlA * zahlB)
}

/* multiAlert(4, 5) */

// Arrow Function
let alertMulti = (zahlA, zahlB) => alert(zahlA * zahlB)

/* alertMulti(4, 5) */




/* ----------------------------------- */

/* Funktion, die Typ des Parameters i=true anzeigt */
function paraType1(i) {
    console.log(typeof i)
}

paraType1(true)
/* boolean */

// Arrow Function
let type1 = i => console.log(typeof i)

type1(true)




/* Funktion, die Typ des Parameters j='hi' anzeigt */
function paraType2(j) {
    console.log(typeof j)
}

paraType2('hi')
/* string */

// Arrow Function
let type2 = j => console.log(typeof j)

type2('hi')




/* Funktion, die Typ des Parameters k=1 anzeigt */
function paraType3(k) {
    console.log(typeof k)
}

paraType3(1)
/* number */

// Arrow Function
let type3 = k => console.log(typeof k)

type3(1)




/* Funktion, die Typ des Parameters l={name:'John'} anzeigt */
function paraType4(l) {
    console.log(typeof l)
}

paraType4({ name: 'John' })
/* object */

// Arrow Function
let type4 = l => console.log(typeof l)

type4({ name: 'John' })




/* Funktion, die Typ des Parameters a=[0,1] anzeigt */
function paraType5(a) {
    console.log(typeof a)
}

paraType5([0, 1])
/* object */

// Arrow Function
let type5 = a => console.log(typeof a)

type5([0, 1])