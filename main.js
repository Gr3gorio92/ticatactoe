const element1 = document.getElementById('col1');
const element2 = document.getElementById('col2');
const element3 = document.getElementById('col3');
const element4 = document.getElementById('col4');
const element5 = document.getElementById('col5');
const element6 = document.getElementById('col6');
const element7 = document.getElementById('col7');
const element8 = document.getElementById('col8');
const element9 = document.getElementById('col9');
const azzera = document.getElementById('reset');

let isFirstPlayer = true;
var isEnd = false;

element1.addEventListener('click', e=>{
    e.preventDefault();
    
    check(element1.id);
    
});
element2.addEventListener('click',  e=>{
    e.preventDefault();
    check(element2.id);
});
element3.addEventListener('click',  e=>{
    e.preventDefault();
    check(element3.id);
});
element4.addEventListener('click',  e=>{
    e.preventDefault();
    check(element4.id);
});
element5.addEventListener('click',  e=>{
    e.preventDefault();
    check(element5.id);
});
element6.addEventListener('click',  e=>{
    e.preventDefault();
    check(element6.id);
});
element7.addEventListener('click',  e=>{
    e.preventDefault();
    check(element7.id);
});
element8.addEventListener('click',  e=>{
    e.preventDefault();
    check(element8.id);
});
element9.addEventListener('click',  e=>{
    e.preventDefault();
    check(element9.id);
});

azzera.addEventListener('click',e=>{
    e.preventDefault();
    reset();
});


function winned(){

    if(element1.innerText == 'X' && element2.innerText == 'X' && element3.innerHTML == 'X'){
        window.alert('Giocatore 1 vince!');
    }else if(element1.innerText == 'X' && element4.innerText == 'X' && element7.innerHTML == 'X'){
        window.alert('Giocatore 1 vince!');
    }else if(element2.innerText == 'X' && element5.innerText == 'X' && element8.innerHTML == 'X'){
        window.alert('Giocatore 1 vince!');
    }else if(element3.innerText == 'X' && element5.innerText == 'X' && element7.innerHTML == 'X'){
        window.alert('Giocatore 1 vince!');
    }else if(element3.innerText == 'X' && element6.innerText == 'X' && element9.innerHTML == 'X'){
        window.alert('Giocatore 1 vince!');
    }else if(element4.innerText == 'X' && element5.innerText == 'X' && element6.innerHTML == 'X'){
        window.alert('Giocatore 1 vince!');
    }else if(element7.innerText == 'X' && element8.innerText == 'X' && element9.innerHTML == 'X'){
        window.alert('Giocatore 1 vince!');
    }else if(element1.innerText == 'O' && element2.innerText == 'O' && element3.innerHTML == 'O'){
        window.alert('Giocatore 2 vince!');
    }else if(element1.innerText == 'O' && element4.innerText == 'O' && element7.innerHTML == 'O'){
        window.alert('Giocatore 2 vince!');
    }else if(element2.innerText == 'O' && element5.innerText == 'O' && element8.innerHTML == 'O'){
        window.alert('Giocatore 2 vince!');
    }else if(element3.innerText == 'O' && element5.innerText == 'O' && element7.innerHTML == 'O'){
        window.alert('Giocatore 2 vince!');
    }else if(element3.innerText == 'O' && element6.innerText == 'O' && element9.innerHTML == 'O'){
        window.alert('Giocatore 2 vince!');
    }else if(element4.innerText == 'O' && element5.innerText == 'O' && element6.innerHTML == 'O'){
        window.alert('Giocatore 2 vince!');
    }else if(element7.innerText == 'O' && element8.innerText == 'O' && element9.innerHTML == 'O'){
        window.alert('Giocatore 2 vince!');
    }
};

function check(eid){
    if(isFirstPlayer){
        document.getElementById(eid).innerHTML = 'X';
        isFirstPlayer = false;
        document.getElementById(eid).disabled = true;
        winned();
    }else{
        document.getElementById(eid).innerHTML = 'O';
        isFirstPlayer = true;
        winned();
        document.getElementById(eid).disabled = true;
    }
};

function reset(){
    element1.innerHTML = '';
    element2.innerHTML = '';
    element3.innerHTML = '';
    element4.innerHTML = '';
    element5.innerHTML = '';
    element6.innerHTML = '';
    element7.innerHTML = '';
    element8.innerHTML = '';
    element9.innerHTML = '';
}