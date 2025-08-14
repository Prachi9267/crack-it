
document.addEventListener('DOMContentLoaded', () => {
    // Get the elements for the three boxes
    const internshipsBtn = document.getElementById('internships-btn');
    const hackathonsBtn = document.getElementById('hackathons-btn');
    const resourcesBtn = document.getElementById('resources-btn');
    const topLevelButtons = document.getElementById('top-level-buttons');
    const dynamicContentArea = document.getElementById('dynamic-content-area');

    const internshipsData = [
        "D.E. Shaw Ascend",
        "Google STEP",
        "Uber Star",
        "LinkedIn CoachIn",
        "Cisco CWIP",
        "JPMC SEP",
        "Microsoft Explorer"
    ];

    const hackathonsData = [
        "Google girl hackathon",
        "SMART INDIA HACKATHON"
    ];
    const resourcesData = [
        "Resume Building",
        "Online Assessment",
        "Technical Interview",
        "HR Interview"
    ]

    // Function to handle showing sub-blocks for a category
    function showSubBlocks(categoryName, dataArray, targetPage) {
        topLevelButtons.style.display = 'none';
        
        // This mapping will create the unique IDs for each section
        const idMapping = {
            "D.E. Shaw Ascend": "deshaw-content",
            "Google STEP": "google-step-content",
            "Uber Star": "uber-star-content",
            "LinkedIn CoachIn": "linkedin-content",
            "Cisco CWIP": "cisco-content",
            "JPMC SEP": "jpmc-content",
            "Microsoft Explorer": "microsoft-content",
            "Google girl hackathon": "googlegirl-content",
            "SMART INDIA HACKATHON": "sih-content",
            "Resume Building": "resume-content",
            "Online Assessment": "oa-content",
            "Technical Interview": "technical-content",
            "HR Interview": "hr-content"
        };
        
        const subBlocksHTML = dataArray.map(name => `
            <a href="${targetPage}#${idMapping[name]}" class="sub-content-box">
                ${name}
            </a>
        `).join('');

        dynamicContentArea.innerHTML = `
            <div class="sub-blocks-container">
                <div class="main-block">${categoryName}</div>
                ${subBlocksHTML}
            </div>
            <a href="#" class="back-button" id="back-to-main">Back to Main</a>
        `;

        const backButton = document.getElementById('back-to-main');
        backButton.addEventListener('click', (e) => {
            e.preventDefault();
            topLevelButtons.style.display = 'flex';
            dynamicContentArea.innerHTML = '';
        });
    }

    // Event listener for the main Internships button
    internshipsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSubBlocks('Internships', internshipsData, 'internships.html');
    });

    // Event listener for the main Hackathons button
    hackathonsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSubBlocks('Hackathons', hackathonsData, 'hackathons.html');
    });

    // Event listener for the Resources button
    resourcesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSubBlocks('Resources', resourcesData, 'resources.html');
    });
}); 