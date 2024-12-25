document.addEventListener('mousemove', function(e) {
    let particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    document.body.appendChild(particle);

    setTimeout(function() {
        particle.remove();
    }, 1000); // Remove a partícula após 1 segundo
});
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
    
