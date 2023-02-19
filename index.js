// Start Mega Menu Section
var button= document.getElementById('otherLinks')
const megaMenu = document.querySelector('.mega-menu');

button.addEventListener('click', function(event){
    // event.stopPropagation();
    megaMenu.classList.toggle('show')
})

document.addEventListener('click', function(event){
    if (!event.target.closest('#otherLinks')){
        megaMenu.classList.remove('show')
    }
})

// End Mega Menu Section



// Start Discount / textarea Section
var forbidenWords = /(fucking|fuck|shit| bitch| slut)/gi

var textarea = document.querySelector('#discount .form textarea'),
    maxNumber = textarea.getAttribute('maxlength')

textarea.addEventListener('input', function(){
    this.value =this.value.replace(forbidenWords, (match) =>{
        return match[0] + '***'
    })
    let span = document.getElementById('textareaCounter')
    span.innerHTML = maxNumber - this.value.length
    
})
// End Discount / textarea Section