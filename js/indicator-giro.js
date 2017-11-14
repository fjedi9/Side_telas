google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Mês', 'Giro de estoque', 'Esperado'],
   ['2017/jan',  0.74,        1],
   ['2017/fev',  1.57,        1.2],
   ['2017/mar',  1.75,        1.5],
   ['2017/abr',  0.91,        1.4]
]);

var options = {
  title : 'Giro de Estoque (Nome do Produto)',
  vAxis: {title: 'Giro (Qtd.)'},
  hAxis: {title: 'Month'},
  seriesType: 'bars',
  series: {2: {type: 'line'}}
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_giro'));
  chart.draw(data, options);
}