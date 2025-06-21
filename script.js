let currentState = 'menu'; // Estado inicial: menu principal

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const value = input.value.trim().toLowerCase();
        let response = '';

        if (currentState === 'menu') {
            switch(value) {
                case '1':
                    clearTerminal();
                    response = `
> SOBRE MIM
Meu nome é Pablo, tenho 17 anos, sou estudante de Automação Industrial e apaixonado por tecnologia, mecânica e processos produtivos.

Digite 'voltar' para retornar ao menu.
                    `;
                    currentState = 'aba1';
                    break;

                case '2':
                    clearTerminal();
                    response = `
> HABILIDADES
- Raciocínio lógico
- Organização
- Disciplina
- Trabalho em equipe
- Curiosidade
- Vontade de aprender

Digite 'voltar' para retornar ao menu.
                    `;
                    currentState = 'aba2';
                    break;

                case '3':
                    clearTerminal();
                    response = `
> CONTATO
Email: pablo@email.com

Digite 'voltar' para retornar ao menu.
                    `;
                    currentState = 'aba3';
                    break;

                case 'help':
                    response = `
> COMANDOS DISPONÍVEIS
1 - Sobre mim
2 - Habilidades
3 - Contato

Digite o número da opção.
                    `;
                    break;

                default:
                    response = '> Comando não reconhecido. Digite "help" para ver as opções.';
            }
        } 
        else {
            if (value === 'voltar' || value === 'menu') {
                clearTerminal();
                response = `
> MENU PRINCIPAL
1 - Sobre mim
2 - Habilidades
3 - Contato

Digite o número da opção.
                `;
                currentState = 'menu';
            } else {
                response = '> Você está dentro de uma aba. Digite "voltar" para retornar ao menu.';
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