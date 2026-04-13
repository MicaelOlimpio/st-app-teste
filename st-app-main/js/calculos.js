
function vazao(){
let v=document.getElementById('v').value
let t=document.getElementById('t').value
let r=(v*3600)/(t*1000)
document.getElementById('res').innerText="Vazão medida: "+r.toFixed(2)+" L/h"
}

function conversaoMinSeg(){
let m=document.getElementById('min').value
document.getElementById('res').innerText=(m*60)+" segundos"
}

function conversaoSegMin(){
let s=document.getElementById('seg').value
document.getElementById('res').innerText=(s/60).toFixed(2)+" minutos"
}

function timerCalc(){
let vm=document.getElementById('vm').value
let ts=document.getElementById('ts').value
let vt=document.getElementById('vt').value
let d=document.getElementById('d').value
let a=document.getElementById('a').value

let vazao=(vm*3600)/(ts*1000)
let volAc=vt/(d*a)
let tempo=(volAc/vazao)*60

document.getElementById('res').innerText=
"Vazão: "+vazao.toFixed(2)+" L/h | Tempo por acionamento: "+tempo.toFixed(2)+" min"
}

function multiflow(){
let ml=document.getElementById('ml').value
let seg=document.getElementById('seg').value
let dren=document.getElementById('dr').value
let ac=document.getElementById('ac').value

let vazaoLh=(ml/1000)*3600/seg
let vazaoM3=vazaoLh/1000
let tempoTotal=(dren/vazaoM3)*60
let tempoAc=tempoTotal/ac

document.getElementById('res').innerText=
"Vazão "+vazaoLh.toFixed(2)+" L/h | "+ac+" acionamentos de "+tempoAc.toFixed(2)+" min"
}

function consumo(){
let p=document.getElementById('p').value
let vm=document.getElementById('vm').value
let ts=document.getElementById('ts').value
let vt=document.getElementById('vt').value
let th=document.getElementById('th').value
let max=document.getElementById('fab').value

let vazaoTeste=(vm*3600)/ts/1000
let vazaoMax=vazaoTeste*(max/p)
let vazaoNec=vt/th
let reg=(vazaoNec/vazaoMax)*max

document.getElementById('res').innerText=
"Vazão máx: "+vazaoMax.toFixed(2)+" L/h | Regulagem: "+reg.toFixed(1)+"%"
}
