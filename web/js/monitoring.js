document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("rpmChart").getContext("2d");
    const rpmChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
            datasets: [{
                label: "RPM",
                data: [1500, 1520, 1480, 1550, 1490, 1530, 1500],
                borderColor: "#1a73e8",
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Time (seconds)"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "RPM"
                    },
                    min: 1400,
                    max: 1600
                }
            }
        }
    });
});
