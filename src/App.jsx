import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import "./styles/main.css";

function App() {
  const perguntas = [
    {
      id: 1,
      question: "Como o GameWired determina a lista de ¨Jogos Mais Jogados¨?",
      ask: "A lista de ¨Jogos Mais Jogados¨ no GameWired é compilada com base em dados de popularidade e tendências atuais da indústria de jogos. Consideramos fatores como o número de jogadores ativos, o engajamento da comunidade e a relevância geral do jogo no cenário atual. Nosso objetivo é apresentar os títulos que estão em alta e são mais relevantes para a nossa audiência.",
    },

    {
      id: 2,
      question:
        "Como posso contribuir com a comunidade GameWired enviando minhas próprias análises ou conteúdo?",
      ask: "Para contribuir com a comunidade GameWired e enviar suas próprias análises ou conteúdo, você precisará primeiro criar uma conta e fazer login. Após o login, você poderá acessar a seção 'Comunidade' e seguir as instruções para submeter suas avaliações de jogos ou outros conteúdos. Certifique-se de que seu conteúdo esteja alinhado com nossas diretrizes de publicação para garantir uma experiência de qualidade para todos os usuários.",
    },

    {
      id: 3,
      question:
        "Que tipo de conteúdo posso esperar encontrar na seção ¨Plataformas¨?",
      ask: "A seção 'Plataformas' do GameWired é dedicada a notícias e informações específicas de diferentes plataformas de jogos, como PC, PlayStation, Xbox e Nintendo. Você pode esperar encontrar artigos sobre anúncios de jogos exclusivos para cada plataforma, atualizações de hardware, análises de recursos específicos da plataforma e outras notícias relevantes para o seu console ou sistema de jogo preferido.",
    },

    {
      id: 4,
      question:
        "Com que frequência o conteúdo de notícias do GameWired é atualizado e quais fontes vocês utilizam?",
      ask: "Nossa equipe de notícias no GameWired se esforça para manter o conteúdo o mais atualizado possível, com artigos sendo publicados diariamente, e muitas vezes várias vezes ao dia, para cobrir os últimos acontecimentos e lançamentos no mundo dos jogos. Coletamos nossas informações de fontes confiáveis da indústria, incluindo comunicados de imprensa oficiais de desenvolvedores e editores, anúncios verificados e outras publicações de jogos respeitáveis, sempre buscando precisão e integridade jornalística.",
    },

    {
      id: 5,
      question:
        " Como faço para criar e gerenciar minha conta de usuário no GameWired?",
      ask: "Para criar sua conta de usuário no GameWired, clique no link 'Cadastre-se' (ou 'Registrar') que você pode encontrar no rodapé do site. Siga as instruções para preencher seus dados e concluir o registro. Uma vez que sua conta esteja criada, você pode fazer login usando o link 'Login' no cabeçalho. Para gerenciar sua conta, como atualizar informações de perfil ou redefinir sua senha, acesse as configurações da sua conta após fazer login. Isso permitirá que você personalize sua experiência e participe plenamente da nossa comunidade.",
    },
  ];

  const [openSelceted, setOpenSelected] = useState(null);
  const openAsk = (index) => {
    setOpenSelected(index === openSelceted ? null : index);
  };

  return (
    <>
      <div className="eclipse"></div>

      <main>
        <div className="card-faq">
          <div className="header">
            <h1>Perguntas Frequentes</h1>
            <a href="" className="exit">
              <i className="ph ph-sign-out"></i>
            </a>
          </div>

          <div className="asks">
            {perguntas.map((d, index) => {
              return (
                <Questions
                  key={d.id}
                  perguntas={d}
                  onClick={() => openAsk(index)}
                  isOpen={openSelceted === index}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
