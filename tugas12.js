var buah = ['pisang','jeruk','apel','mangga'];
function panggilpop(){
    console.log(buah);
    buah.pop();
    return buah;
}
function panggilshift(){
    buah.shift();
    return buah
}
console.log(panggilpop());
console.log(panggilshift())