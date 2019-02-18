
function printMY(y, m) {
    let year = document.querySelector('.year');
    let month = document.querySelector('.month');

    year.innerHTML = y;
    month.innerHTML = m;



}

// 해당 달의 1일의 날짜와 , 길이를 받아 화면에 출력 
function printDD(firstDay, monthLen) {
    var td = document.querySelectorAll('td');
    //초기화 
    for (let i = 0; i < td.length; i++) {
        td[i].innerHTML = '&nbsp';
    }

    //날자에 맞는 요일 출력 
    for (let i = 1; i <= monthLen; i++) {
        td[firstDay + i - 1].innerHTML = i
    }
}


//date 객체에 setDate로 기존의 d객체의 날자를 변경시킬 수 있는 방법을 알게되었다.
//그렇다면 Cur 객체를 생성하지 않고, 이벤트리스너에 nextM , mextMLen을 생성할 필요도 없었을것이다.
// 코드를 싸그리 다 바꾸어야해서 굳이... 그럴필요까지는 없을것같다.

// Cur객체를 만들고 cur객체를 변경하지 않고, 
// 하지만 처음에 코드를 만들었을때 생각했던 d 객체를 변형하는법으로 해결 할 수 있었다.


// 생성자 함수로 객체 생성 
function Cur(Y,M){
    let d = new Date(Y,M-1,1);
    this.day = d.getDay(); // 요일 
    this.mLen = 32 - new Date(Y, M - 1, 32).getDate(); // 해당월의 길이 
    this.year = d.getFullYear();  // 현재 년도
    this.month = d.getMonth() + 1; // 현재월 1~ 12 
}

Cur.prototype.printer = function () {
    printMY(this.year, this.month);
    printDD(this.day, this.mLen);
}
Cur.prototype.yearCheck = function () {
    if (this.month === 0) {
        this.year -= 1
        this.month = 12
    }
    if (this.month === 13) {
        this.year += 1
        this.month = 1
    }
}

// 실행 
var current = new Cur(2019,2);
current.printer();

// 이벤트리스너 
var next = document.querySelector('#next');

next.addEventListener('click', function (event) {
    current.month = current.month + 1;
    current.yearCheck();

    // 변경된 달의 1일의 요일과 달의 길이 계산 
    let nd = new Date(current.year, current.month - 1, 1);
    let nextDay = nd.getDay();
    let nextMlen = 32 - new Date(current.year, current.month - 1, 32).getDate();

    current.day = nextDay;
    current.mLen = nextMlen;

    current.printer();



});

var prev = document.querySelector('#prev');

prev.addEventListener('click', function (event) {
    current.month = current.month - 1
    current.yearCheck();


    // 변경된 달의 1일의 요일과 달의 길이 계산 
    let pd = new Date(current.year, current.month - 1, 1);
    let nextDay = pd.getDay();
    let nextMlen = 32 - new Date(current.year, current.month - 1, 32).getDate();

    current.day = nextDay;
    current.mLen = nextMlen;

    current.printer();




});


