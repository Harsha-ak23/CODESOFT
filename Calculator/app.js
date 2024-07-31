function add(){
    var act=0, b=0;
    act= f.calc.value;
    b=act.charAt(act.length-1)
    if(b=='+' || b=='-' || b=='*' || b=='/'){
       f.calc.value=act.substring(0,act.length-1);
       f.calc.value+='+'; 
    }else{
        f.calc.value+='+';
         
    }

}

function sub(){
    var act=0, b=0;
    act= f.calc.value;
    b=act.charAt(act.length-1)
    if(b=='+' || b=='-' || b=='*' || b=='/'){
       f.calc.value=act.substring(0,act.length-1);
       f.calc.value+='-'; 
    }else{
        f.calc.value+='-';
         
    }

}

function di(){
    var act=0, b=0;
    act= f.calc.value;
    b=act.charAt(act.length-1)
    if(b=='+' || b=='-' || b=='*' || b=='/'){
       f.calc.value=act.substring(0,act.length-1);
       f.calc.value+='/'; 
    }else{
        f.calc.value+='/';
         
    }

}

function mul(){
    var act=0, b=0;
    act= f.calc.value;
    b=act.charAt(act.length-1)
    if(b=='+' || b=='-' || b=='*' || b=='/'){
       f.calc.value=act.substring(0,act.length-1);
       f.calc.value+='*'; 
    }else{
        f.calc.value+='*';
         
    }

}