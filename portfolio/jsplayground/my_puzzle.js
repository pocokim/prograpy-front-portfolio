// element 
const inputBtn = document.querySelector('#input_button'); // input button이 출력될 영역 dom 
var output = document.querySelector('#output');
var input = document.querySelector('#input');
var progress = document.querySelector('#progress');
var time = document.querySelector('#time')

// game object
var game = {
    'btns': [],
    'maxPlay': 3,
    'current': 0

};

game.start = Date.now();
game.words = 'apple,google,samsung,toss,SKhynix,Hyundai,vivarepublica'.split(",");

//  game 객체의 변수 생성
game.choose = function () {
    const idx = parseInt(Math.random() * this.words.length);
    this.answer = game.words[idx];     // return words[idx]
    this.letters = this.answer.split('');
    input.innerHTML = this.answer;
};


game.checkGood = function(){
    return this.answer === this.letters.join('');
}
// 결과 출력 
game.updateDisplay = function () {
    if (this.checkGood()) {
        output.innerHTML = '정답! 일치합니다.';
    }
    else { output.innerHTML = '일치 하지않습니다.'; }
}

// 버튼 출력 
game.addButtons = function () {
    // inputBtn.innerHTML = '';
    // this.btns =[]; // 초기화 
    for (let i = 0; i < this.letters.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        inputBtn.appendChild(btn);
        game.btns.push(btn);
    }

}

// 굳이 안만들어도 되는데 이렇게 구현할수도있다. 
game.removeButtons = function(){
    for ( var i = 0; i < this.letters.length; i++){
        inputBtn.removeChild(this.btns[i]);
    }
    this.btns = [];
}

// 버튼 변경 
game.copyBtnText = function (event) {
    for (let i = 0; i < this.letters.length; i++) {
        game.btns[i].innerHTML = this.letters[i]
    }
}

// 랜덤 함수 
game.random = function () {
    const n = parseInt(Math.random() * 10);
    const m = parseInt(Math.random() * 10);
    for (let index = 0; index < n; index++) {
        game.swap();
    }
    for (let index = 0; index < m; index++) {
        game.rshift();
    }
}

game.swap = function () {
    game.letters.reverse();
    game.copyBtnText();
    game.updateDisplay();
};

game.rshift = function(){
    const ch = game.letters.pop();
    game.letters.unshift(ch);

    game.copyBtnText();
    game.updateDisplay();
};

game.lshift = function(){
    const ch = game.letters.shift();
    game.letters.push(ch);
    game.copyBtnText();
    game.updateDisplay();
};

game.progress = function(){
    if (this.checkGood()){
        game.current++;
        game.removeButtons(); 
        game.init();
        var str = '';
        for (let i =0; i< game.current; i++){
            str += 'O';
        }
        progress.innerHTML = str;
    }
    if(game.current === game.maxPlay){
        const now = Date.now();
        
        alert(`thank you for playring! playtime is ${parseInt((now-this.start)/1000)}s`)
        clearInterval(x);
    }
};

// 이벤트 핸들러 
function swap() {
    game.swap();
    game.progress();
}

function lshift() {
    game.lshift();
    game.progress();
}

function rshift() {
    game.rshift();
    game.progress();
}

var updateTime = function(){
    var now = Date.now() - game.start;
    time.innerHTML = now/1000 + " s";
}

var x = setInterval(updateTime,50);

// 초기화및 실행 
game.init = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
    this.random()
}
game.init();