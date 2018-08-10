function Fibonacci(n)
{
    let pre = 0,
        next = 1,
        fib = 0;
    if (n <= 0) return pre;
    if (n === 1) return next;
    
    for (let i = 1; i < n; i ++) {
        fib = pre + next;
        pre = next;
        next = fib;
    }
    return fib;
}