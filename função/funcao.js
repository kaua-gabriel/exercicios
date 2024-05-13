// Fazer um menu de exercícios utilizando exemplos dado em aula. Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercício ele quer visualizar.
// O usuário deverá digitar 0 para sair do menu.



let opcaoUsuario;

do {
    opcaoUsuario = prompt("MENU\n\n1 - Exemplo de Repetição\n2 - Exercicio Usuario Senha\n\n3 -  - Digite 0 para sair")

    if (opcaoUsuario == "0") {
        alert("Voce escolheu sair :(")

    }
    else if (opcaoUsuario == "1") {
        // Mostrar exemplo de repeticao
        exemploRepeticao()

    }
    else if (opcaoUsuario == "2") {
        // Mostrar exercicio usuario e senha
        exercicioLogin()

    }
    else if (opcaoUsuario == "3") {
        // Mostrar exercicio usuario e senha
        exercicioLogin()

    }
    else if (opcaoUsuario == "4") {
        // Mostrar exemplo de repeticao
        exemploRepeticao()

    }
    else if (opcaoUsuario == "5") {
        // Mostrar exercicio usuario e senha
        exercicioLogin()

    }
    else if (opcaoUsuario == "6") {
        // Mostrar exercicio usuario e senha
        exercicioLogin()
        }


    else {
            alert("Exercicio inexistente")
        }

    } while (opcaoUsuario != "0");















