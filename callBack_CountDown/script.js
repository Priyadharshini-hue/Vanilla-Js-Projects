var i=10;
function count(){
    document.getElementById('number').innerHTML=i;
    i--;
}
function foo(cb){
    count();
    stop=setTimeout(foo,1000);
    setTimeout(cb,10000)
}
var call=foo(function(res){
    var s="Happy New Year!"
    document.getElementById('number').innerHTML=s;
    clearTimeout(stop);
});
