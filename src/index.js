import _ from 'lodash';
import printMe from './print.js';
// import './style.css';
// import  Icon from './refresh.png';
// import Data from './data.xml'

function component() {
    var element = document.createElement('div');
    var btn =document.createElement('button');
    var a=document.createElement('a');

    //lodash ,now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack4.6'], '');
    element.classList.add('hello')

    btn.innerHTML='Click me and check the console';
    btn.onclick=printMe;
    a.href='http://www.baidu.com';
    a.innerHTML='baidu';

    element.appendChild(btn);
    element.appendChild(a);
    // var myIcon=new Image();
    // myIcon.src=Icon;
    //
    // element.appendChild(myIcon);
    //
    // console.log(Data);

    return element
}

document.body.appendChild(component());