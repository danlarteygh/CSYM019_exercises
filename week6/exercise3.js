document.addEventListener("DOMContentLoaded", myLoadEvent);

function myLoadEvent() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        data: {

            datasets: [{
                type: 'line',
                label: 'Expected goals',
                data: [1, 1.8, 2.6, 3.7, 1.1, 3.2, 3.4, 2.4, 3.0, 2.2, 1.9, 1.2, 2.3, 1.5, 0.7, 3.1, 0.7, 2.0, 2.7, 1.5],
            },
            {
                type: 'line',
                label: 'Goals scored',
                data: [1, 2, 1, 2, 2, 1, 3, 2, 4, 3, 1, 3, 3, 2, 1, 4, 0, 1, 3, 3],
            }

            ],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],


        }
    }


    );

}