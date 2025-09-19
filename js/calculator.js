// Значение всех товаров по умолчанию
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
let count7 = 0
let count8 = 0
let count9 = 0
let count10 = 0
let count11 = 0
let count12 = 0
let count13 = 0
let count14 = 0
let count15 = 0
let count16 = 0
let count17 = 0
let count18 = 0

// Поля вывода количества товара
let area1 = document.querySelector('.area-1')
let area2 = document.querySelector('.area-2')
let area3 = document.querySelector('.area-3')
let area4 = document.querySelector('.area-4')
let area5 = document.querySelector('.area-5')
let area6 = document.querySelector('.area-6')
let area7 = document.querySelector('.area-7')
let area8 = document.querySelector('.area-8')
let area9 = document.querySelector('.area-9')
let area10 = document.querySelector('.area-10')
let area11 = document.querySelector('.area-11')
let area12 = document.querySelector('.area-12')
let area13 = document.querySelector('.area-13')
let area14 = document.querySelector('.area-14')
let area15 = document.querySelector('.area-15')
let area16 = document.querySelector('.area-16')
let area17 = document.querySelector('.area-17')
let area18 = document.querySelector('.area-18')

// Поля с количеством услуги
let qua1 = document.querySelector('.qua1')
let qua2 = document.querySelector('.qua2')
let qua3 = document.querySelector('.qua3')
let qua4 = document.querySelector('.qua4')
let qua5 = document.querySelector('.qua5')
let qua6 = document.querySelector('.qua6')
let qua7 = document.querySelector('.qua7')
let qua8 = document.querySelector('.qua8')
let qua9 = document.querySelector('.qua9')
let qua10 = document.querySelector('.qua10')
let qua11 = document.querySelector('.qua11')
let qua12 = document.querySelector('.qua12')
let qua13 = document.querySelector('.qua13')
let qua14 = document.querySelector('.qua14')
let qua15 = document.querySelector('.qua15')
let qua16 = document.querySelector('.qua16')
let qua17 = document.querySelector('.qua17')
let qua18 = document.querySelector('.qua18')

// Поля с ценником услуги
let priceArea1 = document.querySelector('.priceArea1')
let priceArea2 = document.querySelector('.priceArea2')
let priceArea3 = document.querySelector('.priceArea3')
let priceArea4 = document.querySelector('.priceArea4')
let priceArea5 = document.querySelector('.priceArea5')
let priceArea6 = document.querySelector('.priceArea6')
let priceArea7 = document.querySelector('.priceArea7')
let priceArea8 = document.querySelector('.priceArea8')
let priceArea9 = document.querySelector('.priceArea9')
let priceArea10 = document.querySelector('.priceArea10')
let priceArea11 = document.querySelector('.priceArea11')
let priceArea12 = document.querySelector('.priceArea12')
let priceArea13 = document.querySelector('.priceArea13')
let priceArea14 = document.querySelector('.priceArea14')
let priceArea15 = document.querySelector('.priceArea15')
let priceArea16 = document.querySelector('.priceArea16')
let priceArea17 = document.querySelector('.priceArea17')
let priceArea18 = document.querySelector('.priceArea18')

// Ценники услуг, идут по порядку, 1 единица = 1€
let price1 = 1
let price2 = 2
let price3 = 3
let price4 = 4
let price5 = 5
let price6 = 6
let price7 = 7
let price8 = 8
let price9 = 9
let price10 = 10
let price11 = 11
let price12 = 12
let price13 = 13
let price14 = 14
let price15 = 15
let price16 = 16
let price17 = 17
let price18 = 18

// Цена за комплекс услуг
let total1
let total2
let total3
let total4
let total5
let total6
let total7
let total8
let total9
let total10
let total11
let total12
let total13
let total14
let total15
let total16
let total17
let total18

// Поле итого
let result = document.querySelector('.result')

// Функции увелечения товара
function productPlus1 () {
  count1 += 1
  area1.innerHTML = count1

  calc()
}

function productPlus2 () {
  count2 += 1
  area2.innerHTML = count2

  calc()
}

function productPlus3 () {
  count3 += 1
  area3.innerHTML = count3

  calc()
}

function productPlus4 () {
  count4 += 1
  area4.innerHTML = count4

  calc()
}

function productPlus5 () {
  count5 += 1
  area5.innerHTML = count5

  calc()
}

function productPlus6 () {
  count6 += 1
  area6.innerHTML = count6

  calc()
}

function productPlus7 () {
  count7 += 1
  area7.innerHTML = count7

  calc()
}

function productPlus8 () {
  count8 += 1
  area8.innerHTML = count8

  calc()
}

function productPlus9 () {
  count9 += 1
  area9.innerHTML = count9

  calc()
}

function productPlus10 () {
  count10 += 1
  area10.innerHTML = count10

  calc()
}

function productPlus11 () {
  count11 += 1
  area11.innerHTML = count11

  calc()
}

function productPlus12 () {
  count12 += 1
  area12.innerHTML = count12

  calc()
}

function productPlus13 () {
  count13 += 1
  area13.innerHTML = count13

  calc()
}

function productPlus14 () {
  count14 += 1
  area14.innerHTML = count14

  calc()
}

function productPlus15 () {
  count15 += 1
  area15.innerHTML = count15

  calc()
}

function productPlus16 () {
  count16 += 1
  area16.innerHTML = count16

  calc()
}

function productPlus17 () {
  count17 += 1
  area17.innerHTML = count17

  calc()
}

function productPlus18 () {
  count18 += 1
  area18.innerHTML = count18

  calc()
}

// Функции уменьшения товара
function productMinus1 () {
  if (count1 > 0) {
    count1 -= 1
    area1.innerHTML = count1
    calc()
  }
}

function productMinus2 () {
  if (count2 > 0) {
    count2 -= 1
    area2.innerHTML = count2
    calc()
  }
}

function productMinus3 () {
  if (count3 > 0) {
    count3 -= 1
    area3.innerHTML = count3
    calc()
  }
}

function productMinus4 () {
  if (count4 > 0) {
    count4 -= 1
    area4.innerHTML = count4
    calc()
  }
}

function productMinus5 () {
  if (count5 > 0) {
    count5 -= 1
    area5.innerHTML = count5
    calc()
  }
}

function productMinus6 () {
  if (count6 > 0) {
    count6 -= 1
    area6.innerHTML = count6
    calc()
  }
}

function productMinus7 () {
  if (count7 > 0) {
    count7 -= 1
    area7.innerHTML = count7
    calc()
  }
}

function productMinus8 () {
  if (count8 > 0) {
    count8 -= 1
    area8.innerHTML = count8
    calc()
  }
}

function productMinus9 () {
  if (count9 > 0) {
    count9 -= 1
    area9.innerHTML = count9
    calc()
  }
}

function productMinus10 () {
  if (count10 > 0) {
    count10 -= 1
    area10.innerHTML = count10
    calc()
  }
}

function productMinus11 () {
  if (count11 > 0) {
    count11 -= 1
    area11.innerHTML = count11
    calc()
  }
}

function productMinus12 () {
  if (count12 > 0) {
    count12 -= 1
    area12.innerHTML = count12
    calc()
  }
}

function productMinus13 () {
  if (count13 > 0) {
    count13 -= 1
    area13.innerHTML = count13
    calc()
  }
}

function productMinus14 () {
  if (count14 > 0) {
    count14 -= 1
    area14.innerHTML = count14
    calc()
  }
}

function productMinus15 () {
  if (count15 > 0) {
    count15 -= 1
    area15.innerHTML = count15
    calc()
  }
}

function productMinus16 () {
  if (count16 > 0) {
    count16 -= 1
    area16.innerHTML = count16
    calc()
  }
}

function productMinus17 () {
  if (count17 > 0) {
    count17 -= 1
    area17.innerHTML = count17
    calc()
  }
}

function productMinus18 () {
  if (count18 > 0) {
    count18 -= 1
    area18.innerHTML = count18
    calc()
  }
}

// Функция расчета сметы
function calc() {
  qua1.innerHTML = count1 + 'шт'
  total1 = count1 * price1
  priceArea1.innerHTML = total1 + '€'

  qua2.innerHTML = count2 + 'шт'
  total2 = count2 * price2
  priceArea2.innerHTML = total2 + '€'

  qua3.innerHTML = count3 + 'шт'
  total3 = count3 * price3
  priceArea3.innerHTML = total3 + '€'

  qua4.innerHTML = count4 + 'шт'
  total4 = count4 * price4
  priceArea4.innerHTML = total4 + '€'

  qua5.innerHTML = count5 + 'шт'
  total5 = count5 * price5
  priceArea5.innerHTML = total5 + '€'

  qua6.innerHTML = count6 + 'шт'
  total6 = count6 * price6
  priceArea6.innerHTML = total6 + '€'

  qua7.innerHTML = count7 + 'шт'
  total7 = count7 * price7
  priceArea7.innerHTML = total7 + '€'

  qua8.innerHTML = count8 + 'шт'
  total8 = count8 * price8
  priceArea8.innerHTML = total8 + '€'

  qua9.innerHTML = count9 + 'шт'
  total9 = count9 * price9
  priceArea9.innerHTML = total9 + '€'

  qua10.innerHTML = count10 + 'шт'
  total10 = count10 * price10
  priceArea10.innerHTML = total10 + '€'

  qua11.innerHTML = count11 + 'шт'
  total11 = count11 * price11
  priceArea11.innerHTML = total11 + '€'

  qua12.innerHTML = count12 + 'шт'
  total12 = count12 * price12
  priceArea12.innerHTML = total12 + '€'

  qua13.innerHTML = count13 + 'шт'
  total13 = count13 * price13
  priceArea13.innerHTML = total13 + '€'

  qua14.innerHTML = count14 + 'шт'
  total14 = count14 * price14
  priceArea14.innerHTML = total14 + '€'

  qua15.innerHTML = count15 + 'шт'
  total15 = count15 * price15
  priceArea15.innerHTML = total15 + '€'

  qua16.innerHTML = count16 + 'шт'
  total16 = count16 * price16
  priceArea16.innerHTML = total16 + '€'

  qua17.innerHTML = count17 + 'шт'
  total17 = count17 * price17
  priceArea17.innerHTML = total17 + '€'

  qua18.innerHTML = count18 + 'шт'
  total18 = count18 * price18
  priceArea18.innerHTML = total18 + '€'

  totalAll = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15 + total16 + total17 + total18

  result.innerHTML = 'Итого: ' + totalAll + '€'
}