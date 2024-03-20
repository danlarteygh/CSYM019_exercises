document.addEventListener("DOMContentLoaded", myLoadEvent);

function myLoadEvent() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'red',
                    'blue',
                    'yellow',
                    'green',
                    'purple',
                    'orange'
                ],
                borderWidth: 1
            }]
        },
        /*
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        */
        options: {

            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Colors' // Label for the x-axis
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '# of Votes' // Label for the y-axis
                    },
                    ticks: {
                        beginAtZero: true // Start y-axis from 0
                    }
                }
            },

        }

    });

}