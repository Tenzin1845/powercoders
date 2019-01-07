document.addEventListener('DOMContentLoaded', function(event){
    document.querySelector('button').addEventListener('click',function(event) {
        console.log('The button was clicked');
        let el=document.getElementById('item');
        console.log(el.value);

    });
});
