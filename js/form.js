const TOKEN = '7655457547:AAH87pf8IN9YnTNto9hAHctqly-KD0dqsEg'
const CTHAT_ID = '-4857920508'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById('contactForm').addEventListener('submit', function (e) {

  e.preventDefault()

  let message = 

  'Звявка с сайта\n\n' + 

  "Имя: " + this.name.value 

  + '\n' + 

  'Номер телефона: ' + this.phone.value 

  + '\n' + 

  'E-mail: ' + this.email.value 

  + '\n\n' + 

  'Услуги:\n' + 
  
  "Окно 1: " + count1 + 'шт ' + total1 + '€' 
  + '\n' +
  "Окно 2: " + count2 + 'шт ' + total2 + '€' 
  + '\n' +
  "Окно 3: " + count3 + 'шт ' + total3 + '€' 
  + '\n' +
  "Окно 4: " + count4 + 'шт ' + total4 + '€' 
  + '\n' +
  "Окно 5: " + count5 + 'шт ' + total5 + '€' 
  + '\n' +
  "Окно 6: " + count6 + 'шт ' + total6 + '€' 
  + '\n' +
  "Окно 7: " + count7 + 'шт ' + total7 + '€' 
  + '\n' +
  "Окно 8: " + count8 + 'шт ' + total8 + '€' 
  + '\n' +
  "Окно 9: " + count9 + 'шт ' + total9 + '€' 
  + '\n' +
  "Окно 10: " + count10 + 'шт ' + total10 + '€' 
  + '\n' +
  "Окно 11: " + count11 + 'шт ' + total11 + '€' 
  + '\n' +
  "Окно 12: " + count12 + 'шт ' + total12 + '€' 
  + '\n' +
  "Окно 13: " + count13 + 'шт ' + total13 + '€' 
  + '\n' +
  "Окно 14: " + count14 + 'шт ' + total14 + '€' 
  + '\n' +
  "Окно 15: " + count15 + 'шт ' + total15 + '€' 
  + '\n' +
  "Окно 16: " + count16 + 'шт ' + total16 + '€' 
  + '\n' +
  "Окно 17: " + count17 + 'шт ' + total17 + '€' 
  + '\n' +
  "Окно 18: " + count18 + 'шт ' + total18 + '€' 

  + '\n\n' + 

  'Итого: ' + totalAll + '€'

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('contactForm').reset()
  })

})