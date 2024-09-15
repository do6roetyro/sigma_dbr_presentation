export function measureFilterPerformance(filterFunction, products, selectedCategory) {
    const times = [];
    for (let i = 0; i < 1000; i++) {
        const t0 = performance.now();
        filterFunction(products, selectedCategory);
        const t1 = performance.now();
        times.push(t1 - t0);
    }
    return times;
}