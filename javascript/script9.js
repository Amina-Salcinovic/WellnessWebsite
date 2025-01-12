const routes = {
    '/': `
            <nav>
        <ul>
            <li><a href="/" data-link>Home</a></li>
            <li><a href="/services" data-link>Services</a></li>
            <li><a href="/membership" data-link>Membership</a></li>
            <li><a href="/blog" data-link>Blog</a></li>
            <li><a href="/contactus" data-link>Contact</a></li>
            <li><a href="/weather" data-link>Weather</a></li>
            <button class="theme-toggle-button" onclick="toggleTheme()">Theme switch</button>
        </ul>
    </nav>
<div class="all">
  
<h1>Welcome to our Wellness Center</h1>
<h4>A Residential Retreat For Your Mind, Body and Soul</h4>
<p>    
     At our Wellness Center, we know that wellness is more than just being physically well, it means taking care of yourself holistically. Join us in your adventure to health, peace of mind and healing, whether you are 
     looking to unwind, recharge or transform. 
</p>
<p>
Together, we assist you on your journey to do less and feel more, with the ways in which you can use them as part of your life: stress relief; movement; healthy food choices; and using mindfulness to clear up your mind.
</p>
<div class="picture">
    <img src="./galerija1/wellness1.jpg" alt="wellness">
    <img src="./galerija1/wellness2.jpg" alt="wellness">
    <img src="./galerija1/wellness3.jpg" alt="wellness">
</div>
<h3>What services does our Wellness Center offer?</h3>
<ul>
    <li>Yoga & Meditation Classes</li>
    <li>Holistic Health Coaching</li>
    <li>Nutritional Counseling & Meal Planning</li>
    <li>Massage & Body Treatments</li>
    <li>Mindfulness & Stress Management Workshops</li>
    <li>Spa Treatments</li>
    <li>Group Wellness Retreats</li>
    <li>Personal Fitness Training</li>
</ul>
<p>You can find more about these services by <a href="services.html">clicking here.</a></p>
<div class="container">
    <div class="gallery">
        <img src="./galerija/img1.jpg">
        <img src="./galerija/img2.jpg">
        <img src="./galerija/img4.jpg">
        <img src="./galerija/img3.jpg">
        <img src="./galerija/img5.jpg">
        <img src="./galerija/img6.jpg">
        <img src="./galerija/img7.jpg">
        <img src="./galerija/img8 (1).jpg">
        <img src="./galerija/img9.jpg">
    </div>
</div>
<div class="modal" id="modal">
    <span class="close" id="close">&times;</span>
    <img id="modalImage" src="" alt="">
</div>
<h3>Why Choose Us?</h3> 
<p>
Your regard for your life and health matters at our Wellness Center. Our experts will work with you in developing a sustainable path which will combine wisdom from history and wellness with the most accurate science of today.
</p>
<p>
<b>Certifications</b> — We have a very powerful and passionate loving set of people on our platform including yoga teachers, dieticians, exercise specialists, and beauty therapists who are determined towards improving your quality of life.
</p>
<p>
<b>Complete Coverage</b> — We don’t treat just one thing. All our designed programs ensure that as our patient or client you walk away with assisted physical and or mental changes.
</p>
<p>
<b>Individual Approach</b>— We'll create a personal program exclusive for you. Since every person is unique, we make sure to incorporate your requests into the program.
</p>

<h3> Become a part of us today and start your journey to wellness</h3>
<p>
Are you ready to change your life for the better? We offer a variety of services that will help improve your health, bring you peace of mind, and provide you with balance. At our Wellness Center, we are with you throughout the process.

You can reach out to us for additional information or questions, to schedule your first meeting, or to make an appointment.
</p>
<div class="video">
<iframe  
src="https://www.youtube.com/embed/ddphlZjKB7s?si=6wDlx4mAqWvMBFzm autoplay=1&mute=1"></iframe>
<h3>Because wellness is not just a destination – it’s a way of life.</h3>
</div>
<hr>

<!--<div class="container">
    <footer>
        <p>Foundations of Web Development</p>
        <p>Amina Salčinović</p>
    </footer>
    </div>--></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script> 
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
<script src="../javascript/script.js"></script>
<script src="../javascript/script5.js"></script>
<script src="../javascript/script3.js"></script>
<script src="../javascript/script4.js"></script>
    `,
    '/services': `
            <nav>
        <ul>
  <li><a href="../html/home.html">Home</a></li>
            <li><a href="../html/services.html">Services</a></li> 
            <li><a href="../html/membership.html">Membership</a></li>
            <li><a href="../html/blog.html">Blog</a></li>
            <li><a href="../html/contactus.html">Contact</a></li>
            <li><a href="../html/weather.html">Weather</a></li>
            <button class="theme-toggle-button" onclick="toggleTheme()">Theme switch</button>
        </ul>
        </nav>
<div class="background">
<div class="text1">
    <h1>Our Services</h1>
<p>
At our Wellness Center, we have an array of services that will help in nurturing the body, mind, and soul. We make sure that every client has an individual touch because this is a custom order. Take a look at the services that we have at the table and commence your journey towards achieving a quality life that is in balance.
</p>
<h2>Frequently Asked Questions</h2>

<div class="faq">
    <button class="toggle-btn">What is Wellness?</button>
    <div class="toggle-content">
        <p>Wellness is a holistic approach to health that encompasses physical, mental, and emotional well-being.</p>
    </div>
</div>

<div class="faq">
    <button class="toggle-btn">What services do you offer?</button>
    <div class="toggle-content">
        <p>We offer yoga classes, massage and body treatments, personal fitness training, spa treatments, and more.</p>
    </div>
</div>

<div class="faq">
    <button class="toggle-btn">How can I join?</button>
    <div class="toggle-content">
        <p>You can join by visiting our membership page or contact page.</p>
    </div>
</div>

</div>
<div class="container mt-5">
    <h2 class="text-center mb-4">Our Wellness Services</h2>
    
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Service</th>
                <th scope="col">Duration</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Holistic Health Coaching</td>
                <td>60 min</td>
                <td>$80</td>
            </tr>
            
            <tr>
                <td>Yoga and Meditation Classes</td>
                <td>45 min</td>
                <td>$50</td>
            </tr>
            
            <tr>
                <td>Spa Treatments</td>
                <td>30 min</td>
                <td>$60</td>
            </tr>
            
            <tr>
                <td>Personal Fitness Training</td>
                <td>30 min</td>
                <td>$40</td>
            </tr>
           
            <tr>
                <td>Massage & Body Treatments</td>
                <td>60 min</td>
                <td>$80</td>
            </tr>
        </tbody>
    </table>
</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>

<div class="text2">
<h3>Yoga & Meditation Classes</h3>
<p>
Our Yoga & Meditation classes aim to help you reconnect with your inner self, reduce stress, and improve your overall well-being. Whether you’re just starting out or have years of experience, our skilled instructors will lead you through various poses, breathing techniques, and mindfulness practices. Join us for group sessions or opt for personalized one-on-one classes to enhance your flexibility, strength, and tranquility.
</p><p>
Styles: Hatha, Vinyasa, Restorative, Yin
Benefits: Stress relief, increased flexibility, mental clarity, improved sleep, boosted energy levels</p>
<div class="container mt-5">
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#wellnessModal">
        Book NOW!
    </button>
    
    <div class="modal fade" id="wellnessModal" tabindex="-1" aria-labelledby="wellnessModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="wellnessModalLabel">Yoga and Mediation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Our yoga and meditation services are designed to help you achieve mental clarity, reduce stress, and improve your physical flexibility. A 45-minute session will leave you feeling calm, centered, and deeply relaxed.</p>
                    <p><strong>Duration:</strong> 45 minutes</p>
                    <p><strong>Price:</strong> $50</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="text3">
</p>
<h3>Holistic Health Coaching</h3>
<p>   
Our certified wellness coaches are dedicated to helping you reach your health goals. We take a personalized approach, crafting a roadmap that fits your unique lifestyle, health challenges, and aspirations. Whether it's weight management or developing sustainable healthy habits, we offer guidance, accountability, and motivation throughout your journey.</p><p>
Services: Tailored health plans, goal setting, emotional wellness support, lifestyle transformations
Benefits: Increased energy, enhanced mental and emotional well-being, healthier habits, weight loss, improved vitality
</p>
<div class="container mt-5">
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#healthModal">
        Book NOW!
    </button>
    
    <div class="modal fade" id="healthModal" tabindex="-1" aria-labelledby="healthModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="healthModalLabel">Holictic Health Coaching</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Our holistic health coaching helps you reduce stress, boost energy, and create lasting lifestyle change. A 60-minute session will leave you feeling balanced, focused, and empowered.</p>
                    <p><strong>Duration:</strong>60 minutes</p>
                    <p><strong>Price:</strong> $80</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="text4">
<h3>Nutritional Counseling & Meal Planning</h3>
<p>    
Eating nourishing, whole foods is essential for good health. Our nutrition experts will collaborate with you to design a personalized meal plan that reflects your dietary preferences, health objectives, and any specific concerns (like food allergies or sensitivities). We’ll assist you in making informed food choices that promote your energy, weight, and overall wellness.
</p><p>
Services: Personalized meal plans, nutrient-rich recipes, detox and cleansing programs, meal prep guidance
Benefits: Improved digestion, balanced weight, better skin health, sustained energy levels, clearer thinking.
</p>
</div>
<div class="text5">
<h3>Massage & Body Treatments</h3>
<p>
Relax and rejuvenate with our selection of therapeutic massage and body treatments. Whether you want to relieve muscle tension, alleviate chronic pain, or simply unwind, our licensed massage therapists provide various techniques, including Swedish, deep tissue, hot stone, and aromatherapy massages. We also offer body scrubs, wraps, and detox treatments to nourish your skin and relax your body.
</p><p>
Services: Swedish massage, Deep tissue massage, Hot stone therapy, Aromatherapy massage, Detox body wraps
Benefits: Reduced stress, improved circulation, muscle relaxation, improved skin texture, enhanced mood
</p>
<div class="container mt-5">
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#massageModal">
        Book NOW!
    </button>
    
    <div class="modal fade" id="massageModal" tabindex="-1" aria-labelledby="massageModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="massageModalLabel">Massage Therapy</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Our massage therapy service helps to relieve stress, reduce muscle tension, and improve overall well-being. A 60-minute session will leave you feeling refreshed and rejuvenated.</p>
                    <p><strong>Duration:</strong> 60 minutes</p>
                    <p><strong>Price:</strong> $80</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="text6">
<h3>Mindfulness & Stress Management Workshops</h3>
<p>
Discover effective tools to manage stress, enhance mental clarity, and stay present with our mindfulness workshops. Through guided meditation, breathwork, and mindful movement, we’ll help you lessen the effects of stress in your life and build greater emotional resilience. These workshops are crafted to help you develop habits that support long-term mental well-being.
</p><p>
Services: Meditation techniques, breathwork exercises, stress reduction tools, mindful living practices
Benefits: Reduced anxiety, improved focus, emotional balance, better sleep, mental clarity
</p>
</div>
<div class="text7">
<h3>Spa Treatments</h3>
<p>
Treat yourself to luxurious spa treatments designed to pamper and restore your body. From facials and skincare treatments to body massages and scrubs, our spa services help you relax, rejuvenate, and enhance your natural beauty. Our holistic approach utilizes natural products to nourish your skin, leaving you feeling refreshed, restored, and radiant.
</p><p>
Services: Signature facials, Hydrating body treatments, Skin rejuvenation therapies, Hand and foot treatments
Benefits: Glowing skin, relaxation, detoxification, improved skin elasticity<br>
<p>
    You can find more information about these treatments <a  href="https://www.maabspa.ba/facial" target="_blank">by clicking here.</a>
</p>
<div class="container mt-5">
     
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#spaModal">
        Book NOW!
    </button>

<div class="modal fade" id="spaModal" tabindex="-1" aria-labelledby="spaModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="spaModalLabel">Spa Treatments</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Our spa treatment is designed to help you unwind your body and mind. Using natural oils and best techniques, this treatment promotes relaxation, improves circulation, and nourishes the skin. A 30-minute session will leave you feeling relaxed, glowing, and at peace.</p>
                <p><strong>Duration:</strong> 30 minutes</p>
                <p><strong>Price:</strong> $60</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Book Now</button>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<div class="text8">
<h3>Group Wellness Retreats</h3>
<p>
Take a break from the hustle and bustle of everyday life and dive into our transformative wellness retreats. These multi-day experiences blend yoga, meditation, nutrition workshops, spa treatments, and nature excursions. Whether you’re looking for relaxation, rejuvenation, or personal development, our retreats offer the ideal chance to disconnect and recharge.
</p><p>
Services: Daily yoga & meditation sessions, nutrition workshops, group coaching, nature walks, spa treatments
Benefits: Stress relief, clarity of mind, deep relaxation, connection with like-minded individuals, personal growth
</p>
</div>
<div class="text9">
<h3>Personal Fitness Training</h3>
<p>
Our certified personal trainers will design a fitness plan specifically for your goals, whether you want to lose weight, build strength, or enhance your overall fitness. With an emphasis on functional movement, strength training, and cardiovascular health, we’ll support you in reaching your fitness objectives and cultivating a sustainable, active lifestyle. </p>
<p>
Services: One-on-one personal training, strength and conditioning, cardiovascular training, flexibility and mobility exercises
Benefits: Increased strength, improved cardiovascular health, weight loss, better posture, enhanced endurance<br>
If you want to know more about personal training, you can visit <a href="https://www.gymguyz.com/training-services/" target="_blank">this page.</a></p>
</p>
<div class="container mt-5">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fitnessModal">
        Book NOW!
    </button>
    <div class="modal fade" id="fitnessModal" tabindex="-1" aria-labelledby="fitnessModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="fitnessModalLabel">Personal Fitness Training</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Our personal training services are tailored to meet your individual fitness goals, whether it's weight loss, muscle gain, or improved endurance. With personalized coaching, we help you achieve your fitness potential in a supportive environment.</p>
                    <p><strong>Duration:</strong> 30 minutes</p>
                    <p><strong>Price:</strong> $40</p>
                    <p><strong>Trainer:</strong> Edin Šeko (Certified Personal Trainer)</p>
                    <p>Book your session now and take the first step towards a healthier, stronger you!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
<div class="text10">
<h3>Ready to Start Your Wellness Journey?</h3>
<p>
No matter what your wellness goals are, we’re here to support you in reaching them. Our team of certified professionals is committed to helping you on your journey toward a healthier, more balanced life.<a href="contactus.html"><br>Contact us</a> today to book your consultation or to find out more about our services.
</p>

<div class="container mt-5">
    <h2 class="text-center mb-4">Wellness Services</h2>


    <div class="row row-cols-1 row-cols-md-3 g-4">
       
        <div class="col">
            <div class="card">
                <img src="./galerija1/massage1.jpg" class="card-img-top" alt="Massage Therapy">
                <div class="card-body">
                    <h5 class="card-title">Massage Therapy</h5>
                    <p class="card-text">Relax with a 60-minute massage therapy session.</p>
                    <a href="#" class="btn btn-primary">See More</a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
                <img src="./galerija1/yoga1.jpg" class="card-img-top" alt="Yoga Classes">
                <div class="card-body">
                    <h5 class="card-title">Yoga Classes</h5>
                    <p class="card-text">Join our yoga sessions to improve flexibility, strength, and relaxation.</p>
                    <a href="#" class="btn btn-primary">Join Now</a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
                <img src="./galerija1/face.jpg" class="card-img-top" alt="Facial Treatment">
                <div class="card-body">
                    <h5 class="card-title">Facial Treatment</h5>
                    <p class="card-text">Treat your skin to a refreshing and revitalizing facial treatment.</p>
                    <a href="#" class="btn btn-primary">Book Now</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="container1">
    <footer>
        <p>Foundations of Web Development</p>
        <p>Amina Salčinović</p>
    </footer>
    </div>
</div>
<script src="../javascript/script.js" ></script>
<script src="../javascript/script3.js"></script>
    `,
    '/membership': `
    <nav>
    <ul>
        <li><a href="/" data-link>Home</a></li>
            <li><a href="/services" data-link>Services</a></li>
            <li><a href="/membership" data-link>Membership</a></li>
            <li><a href="/blog" data-link>Blog</a></li>
            <li><a href="/contactus" data-link>Contact</a></li>
            <li><a href="/weather" data-link>Weather</a></li>
            <button class="theme-toggle-button" onclick="toggleTheme()">Theme switch</button>
    </ul>
    </nav>

<div class="text"><h1>Membership - Become a Member and Enjoy Exclusive Benefits! </h1>
    <div class="picture">
       <img src="galerija1/membershipslika.webp" alt="wellness membership">
    </div>
<h2>
    Our wellness community offers various membership packages to give you access to all our services and programs at discounted rates. Join today and start living healthier, happier, and more balanced!
</h2> 
<div class="accordion">
    <div class="accordion-item">
        <div class="accordion-header">Basic membership</div>
        <div class="accordion-content">
<ul>
<li>For the start of your wellness journey</li>

<li>One month access to all basic services and content.</li>
<li>One group yoga class per week.</li>
<li>10% discount on all wellness treatments (massage, spa, etc.).</li>
<li>Access to online meditation and breathing exercises.</li>
<li>Price: 50$ / month</li>
</ul>
</div>
</div>

<div class="accordion-item">
<div class="accordion-header">Premium membership</div>  
<div class="accordion-content">
<ul>
<li>For serious progress in your wellness routine</li>
<li>All services from the Basic package.</li>
<li>Two group yoga classes per week of your choice.</li>
<li>One personal consultation with a wellness coach every month (fitness, nutrition, or mental health).</li>
<li>15% discount on treatments and products.</li>
<li>Access to specialized wellness workshops and seminars.</li>
<li>Free access to all online wellness content (videos, articles, wellness plans).</li>
<li>Price: 150$ / month</li>
</ul>
</div></div>
<div class="accordion-item">
    <div class="accordion-header">VIP Membership</div>
        <div class="accordion-content">
<h3>VIP Membership</h3>
<ul>
<li>For the ultimate wellness experience and priority services</li>
<li>All services from the Premium package.</li>
<li>Unlimited yoga and fitness classes each week.</li>
<li>2 free treatments of your choice (massage, facial, body treatment).</li>
<li>Access to exclusive VIP wellness events (private sessions, wellness retreats, special content).</li>
<li>30% discount on treatments and products</li>
<li>Personalized wellness plan with experts (trainer, nutritionist, wellness coach).</li>
<li>Access to special VIP events (private meditation sessions, retreats, online webinars).</li>
<li>Price: 250$ / month</li>
</ul>
</div></div></div>
</p>
<h3>Membership Benefits:</h3>
<p>    Access to exclusive content: Members get access to special content including videos, articles, and online guides that are not available to non-members.</p>
<p>    Discounts and privileges: Our members regularly receive special discounts on treatments, products, and wellness services.
<p>    Flexibility: Our packages are designed to meet all kinds of needs and lifestyles. From basic membership to exclusive VIP services, we have something for everyone.</p>
<p>    Personal support and progress tracking: Our members have access to personalized plans and consultations with wellness experts in fitness, nutrition, and mental health.
</p></p>
<hr>
<p id="text2">Become a member of our wellness community and enjoy individualized attention, exclusive benefits, and specialized programs that will help you improve your physical, mental, and emotional health. Whether you’re a wellness beginner or already experienced, we have everything you need to achieve balance and vitality.<br>We can't wait for you to join us, you can find us <a href="location.html">here.</a> </p>
<p>If you have any questions you can contact us via email: <a href="mailto:amela.vatres@stu.ibu.edu.ba" target="_blank">amela.vatres@stu.ibu.edu.ba</a></p>
</p>
<p id="message"></p>

<table id="data-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <!-- Dynamically filled table rows -->
    </tbody>
</table>
<hr>
<div class="container1">
    <footer>
        <p>Foundations of Web Development</p>
        <p>Amina Salčinović</p>
    </footer>
    </div>
</div>
<script src="../javascript/script2.js"></script>
<script src="../javascript/script3.js"></script>
<script src="../javascript/script8.js"></script>
    `,
    '/blog': `
            <nav>
        <ul>
            <li><a href="/" data-link>Home</a></li>
            <li><a href="/services" data-link>Services</a></li>
            <li><a href="/membership" data-link>Membership</a></li>
            <li><a href="/blog" data-link>Blog</a></li>
            <li><a href="/contactus" data-link>Contact</a></li>
            <li><a href="/weather" data-link>Weather</a></li>
            <button class="theme-toggle-button" onclick="toggleTheme()">Theme switch</button>
        </ul>
    </nav>
<div class="text">
<article>
   
    

<h3>Mindfulness: Cultivating Mental Clarity and Focus</h3>
<p>
Psychological health preservation is as important as looking after physical health, yet it gets relegated behind the grind of everyday existence. Building stress, anxiety, and overthinking drains the energy level out of a human and reduces the level of living.
Mindfulness is one of the greatest gifts to the mind. It is simply the act of being in the present moment without judgment. It is the focus on the here and now by forgetting about the past and the future.
<br>Here are a few ideas for practicing mindfulness:
<ol>
<li>Start your day with intention:</li> Before jumping into your normal routine, take a few moments to develop an intention for the day. An intention can be as simple as "Today I will live with gratitude" or "I will remain calm at times of stress."
<li>Pranayama:</li> Deep breathing activates the parasympathetic nervous system, calming one’s mind and reducing stress. Follow 4-7-8 counting breaths. Inhale for 4 counts, hold for 7, exhale completely for 8.
<li>Mindful activities:</li> Walking, eating, even dishwashing; but whatever activity you're doing, try to immerse yourself completely into that while avoiding distractions. Any activity of this sort certainly trains the brain to focus itself on living in the moment. 
</ol>
</p> 
<div class="blog-post" data-id="1">
    <h2>When and how often should I practice mindfulness exercises?</h2>
    <p>It depends on what kind of mindfulness exercise you plan to do. Simple mindfulness exercises can be practiced anywhere and anytime. Research indicates that engaging your senses outdoors is especially beneficial.</p>
    <p>For more structured mindfulness exercises, such as body scan meditation or sitting meditation, you'll need to set aside time when you can be in a quiet place without distractions or interruptions.</p>
    <button class="view-more" data-id="1">View More</button>
    <div class="additional-content" id="content-1" style="display: none;">
      <p> You might choose to practice this type of exercise early in the morning before you begin your daily routine.</p>
      <p>Aim to practice mindfulness every day for about six months. Over time, you might find that mindfulness becomes effortless. Think of it as a commitment to reconnecting with and nurturing yourself.</p>
      <p>You can also try more structured mindfulness exercises, such as:<br>

        Body scan meditation. <br>Lie on your back with your legs extended and arms at your sides, palms facing up. Focus your attention slowly and deliberately on each part of your body, in order, from toe to head or head to toe. Be aware of any sensations, emotions or thoughts associated with each part of your body.
        <br>Sitting meditation. <br>Sit comfortably with your back straight, feet flat on the floor and hands in your lap. Breathing through your nose, focus on your breath moving in and out of your body. If physical sensations or thoughts interrupt your meditation, note the experience and then return your focus to your breath.
        <br>Walking meditation. <br>Find a quiet place 10 to 20 feet in length, and begin to walk slowly. Focus on the experience of walking, being aware of the sensations of standing and the subtle movements that keep your balance. When you reach the end of your path, turn and continue walking, maintaining awareness of your sensations.</p>
    </div>
  </div>  
</article>
<article>
<h3>Physical Wellness: Move Your Body, Nourish Your Health</h3>
<p>
Though it is most correct to say that physical health is the foundation of
wellness, it does not mean that one has to visit the gym to eat the trendiest superfoods. Physical wellness is also about having a balanced approach that suits your body and lifestyle.
While regular movement is an essential aspect of maintaining physical health, you should not stick to an exercise routine that you don't enjoy-try dancing, swimming, or yoga. <br> Movement elevates your mood, improves energy levels, and lowers the risk of chronic diseases.
The role of nutrition in how you feel is fundamental. Incorporate whole foods-like fruits, vegetables, lean protein, and healthy fats-into your diet. Keep hydrated, drink enough water, and avoid processed sugary foods that give you an energy dip and lead to inflammation.
Crown sleep with priority. Sleep is the time that your body repairs itself physically and mentally. Aim at 7-9 hours of quality sleep each day. Have a routine before sleep to promote relaxation, like reading, some gentle stretching, or listening to calming music. 
</p>
</article>
<div class="picture">
    <img src="../galerija1/pexels-elly-fairytale-3822191.jpg" alt="physical wellness">
    <img src="../galerija1/pexels-elly-fairytale-3823039.jpg" alt="physical wellness">
    <img src="../galerija1/wellness4.png" alt="physical wellness">
</div>
<article>
<h3>Spiritual Wellness: Connecting to Your Higher Self</h3>
<p>
Spiritual wellness pertains to establishing a connection to the purpose and meaning of one's life, whether such connections arise through religion, nature, creative expression, or simply in touching bases with one's inner self. Such a connection supplies a deeper level of fulfillment and peace.<br>
<ol>
<li>Meditation and reflection: </li>Make time to reflect upon those values, goals, and life in the larger perspective. Meditation is a great tool to calm the mind and listen to the wisdom within you. A simple five minutes of quietness each day can be therapeutic.
<li>Practice gratitude:</li> Gratitude helps in removing the focus away from what is lacking in life to that which has been abundantly given. Journal three things for which you are grateful for in writing daily. This might well change catches on well after a while.
<li>Cultivate meaningful connections:</li> Also comes into play for spiritual wellness are the relationships you cultivate. Surround yourself with those who inspire and uplift you. Act kindly, big and small, build a community that fosters positivity and support.
</ol>
</p>
</article>
<article>
<h3>Emotional Wellness: Embrace Your Feelings</h3>
<p>
Emotional wellness involves some kind of conscious awareness and expression of emotions in an organized manner. Experiences of joy and love to frustrating and sad ones illustrate the normality of emotions. The key is to take them for what they are, without judgment, and learning how to deal with life.<br>
<ol>
    <li>Acknowledge your emotions:</li> Don't suppress feelings but feel them fully. Feeling stressed, anxious, or sad? Notice them with no judgment. Sometimes, just putting a name to what you're feeling can help lift a weight off one's shoulders.
    <li>Seek support:</li> Do not be afraid to lean on friends, family, or a therapist, when needed. Talking to someone about what is happening allows you to gain insight and work through the healing process.
    <li>Practice self-care:</li> Self-care is not just about bubble baths. It is also about creating space and giving yourself time to process your experience. It could be napping, indulging in a favorite pastime, or sitting quietly with a cup of tea. 
</ol>
</p>
</article>
<article>
<h3>Balance: The Key to Sustainable Wellness</h3>
<p>Just when you realize true wellness doesn't have to be perfect, but rather balanced, you also understand true wellness is about bringing together all aspects of health with your life. Periodic focus on physical health is sometimes necessary; on occasions, perhaps more concentrated on either mental or emotional well being.<br>
Wellness is a way: never, say never, be a destination-dynamic and evolving process that requires a healthy dose of self-compassion and patience.The awareness you're developing in every area of life will guide you along toward a sense of peace, clarity, and vibrancy.
</p>

</article>
<article>
<p>
Wellness is a personal experience, and it looks different for everyone. What is most important is to approach it with an open mind and a willingness to nurture the whole self. By opening doors for practices that support a person's mind, body, and spirit, a foundation for lasting wellness is set.
So while you breathe a breath of relief, listen to your body and honor your journey towards the wellness that is uniquely yours. 
</p>
</article>
<p>
    If you want to read more about this, you can visit <a href=" https://wellhub.com/en-us/blog/increasing-membership/health-and-wellness-bloggers-to-follow/ " target="_blank">this page.</a>
</p>
<h2>Blog Posts</h2>
<button id="loadBtn">Load Posts</button>
<div id="content"></div>
<br>
<div class="container">
<img src="https://www.weinstrasse.com/images/cms/main/754x435/B-AdobeStock-benessere-wellness-relax-schwimmbad-person-143897447(1).jpg" alt="Wellness picture" class="picture1">
<div id="offline-message" style="display: none; color: rgb(238, 255, 0);">
        There is no internet connection, the image can't be loaded.
    </div></div>
<hr>
<div class="container">
    <footer>
        <p>Foundations of Web Development</p>
        <p>Amina Salčinović</p>
    </footer>
    </div>
</div>
<script src="../javascript/script3.js"></script>
<script src="../javascript/script.js"></script>
<script src="../javascript/script6.js"></script>
<script src="../javascript/script7.js"></script>
    `,
    '/contactus': `
           <nav>
        <ul>
             <li><a href="../html/home.html">Home</a></li>
            <li><a href="../html/services.html">Services</a></li> 
            <li><a href="../html/membership.html">Membership</a></li>
            <li><a href="../html/blog.html">Blog</a></li>
            <li><a href="../html/contactus.html">Contact</a></li>
            <li><a href="../html/weather.html">Weather</a></li>
            <button class="theme-toggle-button" onclick="toggleTheme()">Theme switch</button>
        </ul>
    </nav>
    
    <div class="container mt-5">
        <h2 class="text-center mb-4">Contact Us</h2>
        <form id="contactForm" method="post" action="https://jsonplaceholder.typicode.com/posts">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name " required>
            </div>
            <div class="mb-3">
                <label for="surname" class="form-label">Surname</label>
                <input type="text" class="form-control" id="surname" placeholder="Enter your surname" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email address" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
                <small id="passwordHelp" class="form-text text-muted">Password strength: <span id="passwordStrength">Weak</span></small>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter your address">
            </div>
            <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <select class="form-select" id="subject" >
                    <option value="">Choose an subject</option>
                    <option value="inquiry">Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Other</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="dob" class="form-label">Date of birth</label>
                <input type="date" class="form-control" id="dob">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3" placeholder="Enter your Message" required></textarea>
            </div>
            <div class="mb-3">
                <label for="suggestions" class="form-label">Suggestions</label>
                <textarea class="form-control" id="suggestions" rows="2" placeholder="Your suggestions"></textarea>
            </div>

            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="consent" required>
                <label class="form-check-label" for="consent">I accept the terms of use and processing of my data</label>
          </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    <div id="successMessage" style="display:none; color: rgb(247, 255, 139); margin-top: 10px;">
        Successfully sent!
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
<hr>
<div class="container1">
    <footer>
        <address>
            Butmirska cesta 18, Ilidža<br>
            Email: <a href="wellnesscenter@gmail.com">wellnesscenter@gmail.com</a><br>
            Phone: <a href="tel: +33675903">+33 675 903</a>
        </address>
        <hr>
        <p>Foundations of Web Development</p>
        <p>Amina Salčinović</p>
    </footer>
    </div>
<script src="../javascript/script1.js"></script>
<script src="../javascript/script.js"></script>
<script src="../javascript/script3.js"></script>
    `,
    '/weather': `
        <nav>
        <ul>   <li><a href="../html/home.html">Home</a></li>
            <li><a href="../html/services.html">Services</a></li> 
            <li><a href="../html/membership.html">Membership</a></li>
            <li><a href="../html/blog.html">Blog</a></li>
            <li><a href="../html/contactus.html">Contact</a></li>
            <li><a href="../html/weather.html">Weather</a></li>
            <button class="theme-toggle-button" onclick="toggleTheme()">Theme switch</button>
        </ul>
    </nav>
<div class="weatherInput">

  
    <input type="text" id="cityInput" name="cityInput" placeholder="Input City" />
    <button onclick="fetchWeather()">
        Submit
    </button>
    <h5 id="error"></h5>
    <h3 id="city"></h3>
    <div id="weather"></div>

</div>
    `,
};
const renderView = () => {
    const app = document.getElementById('app');
    const view = routes[window.location.pathname] || '<h1>404</h1><p>Page not found.</p>';
    app.innerHTML = view;
    highlightActiveLink(); 
};

// Navigacija bez osvježavanja stranice
const navigateTo = (url) => {
    history.pushState(null, null, url);
    renderView();
};

// Event listener za linkove sa data-link atributom
document.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

// Funkcija za označavanje aktivnog linka
const highlightActiveLink = () => {
    const links = document.querySelectorAll('[data-link]');
    links.forEach((link) => {
        link.classList.toggle('active', link.pathname === window.location.pathname);
    });
};

// Render stranice na učitavanje
window.addEventListener('popstate', renderView);
window.addEventListener('load', renderView);