console.log('This is the JS line');

function setClass(className) {
    let el = document.getElementById('mypara').className = className;
}

 document.addEventListener('DOMContentLoaded', function(event) {
     let makeWarning = document.getElementById('make-warning');
     makeWarning.addEventListener('click', function (event) {
        console.log('click listener fired');
        setClass('warning');
    });

     let makeTip = document.getElementById( 'make-tip');
     makeTip.addEventListener( 'click',  function(event) {
         setClass('tip');
     });

     let makeClear =document.getElementById('make-clear');
     makeClear.addEventListener( 'click',  function(event) {
         setClass('');
     });
});