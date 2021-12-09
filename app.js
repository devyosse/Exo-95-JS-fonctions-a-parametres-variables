//1
function helloParamsVariables(Name){
    document.body.appendChild(document.createElement('div')).innerHTML = "Bonjour" + Name;
}

helloParamsVariables(" Billy, Jo, Bob");
helloParamsVariables(' DWWM');

//2
function Calc(One, Two) {
    document.body.appendChild(document.createElement('div')).innerHTML = One * Two;
}

Calc("5", "5");
Calc("10", "10");
Calc("20", "20");

//3
function Calcul(un, deux){
    document.body.appendChild(document.createElement('div')).innerHTML = (un + deux) * 11.76;
}

Calcul("1","1");