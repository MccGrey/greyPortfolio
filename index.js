//========================FLOATING NAV FUNCTIONALITY===

const floatingNavs = document.querySelectorAll('.floating__nav a')

const removeActiveClass = () => {
    floatingNavs.forEach(nav => {
        nav.classList.remove('active')
    })
}
floatingNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        removeActiveClass();
        nav.classList.add('active')
    })
})

//=========RESUME=====
const resumeRight = document.querySelector('.resume__right')
const experienceContent = `<h4>Experience</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quia!
            </p>
            <ul>
                <li>
                    <h6>2024 - 2025</h6>
                    <h5>Full-Time</h5>
                    <p>Uncle 5 Grills</p>
                </li>
                <li>
                    <h6>2024 - 2024</h6>
                    <h5>Contract</h5>
                    <p>Bluske Entertainment</p>
                </li>
                
                <li>
                    <h6>2024 - 2024</h6>
                    <h5>Contract</h5>
                    <p>The Oranje Media</p>
                </li>
                <li>
                    <h6>2023 - 2024</h6>
                    <h5>Contract</h5>
                    <p>Social Media Ads</p>
                </li>
            </ul>
`
const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = 'resume__right'
    experienceBtn.classList.add('primary')
      //remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
  
})
//set experience content as default
resumeRight.innerHTML = experienceContent;


//education
const educationBtn = document.querySelector('.education__btn');
const educationContent = `<h4>Education</h4>
                        <p>loremmmemmdmmdmdmdnncjjnvnvfuvujfbhrygfrbhgb</p>
                        <ul>
                            <li>
                                <h5>College Education</h5>
                                <p>loremmnjdbdlorem jklorenme kjfjfjfnbfjfjbhhchbcbfhvfhfvnvn vnvnbv 
                                nfufbfyhfb 
                                </p>
                            </li>
                            <li>
                                <h5>College Education</h5>
                                <p>loremmnjdbdlorem jklorenme kjfjfjfnbfjfjbhhchbcbfhvfhfvnvn vnvnbv 
                                nfufbfyhfb 
                                </p>
                            </li>
                            <li>
                                <h5>College Education</h5>
                                <p>loremmnjdbdlorem jklorenme kjfjfjfnbfjfjbhhchbcbfhvfhfvnvn vnvnbv 
                                nfufbfyhfb 
                                </p>
                            </li>
                            <li>
                                <h5>College Education</h5>
                                <p>loremmnjdbdlorem jklorenme kjfjfjfnbfjfjbhhchbcbfhvfhfvnvn vnvnbv 
                                nfufbfyhfb 
                                </p>
                            </li>
                        </ul>

`

educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.classList.add('education')
    educationBtn.classList.add('primary')
      //remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
})


//skills

const skillsContent = `<h4>Skills</h4>
                    <p>lorem menfknjf jnvnjjnhv jvbjjbuvikd d</p>
                    <ul>
                        <li><img src="./assets/afterEffect.jpg" alt="aftereffect" ></li>
                        <li><img src="./assets/CapCut.jpg" alt="capcut" ></li>
                        <li><img src="./assets/Davinci.jpg" alt="davinci" ></li>
                        <li><img src="./assets//Photoshop.jpg" alt="photoshop" ></li>
                        <li><img src="./assets/Sketchbook.jpg" alt="sketchbook" ></li>
                    
                    </ul>`

const skillsBtn = document.querySelector('.skills__btn')
skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className = 'resume__right skills'
    skillsBtn.classList.add("primary")
    //remove classes from other buttons
    aboutBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
})

//about me

const aboutContent = `<h4>About me</h4>
                        <p>lorem fkijfif kfikijffhf fjdjfuuhjsd jfchfhu sjbhdgyudauhsijdjofj fjfbhfhubjjnf 

                        </p>
                        <ul>
                            <li>
                            <h6>Name:</h6>
                            <h5>Grey</h5>
                            </li>

                            <li>
                            <h6>Experience:</h6>
                            <h5>5+ years</h5>
                            </li>

                            <li>
                            <h6>Email:</h6>
                            <h5>corneliusaguonye@gmail.com</h5>
                            </li>

                            <li>
                            <h6>Nationality:</h6>
                            <h5>Nigerian</h5>
                            </li>

                            <li>
                            <h6>Freelance & Collabs:</h6>
                            <h5>Available</h5>
                            </li>

                            <li>
                            <h6>Language:</h6>
                            <h5>English</h5>
                            </li>

                            <li>
                            <h6>Phone:</h6>
                            <h5>+2348121299552</h5>
                            </li>

                            <li>
                            <h6>LinkedIn:</h6>
                            <h5>@mccgrey</h5>
                            </li>
                        </ul>
`
const aboutBtn = document.querySelector('.about__btn')
aboutBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = "resume__right about"
    aboutBtn.classList.add('primary')
    //remove classes from other buttons
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')

})