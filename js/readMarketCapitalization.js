$(function() {
  var parseName = 'data/20210425_163053market_capitalization.csv';
  $.ajax({
    url: parseName,
    dataType: 'text',
    success: function(data) {

      var allRow = data.split(/\r?\n|\r/);
      var table = '<table>';

      // table / thead / tr / th / td
      var allRow = data.split(/\r?\n|\r/);
      var textLine = "";
      for (var singleRow = 0; singleRow < allRow.length; singleRow++) {
        var collapse = allRow[singleRow].split(",");
        if (singleRow == 0) {
          textLine += '<thead>';
        } else if (singleRow == 1) {
          textLine += '<tbody>';
        }
        textLine += '<tr>';
        for (var count = 0; count < collapse.length; count++) {
          if (singleRow == 0) {
            textLine += '<th>' + collapse[count] + '</th>';
          } else {
            textLine += '<td>' + collapse[count] + '</td>';
          }
        }
        textLine += '</tr>';
        if (singleRow == 0) {
          textLine += '</thead>';
        }
      }
      textLine += '</tbody>';
      textLine += '</table>';

      $('#textArea').append(textLine);
      $('#textArea').append("<br>");
    }
  });

});
