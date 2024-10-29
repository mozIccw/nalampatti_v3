var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Farmer', 'Homemaker', 'Small Scale Business', 'Unemployed due to ageing', 'Student', 'Professional (Salaried)'],
        datasets: [{
            label: '',
            data: [596, 348, 229, 82, 69, 214],
            backgroundColor: [
                'rgba(0, 181, 204, 1)',
                'rgba(44, 130, 201, 1)',
                'rgba(30, 81, 123, 1)',
                'rgba(40, 67, 135, 1)',
                'rgba(129, 207, 224, 1)',
                'rgba(197, 239, 247, 1)'

            ],
            borderColor: [
                'rgba(0, 181, 204, 1)',
                'rgba(44, 130, 201, 1)',
                'rgba(30, 81, 123, 1)',
                'rgba(40, 67, 135, 1)',
                'rgba(129, 207, 224, 1)',
                'rgba(197, 239, 247, 1)'
            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true,
        maintainAspectRatio: false,  // Allow custom aspect ratio
        aspectRatio: 1,
        plugins: {
            title: {
                display: true,
                text: 'Occupation of Respondents', // Chart title text
                position: 'top', // Position at the top
                align: 'center',  // Center-align the title
                font: {
                    size: 16,
                    weight: 'bold'
                },
                color: '#061a3a' // Title color
            },
            legend: {
               position: 'bottom',
               labels: {
                  boxWidth: 20,
                  padding: 10
               }
            }
        }
    }
});