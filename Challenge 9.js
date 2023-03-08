// Roy quiere mejorar su velocidad de escritura en máquina para concursos de programación. Su amigo le dijo que escribiera la oración "The quick brown fox jumps over the lazy dog" repetidamente porque es un pangrama. (pangramas son oraciones construidas usando todas las letras del alfabeto, por lo menos una vez.)

// Después de escribir la oración muchas veces, Roy se aburrió. Entonces comenzó a buscar otros pangramas.

// Dada una oración s, dile a Roy si es un pangrama o no.

// Formato de Entrada

// La Entrada consiste en una linea que contiene s.


// Formato de Salida

// Imprime una línea que contiene pangram si  es un pangrama, sino imprime not pangram.

// Ejemplo de Entrada #1

// We promptly judged antique ivory buckles for the next prize    
// Ejemplo de Salida #1

// pangram
// Ejemplo de Entrada #2

// We promptly judged antique ivory buckles for the prize    
// Ejemplo de Salida #2

// not pangram
// Explicación

// En el primer caso de prueba, la respuesta es un pangram porque la oración contiene todas las letras.

let s = "We promptly judged antique ivory buckles for the next prize"   

function pangrams(s) {
    // Write your code here
    s = s.replace(/[^a-zA-Z]/g, "").toLowerCase();
    console.log(s);
    s = new Set(s)
    if ([...s].length === 26){
        return "pangram"
    } else {
        return "not pangram"; 
    } 
}
console.log(pangrams(s));

//tentei com expre3sao regular mas nao dava a resposta certa 
// let regex = /^(?=.*[a-z])[a-z ]{26}$/i;
//         // s = s.replace(/[^a-zA-Z]/g, "");
//         if (regex.test(s)) {
//             return "pangram";
//         } else {
//             return "not pangram";
//         }
//}

