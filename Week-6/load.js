$(function(){
    var loader = parseInt(localStorage.getItem('loaded')),
    load_num = loader?loader+1:1;
    localStorage.setItem('loaded', load_num);

    $('body').append('<p>This page was loaded by you '+load_num+' times !');
})

