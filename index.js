var x = 10
var y = 20

function add(a, b) {
  if (a == null) {
    console.log("a is null")
  }
  return a + b
}

add(x, y)

const express = require('express');
const app = express();

// ❌ Hardcoded secret (gitleaks + trufflehog)
const AWS_SECRET_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";

// ❌ Insecure eval
function insecureEval(input) {
  return eval(input);
}

// ❌ Weak equality
if ("1" == 1) {
  console.log("Weak comparison");
}

app.get('/', (req, res) => {
  res.send("Hello insecure world");
});

app.listen(3000, () => {
  console.log("Server running");
});
