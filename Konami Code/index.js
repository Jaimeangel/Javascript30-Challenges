const konami=[];
const secret_code='angeles';

window.addEventListener('keyup',(e)=>{
    konami.push(e.key);
    konami.splice(-secret_code.length-1,konami.length-secret_code.length);
    
    if(konami.join('').includes(secret_code)){
        console.log('ding ding')
    }
});