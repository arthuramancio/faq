# FAQ FaceSchool

Este é um projeto de FAQ modular, elegante e pronto para hospedagem no GitHub Pages. Todas as perguntas e respostas são mantidas em um arquivo JSON externo para facilitar a atualização por pessoas não técnicas.

## ✅ Como instalar

1. Faça o clone do repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Substitua os arquivos do repositório por este pacote ZIP.

3. Faça o commit e push normalmente:
```bash
git add .
git commit -m "Adiciona sistema de FAQ modular com edição por JSON"
git push
```

4. Ative o GitHub Pages pelo menu **Settings > Pages** e selecione a branch `main` com a raiz `/`.

## ✏️ Como editar as perguntas

Edite o arquivo:
```
data/perguntas.json
```
Siga o formato:
```json
{
  "faq": [
    {
      "category": "Nome da Categoria",
      "questions": [
        { "q": "Pergunta?", "a": "Resposta." }
      ]
    }
  ]
}
```

## 🌐 Acesso

Basta acessar `https://seu-usuario.github.io/seu-repositorio/` após o deploy.
