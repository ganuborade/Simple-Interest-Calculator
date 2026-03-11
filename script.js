function calculateSI() {

    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        document.getElementById("result").innerHTML =
            "❌ Please enter all values correctly.";
        return;
    }

    let si = (p * r * t) / 100;
    let total = p + si;

    document.getElementById("result").innerHTML = `
        <p><b>Principal Amount:</b> ₹${p}</p>
        <p><b>Interest Rate:</b> ${r}%</p>
        <p><b>Time:</b> ${t} years</p>
        <p><b>Total Interest:</b> ₹${si.toFixed(2)}</p>
        <p><b>Total Amount:</b> ₹${total.toFixed(2)}</p>
    `;
}