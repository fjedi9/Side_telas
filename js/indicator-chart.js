google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Mês', 'Giro de estoque', 'Giro Esperado', 'Meta'],
   ['2004/05',  1.6,      1.7,        2],
   ['2005/06',  1.35,      1.8,        2],
   ['2006/07',  1.57,     1.9,        3],
   ['2007/08',  1.99,      2,        2],
   ['2008/09',  2.31,      2.1,         4]
]);

var options = {
  title : 'Giro de Estoque',
  vAxis: {title: 'Giro (Qtd.)'},
  hAxis: {title: 'Month'},
  seriesType: 'bars',
  series: {2: {type: 'line'}}
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}