const mySuper = document.querySelector('.super')
const btn = document.querySelector ('.btn')


let mySuperInJs = 10
btn.addEventListener('click', function(){
    const myproblems = setInterval(()=> {
        if (mySuperInJs > 0) {
            mySuper.textContent = mySuperInJs
            mySuperInJs--
        }
        else if (mySuperInJs == 0){
            clearInterval(myproblems)

        }
        console.log(mySuperInJs)
    },1000);
})