const sections = [
    {
        title: "Section 1",
        content: "Content for section 1",
    },
    {
        title: "Section 2",
        content: "Content for section 2",
    },
    {
        title: "Section 3",
        content: "Content for section 3",
    },
    // Add more sections as needed
];

document.addEventListener("DOMContentLoaded", function () {
    const accordionContainer = document.querySelector("#accordion");

    sections.forEach((section, index) => {
        const sectionItem = document.createElement("div");
        sectionItem.classList.add("accordion-item");

        const sectionHeader = document.createElement("div");
        sectionHeader.classList.add("accordion-header");
        sectionHeader.textContent = section.title;

        const sectionContent = document.createElement("div");
        sectionContent.classList.add("accordion-content");
        sectionContent.innerHTML = `<p>${section.content}</p>`;

        sectionItem.appendChild(sectionHeader);
        sectionItem.appendChild(sectionContent);
        accordionContainer.appendChild(sectionItem);

        if (index === 0) {
            sectionItem.classList.add("active");
            sectionContent.style.display = "block";
        }
    });

    accordionContainer.addEventListener("click", function (event) {
        const header = event.target.closest(".accordion-header");
        if (!header) return;

        const sectionItem = header.parentNode;
        const content = sectionItem.querySelector(".accordion-content");
        const isActive = sectionItem.classList.contains("active");

        document.querySelectorAll(".accordion-item").forEach((item) => {
            item.classList.remove("active");
            item.querySelector(".accordion-content").style.display = "none";
        });

        if (!isActive) {
            sectionItem.classList.add("active");
            content.style.display = "block";
        }
    });
});
