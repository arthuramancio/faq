
const categories = [
    { id: "dashboard-relatorios", file: "dashboard-relatorios.json" },
    { id: "reconhecimento-facial", file: "reconhecimento-facial.json" },
    { id: "manejo-alunos", file: "manejo-alunos.json" },
    { id: "comunicados-mensagens", file: "comunicados-mensagens.json" },
    { id: "presenca-justificativa", file: "presenca-justificativa.json" },
    { id: "integracoes", file: "integracoes.json" },
    { id: "funcionalidades", file: "funcionalidades.json" }
];

const faqContainer = document.getElementById("faq-container");
const searchInput = document.getElementById("searchInput");

function highlight(text, search) {
    const regex = new RegExp(\`(\${search})\`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
}

function loadFAQs() {
    categories.forEach(category => {
        fetch("data/" + category.file)
            .then(response => response.json())
            .then(data => {
                const section = document.createElement("section");
                section.id = category.id;
                section.innerHTML = \`<h2 class="mt-4">\${data.title}</h2>\`;

                const accordionId = "accordion-" + category.id;
                const accordion = document.createElement("div");
                accordion.className = "accordion";
                accordion.id = accordionId;

                data.questions.forEach((q, index) => {
                    const item = document.createElement("div");
                    item.className = "accordion-item";

                    item.innerHTML = \`
                        <h2 class="accordion-header" id="heading-\${category.id}-\${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-\${category.id}-\${index}">
                                \${q.question}
                            </button>
                        </h2>
                        <div id="collapse-\${category.id}-\${index}" class="accordion-collapse collapse" data-bs-parent="#\${accordionId}">
                            <div class="accordion-body">\${q.answer}</div>
                        </div>
                    \`;
                    accordion.appendChild(item);
                });
                section.appendChild(accordion);
                faqContainer.appendChild(section);
            });
    });
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    document.querySelectorAll(".accordion-item").forEach(item => {
        const question = item.querySelector(".accordion-button").textContent.toLowerCase();
        const answer = item.querySelector(".accordion-body").textContent.toLowerCase();
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = "block";
            if (searchTerm) {
                item.querySelector(".accordion-button").innerHTML = highlight(item.querySelector(".accordion-button").textContent, searchTerm);
                item.querySelector(".accordion-body").innerHTML = highlight(item.querySelector(".accordion-body").textContent, searchTerm);
            } else {
                item.querySelector(".accordion-button").innerHTML = item.querySelector(".accordion-button").textContent;
                item.querySelector(".accordion-body").innerHTML = item.querySelector(".accordion-body").textContent;
            }
        } else {
            item.style.display = "none";
        }
    });
});

loadFAQs();
