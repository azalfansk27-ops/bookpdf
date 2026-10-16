
const novels = [
    {
        title: "Fana-e-Hayat",
        author: "Alkash",
        genre: "Mystery · Romance",
        description:
            "A world of secrets, revenge, and mysteries waiting to unfold.",
        cover: "fana e hayat cover.jpg",
   
pdf: "https://novelstudiopk.com/2026/09/02/novels/fana-e-hayat-by-alkash-complete/"

    },
    {
        title: "Your Next Story",
        author: "Author Name",
        genre: "Fiction",
        description: "Add your novel description here.",
        cover: "",
        pdf: ""
    }
];

const grid = document.getElementById("book-grid");
const search = document.getElementById("search");
const count = document.getElementById("book-count");

function renderNovels(query = "") {
    const filtered = novels.filter(book => {
        const text =
            `${book.title} ${book.author} ${book.genre}`.toLowerCase();

        return text.includes(query.toLowerCase());
    });

    count.textContent = `${filtered.length} BOOKS`;
    grid.innerHTML = "";

    if (filtered.length === 0) {
        const message = document.createElement("p");
        message.className = "empty-message";
        message.textContent = "No novels found.";
        grid.appendChild(message);
        return;
    }

    filtered.forEach(book => {
        const card = document.createElement("article");
        card.className = "book-card";

        // Cover image or placeholder
        let cover;

        if (book.cover) {
            cover = document.createElement("img");
            cover.className = "book-cover";
            cover.src = book.cover;
            cover.alt = `${book.title} book cover`;
        } else {
            cover = document.createElement("div");
            cover.className = "cover-placeholder";

            const coverTitle = document.createElement("div");
            coverTitle.className = "cover-title";
            coverTitle.textContent = book.title;

            const label = document.createElement("small");
            label.textContent = "EXILED SOULS";

            cover.append(coverTitle, label);
        }

        // Novel information
        const info = document.createElement("div");
        info.className = "book-info";

        const genre = document.createElement("p");
        genre.className = "genre";
        genre.textContent = book.genre;

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.className = "author";
        author.textContent = `By ${book.author}`;

        const description = document.createElement("p");
        description.className = "description";
        description.textContent = book.description;

        info.append(genre, title, author, description);

        // PDF download button
        if (book.pdf) {
            const link = document.createElement("a");
            link.className = "download-btn";
            link.href = book.pdf;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "DOWNLOAD PDF";

            link.addEventListener("click", event => {
                event.stopPropagation();
            });

            info.appendChild(link);
        } else {
            const message = document.createElement("p");
            message.className = "description";
            message.textContent = "PDF coming soon.";
            info.appendChild(message);
        }

        card.append(cover, info);

        // Open Fana-e-Hayat details page on card click
        if (book.title === "Fana-e-Hayat") {
            card.style.cursor = "pointer";
            card.tabIndex = 0;
            card.setAttribute("role", "link");
            card.setAttribute(
                "aria-label",
                "View Fana-e-Hayat novel details"
            );

            card.addEventListener("click", () => {
                window.location.href = "novel.html";
            });

            card.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                    window.location.href = "novel.html";
                }
            });
        }

        grid.appendChild(card);
    });
}

// Search novels
search.addEventListener("input", event => {
    renderNovels(event.target.value);
});

// Display novels
renderNovels();
