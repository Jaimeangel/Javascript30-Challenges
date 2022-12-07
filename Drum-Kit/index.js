const key_values={'a':65,'b':66,'c':67,'d':68,'e':69,'f':70,'g':71,
                 'h':72,'i':73,'j':74,'k':75,'l':76,'m':77,'n':78,
                 'o':79,'p':80,'q':81,'r':82,'s':83,'t':84,'u':85,
                 'v':86,'w':87,'x':88,'y':89,'z':90 
}

const key_format=[['A','CLAP'],['S','HIHAT'],
                  ['D','KICK'],['F','OPENHAT'],
                  ['G','BOOM'],['H','RIDE'],
                  ['J','SNARE'],['K','TOM'],
                  ['L','TINK']]

const insert_keyButton_audioFiles=()=>{
    key_format.forEach(key=>{
        VALUE_KEY=key[0]
        VALUE_SOUND=key[1]
        list_nodes=[]
        list_audio=[]
        
        if(key_values[VALUE_KEY.toLowerCase()] !== undefined){
            //KEY BUTTON

            const divCont=document.createElement('div')
            divCont.classList.add('key')
            divCont.setAttribute('data-key',key_values[VALUE_KEY.toLowerCase()])

            const keyKbd=document.createElement('kbd')
            keyKbd.innerText=`${VALUE_KEY}`

            const spanKey=document.createElement('span')
            spanKey.innerText=`${VALUE_SOUND}`

            divCont.append(keyKbd,spanKey)
            list_nodes.push(divCont)

            //AUDIO FILES
            audio_tag=document.createElement('audio')
            audio_tag.setAttribute('src',`Sounds/01 - JavaScript Drum Kit_sounds_${VALUE_SOUND.toLowerCase()}.wav`)
            audio_tag.setAttribute('data-key',key_values[VALUE_KEY.toLowerCase()])
    
            list_audio.push(audio_tag)

        }
        document.querySelector('.keys').appendChild(...list_nodes)
        document.querySelector('body').append(...list_audio)
    })
}

insert_keyButton_audioFiles()

//Delete efect transition
const keys=document.querySelectorAll('.key')
keys.forEach(key=>key.addEventListener('transitionend',function removeEfect(e){
    if(e.propertyName==='transform') return
    key.classList.remove('playing')
}))

window.addEventListener('keydown',(event)=>{
    const audio_sound= document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key_efect= document.querySelector(`.key[data-key="${event.keyCode}"]`)

    if(!audio_sound) return;
    audio_sound.currentTime=0;
    audio_sound.play();

    if(!key_efect) return;
    key_efect.classList.add('playing')
})

