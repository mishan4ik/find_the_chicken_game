let block = document.querySelectorAll(".block");
let main = document.querySelector(".main");
let chicken = document.getElementById("img");
let answer = document.getElementById("answer")
let start = document.getElementById("start")
let textInfo = document.getElementById("chickenText")



    for(let i = 0; i < block.length; i++){

        block[i].onclick = () => {
    
            let random = Math.floor(Math.random() * 5);
           if(random == 2){
    
            
                chicken.style.display = "block"
                main.style.display = "none"
                answer.innerHTML = "Ви знайшли курку"
                start.style.display = "block"
                textInfo.style.display = "none"
    
           }
           else {

            answer.innerHTML = "Курка ховається від Вас у боксах. Шукайте далі"

           }
    
        }
        


}

start.onclick = () => {


    location.reload()

}