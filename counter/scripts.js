let doc = document.getElementById("counter_value");

let count = parseInt(doc.innerHTML);

function increment() {
    count++;
    document.getElementById("counter_value").textContent = count;
}

function decrement() {
    count--;
    document.getElementById("counter_value").textContent = count;
}
