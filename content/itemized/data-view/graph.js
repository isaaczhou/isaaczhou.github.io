var $_GET = (function() {
  var url = window.document.location.href.toString();
  url = decodeURI(url);
  //            console.log(url);
  var u = url.split("?");
  if (typeof u[1] == "string") {
    //                console.log(u[1]);
    u = u[1].split("&");
    var get = {};
    for (var i in u) {
      var j = u[i].split("=");
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
})();

var title = $_GET["title"] || "Monitoring Visualization";
var formData = $_GET["formData"];
var tableDataStr = localStorage.getItem(formData);
var tableData = jQuery.parseJSON(tableDataStr);
$("#downloadbtn").attr("data-from", formData);

//loading stack style 2
layer.load(1);
var data = [];
data.push(["Date", "HRC", "CRC", "Plate"]);

for (var i = 0; i < tableData.length; i++) {
  var names = tableData[i].name;
  // console.log(names);
  // console.log(tableData);
  data.push([names, tableData[i].val1, tableData[i].val2]);
}
dataToExcel(data);

//Display data in Excel format
function dataToExcel(data) {
  var table = document.getElementById("table");
  //    console.log(data);
  new Handsontable(table, {
    data: data,
    colHeaders: true,
    rowHeaders: true,
    minCols: 1,
    minRows: 1,
    maxCols: 200,
    maxRows: 200,
    editor: false, // forbid cell editing
    colWidths: 150, // all column width is set to 150px
    contextMenu: false // disable right click
  });
  layer.closeAll("loading"); //close loading
}

//click download button
$("#downloadbtn").on("click", function() {
  var formData = $("#downloadbtn").attr("data-from");
  var tableDataStr = localStorage.getItem(formData);
  var tableData = jQuery.parseJSON(tableDataStr);
  var s = "";
  if (tableData == undefined || tableData == null) {
    //If there's no cached data
    // 没有本地缓存数据，读库取数据
    layer.alert("Data Don't Exist！");
    return false;
  } else {
    var data = [];
    data.push(["Date", "HRC", "CRC", "Plate"]);

    for (var i = 0; i < tableData.length; i++) {
      var name = tableData[i].name;
      data.push([name, tableData[i].val1, tableData[i].val2]);
    }
    var str = "<tbody>";
    for (var i = 0; i < data.length; i++) {
      var x = data[i];
      str += "<tr>";
      for (var j = 0; j < x.length; j++) {
        str += "<td>";
        str += x[j];
        str += "</td>";
      }
      str += "</tr>";
    }
    str += "</tbody>";
    str = str.replace(new RegExp("undefined", "gm"), "");
    //        console.log(s);
    s = tableToExcelFormat(str, "Monitoring Visualization");
  }

  $(this).attr("href", s);
  var timeStr = dateUtil.dateToStr("yyyyMMddhhmmss", new Date());
  $(this).attr("download", title + timeStr + ".xls");
});

//click close button
$("#closebtn").on("click", function() {
  var index = parent.layer.getFrameIndex(window.name); //get the index of current iframe stack
  parent.layer.close(index); //then close based on the index
});

/**
 *format to Excel
 *
 */
var tableToExcelFormat = (function() {
  var uri = "data:application/vnd.ms-excel;base64,",
    template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
    base64 = function(s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
    format = function(s, c) {
      return s.replace(/{(\w+)}/g, function(m, p) {
        return c[p];
      });
    };

  return function(s, name) {
    var txt = s;
    var ctx = {worksheet: name || "Worksheet", table: txt};
    return uri + base64(format(template, ctx));
  };
})();
