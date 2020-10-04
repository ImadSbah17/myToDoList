// fonctionnalité de mon bouton add essayer de mettre des div à la plus d'une liste afin de mieux viser mes balise

let myBody =document.querySelector('body');


let myInput = document.querySelector('input');
console.log(myInput);

let myButtonForAdd = document.querySelector('button')
console.log(myButtonForAdd);

let myDivMylist = document.querySelectorAll('div')[4];
console.log(myDivMylist);

let myUl = document.querySelector('ul');

let myButton1;
let mybtn;
let myDivForMyButton;
 

myButtonForAdd.addEventListener('click',()=>{
    if(myInput.value != ""){

        let myDivInMyList = document.createElement('div');
        myDivMylist.appendChild(myDivInMyList);
          
        myDivInMyList.innerHTML+= myInput.value

        myDivForMyButton = document.createElement('div');
        myDivInMyList.appendChild(myDivForMyButton);

      

        myDivForMyButton.setAttribute ("class","myDivForMyButton");

        myButton1 = document.createElement('button');
        myButton1.setAttribute("class", "myButton");
 
        let myButton2 = document.createElement('button');
        myButton2.setAttribute("class", "myButton");
        let myButton3 = document.createElement('button');
        myButton3.setAttribute("class", "myButton");

        myDivForMyButton.appendChild(myButton1);
        myDivForMyButton.appendChild(myButton2);
        myDivForMyButton.appendChild(myButton3);

        myDivInMyList.setAttribute("class","divForContain");
        console.log(myButton1);

        mybtn = document.querySelectorAll('button')[4];
        console.log(mybtn);
        let mybtn1 =document.querySelectorAll('button');


// ici je vais mettre un addEventListener pour chacun de mes boutons créer grace au addEventListener sur le bouton add

        let bouton1 = myDivForMyButton.querySelectorAll('button')[0];
        console.log(bouton1);
        let bouton2 = myDivForMyButton.querySelectorAll('button')[1];
        console.log(bouton2);
        let bouton3 = myDivForMyButton.querySelectorAll('button')[2];
        console.log(bouton3); 

        bouton1.addEventListener('click',()=>{
                console.log('sergen');
        });

        bouton2.addEventListener('click',()=>{
                console.log('sergen');
        });

        bouton3.addEventListener('click',()=>{
                console.log('sergen');
        });

        myInput.value = "";

    }else{
            alert("vous n'avez rien écris veuillez remplir la case");
    };
});


         







 










