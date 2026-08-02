console.clear()


let btn = document.querySelector(".button")
btn.addEventListener("click", function (){
    let weight = + document.getElementById("weight").value
    let height = + document.getElementById("height").value
    let text = document.querySelector(".result")
    let rec = document.querySelector(".recomandation")
    let img = document.querySelector(".img")
    let age = + document.getElementById("age").value
    
    let result = (weight / ((height / 100) ** 2)).toFixed(1)
    if(result>25 && (age >= 5 && age <= 10)){
        rec.textContent = "Обов'язково розкажи про цей результат батькам або близьким дорослим! Попроси їх разом із тобою звернутися до педіатра чи сімейного лікаря. Потрібно пройти комплексне обстеження (перевірити гормональний фон, шлунково-кишковий тракт), щоб дізнатися точну причину такої ваги. Жодним чином не намагайся самостійно «відгодовуватися» чи сидіти на дієтах без порад лікаря."
        img.style.display = "block"
        img.src = "https://minio.nplus1.ru/app-images/177142/6d5f8d8ad1575ecc6482b822aee43066.gif"
        
    }
         else if ((result>20 && result <= 25 && (age >= 5 && age <= 10))) {
             rec.textContent = "Ви моледець немає ожиріння.Йдіть в тому дусі"
            img.style.display = "block"
            img.src = "https://i.makeagif.com/media/11-11-2017/ZQT7_2.gif"
        }
        
    else{
        rec.t80extContent = "Ви дитина.Але спочатку обсудіть все з батьками.Коригуйте раціон за рахунок високої енергетичної густини, а не порцій: додавайте в кожну страву корисні жири (олії, авокадо, горіхові пасти) та білок (яйця, риба, м'ясо), уникаючи порожніх цукрів та фаст-фуду, які шкодять підшлунковій."
        img.style.display = "block"
        img.src = "https://i.imgur.com/ygy5ie3.gif"
    }
    text.textContent = result


    let result_1 = (weight / ((height / 100) ** 2)).toFixed(1)
    if(result_1>24 && (age >= 18 && age <= 65)){
        rec.textContent = "Ви дорослий але незабувайте ще про стою родину подбайте про них теж.Запровадьте дрібне харчування 5–6 разів на день з інтервалом 2–3 години, щоб дитина не відчувала переповнення шлунка і могла засвоїти більше калорій, ніж при 3 стандартних прийомах."
        img.style.display = "block"
        img.src = "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUybzlsajZpNzA2dGZmcTBhaThsbnd2MWZma29kbmFpOHZoNnN4aGEyaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fZ7ncxVECeVuSrRnJb/giphy.gif"
        
    }
         else if ((result_1>18 && result_1 <= 24 && (age >= 18 && age <= 65))) {
             rec.textContent = "Ви моледець немає ожиріння.Йдіть в тому дусі"
            img.style.display = "block"
            img.src = "https://i.makeagif.com/media/11-11-2017/ZQT7_2.gif"
        }

        else if ((result_1>25 && result_1 <= 29 && (age >= 18 && age <= 65))) {
             rec.textContent = "Додайте помірні силові навантаження або рухливі ігри (залежно від віку), які стимулюють апетит та сприяють набору саме м'язової, а не жирової маси, погоджуючи вид спорту з лікарем."
            img.style.display = "block"
            img.src = "https://i.pinimg.com/originals/47/32/3f/47323f3814100312de9fd64b48d0cef5.gif"
        }
             
    else if ((result_1>30 && (age >= 18 && age <= 65))){
        rec.textContent = "Терміново зверніться до педіатра чи сімейного лікаря для комплексного обстеження (гормональний фон, шлунково-кишковий тракт, неврологія), щоб виключити патології, і жодним чином не займайтесь самостійним «відгодовуванням» без діагнозу."
        img.style.display = "block"
        img.src = "https://i.pinimg.com/originals/dc/d7/9f/dcd79fc7784d5e2d2686058c6073cee3.gif"
    }
    text.textContent = result_1




    
    let result_2 = (weight / ((height / 100) ** 2)).toFixed(1)
    if((result_2>23 && result_2 <= 28 && (age >= 65 && age <= 80))){
        rec.textContent = "З віком змінюється співвідношення м'язів і жиру, тому норма зміщується вгору"
        img.style.display = "block"
        img.src = "https://wykop.pl/cdn/c3201142/comment_EzFVL3RX1mHiEDA6YDGCFukTbrvTdW1Z,w400.gif"
    } 
    else{
        rec.t80extContent = "Показник нижче 22–23 часто вказує на втрату м'язової маси"
        img.style.display = "block"
        img.src = "https://i.pinimg.com/originals/21/79/83/217983ea8d2e4ec195bb9f94a8f9feda.gif"
    }
    text.textContent = result_2
})


