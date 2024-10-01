const signinbtnlink = document.querySelector('.signinbtnlink')
const signupbtnlink = document.querySelector('.signupbtnlink')
const wrapper = document.querySelector('.wrapper')

signupbtnlink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
    
})

signinbtnlink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');

})