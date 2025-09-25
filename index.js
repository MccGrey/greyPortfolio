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
    skillBtn.classList.remove('primary')
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
    skillBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
})


//skills

