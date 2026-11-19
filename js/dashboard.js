
// Championship performance data
const rounds = ["Round 1", "Round 2", "Round 3",
                "Round 4", "Round 5", "Round 6"];

const points = [25, 43, 68, 83, 108, 120];

// Get the chart canvas
const chartCanvas = document.getElementById("performanceChart");

// Create the chart
new Chart(chartCanvas, {

    type: "line",

    data: {
        labels: rounds,

        datasets: [{
            label: "Championship Points",

            data: points,

            borderColor: "#e12636",

            backgroundColor: "rgba(225, 38, 54, 0.15)",

            borderWidth: 3,

            fill: true,

            tension: 0.4
        }]
    },

    options: {
        responsive: true,

        maintainAspectRatio: false,

        plugins: {
            legend: {
                labels: {
                    color: "#ffffff"
                }
            }
        },

        scales: {
            x: {
                ticks: {
                    color: "#aaaaaa"
                },
                grid: {
                    color: "#34343c"
                }
            },

            y: {
                beginAtZero: true,

                ticks: {
                    color: "#aaaaaa"
                },

                grid: {
                    color: "#34343c"
                }
            }
        }
    }

});
