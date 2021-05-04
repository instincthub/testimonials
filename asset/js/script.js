const testimonials = document.querySelectorAll('.user_meta')


// Use the forEach Loop to add 'open' class to the profile div.
// Use the for loop to remove the 'open' class form the profile div. 

testimonials.forEach(item =>{
    item.addEventListener('click', e =>{
        const element = e.target

        // Remove 'open' class from profile div.
        for (let i = 0; i < testimonials.length; i++) {
            testimonials[i].parentElement.classList.remove('open')   
        }

        // Check button is click
        if (element.classList == 'user_meta'){
            element.parentElement.classList.add('open')
        }
        else if(element.tagName == 'H3' || element.tagName == 'P'){
            element.parentElement.parentElement.parentElement.classList.add('open')
        }
        else if (element.tagName == 'IMG' || element.children[1]){
            element.parentElement.parentElement.classList.add('open')

        }
    })
})