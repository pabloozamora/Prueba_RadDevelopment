"use strict";
function minCoinChange(coin, K) {
    const m = coin.length;
    if (K === 0) {
        return [0, []];
    }
    const change = new Array(K + 1).fill(Number.MAX_VALUE);
    change[0] = 0;
    const coin_used = new Array(K + 1).fill(-1);
    for (let i = 1; i <= K; i++) {
        for (let j = 0; j < m; j++) {
            if (coin[j] <= i) {
                const currentCount = 1 + change[i - coin[j]];
                if (currentCount < change[i]) {
                    change[i] = currentCount;
                    coin_used[i] = coin[j];
                }
            }
        }
    }
    if (change[K] === Number.MAX_VALUE) {
        return [-1, []];
    }
    const result = [];
    let current_K = K;
    while (current_K > 0) {
        result.push(coin_used[current_K]);
        current_K -= coin_used[current_K];
    }
    return [change[K], result];
}
const start_time = Date.now();
const [num_coins, coins_used] = minCoinChange([1, 10, 25], 85);
console.log(`El número mínimo de monedas necesarias es: ${num_coins}`);
console.log(`Las monedas usadas son: ${coins_used}`);
console.log(`Tiempo de ejecución: ${(Date.now() - start_time) / 1000} segundos`);
