var title = document.querySelector('#title');
var btn = document.querySelector('#btn');
var layer = document.querySelector('#layer');


var list = {}
list.preE = null;
list.changeColor = function(e){
    if(this.preE){
        this.preE.removeAttribute('class');
    }

    e.target.setAttribute('class','active');
    this.preE = e.target;
}


btn.addEventListener('click',function(){
    var line = document.createElement('li');

    var input = prompt('생성할 목록을 입력하세요','운동하기');
    line.innerHTML = input;

    layer.appendChild(line);    
});

layer.addEventListener('click',function(e){

    list.changeColor(e);
    

    title.innerHTML= e.target.innerHTML;

});
