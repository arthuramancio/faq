export interface Question {
  id: string;
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  title: string;
  questions: Question[];
}

export const faqData: Category[] = [
  {
    id: "dashboard",
    title: "Dashboard e Relatórios",
    questions: [
      {
        id: "dashboard-1",
        question: "Como saber quais turmas e alunos fizeram reconhecimento facial?",
        answer: "Use o menu **Relatórios** com os filtros desejados: unidade, turma e data."
      },
      {
        id: "dashboard-2",
        question: "Como emitir um relatório de presença?",
        answer: "Vá em **Relatórios**, escolha o tipo e defina os filtros antes de gerar."
      },
      {
        id: "dashboard-3",
        question: "Como visualizar estatísticas de presença por turma?",
        answer: "Acesse o **Dashboard** principal e selecione a turma desejada no filtro superior. Os gráficos serão atualizados automaticamente."
      },
      {
        id: "dashboard-4",
        question: "É possível exportar relatórios em diferentes formatos?",
        answer: "Sim, após gerar qualquer relatório, use os botões de exportação no canto superior direito para baixar em PDF, Excel ou CSV."
      }
    ]
  },
  {
    id: "reconhecimento",
    title: "Reconhecimento Facial",
    questions: [
      {
        id: "reconhecimento-1",
        question: "Como cadastrar a face de um novo aluno?",
        answer: "Acesse o perfil do aluno, clique em **Reconhecimento Facial** e siga as instruções para capturar as imagens."
      },
      {
        id: "reconhecimento-2",
        question: "O que fazer quando o reconhecimento falha?",
        answer: "Verifique a iluminação, posicionamento e se o cadastro foi realizado corretamente. Se persistir, use a opção **Recadastrar Face** no perfil do aluno."
      },
      {
        id: "reconhecimento-3",
        question: "Quantas imagens são necessárias para o cadastro facial?",
        answer: "O sistema requer no mínimo 3 imagens em diferentes ângulos para garantir precisão no reconhecimento."
      },
      {
        id: "reconhecimento-4",
        question: "O sistema reconhece mesmo com máscara?",
        answer: "A versão atual tem capacidade limitada de reconhecimento com máscara. Recomendamos o cadastro sem máscara para maior precisão."
      }
    ]
  },
  {
    id: "alunos",
    title: "Manejo de Alunos",
    questions: [
      {
        id: "alunos-1",
        question: "Como adicionar um novo aluno?",
        answer: "Acesse **Alunos > Novo Aluno** e preencha os dados obrigatórios. Depois salve e prossiga para o cadastro facial."
      },
      {
        id: "alunos-2",
        question: "Como transferir um aluno de turma?",
        answer: "Na lista de alunos, selecione o aluno, clique em **Ações > Transferir** e escolha a nova turma."
      },
      {
        id: "alunos-3",
        question: "É possível importar uma lista de alunos?",
        answer: "Sim, use a função **Importar** na tela de alunos. Baixe o modelo, preencha e faça o upload do arquivo CSV ou Excel."
      }
    ]
  },
  {
    id: "comunicados",
    title: "Comunicados e Mensagens",
    questions: [
      {
        id: "comunicados-1",
        question: "Como enviar um comunicado para os pais?",
        answer: "Acesse **Comunicação > Novo Comunicado**, selecione os destinatários, escreva a mensagem e clique em Enviar."
      },
      {
        id: "comunicados-2",
        question: "É possível agendar comunicados?",
        answer: "Sim, ao criar um comunicado, marque a opção **Agendar Envio** e defina a data e hora desejadas."
      },
      {
        id: "comunicados-3",
        question: "Como saber se os pais visualizaram o comunicado?",
        answer: "Acesse **Comunicação > Histórico**, selecione o comunicado e veja as estatísticas de entrega e visualização."
      }
    ]
  },
  {
    id: "presenca",
    title: "Presença e Justificativa",
    questions: [
      {
        id: "presenca-1",
        question: "Como registrar presença manualmente?",
        answer: "Acesse **Presença > Registro Manual**, selecione a turma, data e marque os alunos presentes."
      },
      {
        id: "presenca-2",
        question: "Como os pais justificam faltas?",
        answer: "Os pais devem acessar o aplicativo móvel, selecionar a falta e enviar a justificativa com anexos se necessário."
      },
      {
        id: "presenca-3",
        question: "Como aprovar ou rejeitar justificativas?",
        answer: "Acesse **Presença > Justificativas Pendentes**, analise cada caso e clique em Aprovar ou Rejeitar."
      }
    ]
  },
  {
    id: "integracoes",
    title: "Integrações",
    questions: [
      {
        id: "integracoes-1",
        question: "Como integrar com o sistema de gestão escolar?",
        answer: "Acesse **Configurações > Integrações**, selecione seu sistema e siga as instruções específicas para API ou importação."
      },
      {
        id: "integracoes-2",
        question: "Quais sistemas são compatíveis?",
        answer: "O FaceSchool é compatível com os principais sistemas de gestão escolar do mercado, incluindo SchoolManager, EduSys e ClassMaster."
      }
    ]
  },
  {
    id: "funcionalidades",
    title: "Funcionalidades Gerais",
    questions: [
      {
        id: "funcionalidades-1",
        question: "Como alterar minha senha?",
        answer: "Acesse seu perfil no canto superior direito, clique em **Segurança** e depois em **Alterar Senha**."
      },
      {
        id: "funcionalidades-2",
        question: "Como configurar permissões de usuários?",
        answer: "Acesse **Configurações > Usuários**, selecione o usuário e ajuste as permissões conforme necessário."
      },
      {
        id: "funcionalidades-3",
        question: "O sistema funciona offline?",
        answer: "O módulo de reconhecimento facial pode funcionar offline temporariamente, sincronizando os dados quando a conexão for restabelecida."
      },
      {
        id: "funcionalidades-4",
        question: "Como atualizar o sistema?",
        answer: "As atualizações são automáticas. Quando disponíveis, você receberá uma notificação ao fazer login."
      }
    ]
  }
];
