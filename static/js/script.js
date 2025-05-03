function toggleChat() {
  const chatContainer = document.getElementById("chat-container");
  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatBox = document.getElementById("chat-box");

  const isHidden = chatContainer.classList.contains("hidden");

  if (isHidden) {
    chatContainer.classList.remove("hidden");
    chatbotBtn.style.visibility = "hidden";
    chatbotBtn.style.opacity = "0";

    // Mostrar mensagem de boas-vindas do FURIA Bot
    chatBox.innerHTML = `
      <div class="bot-message">
        <strong>FURIA Bot:</strong> Olá! Eu sou o FURIA Bot 🤖<br>
        Estou aqui para te ajudar! Digite:<br>
        <strong>1</strong> - Ver jogadores<br>
        <strong>2</strong> - Ver próximos jogos<br>
        <strong>3</strong> - Onde assistir<br>
        <strong>4</strong> - Conquistas recentes<br>
        <strong>5</strong> - Loja oficial<br>
        <strong>6</strong> - Ranking atual<br>
        <strong>7</strong> - Último resultado<br>
        <strong>8</strong> - Coach / Técnico<br>
        <strong>9</strong> - Redes sociais<br>
        <strong>10</strong> - Ver opções novamente<br>
        <strong>11</strong> - Motivacional da FURIA
      </div>
    `;
  } else {
    chatContainer.classList.add("hidden");
    chatbotBtn.style.visibility = "visible";
    chatbotBtn.style.opacity = "1";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");
  const chatbotBtn = document.getElementById("chatbot-btn");
  const closeChatBtn = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");

  chatbotBtn.addEventListener("click", toggleChat);
  closeChatBtn.addEventListener("click", toggleChat);

  function mostrarMenu() {
    return `
      <br>Escolha uma das opções:<br>
      <strong>1</strong> - Ver jogadores<br>
      <strong>2</strong> - Ver próximos jogos<br>
      <strong>3</strong> - Onde assistir<br>
      <strong>4</strong> - Conquistas recentes<br>
      <strong>5</strong> - Loja oficial<br>
      <strong>6</strong> - Ranking atual<br>
      <strong>7</strong> - Último resultado<br>
      <strong>8</strong> - Coach / Técnico<br>
      <strong>9</strong> - Redes sociais<br>
      <strong>10</strong> - Ver opções novamente<br>
      <strong>11</strong> - Motivacional da FURIA
    `;
  }


  function enviarMensagem() {
    const userInput = chatInput.value.trim();
    if (userInput !== "") {
      chatBox.innerHTML += `<div class="user-message"><strong>Você:</strong> ${userInput}</div>`;

      let resposta = "";

      switch (userInput) {
        case "1":
          resposta = `
            Conheça os jogadores da FURIA:<br>
            - <a href="https://www.instagram.com/fallen/?hl=pt-br" target="_blank">FalleN</a><br>
            - <a href="https://www.instagram.com/chelok1ng/" target="_blank">chelo</a><br>
            - <a href="https://www.instagram.com/artcsgo/" target="_blank">arT</a><br>
            - <a href="https://www.instagram.com/yuurihfps/?hl=pt-br" target="_blank">yuurih</a><br>
            - <a href="https://www.instagram.com/kscerato/" target="_blank">KSCERATO</a>
          `;
          break;
        case "2":
          resposta = "Os próximos jogos da FURIA serão divulgados em breve! Fique de olho no nosso Instagram oficial: <a href='https://www.instagram.com/furiagg/' target='_blank'>@furiagg</a>";
          break;
        case "3":
          resposta = "Você pode assistir aos jogos da FURIA ao vivo no canal oficial da <a href='https://www.twitch.tv/eslbrasil?lang=pt' target='_blank' </a> ESLBrasil.";
          break;
          case "4":
            resposta = "Conquistas recentes: 🏆Campeã da ESL Pro League América do Sul 2024.";
            break;
          case "5":
            resposta = `Acesse a loja oficial da FURIA aqui: <a href="https://www.furia.gg/" target="_blank">furia.gg</a>`;
            break;
          case "6":
            resposta = "Ranking atual: #10 no ranking mundial da HLTV.";
            break;
          case "7":
            resposta = "Último resultado: Vitória contra G2 por 2 a 1.";
            break;
          case "8":
            resposta = 'Coach / Técnico atual: <a href="https://x.com/guerri" target="_blank">@guerri</a>';
            break;
          case "9":
            resposta = `Siga a FURIA nas redes sociais:<br>
            - Instagram: <a href="https://www.instagram.com/furiagg/" target="_blank">@furiagg</a><br>
            - Twitter: <a href="https://twitter.com/furia" target="_blank">@FURIA</a><br>
            - YouTube: <a href="https://www.youtube.com/channel/UCE4elIT7DqDv545IA71feHg" target="_blank">FURIA YouTube</a>`;
            break;
          case "10":
            resposta = "Claro! Aqui estão as opções novamente:" + mostrarMenu();
            break;
          case "11":
            resposta = "A FURIA não desiste. Jogue com garra, treine com disciplina e vença com honra. GLHF!";
            break;
          default:
            if (isNaN(userInput)) {
              resposta = `
                Ops! Só aceitamos números.<br>
                Tente digitar:<br>
                <strong>1</strong> - Ver jogadores<br>
                <strong>2</strong> - Ver próximos jogos<br>
                <strong>3</strong> - Onde assistir<br>
                <strong>4</strong> - Conquistas recentes<br>
                <strong>5</strong> - Loja oficial<br>
                <strong>6</strong> - Ranking atual<br>
                <strong>7</strong> - Último resultado<br>
                <strong>8</strong> - Coach / Técnico<br>
                <strong>9</strong> - Redes sociais<br>
                <strong>10</strong> - Ver opções novamente<br>
                <strong>11</strong> - Motivacional da FURIA`;
            } else {
              resposta = `
                Digite um número válido:<br>
                <strong>1</strong> - Ver jogadores<br>
                <strong>2</strong> - Ver próximos jogos<br>
                <strong>3</strong> - Onde assistir<br>
                <strong>4</strong> - Conquistas recentes<br>
                <strong>5</strong> - Loja oficial<br>
                <strong>6</strong> - Ranking atual<br>
                <strong>7</strong> - Último resultado<br>
                <strong>8</strong> - Coach / Técnico<br>
                <strong>9</strong> - Redes sociais<br>
                <strong>10</strong> - Ver opções novamente<br>
                <strong>11</strong> - Motivacional da FURIA`;
            }
        }
    
      chatBox.innerHTML += `<div class="bot-message"><strong>FURIA Bot:</strong> ${resposta}</div>`;
      chatInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }

  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      enviarMensagem();
    }
  });

  sendBtn.addEventListener("click", enviarMensagem);
});
