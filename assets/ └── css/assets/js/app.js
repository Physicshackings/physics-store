// ========================================
// Physics Store V1.0 Production
// Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Physics Store Loaded Successfully");

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });

    // Newsletter Form

    const newsletterForm = document.querySelector(".newsletter form");

    if(newsletterForm){

        newsletterForm.addEventListener("submit",(e)=>{

            e.preventDefault();

            const email = newsletterForm.querySelector("input").value;

            if(email===""){

                alert("Please enter your email.");

                return;

            }

            alert("Thank you for subscribing to Physics Store!");

            newsletterForm.reset();

        });

    }

});