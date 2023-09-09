
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const num="1234567890"
const symbol="~!@#$%^&*()_+/";

const getRandomdata=(data)=>{
    return data[Math.floor(Math.random()*data.length)]
}

const pswd=document.getElementById("pass-box")
const total=document.getElementById("total-char")
const upperInput=document.getElementById("upper-case")
const lowerInput=document.getElementById("lower-case")
const numInput=document.getElementById("number")
const symbolInput=document.getElementById("symbol")

const generatePswd=(pswd="")=>{

    if(upperInput.checked){
        pswd+=getRandomdata(uppercase)
    }
    if(lowerInput.checked){
        pswd+=getRandomdata(lowercase)
    }
    if(numInput.checked){
        pswd+=getRandomdata(num)
    }
    if(symbolInput.checked){
        pswd+=getRandomdata(symbol)
    }
    if(pswd.length<total.value){
        return generatePswd(pswd)
    }
    const ans=truncateString(pswd,total.value);

    document.getElementById("pass-box").innerText=ans; 
}


document.getElementById("btn").addEventListener("click",function(){
        generatePswd();
    }
)

function truncateString(str,num){
    if(str.length!=num){
        let substr=str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}
generatePswd();