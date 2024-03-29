const tabsData = [
    {
        id: "tab1",
        title: "Tab 1",
        content: "This is a content for Tab 1",
    },
    {
        id: "tab2",
        title: "Tab 2",
        content: "This is a content for Tab 2",
    },
    {
        id: "tab3",
        title: "Tab 3",
        content: "This is a content for Tab 3",
    },
    // Add more tabs object as needed
];

document.addEventListener("DOMContentLoaded", function () {
    let activeTab = tabsData[0].id;

    function renderTabs() {
        const tabContainer = document.querySelector("#tabContainer");
        const contentContainer = document.querySelector("#tabContentContainer");

        tabsData.forEach((tab) => {
            const tabButton = document.createElement("button");
            tabButton.className = "tabLinks";
            tabButton.textContent = tab.title;
            tabButton.setAttribute("data-tab", tab.id);
            tabContainer.appendChild(tabButton);

            const tabContent = document.createElement("div");
            tabContent.id = tab.id;
            tabContent.className = "tabContent";
            tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
            contentContainer.appendChild(tabContent);
        });

        tabContainer.addEventListener("click", function (event) {
            if (event.target.matches(".tabLinks")) {
                const tabId = event.target.getAttribute("data-tab");
                if (tabId !== activeTab) {
                    openTab(tabId);
                    activeTab = tabId;
                }
            }
        });
    }

    function openTab(tabId) {
        const tabContents = document.querySelectorAll(".tabContent");
        const tabLinks = document.querySelectorAll(".tabLinks");

        tabContents.forEach((tab) => tab.classList.remove("active"));
        tabLinks.forEach((tab) => tab.classList.remove("active"));

        document.getElementById(tabId).classList.add("active");
        document
            .querySelector(`button[data-tab="${tabId}"]`)
            .classList.add("active");
    }

    renderTabs();
    document.getElementById(activeTab).classList.add("active");
    document
        .querySelector(`button[data-tab="${activeTab}"]`)
        .classList.add("active");
});
