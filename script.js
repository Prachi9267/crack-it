document.addEventListener('DOMContentLoaded', () => {
    // Get the elements for the three boxes
    const internshipsBox = document.getElementById('internships-box');
    const hackathonsBox = document.getElementById('hackathons-box');
    const resourcesBox = document.getElementById('resources-box');
    const clickSound = document.getElementById('click-sound');
    const contentDisplayArea = document.getElementById('content-display-area');

    function playClickSound() {
        if (clickSound) {
            clickSound.currentTime = 0; // Rewind to the start
            clickSound.play();
        }
    }

    function showInternshipsContent() {
        playClickSound();
        contentDisplayArea.innerHTML = `
            <div class="content-section">
                <h2>Internship Opportunities</h2>

                <div class="opportunity">
                    <h3>Deshaw Desis Ascend</h3>
                    [cite_start]<p><strong>Timeline:</strong> August-September [off campus] [cite: 3]</p>
                    <p><strong>About:</strong> D.E. [cite_start]Shaw is a global investment and technology development firm founded in 1998[cite: 4]. [cite_start]The Ascend Educare Program is a six-month mentorship initiative for women in tech, launched in 2021[cite: 4]. Through this program, students gain a better understanding of work culture and real-world projects at D.E. [cite_start]Shaw[cite: 4]. [cite_start]The program provides a stipend of approximately INR 50,000 for its entire duration[cite: 5].</p>
                    
                    <h4>Eligibility Criteria</h4>
                    <ul>
                        [cite_start]<li>The program is only for women in engineering and is not open to male students[cite: 8].</li>
                        [cite_start]<li>Second- and third-year female students of B.Tech/B.E. programs are eligible[cite: 10].</li>
                        [cite_start]<li>Third- and fourth-year students in a five-year dual degree program are eligible[cite: 11].</li>
                        [cite_start]<li>First-year students in a two-year M.Tech/MS/MCA program are eligible[cite: 12].</li>
                        [cite_start]<li>Second-year students in a three-year MCA program are also eligible[cite: 13].</li>
                    </ul>

                    <h4>Procedure</h4>
                    <h5>Round 1: Resume Shortlisting</h5>
                    [cite_start]<p>This is an elimination round where your resume plays a crucial role[cite: 15, 16]. [cite_start]If your resume is shortlisted, you advance to Round 2[cite: 17]. [cite_start]This step also involves completing a detailed form with personal details, college information, transcripts, and essay questions[cite: 17].</p>
                    [cite_start]<p><strong>Tips:</strong> Do not write fake things to get the opportunity[cite: 20]. [cite_start]Highlight your skills and projects done till then[cite: 20].</p>
                    <h5>Round 2: HackerRank Online Test</h5>
                    [cite_start]<p>This test consists of three sections: Aptitude (mostly from probability, profit, and loss), Computer Science Fundamentals (time complexity, DBMS, OOPs), and three coding questions of medium-to-hard difficulty[cite: 22, 23, 35, 37]. [cite_start]Students who completed even half of the very tough question in the coding section were invited for further rounds[cite: 38, 39].</p>
                    [cite_start]<p><strong>Tips:</strong> For coding questions, practicing on platforms like Leetcode can help build basic understanding and problem-tackling approaches[cite: 42].</p>
                    <h5>Round 3: Technical and HR Interview</h5>
                    [cite_start]<p>This round lasts about 45 minutes[cite: 44]. [cite_start]The interviewer will ask an introduction and medium-to-hard coding questions on topics like linked lists and graphs[cite: 45, 46]. [cite_start]In the HR interview, questions testing soft skills will be asked[cite: 46].</p>
                </div>

                <div class="opportunity">
                    <h3>Google STEP</h3>
                    [cite_start]<p><strong>Timeline:</strong> November - December [off+on campus] [cite: 55]</p>
                    [cite_start]<p><strong>About:</strong> The Google STEP internship is a 12-week summer program for first and second-year undergraduate students in technical fields[cite: 56]. [cite_start]It provides hands-on experience with real Google projects, mentorship, and opportunities to develop both technical and professional skills[cite: 57].</p>
                    
                    <h4>Procedure</h4>
                    <ul>
                        [cite_start]<li><strong>A robust Resume:</strong> A good resume is crucial to get you through the initial stage[cite: 59].</li>
                        [cite_start]<li><strong>Tips:</strong> You can use Overleaf for resume building[cite: 61].</li>
                        [cite_start]<li><strong>Telephonic follow-up:</strong> Questions include preferred language, and questions related to the projects on your resume[cite: 63].</li>
                        [cite_start]<li><strong>Final Interview:</strong> It takes place in two rounds[cite: 65]. [cite_start]A helpful tip is to communicate clearly and mention the approaches you are following to solve the question[cite: 65].</li>
                    </ul>
                    [cite_start]<p><strong>Tips:</strong> Practice mock interviews (technical + behavioral)[cite: 67]. [cite_start]Study topics like arrays, linked lists, trees, and graphs[cite: 68]. [cite_start]Communication is just as important as coding skills during interviews[cite: 69].</p>
                </div>
                
                <div class="opportunity">
                    <h3>Uber Star</h3>
                    [cite_start]<p><strong>Timeline:</strong> January [on campus] [cite: 70]</p>
                    [cite_start]<p><strong>About:</strong> She++ is a professional development summit hosted by Uber to empower women and people from underserved communities to find and achieve their career ambitions[cite: 71]. [cite_start]Participants can get an opportunity to appear directly for a hiring manager interview for the Uber STAR internship program, which offers a stipend of up to INR 1,00,000 per month if selected[cite: 85].</p>

                    <h4>Eligibility</h4>
                    <ul>
                        [cite_start]<li>Students in Computer Science, Engineering, or related fields[cite: 73].</li>
                        [cite_start]<li>2nd and 3rd year students who identify as female, people with disabilities, or LGBTQIA+[cite: 74].</li>
                        [cite_start]<li>Must be attending an accredited engineering college or university[cite: 75].</li>
                    </ul>
                    <h4>Procedure</h4>
                    <ul>
                        [cite_start]<li><strong>Application Screening:</strong> Initial screening based on academic performance, experience, and overall profile[cite: 78].</li>
                        [cite_start]<li><strong>Online Assessment:</strong> A coding test with a duration of 1 hour and 30 minutes to solve four questions related to general CS fundamentals and DSA[cite: 81, 82].</li>
                        [cite_start]<li><strong>Hiring Manager Interview:</strong> Those selected for the Uber She++ program can appear directly for an interview for the Uber STAR internship program[cite: 84].</li>
                    </ul>
                    [cite_start]<p><strong>Tips:</strong> Build good projects to showcase your skills[cite: 87]. [cite_start]Practice coding regularly[cite: 88]. [cite_start]In an interview, stick to what you know[cite: 89].</p>
                </div>

                <div class="opportunity">
                    <h3>LinkedIn CoachIn</h3>
                    [cite_start]<p><strong>Timeline:</strong> January-February [off+on campus] [cite: 90]</p>
                    [cite_start]<p><strong>About:</strong> CoachIn is a mentorship program by LinkedIn for all women engineering students across India in the B.Tech course (2nd-year college students) having at least 70% CGPA[cite: 91, 92].</p>
                    <h4>Procedure</h4>
                    <ul>
                        [cite_start]<li><strong>Registration:</strong> Requires basic information and a LinkedIn profile[cite: 95].</li>
                        [cite_start]<li><strong>Hackerrank Test:</strong> Around three coding questions of easy to medium level[cite: 97].</li>
                        [cite_start]<li><strong>Phone Screening Round:</strong> A phone call asking basic questions about why you want to join, your vision, and your experience with open source[cite: 98, 99].</li>
                    </ul>
                    [cite_start]<p><strong>Tips:</strong> Your LinkedIn profile is a major factor, so polish it[cite: 101, 102]. [cite_start]Good DSA skills are needed to clear the coding round[cite: 103]. [cite_start]In the phone screening round, be honest, clear, and concise[cite: 106].</p>
                </div>
                
                <div class="opportunity">
                    <h3>Cisco CWIP</h3>
                    [cite_start]<p><strong>Timeline:</strong> February [on campus] [cite: 113]</p>
                    [cite_start]<p><strong>About:</strong> The Cisco Women Internship Program (CWIP) is a new initiative designed to empower female engineering students nearing the end of their second year[cite: 114]. [cite_start]This two-month internship offers a chance to enhance skills and gain industry exposure[cite: 115].</p>
                    <h4>Eligibility</h4>
                    <ul>
                        [cite_start]<li>Currently in the 4th semester of your degree[cite: 117].</li>
                        [cite_start]<li>Any branch and specialization[cite: 118].</li>
                        [cite_start]<li>Should not have any current backlogs[cite: 119].</li>
                    </ul>
                    <h4>Procedure</h4>
                    <ul>
                        [cite_start]<li>Registrations [cite: 121]</li>
                        [cite_start]<li>Online assessment [cite: 121]</li>
                        [cite_start]<li>Interview process [cite: 122]</li>
                        [cite_start]<li>Two-month internship with Cisco [cite: 122]</li>
                    </ul>
                    [cite_start]<p><strong>Tips:</strong> Practice LeetCode questions and use the Arsh sheet for DSA[cite: 123, 124].</p>
                </div>

                <div class="opportunity">
                    <h3>JPMC SEP</h3>
                    [cite_start]<p><strong>Timeline:</strong> March [for 3rd year internship] [cite: 125]</p>
                    [cite_start]<p><strong>About:</strong> This program is for 3rd year internship students and begins with submitting your resume[cite: 125, 128].</p>
                    <h4>Procedure</h4>
                    <ul>
                        [cite_start]<li><strong>First Round:</strong> An online assessment with two coding problems to be done in 45 minutes[cite: 129]. [cite_start]Example questions include a medium-level dynamic programming (DP) problem and a greedy algorithm problem[cite: 131, 132, 133].</li>
                        [cite_start]<li><strong>Round 2:</strong> A behavioral interview focused on assessing soft skills, problem-solving mindset, and cultural fit[cite: 135].</li>
                        [cite_start]<li><strong>Round 3:</strong> An invitation to participate in the Code for Good Hackathon held at JPMC’s office[cite: 143].</li>
                    </ul>
                </div>
                
                <div class="opportunity">
                    <h3>Microsoft Explorer Internship Program</h3>
                    [cite_start]<p><strong>About:</strong> This is an 8-week summer internship program specifically designed for first- and/or second-year college students[cite: 146]. [cite_start]The program allows the opportunity to experience the product development cycle's primary phases: Design, Build and Quality[cite: 147].</p>
                    <h4>Procedure</h4>
                    <ul>
                        [cite_start]<li>It starts with selection through your resume[cite: 149].</li>
                        [cite_start]<li>The initial interview is one 30-minute phone call, which consists of mostly behavioral questions[cite: 151].</li>
                        [cite_start]<li>The final round consists of 2 (45-minute) rounds with 1 interviewer each[cite: 156]. [cite_start]Each interview is expected to give one programming question[cite: 157].</li>
                    </ul>
                    [cite_start]<p><strong>Tips:</strong> Most people haven’t done their Data Structures and Algorithms course by this stage, so there are a limited number of topics you need to cover: Strings, Arrays, Dictionaries/HashMaps, Linked Lists, and Binary Trees[cite: 154]. [cite_start]For questions, solve LeetCode[cite: 159].</p>
                </div>
            </div>
        `;
    }

    // Function to display content for Hackathons
    function showHackathonsContent() {
        playClickSound();
        contentDisplayArea.innerHTML = `
            <div class="content-section">
                <h2>Hackathon Details</h2>

                <div class="opportunity">
                    <h3>Google Girl Hackathon</h3>
                    [cite_start]<p><strong>Registration:</strong> Around Jan-March [cite: 162]</p>
                    [cite_start]<p><strong>About:</strong> This is a program for women students in computer science and allied courses across India[cite: 163]. [cite_start]It is designed to provide a platform for women to showcase their coding skills and promote creative solutions for real-time technical challenges[cite: 164].</p>
                    <h4>Procedure</h4>
                    <ul>
                        [cite_start]<li><strong>Round 1: Google Online Challenge:</strong> A coding round with 2 DSA questions of LeetCode medium-hard difficulty[cite: 167, 169]. [cite_start]Selection is based on coding performance and individual profile screening through resumes[cite: 171].</li>
                        [cite_start]<li><strong>Round 2: Google Learning Cohorts Workshops:</strong> Selected participants are divided into learning cohorts[cite: 173]. [cite_start]This is followed by a DSA coding round with 2 questions based on varied topics such as divide & conquer[cite: 174].</li>
                        [cite_start]<li><strong>Round 3: Ideathon Round:</strong> The hackathon enters its pre-final phase[cite: 177]. [cite_start]Participants choose one of three themes from a primary problem statement and develop a solution for it[cite: 178, 179].</li>
                        [cite_start]<li><strong>The Grand Finale:</strong> A presentation round where participants create a presentation on Google Slides and a demo of the working prototype[cite: 181].</li>
                    </ul>
                    [cite_start]<p><strong>Tips:</strong> Keep practicing DSA and give contests to get a stronghold over it[cite: 183]. [cite_start]Do not limit yourself to a particular stack; develop an attitude to solve problems through whatever means necessary[cite: 184].</p>
                </div>

                <div class="opportunity">
                    <h3>Smart India Hackathon (SIH)</h3>
                    [cite_start]<p><strong>About:</strong> Smart India Hackathon (SIH) is a premier nationwide initiative designed to engage students in solving some of the most pressing challenges faced in everyday life[cite: 187]. [cite_start]Winners get a prize money of 1 lakh[cite: 188].</p>
                    [cite_start]<p><strong>Procedure:</strong> The procedure for SIH involves several phases, including Problem Statement Launch, Registration of SPOCs, Internal Hackathon, Result Publication, Screening of Ideas, Mentoring & Training Sessions, and the Grand Finale[cite: 189].</p>
                </div>
            </div>
        `;
    }

    // Add click event listeners
    internshipsBox.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        playClickSound();
        window.location.href = 'internships.html';
    
    });

    hackathonsBox.addEventListener('click', (e) => {
        e.preventDefault();
        playClickSound();
        window.location.href = 'hackathons.html';
    });

    resourcesBox.addEventListener('click', (e) => {
        e.preventDefault();
        playClickSound();
        window.location.href = 'resources.html';
    });
});