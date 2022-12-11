const inputs = document.querySelectorAll('.dashboard input')

function changeInputSelected(){
    const unit=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+unit)
}

inputs.forEach(input=>input.addEventListener('change',changeInputSelected))

