// based on prepared DOM, initialize echarts
var line = echarts.init(document.getElementById("main"));
line.showLoading();
line.setOption({
  backgroundColor: "#39314a",
  color: ["#ff5367", "#fda866"],
  title: [
    {
      text: "Reservation Daily Data",
      left: "10%",
      textStyle: {
        color: "#ffffff",
        fontSize: 14
      }
    }
  ],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  //grid line position
  grid: {
    top: "25%",
    left: "10%",
    right: "15%",
    bottom: "10%"
  },
  //legend position and data
  legend: {
    orient: "vertical",
    top: "middle",
    right: "3%",
    textStyle: {
      color: "#ddd", // legend text color
      fontSize: 16
    },
    itemGap: 20,
    data: ["Reservation", "Actual"]
  },
  toolbox: {
    show: true,
    feature: {
      /* dataZoom: {
         yAxisIndex: 'none'
         },*/
      dataView: {
        lang: ["Reservation Table", "Close", "Download"],
        title: "Display Data",
        readOnly: false,
        backgroundColor: "#39314a",
        textColor: "#fff",
        optionToContent: function(opt) {
          var otc =
            "graph.html?formData=ReservationData&title=ReservationTable";
          return otc;
        }
      },
      magicType: {
        type: ["line", "bar", "stack"],
        // title: ["line charts", "bar charts", "switch to stack"]
        title: {
          line: ["Change to Line"],
          bar: ["Change to Bar"],
          stack: ["Switch to Stack"]
        }
      },
      restore: {
        title: "Reset Chart"
      },
      saveAsImage: {
        title: "Save"
      }
    }
  },
  xAxis: [
    {
      type: "category",
      axisPointer: {
        //x axis pointer
        label: {
          backgroundColor: "#0a0000"
        }
      },
      axisLine: {
        //x axis line
        show: false,
        lineStyle: {
          color: "#ddd"
        }
      },
      axisTick: {
        //x axis tick
        alignWithLabel: true,
        show: false
      },
      axisLabel: {
        //x axis label
        textStyle: {
          color: "#ddd"
        }
      },
      data: []
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "Count Number",
      position: "left",
      axisPointer: {
        //y axis pointer
        label: {
          backgroundColor: "#0a0000",
          formatter: params => {
            // console.log(params); //So the old axis number was in high float decimals
            return Math.round(params.value); // The value of the given number rounded to the nearest integer.
          }
          // Old function, replaced with my arrow function
          // function(params) {
          //   return Math.round(params.value);
          // }
        }
      },
      splitLine: {
        //grid lines
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.13)"
        }
      },
      axisLine: {
        // x and y axis lines
        show: false,
        lineStyle: {
          color: "#ddd"
        }
      },
      axisTick: {
        //axis ticks
        show: false
      },
      axisLabel: {
        formatter: "{value}"
      }
    }
  ],
  series: [
    {
      name: "Reservation",
      type: "line",
      data: [],
      smooth: true
    },
    {
      name: "Actual",
      type: "line",
      data: [],
      smooth: true
    }
  ]
});

window.onresize = function() {
  line.resize();
};

//Loading data to line
function dataToLine(line, data) {
  line.hideLoading(); // Echarts built in loading
  // load data
  line.setOption({
    xAxis: {
      data: data.categoryData
    },
    series: [
      {
        name: "Reservation",
        type: "line",
        data: data.val1
      },
      {
        name: "Actual",
        type: "line",
        data: data.val2
      }
    ]
  });
}

function loading() {
  var lineData = [];
  var dateStr = dateUtil.format(new Date());
  var len = 15;
  var time = [];
  for (var i = 0; i < len; i++) {
    var name = dateUtil.adjacentDate(dateStr, -(len - i));
    var val = Math.floor(Math.random() * 100 + 500);
    lineData.push({
      name: name.substring(5),
      val1: val,
      val2: val - Math.floor(Math.random() * 500)
    });
  }

  localStorage.setItem("ReservationData", JSON.stringify(lineData));

  splitData(lineData);
}

function splitData(lineData) {
  var categoryData = [],
    val1 = [],
    val2 = [];
  for (var i = 0; i < lineData.length; i++) {
    var po = lineData[i];
    categoryData.push(po.name);
    val1.push(po.val1);
    val2.push(po.val2);
  }
  var data = {
    categoryData: categoryData,
    val1: val1,
    val2: val2
  };
  dataToLine(line, data);
}

setTimeout(loading, 500);
