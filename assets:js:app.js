/* ==========================================
   Physics Store V1.0 Production
   Main Stylesheet
========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
….hero-buttons{
    display:flex;
    gap:15px;
    flex-wrap:wrap;
}/* ===========================
   Testimonials
=========================== */

.testimonials{
    padding:80px 0;
    background:#ffffff;
}

.testimonial-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.testimonial-card{
    background:#f8fafc;
    padding:35px;
    border-radius:15px;
    box-shadow:0 8px 20px rgba(0,0,0,.08);
    transition:.3s;
}

.testimonial-card:hover{
    transform:translateY(-8px);
}

.testimonial-card p{
    color:#555;
    font-style:italic;
    margin-bottom:20px;
}

.testimonial-card h4{
    color:#2563eb;
}

/* ===========================
   Newsletter
=========================== */

.newsletter{
    background:#2563eb;
    color:#fff;
    text-align:center;
    padding:80px 20px;
}

.newsletter h2{
    font-size:36px;
    margin-bottom:15px;
}

.newsletter p{
    margin-bottom:30px;
}

.newsletter form{
    display:flex;
    justify-content:center;
    gap:15px;
    flex-wrap:wrap;
}

.newsletter input{
    width:350px;
    max-width:100%;
    padding:15px;
    border:none;
    border-radius:10px;
    outline:none;
}

.newsletter button{
    padding:15px 30px;
    border:none;
    border-radius:10px;
    background:#111827;
    color:#fff;
    cursor:pointer;
    font-weight:600;
    transition:.3s;
}

.newsletter button:hover{
    background:#000;
}

/* ===========================
   Footer
=========================== */

footer{
    background:#0f172a;
    color:#fff;
    padding:70px 0 30px;
}

.footer-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:40px;
}

.footer-grid h3{
    margin-bottom:20px;
}

.footer-grid p,
.footer-grid li{
    color:#cbd5e1;
    margin-bottom:10px;
}

.footer-grid a{
    color:#cbd5e1;
}

.footer-grid a:hover{
    color:#fff;
}

.copyright{
    text-align:center;
    margin-top:40px;
    padding-top:20px;
    border-top:1px solid rgba(255,255,255,.15);
    color:#94a3b8;
}

/* ===========================
   Responsive
=========================== */

@media(max-width:768px){

.navbar .container{
    flex-direction:column;
    gap:20px;
}

.nav-links{
    flex-direction:column;
    align-items:center;
    gap:15px;
}

.hero-grid{
    grid-template-columns:1fr;
    text-align:center;
}

.hero h1{
    font-size:36px;
}

.hero-buttons{
    justify-content:center;
}

.section-title{
    font-size:30px;
}

.product-grid,
.category-grid,
.features-grid,
.testimonial-grid,
.footer-grid{
    grid-template-columns:1fr;
}

.newsletter form{
    flex-direction:column;
}

.newsletter input,
.newsletter button{
    width:100%;
}

}