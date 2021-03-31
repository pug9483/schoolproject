const  tbody = document.querySelector("#t-body");
const showtable = document.querySelector("#show-table");
//FCFS 실행되는지 보기 위해 만든 배열
var array = Array.from(Array(4), () => new Array(3));

//arrival time과 burst time을 저장하는 2차원 배열 만들기 
//-> array에 저장(addRow을 할때마다 값을 저장해준다.)

/*to do 
1. 실행을 눌렀을 때 배열이 만들어지며 계산을 실행한다.
2. 또한 설정값을 다르게 했을 때 다른 함수가 실행되도록 한다.*/

function addRow(){
    if(tbody.rows.length < 4){
        let newRow = tbody.insertRow(tbody.rows.length );
        let size = tbody.rows.length;

        const cell0 = newRow.insertCell(0);
        cell0.innerText = "P" + size;

        //arrival time
        const arrival = newRow.insertCell(1);
        let arrivalText = document.createElement("input");
        arrivalText.setAttribute("value", "");
        arrival.appendChild(arrivalText);

        arrivalText.type="text";
        arrivalText.className = "arrivalTime";

        //burst time
        const burst = newRow.insertCell(2);
        let burstText = document.createElement("input");
        burstText.setAttribute("value", "");
        burst.appendChild(burstText);

        burstText.type="text";
        burstText.className = "burstTime";
    }
}

function deleteRow(){
    // const table = document.querySelector("table");
    if(tbody.rows.length >= 1){
        tbody.deleteRow(-1);
        showtable.deleteRow(tbody.rows.length);
    }
}
function deleteShowRow(){
    for(let i=0; i <showtable.rows.length; i++){
        showtable.deleteRow(i);
    }
}

function run(){
    deleteShowRow();
    //addRow에서 넣은 값 받아와서 배열에 저장
    /*for(var table = tbody.firstChild; table != null; table = table.nextSibling){
        let tmpArray = [];
        for(i = table.firstChild; i != null; i = table.nextSibling){
            tmpArray.push(table.childNodes);
        }
        console.log(tmpArray);
    }*/
    const ar = document.querySelectorAll(".arrivalTime");
    const br = document.querySelectorAll(".burstTime");

    //실행 progress 보여주기

    for(let i=0; i <tbody.rows.length; i++){
        array[i][0] = ar[i].value;
        array[i][1] = br[i].value;
    }

    // 표 만들기 : 이름, Arrival Time, Buster Time, Wating Time, Turnaound Time, Nomarlized TT
    for(let i=0; i <tbody.rows.length; i++){
        var getRow = showtable.insertRow(showtable.rows.length);
        const row0 = getRow.insertCell(0);
        row0.innerText = 'P'+ (i+1);
        const row1 = getRow.insertCell(1);
        row1.innerText = array[i][0];
        const row2 = getRow.insertCell(2);
        row2.innerText = array[i][1];
    }
}