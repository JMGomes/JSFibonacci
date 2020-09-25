const fibonacci = (n, memory) => {
    memory = memory || {};
    if (memory[n]) return memory[n];
    if (n <= 1) return 1;
  
    return memory[n] = fibonacci(n - 1, memory) + fibonacci(n - 2, memory);
}

module.exports = { fibonacci };