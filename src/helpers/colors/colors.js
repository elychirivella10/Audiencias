export function colorLoop(index, valor2){
    index = index+1
    let multiplo = []
    for (let indexmultiplo = 1; indexmultiplo < Math.ceil(valor2.length/3)+1; indexmultiplo++) {
        multiplo.push(3*indexmultiplo)
    }

    
    for (let indexposicion = 0; indexposicion < Math.ceil(valor2.length/3)+1; indexposicion++) {
        if (index === multiplo[indexposicion]) {
            index = 3
        } else if (index + 1 === multiplo[indexposicion]) {
            index = 2
        } else if (index + 2 === multiplo[indexposicion]){
            index = 1
        }
    }   

    return index
 }