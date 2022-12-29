const contenido=document.querySelector('.app')
const items=[
    'this is an inbox layout',
    'Check one item',
    'Hold down your Shift key',
    'Check a lower item',
    'Everything in between should aslo be set to checked',
    'Try do it with out any libraries',
    'Just regular Javascript',
    'Good Luck',
    'Dont`t forget to tweet your result'
];

function loadItems(){
    items.forEach(item=>{
        const itemContent=document.createElement('div')
        itemContent.classList.add('item')
        
        const inputItem=document.createElement('input')
        inputItem.setAttribute('type','checkbox')

        const pItem=document.createElement('p')
        pItem.textContent=`${item}`

        itemContent.append(inputItem,pItem)
        contenido.appendChild(itemContent)
    })
}
loadItems();

const checkboxes=document.querySelectorAll('.item input[type="checkbox"]')

let lastChecked;
contenido.addEventListener('click',function(e){
    let inBetween=false;
    if(e.target.checked && e.shiftKey){
        checkboxes.forEach(checkbox=>{
            if(checkbox===e.target || checkbox===lastChecked){
                inBetween=!inBetween;
            }
            if(inBetween){
                checkbox.checked=true
            }
        })
    }
    if(e.target.nodeName==='INPUT'){
        if(e.target.checked===true){
            lastChecked=e.target;
        }
    }
})
