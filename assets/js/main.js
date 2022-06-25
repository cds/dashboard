
window.addEventListener('load', () => {
  
  document.body.setAttribute('data-theme', localStorage.getItem('Color'));
     
  document.getElementById(localStorage.getItem('Color')).checked = true;

})

function initTheme() { 
const btn = document.querySelector('#btn');        
        const radioButtons = document.querySelectorAll('input[name="color"]');
        btn.addEventListener("click", () => {
            let selectedColor;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                  selectedColor = radioButton.value;
                  localStorage.setItem("Color", selectedColor);
                  document.body.setAttribute('data-theme', selectedColor) 
                    break;
                }
            }
        
            // show the output:
        
            output.innerText = selectedColor ? `You selected ${selectedColor}` : `You haven't selected any color`;
        });
};

const btn = document.querySelector('#btn');        
        const radioButtons = document.querySelectorAll('input[name="color"]');
        btn.addEventListener("click", () => {
            let selectedColor;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                  selectedColor = radioButton.value;
                  localStorage.setItem("Color", selectedColor);
                  document.body.setAttribute('data-theme', selectedColor) 
                    break;
                }
            }
            // show the output:
          
         
          
            output.innerText = selectedColor ? `You selected ${selectedColor}` : `You haven't selected any color`;
        });


  
