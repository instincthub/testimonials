const testimonials = document.querySelectorAll('.user_meta')


// Used the forEach loop add 'open' class to the profile div.
// Used the for loop to remove 'open' class from the profile div. 

testimonials.forEach(item =>{
    item.addEventListener('click', e =>{
        const element = e.target

        for (let i = 0; i < testimonials.length; i++){
            testimonials[i].parentElement.classList.remove('open')
        }

        if (element.classList == 'user_meta'){
            element.parentElement.classList.add('open')
        }
        else if (element.tagName == 'H3' || element.tagName == 'P') {
            element.parentElement.parentElement.parentElement.classList.add('open')
        }
        else if (element.tagName == 'IMG' || element.children[1]){
            element.parentElement.parentElement.classList.add('open')
        }
    })
})
