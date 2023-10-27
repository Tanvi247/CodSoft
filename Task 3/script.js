document.addEventListener("DOMContentLoaded", function () {
    let display = ''; 
    let inputs = document.querySelectorAll('.calc form input[type="button"]');
    
    Array.from(inputs).forEach((input) => {
        input.addEventListener('click', (e) => {
            if (e.target.value === '=') {
                try {
                    display = eval(display);
                    document.querySelector('input[name="output"]').value = display;
                } catch (error) {
                    alert("Error: " + error);
                    display = 'Error';
                    document.querySelector('input[name="output"]').value = display;
                }
            } 
            else if (e.target.value === 'clear') {
                display = '';
                document.querySelector('input[name="output"]').value = display;
            } 
            else {
                display = display + e.target.value; 
                document.querySelector('input[name="output"]').value = display; 
            }
        });
    });
});
