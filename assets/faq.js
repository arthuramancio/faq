const sheetUrl = "URL_DA_SUA_WEBAPP_DO_GOOGLE_SHEETS";

function highlight(text, search) {
  const regex = new RegExp("(" + search + ")", "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

function formatFAQ(data) {
  const categorias = {};
  data.forEach(({ categoria, pergunta, resposta, imagem, video }) => {
    if (!categorias[categoria]) categorias[categoria] = [];
    categorias[categoria].push({ pergunta, resposta, imagem, video });
  });
  return Object.entries(categorias).map(([cat, questions]) => ({
    title: cat,
    questions
  }));
}

function renderFAQs(faqData) {
  const container = document.getElementById("faq-container");
  container.innerHTML = "";
  faqData.forEach((cat, i) => {
    const section = document.createElement("section");
    section.innerHTML = `<h2 class='mt-4'>${cat.title}</h2>`;
    const accordion = document.createElement("div");
    accordion.className = "accordion";
    accordion.id = "accordion-" + i;
    cat.questions.forEach((q, j) => {
      const item = document.createElement("div");
      item.className = "accordion-item";
      item.innerHTML = `
        <h2 class="accordion-header" id="heading-${i}-${j}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${i}-${j}" aria-expanded="false" aria-controls="collapse-${i}-${j}">
            ${q.pergunta}
          </button>
        </h2>
        <div id="collapse-${i}-${j}" class="accordion-collapse collapse" aria-labelledby="heading-${i}-${j}" data-bs-parent="#accordion-${i}">
          <div class="accordion-body">
            ${q.resposta}
            ${q.imagem ? `<img src="${q.imagem}" class="img-fluid mt-2" alt="imagem relacionada">` : ""}
            ${q.video ? `<div class="ratio ratio-16x9 mt-2"><iframe src="${q.video}" frameborder="0" allowfullscreen></iframe></div>` : ""}
          </div>
        </div>`;
      accordion.appendChild(item);
    });
    section.appendChild(accordion);
    container.appendChild(section);
  });
  updateSuggestions(faqData);
}

function updateSuggestions(faqData) {
  const datalist = document.getElementById("sugestoes");
  datalist.innerHTML = "";
  const termos = new Set();
  faqData.forEach(c => c.questions.forEach(q => termos.add(q.pergunta)));
  termos.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    datalist.appendChild(opt);
  });
}

document.getElementById("searchInput").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  document.querySelectorAll(".accordion-item").forEach(item => {
    const header = item.querySelector(".accordion-button");
    const body = item.querySelector(".accordion-body");
    const txt = header.textContent.toLowerCase() + " " + body.textContent.toLowerCase();
    if (txt.includes(val)) {
      item.style.display = "block";
      header.innerHTML = highlight(header.textContent, val);
      body.innerHTML = highlight(body.textContent, val);
    } else {
      item.style.display = "none";
    }
  });
});

fetch(sheetUrl)
  .then(res => res.json())
  .then(data => renderFAQs(formatFAQ(data)));
