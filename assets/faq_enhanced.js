
const sheetUrl = "https://script.google.com/macros/s/AKfycbwRkth42EXxP4KgDgkvYr1fyaicJu0m9qW-OYz2yPpuPpC8ihg_WgiyJndAu9go58ftrw/exec";

function formatFAQ(data) {
  const categorias = {};
  data.forEach(({ categoria, pergunta, resposta, imagem, video }) => {
    if (!categorias[categoria]) categorias[categoria] = [];
    categorias[categoria].push({ pergunta, resposta, imagem, video });
  });
  return Object.entries(categorias).map(([cat, questions]) => ({ title: cat, questions }));
}

function renderFAQs(faqData) {
  const container = document.getElementById("faq-container");
  const catList = document.getElementById("category-list");
  container.innerHTML = "";
  catList.innerHTML = "";

  faqData.forEach((cat, i) => {
    // Adiciona ao menu lateral
    const link = document.createElement("a");
    link.href = `#cat-${i}`;
    link.textContent = cat.title;
    catList.appendChild(link);

    const section = document.createElement("section");
    section.id = `cat-${i}`;
    section.innerHTML = `<h2 class='section-title'>${cat.title}</h2>`;
    const accordion = document.createElement("div");
    accordion.className = "accordion mb-4";
    accordion.id = "accordion-" + i;

    cat.questions.forEach((q, j) => {
      const item = document.createElement("div");
      item.className = "accordion-item";
      let media = "";
      if (q.imagem) {
        media += `<div class='media'><img src="${q.imagem}" alt="Imagem relacionada"/></div>`;
      }
      if (q.video) {
        media += `<div class='media'><iframe src="${q.video}" frameborder="0" allowfullscreen></iframe></div>`;
      }
      item.innerHTML = `
        <h2 class="accordion-header" id="heading-${i}-${j}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${i}-${j}">
            ${q.pergunta}
          </button>
        </h2>
        <div id="collapse-${i}-${j}" class="accordion-collapse collapse" data-bs-parent="#accordion-${i}">
          <div class="accordion-body">${q.resposta}${media}</div>
        </div>
      `;
      accordion.appendChild(item);
    });

    section.appendChild(accordion);
    container.appendChild(section);
  });
}

fetch(sheetUrl)
  .then(res => res.json())
  .then(data => renderFAQs(formatFAQ(data)));
