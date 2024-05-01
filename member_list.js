const membersData = [
    { name: "MtunesXs", imgSrc: "Members\MtunesXs.jpg" },
    { name: "Jane Smith", imgSrc: "Members/JaneSmith.jpg" },
    // Add more member data as needed
];

// Function to generate HTML for each member and append it to the container
function generateMemberElements() {
    const aboutContainer = document.getElementById("about-container");

    // Loop through each member data
    membersData.forEach(member => {
        // Create elements for member
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("about-member");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("about-img");
        const img = document.createElement("img");
        img.src = member.imgSrc;
        img.alt = member.name;
        imgDiv.appendChild(img);

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("about-name");
        nameDiv.textContent = member.name;

        // Append elements to member div
        memberDiv.appendChild(imgDiv);
        memberDiv.appendChild(nameDiv);

        // Append member div to container
        aboutContainer.appendChild(memberDiv);
    });
}

// Function to check if the user has scrolled to a certain point on the page
function checkScroll() {
    const aboutSection = document.getElementById("about");
    const aboutSectionOffset = aboutSection.offsetTop;

    if (window.scrollY > aboutSectionOffset - window.innerHeight / 2) {
        generateMemberElements();
        window.removeEventListener("scroll", checkScroll);
    }
}

// Event listener to call the checkScroll function when the user scrolls
window.addEventListener("scroll", checkScroll);