let division = function( Numer1, Numer2 ) {
    if( Numer1 === 0 || Numer2 === 0 ){
         return("No se puede dividir por cero")
    }
    let resultado = Numer1 / Numer2
    return resultado
}




module.exports = division