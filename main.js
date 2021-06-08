var btn = [...document.querySelectorAll('.white_btns')];
var btnNotes = [...document.querySelectorAll('.main_btns > audio')];
var sharpNotes = [...document.querySelectorAll('.sharp_btns_notes > audio')];
var sharpBtn = [...document.querySelectorAll('.sharp_btns > button')];

function music(elem) {
    elem.pause();
    elem.currentTime = 0;
    elem.play()
}

function playin(el) {
    el.style.color = 'red';
    setTimeout(() => {el.style.color = 'black'}, 200);
}

function playinSharp(el) {
    el.style.color = 'red';
    setTimeout(() => {el.style.color = 'white'}, 200);
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        music(btnNotes[i]);
        playin(btn[i])
        
    }) 
}

for (let i = 0; i < sharpBtn.length; i++) {
    sharpBtn[i].addEventListener('click', function() {
        music(sharpNotes[i])
        playinSharp(sharpBtn[i])
    }) 
}

document.onkeydown = function(e){
    if (e.keyCode === 65)  {music(btnNotes[0]); playin(btn[0])}
    else if (e.keyCode === 83)  {music(btnNotes[1]); playin(btn[1])}
    else if (e.keyCode === 68)  {music(btnNotes[2]); playin(btn[2])}
    else if (e.keyCode === 70)  {music(btnNotes[3]); playin(btn[3])}
    else if (e.keyCode === 71)  {music(btnNotes[4]); playin(btn[4])}
    else if (e.keyCode === 72)  {music(btnNotes[5]); playin(btn[5])}
    else if (e.keyCode === 74)  {music(btnNotes[6]); playin(btn[6])}
    else if (e.keyCode === 87)  {music(sharpNotes[0]); playinSharp(sharpBtn[0])}
    else if (e.keyCode === 69)  {music(sharpNotes[1]); playinSharp(sharpBtn[1])}
    else if (e.keyCode === 84)  {music(sharpNotes[2]); playinSharp(sharpBtn[2])}
    else if (e.keyCode === 89)  {music(sharpNotes[3]); playinSharp(sharpBtn[3])}
    else if (e.keyCode === 85)  {music(sharpNotes[4]); playinSharp(sharpBtn[4])}
}


