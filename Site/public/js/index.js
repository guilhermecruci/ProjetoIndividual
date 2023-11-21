if (grafico.data.labels.length == 10 && grafico.data.datasets[0].data.length == 10) {
    grafico.data.labels.shift();
    grafico.data.datasets[0].data.shift();
}