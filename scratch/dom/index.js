
console.log('fgfhg');
 function addPara(text) {
    let elP = document.createElement('p');
    let pContent = document.createTextNode(text);
    elP.appendChild(pContent);
    let elBody = document.getElementById('body');
    elBody.appendChild(elP);
 }

function addlist() {
    let elUl = document.createElement('ul');
    let elLi1 = document. createElement('li');
    let li1Content = document.createTextNode('hello');
    elLi1.appendChild(li1Content);
    elUl.appendChild(elLi1);
    let elLi2 = document.createElement('li');
    let li2Content = document.createTextNode('no ');
    elLi2.appendChild(li2Content);
    elUl.appendChild(elLi2);
    let  elLi3 = document.createElement('li');
    let li3Content = document.createTextNode('bye');
    elLi3.appendChild(li3Content);
    elUl.appendChild(elLi3);
    let elEm =document.createElement('em');
    let emContent = document.createTextNode('yes');
    elEm.appendChild(emContent);
    elLi2.appendChild(elEm);
    let elBody = document.getElementById('body');
    elBody.appendChild(elUl);
}


document.addEventListener(  'DOMContentLoaded' , function(event) {
     let makeClickMe = document.getElementById('make-clickme');
     makeClickMe.addEventListener('click', function (event) {
         console.log('click listener fired');
         addPara('clickme');
     });

    let makeClick = document.getElementById('make-newlist');
    makeClick.addEventListener('click', function (event) {
        console.log('click listener fired');
        addlist();
    });
 });

