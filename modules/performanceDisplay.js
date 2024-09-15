export function renderAllPerformanceResults(results) {
    const performanceDiv = document.getElementById('performance-results');
    performanceDiv.innerHTML = '<h3>Результаты производительности функций фильтрации</h3>';

    results.forEach(result => {
        const section = document.createElement('div');
        section.innerHTML = `
            <h4>Функция: ${result.name}</h4>
            <p>Среднее время выполнения: ${result.averageTime.toFixed(4)} мс</p>
            <canvas id="chart-${result.name}" width="400" height="200"></canvas>
        `;
        performanceDiv.appendChild(section);

        // Построение графика
        renderChart(result.times, `chart-${result.name}`, result.name);
    });
}

function renderChart(times, canvasId, functionName) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: times.map((_, index) => index + 1),
            datasets: [{
                label: `Время выполнения (мс) - ${functionName}`,
                data: times,
                borderColor: getRandomColor(),
                borderWidth: 1,
                fill: false,
            }]
        },
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Номер запуска'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Время (мс)'
                    }
                }
            }
        }
    });
}

function getRandomColor() {
    const colors = ['rgba(75, 192, 192, 1)', 'rgba(192, 75, 192, 1)', 'rgba(192, 192, 75, 1)'];
    return colors[Math.floor(Math.random() * colors.length)];
}