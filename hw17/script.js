const inputs = document.querySelectorAll('input[type=radio]');
const tds = document.querySelectorAll('td');
const h5 = document.querySelector('h5');
const p = document.querySelector('p');
inputs.forEach((item)=>{
item.addEventListener('change', function(){
    h5.innerText = item.value;
    let ind =0;
    for(i=0; i<tds.length; i++){
    const c = tds[i].innerHTML.replace( /;/g, "" );
        const a = c.replace( /&lt/g, "" );
    const b = a.replace( /&gt/g, "" );
    if (b == item.value)
    ind = i;
    }
    p.innerText = tds[ind+1].innerText
});
})