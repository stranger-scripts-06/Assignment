document.addEventListener('DOMContentLoaded', function () {
    const eyeIcon = document.getElementById('eye-icon');
    const passwordInput = document.getElementById('password');
    const signinForm = document.getElementById('signin-form');

    if (eyeIcon && passwordInput && signinForm) {
        eyeIcon.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            eyeIcon.src = type === 'password' ? 'openeye.png' : 'closedeye.png';
        });

        signinForm.addEventListener('submit', function (event) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                event.preventDefault();
                alert('Please enter all fields');
            } else {
                // Redirect to the next page
                window.location.href = 'goals.html'; // Replace 'goals.html' with the URL of your next page
            }
        });
    } else {
        console.error('Required elements not found.');
    }

    const labels = ['6:00','7:00','8:00','9:00','10:00','11:00', '12:00','13:00','14:00', '15:00','16:00','17:00', '18:00', '19:00'];
    const data = [200,50, 100, 400, 150, 200, 600, 200, 400, 750, 75, 250, 460];

    const chartConfig = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Calories Burnt',
                data: data,
                backgroundColor: 'rgba(149, 190, 255, 1)', // Light purple color for bars
                borderColor: 'rgba(123, 145, 255, 1)', // Dark purple border color for bars
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false // Hide y-axis gridlines
                    },
                    ticks: {
                        stepSize: 200 // Adjust y-axis step size
                    }
                },
                x: {
                    grid: {
                        display: false // Hide x-axis gridlines
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Hide legend
                }
            }
        }
    };
    

    const ctx = document.getElementById('caloriesChart').getContext('2d');
    const myChart = new Chart(ctx, chartConfig);

    console.log('Script loaded!');
});
