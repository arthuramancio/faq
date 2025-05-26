
# FAQ FaceSchool - Guia de Publicação com Design Customizado

## ✅ Como colocar o site no ar:

1. **Crie um repositório no GitHub**.
2. Faça **upload de todos os arquivos deste projeto**.
3. Acesse **Settings** > **Pages**.
4. Em **Source**, selecione a **branch `main`** e a pasta **/ (root)**.
5. Clique em **Save**.

Seu FAQ estará acessível em:  
`https://<seu-usuario>.github.io/<nome-do-repositorio>/`

---

## ✅ Como editar ou adicionar perguntas:

1. Vá até a pasta `docs/`.
2. Localize o arquivo correspondente à categoria (`dashboard.md`, `reconhecimento.md` etc).
3. Para adicionar uma nova pergunta, use a seguinte estrutura:

```
<details>
<summary>Sua nova pergunta aqui?</summary>

Sua resposta aqui.
</details>
```

4. Salve e envie o commit para o GitHub.

As alterações serão **publicadas automaticamente**.

---

## ✅ Recursos incluídos:

- Layout **moderno**, **acessível** e **responsivo**.
- Blocos de FAQ **expandíveis/colapsáveis**.
- **Pesquisa integrada**.
- Mantido totalmente em **Markdown**.

---

## ✅ Manutenção:

- Edite os arquivos `.md` para adicionar ou alterar conteúdo.
- Personalize as cores e fontes diretamente no `<style>` do `index.html`.
