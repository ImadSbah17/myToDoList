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

        let mySpan = document.createElement('span');
        myDivInMyList.appendChild(mySpan);
          
        mySpan.innerHTML+= myInput.value;

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
        bouton1.textContent = "delete";
        bouton1.setAttribute('class','bouton1');
        console.log(bouton1);
        let bouton2 = myDivForMyButton.querySelectorAll('button')[1];
        bouton2.textContent = "edit";
        bouton2.setAttribute('class','bouton2');
        console.log(bouton2);
        let bouton3 = myDivForMyButton.querySelectorAll('button')[2];
        bouton3.textContent = "check";
        bouton3.setAttribute('class','bouton3')
        console.log(bouton3); 
// le bouton1 à pour fonction de supprimer ma div   
        bouton1.addEventListener('click',()=>{
                let rep = prompt('voulez-vous vraiment supprimer ? oui ou non ? ');
                if (rep == "oui") {
                        myDivInMyList.classList = "divForIf"
                        
                }else if ( rep != "oui"){

                }
                else {
                        alert ("entrer quelque chose")
                }

      
                // myDivInMyList.setAttribute('id','myDivInMyList')

        });
// le bouton2 à pour fonction de modifier ma div   
        bouton2.addEventListener('click',()=>{
                let myNewInput = document.createElement('input');
                myDivForMyButton.appendChild(myNewInput);
                let myButton0 = document.createElement('button');
                myDivForMyButton.appendChild
                (myButton0);
                myButton0.className = "bouton0";
                myButton0.addEventListener('click',()=>{
                        mySpan.innerText = myNewInput.value;
                        if (myNewInput.value = "") {
                                alert('vueillez compléter');        
                        }
                        myButton0.remove();
                        myNewInput.remove();

                })
        });
// le bouton1 à pour fonction de check ma div 
        bouton3.addEventListener('click',()=>{
                
                myDivInMyList.classList.toggle ("bouton3Bis");
                
                bouton1.classList.toggle('testMicro');
                bouton2.classList.toggle('testMicro');


        });

       

    }else{
            alert("vous n'avez rien écris veuillez remplir la case");
    };
    myInput.value = "";
});


         







 










