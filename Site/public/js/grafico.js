var todasIdades = [];
var idades = [];
const ctxIdadeMedia = document.getElementById('grafico_linha').getContext('2d');
const ctxSituacao = document.getElementById('grafico_linha2').getContext('2d');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
}

function obterDadosGraficoIdadeMedia() {
    fetch("/usuarios/buscar-idade", {
        method: "GET"
    })
    .then((response) => response.json())
    .then((responseIdade) => {
        todasIdades = responseIdade;

        const contagemIdades = {};
        todasIdades.forEach((idade) => {
            if (contagemIdades[idade.fkIdade]) {
                contagemIdades[idade.fkIdade]++;
            } else {
                contagemIdades[idade.fkIdade] = 1;
            }
        });

        const idades = Object.keys(contagemIdades);
        const frequencias = Object.values(contagemIdades);

        plotarGraficoIdadeMedia(idades, frequencias);
    })
    .catch((error) => {
        console.log(error);
    });
}

obterDadosGraficoIdadeMedia();

function plotarGraficoIdadeMedia(idades, frequencias) {
    const coresAleatorias = frequencias.map(() => getRandomColor());

    new Chart(ctxIdadeMedia, {
        type: 'bar',
        data: {
            labels: idades,
            datasets: [{
                label: 'Quantidade de pessoa por idade',
                data: frequencias,
                borderWidth: 1,
                backgroundColor: coresAleatorias,
                borderColor: 'rgba(75, 192, 192, 1)',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1,
                    ticks: {
                        stepSize: 1,
                        callback: function(value) {
                            if (Number.isInteger(value)) {
                                return value;
                            }
                        }
                    }
                }
            }
        }
    });
}

function obterDadosGraficoSituacao() {
    fetch("/usuarios/buscar-idade", {
        method: "GET"
    })
    .then((response) => response.json())
    .then((responseIdade) => {
        todasIdades = responseIdade;

        const contagemSituacoes = {
            Ativo: 0,
            Senior: 0,
            Macom: 0
        };


        todasIdades.forEach((idade) => {
            if (idade.fkIdade >= 12 && idade.fkIdade < 21) {
                contagemSituacoes.Ativo++;
            } else if (idade.fkIdade >= 21 && idade.fkIdade < 30) {
                contagemSituacoes.Senior++;
            } else if (idade.fkIdade >= 30) {
                contagemSituacoes.Macom++;
            }
        });

        const situacoes = Object.keys(contagemSituacoes);
        const frequencias = Object.values(contagemSituacoes);

        console.log(situacoes);
        console.log(frequencias);

        plotarGraficoSituacao(situacoes, frequencias);
    })
    .catch((error) => {
        console.log(error);
    });
}

obterDadosGraficoSituacao();

function plotarGraficoSituacao(situacoes, frequencias) {
    const coresAleatorias = frequencias.map(() => getRandomColor());

    new Chart(ctxSituacao, {
        type: 'bar',
        data: {
            labels: situacoes,
            datasets: [{
                label: 'Quantidade',
                data: frequencias,
                borderWidth: 1,
                backgroundColor: coresAleatorias,
                borderColor: 'rgba(75, 192, 192, 1)',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1,
                    ticks: {
                        stepSize: 1,
                        callback: function(value) {
                            if (Number.isInteger(value)) {
                                return value;
                            }
                        }
                    }
                }
            }
        }
    });
}