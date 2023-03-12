// The "flipping matrix" problem aims to find the sum of the largest values in each n/2 x n/2 submatrix of a square n x n matrix after horizontally flipping the elements of these submatrices. To solve the problem, the matrix must be divided into four quadrants, each representing an n/2 x n/2 submatrix, where n is the size of the original matrix. Then, the elements in each submatrix must be horizontally flipped and the sum of the largest values in each submatrix must be calculated and returned as the result.

let matrix = [
        [112, 42, 83, 119],
        [56, 125, 56, 49],
        [15, 78, 101, 43],
        [62, 98, 114, 108]
      ];

      function flippingMatrix(matrix) {
        // Write your code here
        
        const n = matrix.length;
        const div = n / 2;
        let soma = 0;

        for (let i = 0; i < div; i++) {
            for ( let j = 0; j < div; j++){
                const topEsquerda = matrix[i][j];
                console.log(topEsquerda);

                const topDireita = matrix[i][n - j - 1];
                console.log(topDireita);

                const baixoEsquerda = matrix[n - i - 1][j]
                console.log(baixoEsquerda);
                
                const baixoDireita = matrix[n - i - 1][n - j - 1]
                console.log(baixoDireita);

                const max = Math.max(topEsquerda, topDireita, baixoEsquerda, baixoDireita);
                soma += max;
            }

        }
        return soma;
    }

console.log(flippingMatrix(matrix)); 

// Este código primeiro define as dimensões da matriz (n e metade de n). Em seguida, ele itera sobre cada submatriz de tamanho n/2 x n/2, usando a lógica descrita acima para inverter os elementos e encontrar o maior valor em cada submatriz. Finalmente, ele retorna a soma dos maiores valores encontrados em cada submatriz.