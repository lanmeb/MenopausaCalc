const idadeMinima = 33;
const idadeMaxima = 41;

   
function calcularMenopausa() {
const idadePrimeiraMenstruacao = parseInt(document.getElementById('idadePrimeiraMenstruacao').value);
        
    if (isNaN(idadePrimeiraMenstruacao) || idadePrimeiraMenstruacao <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira uma idade válida (inteiro positivo).';
        return;
    }
        
    const idadeMenopausaMinima = idadeMinima + idadePrimeiraMenstruacao;
    const idadeMenopausaMaxima = idadeMaxima + idadePrimeiraMenstruacao;
        
    document.getElementById('resultado').innerText = `Sua menopausa será entre ${idadeMenopausaMinima} e ${idadeMenopausaMaxima} anos.`;
    }
    