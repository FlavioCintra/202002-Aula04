//exercício 3
// var qtd = 5;

// function MontaArray(obj)
// {
//     for(var i = 0; i<qtd; i++)
//     {
//         obj[i] = Math.floor(Math.random() * 1000)
//        //  console.log("Posição " + i + " do Array : " + obj[i])
//     }
//     return obj;
    
// }

// function bubbleSort(array){
//     array = array.slice();
//     console.log(array);
//     for( var i=0;i<array.length;i++)
//     { 
//       for(var j=0;j<array.length-1;j++)
//       {
//         if(array[j] > array[j+1])
//         {
//           [array[j], array[j+1]] =[array[j+1],array[j]];
//           console.log(array);
//         }
//       }
//     }
    
//     return array;
//   }


// var arr = new Array();
// arr = MontaArray(arr);

// var soma = arr.reduce((soma, numero) => soma + numero, 0);

// var media = soma/qtd

// console.log("Soma = " + soma)
// console.log("Média = " + media)


//exercicio 4
// var aposta = 1;

// var computador = Math.floor(Math.random() * 7)

// if(aposta == computador)
// {
//     console.log("Parabéns! Seu número foi " + aposta +" e o do computador foi " + computador + "!")
// }
// else
// {
//     console.log("Sinto muito :( Seu número foi " + aposta +" e o do computador foi " + computador + ".")
// }