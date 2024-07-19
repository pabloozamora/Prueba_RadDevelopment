"use strict";
function isPalindrome(str) {
    // Eliminar los caracteres no alfanuméricos y convertir a minúsculas
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Comparar la cadena con su reverso, eliminando espacios
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome("Anilina")); // true
console.log(isPalindrome("Hola")); // false
console.log(isPalindrome("Reco$nocer")); // true
console.log(isPalindrome("Otorrinolaringologo")); // false
console.log(isPalindrome("Anita lava la tina")); // true
