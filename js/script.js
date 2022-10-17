function getAverage(array) {
    if(array.length === 0) {
      console.log('The array cannot be empty')
      return 0;
    }
    let totalAges = 0;
    let undefinedAmount = 0;
    
    // bucle FOR (voy a sumar todas los valores)
    for (let index = 0; index < array.length; index++) {
      console.log('x = ' ,index)
      //obtener el valor
      let age = array[index]
      if (!age) {
        undefinedAmount++
        continue;
      }
      //sumar los valores
      totalAges = totalAges + age
      console.log('total: ', totalAges)
    }
    //resultado promedio
    let averageAge = totalAges / (array.length - undefinedAmount)
    return averageAge
  }
  
  // lista de numeros array
  let friendsAges = [20, 26, 30, 19, 33, 50, 28]
  let weights = [120, 99, 76, 89, 87]
  const averageAge = getAverage(friendsAges)
  const averageWeight = getAverage(weights)
  console.log(averageAge, averageWeight)
  console.log('El promedio es: ', averageAge)
  console.log('The average weigth for this numbers is ', averageWeight + ' kilos.')
  
  const emptyArrayAverage = getAverage([])
  console.log(emptyArrayAverage)
  
  
  // array con valores invalidos
  let undefinedArray = [100, null, 100, 100, undefined, 100, ]
  const undefinedAverage = getAverage(undefinedArray)
  console.log('undefined array: ', undefinedAverage)