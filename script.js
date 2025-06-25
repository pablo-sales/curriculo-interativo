
const input = document.getElementById("input");
const output = document.getElementById("output");
let currentState = "menu";

function clearTerminal() {
  output.innerHTML = "";
}

function hideAllBoxes() {
  const boxes = document.querySelectorAll(".show-box");
  boxes.forEach(box => {
    box.classList.remove("show-box");
    box.classList.add("hidden-box");
  });
}


input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    input.value = "";
    clearTerminal();
    hideAllBoxes();

    switch (command) {
      case "0":
        showMenu();
        break;
      case "1":
        document.getElementById("box-sobre").classList.replace("hidden-box", "show-box");
        break;
      case "2":
        document.getElementById("box-objetivo").classList.replace("hidden-box", "show-box");
        break;
      case "3":
        document.getElementById("box-bosch").classList.replace("hidden-box", "show-box");
        break;
      case "4":
        document.getElementById("box-soft").classList.replace("hidden-box", "show-box");
        break;
      case "5":
        document.getElementById("box-hard").classList.replace("hidden-box", "show-box");
        break;
      case "6":
        document.getElementById("box-formacoes").classList.replace("hidden-box", "show-box");
        break;
      case "7":
        document.getElementById("box-timeline").classList.replace("hidden-box", "show-box");
        break;
      case "8":
        document.getElementById("box-hobbys").classList.replace("hidden-box", "show-box");
        break;
      case "9":
        document.getElementById("box-familia").classList.replace("hidden-box", "show-box");
        break;
      case "10":
        document.getElementById("box-contato").classList.replace("hidden-box", "show-box");
        break;
      default:
        output.innerHTML = "<p>Comando inválido. Digite um número de 1 a 10 ou 0 para voltar ao menu.</p>";
        break;
    }
  }
});

// Exibir o menu no carregamento da página
showMenu();
