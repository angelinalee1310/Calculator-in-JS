let textArea = document.getElementById('inputVal');
let historyCalc = document.getElementById('historyCalc')
let t = 0
let items = []

function pushArray(i) {items.push(i);}
function popArray() {items.shift();}
function call(){
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });
}
call();
let result
let flag = true
textArea.innerHTML = '0'
function onButtonClick(e) {
    if (e.target.innerHTML === 'c'){
        textArea.innerHTML = '0';
    } else if (e.target.innerHTML === '=' || e.target.innerHTML === '!' || e.target.innerHTML === '√'){
        if(textArea.innerHTML !== '0'){
            if(e.target.innerHTML === '=') result = textArea.innerHTML + '=' + +eval(textArea.innerHTML).toFixed(5)
            else if(e.target.innerHTML === '!') result = textArea.innerHTML + '!=' + rFact(textArea.innerHTML)
            else if(e.target.innerHTML === '√') result = '√' + textArea.innerHTML + '=' + Math.sqrt(parseInt(textArea.innerHTML))
        }
        else{
            if(e.target.innerHTML === '!'){
                result = textArea.innerHTML + '! = 1'
            }
        }
        pushArray(result)
        if(t>=3){
            popArray()
        }
        historyCalc.innerHTML = ''
        for(let item of items){
            historyCalc.innerHTML += item + '<br>';
        }
        t++
        textArea.innerHTML = '0'
        console.log(result)
    }
}
function rFact(num)
{
    if (num === 0)
        return 1;
    else
        return num * rFact(num - 1);
}
