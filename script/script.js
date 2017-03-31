var byn=Number(prompt('Всего у меня есть,руб'));
var curr = prompt('Я хочу купить (введите код валюты)');
var xhr=new XMLHttpRequest();
xhr.open('GET','http://www.nbrb.by/API/ExRates/Rates/' + curr + '?ParamMode=2','true');
xhr.responseType='json';
xhr.addEventListener('loadend',function listener () {
    var oldcourse=document.createElement('input');
    info1.appendChild(oldcourse);
    oldcourse.value=Number(byn).toFixed(2);
    var code=document.createElement('input');
    info2.appendChild(code);
    code.value=curr;
    xhr.removeEventListener('loadend',listener);
    var Rate=xhr.response;
    var course = document.createElement('input');
    info3.appendChild(course);
    var xxxx=Number(Rate.Cur_OfficialRate).toFixed(4);
    course.value=xxxx;
    var newcourse=document.createElement('input');
    info4.appendChild(newcourse);
    newcourse.value=Number(byn/xxxx).toFixed(2);
});
xhr.send ();

