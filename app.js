const div = document.getElementById('fruitsNames');
const p = document.querySelector('p');
const fruitsArry= ["Apple", "Pear", "Watermelon", "Orange", "Cherry", "Strawberry", "Grapes", "Mango", "Pomegranate", "Plum", "Apricot", "Grapefruit", "Melon", "Banana", "Damson", "Papaya", "Coconut"];

// console.log(fruitsArry.length);
const discribe=["Apple is high in nutrients, including Vitamin C and potassium.", "Pear is oval and has a smooth, slightly bumpy skin.", "Watermelon is a popular summer fruit with a hard exterior that can be eaten fresh or used in juice, sorbets, salads, and other recipes.", "Orange is a citrus fruit that is typically orange in color and has a sweet, juicy, and tangy taste.", "Cherries are widely loved for their sweet, juicy, and tart flavors.", "It is a sweet, fruity, and sour fruit that is eaten as a dessert but can also be used in smoothies.", "Grapes are typically red, black, or green and have a firm, tart texture.", "Mango is a delicious fruit that is popular in many tropical countries.", "Pomegranate is used for its juice, seeds, and cosmetic benefits.", "Plum fruit is a small, round fruit that is similar in shape to apricot and has a tart, acidic taste.", "Apricot fruit has a semi-hard exterior and a soft, pulpy interior.", "Grapefruit is a tropical fruit that bears a resemblance to an orange but has a thicker rind and smaller, seedless pink flesh.", "Melon is a type of fruit that is typically round and has hard skin.", "A banana is a tropical fruit that is renowned for its sweet flavor and versatile nature.", "Damson is a type of plum that originated in the Middle East.", "Papaya is a tropical fruit that is mainly grown in Latin America.", "Coconut is a dense fruit that grows on a palm-like tree."];

// console.log(discribe.lenght);

for (let i = 0; i < fruitsArry.length; i++) {

    div.innerHTML+=`<button onclick="fruits(${i})">${fruitsArry[i]}</button>`

    for (let j = 0; j < discribe.length; j++) {
        // console.log(discribe[j]);
        
    }
    
}

function fruits(i) {
    p.innerHTML+=`<li>${fruitsArry[i]} ${discribe[i]}</li><br>`
}
