google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Percentual de produtos');
      data.addColumn('number', 'Percentual em valor');

      data.addRows([
        [0, 0],   [20, 80],  [50, 95],  [100, 100]
      ]);

      var options = {
        hAxis: {
          title: 'Quantidade Itens (%)'
        },
        vAxis: {
          title: 'Valor Total (%)'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }