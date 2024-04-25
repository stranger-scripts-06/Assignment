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


document.addEventListener('DOMContentLoaded', function () {
    const tileContainer = document.getElementById('tileContainer');
    let selectedTile = null;

    // Generate calendar tiles for 31 days
    for (let i = 1; i <= 31; i++) {
        const tile = document.createElement('div');
        tile.classList.add('calendertile');
        
        const date = document.createElement('div');
        date.classList.add('date');
        date.textContent = i;

        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = getDayOfWeek(i); // Get day of week based on date

        tile.appendChild(date);
        tile.appendChild(day);

        tile.addEventListener('click', function() {
            // Remove selected class from previously selected tile
            if (selectedTile) {
                selectedTile.classList.remove('selected');
            }
            // Add selected class to the clicked tile
            tile.classList.add('selected');
            selectedTile = tile;
        });

        tileContainer.appendChild(tile);
    }
});

// Function to get the day of the week based on date
function getDayOfWeek(day) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    date.setDate(day);
    return daysOfWeek[date.getDay()];
}

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signin-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get the values of the form fields
            const firstName = document.getElementById('FirstName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const termsAndConditionsChecked = document.getElementById('termsAndConditions').checked;

            // Check if all fields are filled
            if (firstName && email && password && termsAndConditionsChecked) {
                // Redirect to the next page
                window.location.href = 'goals.html'; // Replace 'goals.html' with the URL of your next page
            } else {
                // Show an alert if any field is missing
                alert('Please fill in all fields and agree to the terms and conditions.');
            }
        });
    } else {
        console.error('Signup form not found.');
    }
});

