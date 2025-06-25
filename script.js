let currentState = 'menu'; // Estado inicial: menu principal

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const value = input.value.trim().toLowerCase();
        let response = '';

        if (currentState === 'menu') {
            switch(value) {

case '0':
  clearTerminal();

  // Esconder todas as seções que podem estar visíveis
  document.getElementById('box-bosch').classList.add('hidden-box');
  document.getElementById('box-bosch').classList.remove('show-box');

  document.getElementById('box-hobbys').classList.add('hidden-box');
  document.getElementById('box-hobbys').classList.remove('show-box');

  document.getElementById('box-familia').classList.add('hidden-box');
  document.getElementById('box-familia').classList.remove('show-box');

  // Mostrar o menu novamente
  response = `
    <p>Bem-vindo ao meu currículo interativo!</p>
    <p>Digite o número da seção desejada:</p>
    <p>1 - Sobre mim</p>
    <p>2 - Objetivo</p>
    <p>3 - Por que a Bosch</p>
    <p>4 - Minha frase</p>
    <p>5 - Habilidades</p>
    <p>6 - Conhecimentos técnicos</p>
    <p>7 - Linha do tempo profissional</p>
    <p>8 - Hobbys e interesses</p>
    <p>9 - Família</p>
  `;
  output.innerHTML = response;
  break;




                case '1':
                    clearTerminal();
                    response = `
> SOBRE MIM: Me chamo Pablo, tenho 17 anos, moro em Curitiba no bairro CIC e atualmente sou estudante de Automação Industrial na UTFPR. Sou muito alegre e sempre gosto de ver o lado bom das coisas, gosto muito de passar tempo com minha família e amigos. Sou um entusiasta de jogos e tecnologia e estou sempre buscando aprender mais sobre.  |       Digite '0' para retornar ao menu.
                    `;
                    currentState = 'aba1';
                    break;

                case '2':
                    clearTerminal();
                    response = `
> OBJETIVO: Atuar como aprendiz de manufatura avançada na Bosch para transformar meu entusiasmo por tecnologia em experiêcia prática, contribuindo com muita dedicação e vontade de aprender.   |       Digite '0' para retornar ao menu.
                    `;
                    currentState = 'aba2';
                    break;

                case '3':
  clearTerminal();
  document.getElementById('box-bosch').classList.remove('hidden-box');
  document.getElementById('box-bosch').classList.add('show-box');
  currentState = 'aba3';
  break;
                case '4':
                    clearTerminal();
                    response = `
> SOFT SKILLS: Organização | Raciocínio Lógico | Comprometimento com resultados | Trabalho em equipe | Curiosidade/Vontade de aprender | Adaptabilidade     |       Digite '0' para retornar ao menu.
                    `;
                    currentState = 'aba4';
                    break;
    
                case '5':
                    clearTerminal();
                    response = `
> HARD SKILLS: Nível avançado em Excel | Nível básico em AutoCAD | Lógica de Programação: Tenho compreensão dos princípios fundamentais de algoritmos e estruturas de dados | Linguagens de Programação: Conhecimento básico em C e Python.
- Inglês nível - A2     |       Digite '0' para retornar ao menu.
                    `;
                    currentState = 'aba5';
                    break;

                case '6':
                    clearTerminal();
                    response = `
> FORMAÇÕES: Atualmente estou cursando Automação Industrial na UTFPR - Noturno | Concluí o Ensino Médio integrado ao Técnico em Administração | Me formei no curso de aprendiz administrativo no CIEE/PR     |      Digite '0' para retornar ao menu.
                    `;
                    currentState = 'aba6';
                    break;                    

                case '7':
                    clearTerminal();
                    response = `
> 
                    `;
                    currentState = 'aba7';
                    break;              

                case '8':
                    clearTerminal();
                    response = `
> HOBBYS E INTERESSES: Tenho como principais hobbies a corrida de rua e os jogos online competitivos. Também aprecio muito momentos em família jogando cartas e jogos de tabuleiro. Tenho grande interesse pelas áreas de engenharia e gosto de estudar temas como história, curiosidades de matemática, elétrica e computação. Sou um entusiasta do mundo automotivo e procuro sempre me manter atualizado sobre novidades e tendências do setor. Além disso, gosto de futebol e sou torcedor apaixonado do São Paulo Futebol Clube    |       Digite '0' para retornar ao menu.
                    `;
                    currentState = 'aba8';
                    break;         
                    
                case '9':
                    clearTerminal();
                    response = `
> 
                    `;
                    currentState = 'aba9';
                    break;         
                    
                case '10':
                    clearTerminal();
                    response = `
> CONTATO: Número: (41) 98729-8147 | Email: pablo.scsa@gmail.com | LinkedIn: https://www.linkedin.com/in/pablo-schmidt-de-sales-61684528b
                    `;
                    currentState = 'aba10';
                    break;         
                    
                    
                case 'help':
                    response = `
> COMANDOS DISPONÍVEIS
1 - Sobre mim
2 - Objetivo
3 - Por que a Bosch?
4 - Soft Skills
5 - Hard Skills
6 - Formações
7 - Linha do Tempo
8 - Hobbys e Interresses
9 - Família
10 - Contato

Digite o número da opção.
                    `;
                    break;

                default:
                    response = '> Comando não reconhecido. Digite "help" para ver as opções.';
            }
        } 
        else {
            if (value === '0' || value === 'menu') {
                clearTerminal();
                
                currentState = 'menu';
            } else {
                response = '> Você está dentro de uma aba. Digite "0" para retornar ao menu.';
            }
        }

        print(response.trim());
        input.value = '';
    }
});

// Função para imprimir no terminal
function print(message) {
    const p = document.createElement('p');
    p.textContent = message;
    output.appendChild(p);
}

// Função para limpar o terminal
function clearTerminal() {
    output.innerHTML = '';
    const header = document.createElement('h1');
    header.textContent = '> informacoes';
    output.appendChild(header);
}

