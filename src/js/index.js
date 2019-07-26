/* import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faAngleLeft } from "@fortawesome/free-solid-svg-icons/";

import 'bootstrap/js/dist/collapse.js';
import 'bootstrap/js/dist/carousel.js';

library.add(faCheck);
library.add(faAngleLeft);
dom.watch(); */
import 'materialize-css/dist/js/materialize.min.js';
// import 'materialize-css/js/sidenav.js';
import '../css/estilo.scss';

import '../imgs/coches/img2.png';
import '../imgs/img1.png';

// let instance;


/* document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
    
    
}); */

let {log}=console;
log(M);

let options={
    edge:"left",
    inDuration:600,
    outDuration:600
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

// M.AutoInit();

var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem, {
    accordion:false,
    inDuration:300,
    outDuration:300,
    onOpenEnd:function(e){
        log(e)
    }
});
let img=document.querySelector(".img1");
let _image=M.Materialbox.init(img,{
    inDuration: 300,
    outDuration: 300
})
let img2=document.querySelector(".img2");
let _image2=M.Materialbox.init(img2,{
    inDuration: 300,
    outDuration: 300
})
let img3=document.querySelector(".img3");
let _image3=M.Materialbox.init(img3,{
    inDuration: 300,
    outDuration: 300
})

let img4=document.querySelector(".img4");
let _image4=M.Materialbox.init(img4,{
    inDuration: 300,
    outDuration: 300
})

let modal=document.querySelector(".modal");
let _modal=M.Modal.init(modal,{
    inDuration: 300,
    outDuration: 300
})
// instance.destroy();

