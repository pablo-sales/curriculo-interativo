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
> SOBRE MIM: Me chamo Pablo, tenho 17 anos, moro em Curitiba no bairro CIC e atualmente sou estudante de Automação Industrial na UTFPR. Sou um entusiasta da tecnologia e estou sempre buscando aprender mais sobre. | Digite 'voltar' para retornar ao menu.
                    `;
                    currentState = 'aba1';
                    break;

                case '2':
                    clearTerminal();
                    response = `
> HABILIDADES
> Soft Skills
- Organização
- Raciocínio Lógico
- Disciplina
- Trabalho em equipe
- Curiosidade
- Vontade de aprender
- Adaptabilidade

> Hard Skills

- Conhecimentos básicos de elétrica
- Nível avançado em Excel
- Nível intermediário em AutoCAD
- Lógica de Programação: Tenho compreensão dos princípios fundamentais de algoritmos e estruturas de dados.
- Linguagens de Programação: Conhecimento básico em C e Python.


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

                case '4':
                    clearTerminal();
                    response = `
> OBJETIVO: 
Começar a atuar como Aprendiz de Manufatura Avançada na Bosch, para aprender na prática sobre processos industriais inteligentes. 

Digite 'voltar' para retornar ao menu.
                    `;
                    currentState = 'aba4';
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