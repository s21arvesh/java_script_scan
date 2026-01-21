// Sample JavaScript file with code quality and security issues
// Missing JSDoc comments - will be detected by JSDoc scanner

var unusedVariable = 'This variable is never used'; // ESLint will detect unused var

function calculateTotal(items, tax, discount, shipping, handling, specialFee, extraCost) {
    // High cyclomatic complexity - will be detected by Plato
    var total = 0;
    
    if (items.length > 0) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].price > 0) {
                if (items[i].category === 'electronics') {
                    total += items[i].price * 1.1;
                    if (items[i].weight > 10) {
                        total += shipping * 2;
                    } else {
                        total += shipping;
                    }
                } else if (items[i].category === 'books') {
                    total += items[i].price * 0.9;
                    if (discount > 0) {
                        total -= discount;
                    }
                } else {
                    total += items[i].price;
                }
            }
        }
    }
    
    // Use of eval() - security issue
    var discountCode = prompt("Enter discount code:");
    eval("total -= " + discountCode + ";");
    
    return total;
}

// Duplicate code - will be detected by JSCPD
function processOrderA(order) {
    var total = 0;
    for (var i = 0; i < order.items.length; i++) {
        total += order.items[i].price;
    }
    return total;
}

function processOrderB(order) {
    var total = 0;
    for (var i = 0; i < order.items.length; i++) {
        total += order.items[i].price;
    }
    return total;
}

// Missing semicolons - ESLint will detect
function getUserData(userId) {
    var userData = fetchUser(userId)
    return userData
}

// Global variable pollution
globalConfig = {
    apiEndpoint: 'https://api.example.com',
    timeout: 5000
};

// Insecure random number generation
function generateToken() {
    return Math.random().toString(36).substr(2, 9);
}

// Missing error handling
function saveData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

// Console.log statements in production code
console.log('Debug: User logged in');
console.warn('Warning: Deprecated API used');

// Unused function parameters
function updateProfile(userId, name, email, phone, address, city, state, country, zipcode) {
    // Only using userId and name
    var user = findUser(userId);
    user.name = name;
    return user;
}

// Complex nested conditions
function validateUserInput(input) {
    if (input !== null && input !== undefined) {
        if (typeof input === 'string') {
            if (input.length > 0) {
                if (input.trim() !== '') {
                    if (input.match(/^[a-zA-Z0-9]+$/)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

// Potential XSS vulnerability
function displayUserContent(content) {
    document.getElementById('output').innerHTML = content; // Direct innerHTML assignment
}

// Memory leak potential
var largeData = [];
function addData(item) {
    largeData.push(item);
    // Never clears the array
}

// Synchronous operations blocking main thread
function syncOperation() {
    var result = '';
    for (var i = 0; i < 1000000; i++) {
        result += 'Processing...';
    }
    return result;
}
