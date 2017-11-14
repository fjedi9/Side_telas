google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Mês');
      data.addColumn('number', 'Cobertura em dias');
      data.addColumn('number', 'Média da cobertura entre meses');

      data.addRows(
        [
          ['jan', 52, 52],   ['fev', 18, 35],  ['mar', 53, 36],  ['abr', 30, 33]
        ]
      );

      var options = {
        title : 'Cobertura de Estoque (Nome do Produto)',
        hAxis: {
          title: 'Mês'
        },
        vAxis: {
          title: 'Cobertura (dias)'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div_cobertura'));

      chart.draw(data, options);
    }