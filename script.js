    const questions = [
      { level: "Fácil", points: 1, text: "Qual é o nome do poeta considerado o principal representante do Simbolismo brasileiro?", answers: ["Cruz e Sousa", "Castro Alves", "Olavo Bilac", "Gonçalves Dias"], correct: 0 },
      { level: "Fácil", points: 1, text: "Em que ano foi publicado <em>Missal</em>, obra que marca o início do Simbolismo no Brasil?", answers: ["1881", "1893", "1902", "1922"], correct: 1 },
      { level: "Fácil", points: 1, text: "Qual destas obras de Cruz e Sousa é considerada um marco inicial do Simbolismo brasileiro?", answers: ["<em>O Ateneu</em>", "<em>Missal</em>", "<em>Iracema</em>", "<em>Canção do Exílio</em>"], correct: 1 },
      { level: "Fácil", points: 1, text: "Qual poeta brasileiro também ficou conhecido pelo apelido de “Cisne Negro”?", answers: ["Alphonsus de Guimaraens", "Augusto dos Anjos", "Cruz e Sousa", "Fagundes Varela"], correct: 2 },
      { level: "Fácil", points: 1, text: "Qual destas características combina mais com a poesia simbolista?", answers: ["Objetividade científica", "Musicalidade e sugestão", "Humor e linguagem coloquial", "Descrições documentais"], correct: 1 },
      { level: "Fácil", points: 1, text: "Qual movimento literário veio antes do Simbolismo no Brasil?", answers: ["Modernismo", "Arcadismo", "Realismo", "Concretismo"], correct: 2 },
      { level: "Médio", points: 2, text: "Quais duas obras de Cruz e Sousa foram publicadas em 1893 e marcaram o Simbolismo brasileiro?", answers: ["<em>Broquéis</em> e <em>Missal</em>", "<em>Iracema</em> e <em>O Guarani</em>", "<em>Espumas Flutuantes</em> e <em>Navio Negreiro</em>", "<em>Os Sertões</em> e <em> Canaã</em>"], correct: 0 },
      { level: "Médio", points: 2, text: "Que recurso de linguagem aproxima palavras e sons para criar efeitos musicais, muito explorado pelos simbolistas?", answers: ["Aliteração", "Hipérbato", "Eufemismo", "Antítese"], correct: 0 },
      { level: "Médio", points: 2, text: "Quem é o autor de <em>Dona Mística</em> e <em>Câmara Ardente</em>?", answers: ["Cruz e Sousa", "Alphonsus de Guimaraens", "Raimundo Correia", "Olavo Bilac"], correct: 1 },
      { level: "Médio", points: 2, text: "Em que cidade brasileira nasceu Cruz e Sousa?", answers: ["Salvador", "Rio de Janeiro", "Desterro (atual Florianópolis)", "Ouro Preto"], correct: 2 },
      { level: "Médio", points: 2, text: "Que tipo de realidade os simbolistas buscavam sugerir para além do mundo visível?", answers: ["A realidade espiritual e subjetiva", "A rotina política do governo", "A vida urbana industrial", "A paisagem retratada com precisão científica"], correct: 0 },
      { level: "Médio", points: 2, text: "Qual figura de linguagem associa sensações de sentidos diferentes, como uma “voz doce”?", answers: ["Sinestesia", "Prosopopeia", "Anáfora", "Pleonasmo"], correct: 0 },
      { level: "Difícil", points: 3, text: "Qual é o título do poema de Cruz e Sousa que começa com “Vozes veladas, veludosas vozes”?", answers: ["“Antífona”", "“Violões que choram”", "“Acrobata da dor”", "“Ismália”"], correct: 1 },
      { level: "Difícil", points: 3, text: "Qual movimento francês, associado a Stéphane Mallarmé e Paul Verlaine, influenciou o Simbolismo?", answers: ["Naturalismo", "Parnasianismo", "Decadentismo e Simbolismo francês", "Futurismo"], correct: 2 },
      { level: "Difícil", points: 3, text: "No poema “Antífona”, de Cruz e Sousa, que palavra dá nome ao pedido que abre os versos: “Ó Formas alvas, brancas, Formas claras...”?", answers: ["Suplicas", "Cânticos", "Antífona", "Elegia"], correct: 2 },
      { level: "Difícil", points: 3, text: "Que tema recorrente de Alphonsus de Guimaraens se relaciona à morte de sua prima Constança?", answers: ["A exaltação da vida urbana", "A saudade, a morte e a idealização amorosa", "A crítica à industrialização", "A celebração da vida política"], correct: 1 },
      { level: "Difícil", points: 3, text: "O Simbolismo se opõe principalmente à confiança na razão e na descrição objetiva valorizadas por quais correntes?", answers: ["Realismo e Naturalismo", "Trovadorismo e Humanismo", "Barroco e Arcadismo", "Modernismo e Concretismo"], correct: 0 },
      { level: "Difícil", points: 3, text: "Qual recurso simbolista sugere ideias e estados de espírito por meio de imagens, em vez de nomeá-los diretamente?", answers: ["A sugestão simbólica", "A descrição jornalística", "A enumeração científica", "A narração cronológica"], correct: 0 }
    ];

    const secretChallenges = [
      {
        id: "master",
        answers: [
          "Apresentar uma descrição objetiva de um objeto real.",
          "Criar uma atmosfera espiritual por meio de imagens e sugestão.",
          "Narrar um acontecimento histórico em ordem cronológica.",
          "Defender uma ideia política de forma direta."
        ],
        correct: 1
      },
      {
        id: "doctorate",
        answers: [
          "Imitar um ruído mecânico para retratar uma cidade industrial.",
          "Criar musicalidade e sugerir um lamento por meio dos sons.",
          "Interromper o ritmo do poema para explicar seu tema.",
          "Reproduzir uma conversa cotidiana sem efeito poético."
        ],
        correct: 1
      }
    ];

    const levelNames = { Fácil: "Fácil", Médio: "Médio", Difícil: "Difícil" };
    const wheel = document.getElementById("wheel");
    const wheelScreen = document.getElementById("wheel-screen");
    const questionScreen = document.getElementById("question-screen");
    const resultScreen = document.getElementById("result-screen");
    const gameFooter = document.getElementById("game-footer");
    const spinButton = document.getElementById("spin-button");
    const turnNote = document.getElementById("turn-note");
    const usedQuestions = new Set();
    const usedChallenges = new Set();
    let scores = { girls: 0, boys: 0 };
    let currentTeam = "girls";
    let spinning = false;
    let gameOver = false;

    questions.forEach((question, index) => {
      const number = document.createElement("span");
      const angle = index * 20 + 10;
      number.className = "wheel-number";
      number.dataset.index = String(index);
      number.style.setProperty("--angle", `${angle}deg`);
      number.textContent = String(index + 1);
      wheel.append(number);
    });

    secretChallenges.forEach(challenge => {
      const answers = document.getElementById(`${challenge.id}-answers`);
      challenge.answers.forEach((answer, answerIndex) => {
        const button = document.createElement("button");
        button.className = "secret-answer";
        button.type = "button";
        button.textContent = answer;
        button.addEventListener("click", () => answerSecretChallenge(challenge, answerIndex));
        answers.append(button);
      });
    });

    function updateTurn() {
      const girlsTurn = currentTeam === "girls";
      document.getElementById("girls-team").classList.toggle("active-turn", girlsTurn);
      document.getElementById("boys-team").classList.toggle("active-turn", !girlsTurn);
      turnNote.textContent = `A vez é ${girlsTurn ? "das meninas" : "dos meninos"}`;
    }

    function returnToWheel() {
      questionScreen.hidden = true;
      wheelScreen.hidden = false;
      gameFooter.hidden = false;
      updateTurn();
      if (usedQuestions.size === questions.length) showResult("draw");
    }

    function showResult(winner) {
      gameOver = true;
      wheelScreen.hidden = true;
      questionScreen.hidden = true;
      resultScreen.hidden = false;
      gameFooter.hidden = true;
      if (winner === "draw") {
        document.getElementById("winner-title").textContent = "Que disputa!";
        document.getElementById("winner-message").textContent = `A roleta acabou: meninas ${scores.girls} × ${scores.boys} meninos.`;
      } else {
        const name = winner === "girls" ? "Meninas" : "Meninos";
        document.getElementById("winner-title").textContent = `${name} venceram!`;
        document.getElementById("winner-message").textContent = `Com ${scores[winner]} pontos, ${name.toLowerCase()} desvendam o enigma do Simbolismo!`;
      }
    }

    function showQuestion(index) {
      const question = questions[index];
      wheelScreen.hidden = true;
      questionScreen.hidden = false;
      document.getElementById("question-number").textContent = `Enigma ${index + 1}`;
      document.getElementById("question-level").textContent = `${levelNames[question.level]} · ${question.points} ${question.points === 1 ? "ponto" : "pontos"}`;
      document.getElementById("question-turn").textContent = currentTeam === "girls" ? "Vez das meninas" : "Vez dos meninos";
      document.getElementById("question-text").innerHTML = question.text;
      const answers = document.getElementById("answers");
      const feedback = document.getElementById("feedback");
      feedback.textContent = "";
      feedback.classList.remove("wrong");
      answers.replaceChildren();
      question.answers.forEach((answer, answerIndex) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.type = "button";
        button.innerHTML = answer;
        button.addEventListener("click", () => answerQuestion(index, answerIndex));
        answers.append(button);
      });
    }

    function answerQuestion(questionIndex, answerIndex) {
      const question = questions[questionIndex];
      const buttons = [...document.querySelectorAll(".answer-button")];
      buttons.forEach(button => { button.disabled = true; });
      usedQuestions.add(questionIndex);
      wheel.querySelector(`[data-index="${questionIndex}"]`).classList.add("used");
      const feedback = document.getElementById("feedback");
      if (answerIndex === question.correct) {
        buttons[answerIndex].classList.add("correct");
        scores[currentTeam] = Math.min(9, scores[currentTeam] + question.points);
        document.getElementById(`${currentTeam}-score`).textContent = String(scores[currentTeam]);
        feedback.textContent = `Resposta certa! +${question.points} ${question.points === 1 ? "ponto" : "pontos"} para ${currentTeam === "girls" ? "as meninas" : "os meninos"}.`;
      } else {
        buttons[answerIndex].classList.add("incorrect");
        buttons[question.correct].classList.add("correct");
        feedback.textContent = "Resposta incorreta — desta vez, sem pontos.";
        feedback.classList.add("wrong");
      }
      const winner = scores[currentTeam] >= 9 ? currentTeam : null;
      currentTeam = currentTeam === "girls" ? "boys" : "girls";
      window.setTimeout(() => {
        if (winner) showResult(winner);
        else returnToWheel();
      }, 1500);
    }

    function answerSecretChallenge(challenge, answerIndex) {
      if (gameOver || spinning || !questionScreen.hidden || usedChallenges.has(challenge.id)) return;

      usedChallenges.add(challenge.id);
      const buttons = [...document.querySelectorAll(`#${challenge.id}-answers .secret-answer`)];
      const feedback = document.getElementById(`${challenge.id}-feedback`);
      buttons.forEach(button => { button.disabled = true; });

      if (answerIndex === challenge.correct) {
        buttons[answerIndex].classList.add("correct");
        feedback.textContent = `Resposta certa! Uma guloseima para ${currentTeam === "girls" ? "as meninas" : "os meninos"}!`;
      } else {
        buttons[answerIndex].classList.add("incorrect");
        buttons[challenge.correct].classList.add("correct");
        feedback.textContent = "Resposta incorreta — a guloseima fica para outra ocasião.";
        feedback.classList.add("wrong");
      }

      currentTeam = currentTeam === "girls" ? "boys" : "girls";
      updateTurn();
    }

    document.getElementById("start-button").addEventListener("click", () => {
      document.getElementById("intro").hidden = true;
      document.getElementById("game").classList.add("active");
      updateTurn();
    });

    spinButton.addEventListener("click", () => {
      if (gameOver || spinning || usedQuestions.size === questions.length) return;
      spinning = true;
      spinButton.disabled = true;
      gameFooter.hidden = true;
      const available = questions.map((_, index) => index).filter(index => !usedQuestions.has(index));
      const selected = available[Math.floor(Math.random() * available.length)];
      const selectedCenter = selected * 20 + 10;
      const turns = 5 + Math.floor(Math.random() * 3);
      const targetRotation = turns * 360 - selectedCenter;
      wheel.style.transform = `rotate(${targetRotation}deg)`;
      window.setTimeout(() => {
        showQuestion(selected);
        spinning = false;
        spinButton.disabled = false;
      }, 3700);
    });

    document.getElementById("restart-button").addEventListener("click", () => window.location.reload());
