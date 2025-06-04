fetch('data/perguntas.json')
  .then(res => res.json())
  .then(data => renderFAQs(data.faq));

const faqContainer = document.getElementById('faq-container');
const searchInput = document.getElementById('searchInput');

function renderFAQs(faqData) {
  faqContainer.innerHTML = '';
  faqData.forEach((cat, i) => {
    const section = document.createElement('div');
    section.innerHTML = `<h3 class='mb-3 mt-4'>${cat.category}</h3>`;
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    accordion.id = `accordion-${i}`;
    cat.questions.forEach((q, j) => {
      const id = `${i}-${j}`;
      accordion.innerHTML += `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-${id}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${id}">
              ${q.q}
            </button>
          </h2>
          <div id="collapse-${id}" class="accordion-collapse collapse" data-bs-parent="#accordion-${i}">
            <div class="accordion-body">${q.a}</div>
          </div>
        </div>`;
    });
    section.appendChild(accordion);
    faqContainer.appendChild(section);
  });
}

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  fetch('data/perguntas.json')
    .then(res => res.json())
    .then(data => {
      const filtered = data.faq.map(cat => ({
        category: cat.category,
        questions: cat.questions.filter(q => q.q.toLowerCase().includes(term) || q.a.toLowerCase().includes(term))
      })).filter(cat => cat.questions.length > 0);
      renderFAQs(filtered);
    });
});
