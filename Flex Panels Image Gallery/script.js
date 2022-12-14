const content_panels=[["Hey","Let's","Dance"],["Give","Take","Receive"],["Experience","It","Today"],["Give","All","You can"],["Life","In","Motion"]]
const img_panels=["https://i.pinimg.com/originals/a1/51/ac/a151ac96d60af96de0861d07e922a254.jpg","https://i.pinimg.com/originals/77/d7/0d/77d70ddc0be06cae6afdea187426b515.jpg","https://i.pinimg.com/originals/4b/e6/98/4be698f7d2d31b6d2d21fb5db419fae8.jpg","https://i.pinimg.com/originals/83/ba/0e/83ba0e1a6ba6bb34bc30c000ff6f7314.jpg","https://i.pinimg.com/originals/90/bb/ca/90bbcae14b486d634716ff435fc32310.jpg","https://i.pinimg.com/originals/7d/5d/2c/7d5d2cf34e23b1a1bd99f2c014b2ceb9.jpg","https://i.pinimg.com/originals/8c/cb/4c/8ccb4c51ceb83bea1bbf115bd4227d6e.jpg","https://i.pinimg.com/originals/14/2a/06/142a065d6f4d2bf3b9426ad742c393b1.jpg","https://i.pinimg.com/originals/b3/66/05/b36605cd633f91c710266e371fd63add.jpg","https://i.pinimg.com/originals/53/43/2c/53432c05dffdd40fe46f83ce0fe683ea.jpg","https://i.pinimg.com/originals/ad/19/05/ad19052c955b4e1fd579c021863dd7ad.png","https://i.pinimg.com/564x/56/34/80/5634805106fa4b1c53e977db232045e8.jpg","https://i.pinimg.com/originals/d5/3b/ae/d53bae4e24e6bea6a5876a65e1695aa7.jpg","https://i.pinimg.com/originals/c1/ae/f6/c1aef61057eabaf320ccf52d7fa1d3e0.jpg","https://i.pinimg.com/originals/c8/94/3f/c8943ff8716c8459a448fe28a44a5007.jpg","https://i.pinimg.com/originals/aa/6c/67/aa6c67be7ea6311b0ed5c260c41d6ddb.jpg","https://i.pinimg.com/originals/64/40/9e/64409e794322ffc1576c303358960e64.jpg","https://i.pinimg.com/originals/04/3f/8d/043f8d2a83c35cc02ebed5d99839fe4b.jpg"]

const createsPanels=()=>{
    list_panels=[]
    content_panels.map((panel,index)=>{
        const panel_div=document.createElement('div')
        panel_div.classList.add('panel')
        panel_div.classList.add(`panel${index+1}`)

        const index_image=Math.floor(Math.random()* img_panels.length) 
        panel_div.style.backgroundImage=`url(${img_panels[index_image]})`

        panel.forEach(item=>{
            const p_item=document.createElement('p')
            p_item.textContent=item
            panel_div.appendChild(p_item)
        })

        list_panels.push(panel_div)
    })
    document.querySelector('.panels').append(...list_panels)

}
createsPanels()

const paneles = document.querySelectorAll(".panel")

function addEfect(){
    this.classList.toggle('open')
    this.classList.toggle('open-active')
}

paneles.forEach(panel=>panel.addEventListener('click',addEfect))