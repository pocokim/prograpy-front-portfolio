const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');

let root = document.querySelector(':root');
var style = window.getComputedStyle(root);


spacing.addEventListener('change',function(e){
    style.setProperty('--spacing', spacing.value);

    // console.log(spacing.value);
    
});

// blur.addEventListener('change',);
// base.addEventListener('change',)