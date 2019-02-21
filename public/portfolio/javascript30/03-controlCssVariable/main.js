let root = document.querySelector(':root');

const inputValue = document.querySelectorAll('.controls input');

function changeValue(){
    const suffix = this.dataset.sizing || ""; 
    root.style.setProperty(`--${this.id}`, this.value+suffix);

}
// inputValue.forEach(input => input.addEventListener('change',changeValue));
inputValue.forEach(input => input.addEventListener('mousemove',changeValue));
