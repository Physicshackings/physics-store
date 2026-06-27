// ===============================
// Physics Store V2
// app.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Physics Store V2 Loaded");

    // Demo Market Prices
    const markets = [
        { name: "BTC", price: 108250 },
        { name: "ETH", price: 6450 },
        { name: "SOL", price: 182 },
        { name: "BNB", price: 735 },
        { name: "XRP", price: 2.45 }
    ];

    function randomPrice(value) {
        const change = (Math.random() * 2 - 1) * (value * 0.003);
        return (value + change).toFixed(2);
    }

    setInterval(() => {
        console.clear();
        console.log("===== Physics Store Live Market =====");

        markets.forEach(asset => {
            console.log(
                asset.name +
                " : $" +
                randomPrice(asset.price)
            );
        });

    }, 3000);

    // Smooth Scroll
    document.querySelectorAll("a[href^='#']").forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

    // Button Animation
    document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn => {

        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-3px)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
        });

    });

});