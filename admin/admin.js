
const categories = [
    { id: "dashboard-relatorios", file: "dashboard-relatorios.json" },
    { id: "reconhecimento-facial", file: "reconhecimento-facial.json" },
    { id: "manejo-alunos", file: "manejo-alunos.json" },
    { id: "comunicados-mensagens", file: "comunicados-mensagens.json" },
    { id: "presenca-justificativa", file: "presenca-justificativa.json" },
    { id: "integracoes", file: "integracoes.json" },
    { id: "funcionalidades", file: "funcionalidades.json" }
];

const categorySelect = document.getElementById("categorySelect");
const questionsList = document.getElementById("questionsList");
let currentCategory = "";
let currentData = {};

categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat.file;
    option.textContent = cat.id.replace(/-/g, " ").toUpperCase();
    categorySelect.appendChild(option);
});

categorySelect.addEventListener("change", () => {
    const file = categorySelect.value;
    currentCategory = file;
    fetch("../data/" + file)
        .then(res => res.json())
        .then(data => {
            currentData = data;
            renderQuestions();
        });
});

function renderQuestions() {
    questionsList.innerHTML = "";
    currentData.questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "mb-3 border p-2 rounded";
        div.innerHTML = \`
            <input type="text" class="form-control mb-1" placeholder="Pergunta" value="\${q.question}">
            <textarea class="form-control" rows="2" placeholder="Resposta">\${q.answer}</textarea>
            <button class="btn btn-sm btn-danger mt-1" onclick="removeQuestion(\${index})">Remover</button>
        \`;
        questionsList.appendChild(div);
    });
}

document.getElementById("addQuestionBtn").addEventListener("click", () => {
    currentData.questions.push({ question: "Nova pergunta", answer: "Resposta..." });
    renderQuestions();
});

function removeQuestion(index) {
    currentData.questions.splice(index, 1);
    renderQuestions();
}

document.getElementById("exportBtn").addEventListener("click", () => {
    document.querySelectorAll("#questionsList > div").forEach((div, i) => {
        currentData.questions[i].question = div.querySelector("input").value;
        currentData.questions[i].answer = div.querySelector("textarea").value;
    });
    const blob = new Blob([JSON.stringify(currentData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = currentCategory;
    a.click();
    URL.revokeObjectURL(url);
});
