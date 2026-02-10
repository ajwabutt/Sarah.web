// Add to Cart Alert
function addToCart() {
    alert("Item added to your cart successfully!");
}

// Form Validation for Contact Page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form_div');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you for contacting SARAH! We will get back to you soon.");
        });
    }
});
// Sign Up Validation
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const pass = this.querySelectorAll('input[type="password"]');
    
    if (pass[0].value !== pass[1].value) {
        alert("Passwords do not match!");
    } else {
        alert("Registration Successful! Welcome to SARAH.");
        window.location.href = "login.html";
    }
});

// Login Validation
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Login Successful! Redirecting to Home...");
    window.location.href = "index.html";
});

window.onscroll = function() {
    const nav = document.querySelector('.custom-nav');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 0";
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Darker on scroll
    } else {
        nav.style.padding = "15px 0";
        nav.style.backgroundColor = "#212529";
    }
};


function filterSelection(category) {
    let items = document.getElementsByClassName("filter-item");
    let buttons = document.getElementsByClassName("filter-btn");

    // Button active class change
    for (let btn of buttons) {
        btn.classList.remove("active-filter");
        if (btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText.includes("VIEW ALL"))) {
            btn.classList.add("active-filter");
        }
    }

    // Filtering logic
    for (let item of items) {
        if (category === "all") {
            item.style.display = "block";
        } else {
            if (item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    }
}

// Add to Cart Function
function addToCart() {
    alert("Item successfully added to your shopping bag! 🛍️");
}

function filterSelection(category) {
    let items = document.getElementsByClassName("filter-item");
    
    // Agar 'all' select kiya jaye toh saare show honge
    if (category === "all") {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "block";
        }
    }
}

function addToCart() {
    alert("🛍️ Item added to your shopping bag!");
}

let count = 0;
function addToCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    alert("Item added to cart! Total: " + count);
}