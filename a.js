function f(){
    let a = document.getElementById("q").value;
    let b = 1;
    if(a == '0'){
        document.getElementById("a").value = 1;
    }
    else{
        for (let i = 1;i<=a;i++ ){
            b = b * i;
        }
        document.getElementById("a").value = b;
    }
}