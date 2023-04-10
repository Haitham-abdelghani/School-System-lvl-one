let openM=document.getElementById('openia');
let openButton=document.getElementById('open-icon');
let closeButton=document.getElementById('close-icon')

// console.log(activeopen);
// console.log(openButton)
openButton.addEventListener('click',function(){
    openM.classList.add('openMenu')
})
closeButton.addEventListener('click',function(){
    openM.classList.remove('openMenu')
})