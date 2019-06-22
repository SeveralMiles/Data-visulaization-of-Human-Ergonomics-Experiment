app.title = 'SPAM Reaction Time of all';

var xAxisData = [];
var data1 = [888,2481,1292,1083,1032,1187,1296,1174,1583,2150,1150,1756];
var data2 = [1952,1941,863,849,1299,5036,1123,839,1622,2124,1900,1235
];
var data3 = [1157,867,861,807,2130,3056,2144,730,1211,1386,2112,829];

for (var i = 1; i < 13; i++) {
    xAxisData.push('Class' + i);
}

var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    backgroundColor: '#eee',
    legend: {
        data: ['Airbus', 'Boeing', 'ARJ21'],
        align: 'left',
        left: 10
    },
    brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        name: 'X Axis',
        silent: false,
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        inverse: true,
        splitArea: {show: false}
    },
    grid: {
        left: 100
    },

    series: [
        {
            name: 'Airbus',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data1
        },
        {
            name: 'Boeing',
            type: 'bar',
            stack: 'two',
            itemStyle: itemStyle,
            data: data2
        },
        {
            name: 'ARJ21',
            type: 'bar',
            stack: 'three',
            itemStyle: itemStyle,
            data: data3
        },

    ]
};

myChart.on('brushSelected', renderBrushed);

function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }
}
