document.addEventListener('DOMContentLoaded', function () {
    
    
    const makeSandwichBtn = document.getElementById('makeSandwichBtn');
    const modal = document.querySelector('.modal');
    const elements = document.querySelector('.elements');
    const bunsContainer = document.querySelector('.buns-container');
    const lettuceCheckbox = document.getElementById('lettuce');
    const tomatoCheckbox = document.getElementById('tomato');
    const cheeseCheckbox = document.getElementById('cheese');
    const meatCheckbox = document.getElementById('Meat');

    makeSandwichBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
        addBunsToModal();
    });

    lettuceCheckbox.addEventListener('change', function () {
        console.log("Checkbox changed");
        if (lettuceCheckbox.checked) {
            console.log("Lettuce checked");
            addLettuce();
        } else {
            console.log("Lettuce unchecked");
            removeLettuce();
        }
    });

    function createBun(className) {
        const bun = document.createElement('div');
        bun.classList.add('bun', className);

        // Add spots and seeds to the bun
        for (let i = 1; i <= 4; i++) {
            const spot = createSpot(`spot-${i}`);
            const seed = createSeed(`seed-${i}`);

            bun.appendChild(spot);
            bun.appendChild(seed);
        }

        return bun;
    }

    function createSpot(className) {
        const spot = document.createElement('div');
        spot.classList.add('spot', className);
        return spot;
    }

    function createSeed(className) {
        const seed = document.createElement('div');
        seed.classList.add('seed', className);
        return seed;
    }
});



document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Initialize checkboxes with the value false
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      
    });

    // Step 2: Function to handle checkbox change event
    function handleCheckboxChange(checkbox, ingredient) {
        if (checkbox.checked) {
            ingredient.style.display = 'block';
        } else {
            ingredient.style.display = 'none';
        }
    }

    // Step 3: Apply the function manually for each checkbox and ingredient
    let lettuceCheckbox = document.getElementById('lettuce');
    let lettuceIngredient = document.querySelector('.lettuce');

    lettuceCheckbox.addEventListener('change', function () {
        handleCheckboxChange(lettuceCheckbox, lettuceIngredient);
    });

    let tomatoCheckbox = document.getElementById('tomato');
    let tomatoIngredient = document.querySelector('.Tomato');
    tomatoCheckbox.addEventListener('change', function () {
        handleCheckboxChange(tomatoCheckbox, tomatoIngredient);
    });

    let cheeseCheckbox = document.getElementById('cheese');
    let cheeseIngredient = document.querySelector('.Cheese');
    cheeseCheckbox.addEventListener('change', function () {
        handleCheckboxChange(cheeseCheckbox, cheeseIngredient);
    });

    let meatCheckbox = document.getElementById('Meat');
    let meatIngredient = document.querySelector('.Meat');
    meatCheckbox.addEventListener('change', function () {
        handleCheckboxChange(meatCheckbox, meatIngredient);
    });
});
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'none';
});
document.querySelector(".glow-on-hover").addEventListener("click", function() {
    window.location.href = "page2.html";
});
