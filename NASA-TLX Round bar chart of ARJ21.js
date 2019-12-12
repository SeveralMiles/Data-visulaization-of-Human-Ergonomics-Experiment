
app.title = '界面C-ARJ21';

option = {
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['权重', '起飞', '巡航', '降落'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [5, 4.6667, 3.333, 4.6667],
        coordinateSystem: 'polar',
        name: '脑力需求',
        stack: 'a'
    }, {
        type: 'bar',
        data: [3, 2.2, 1.6, 3.8],
        coordinateSystem: 'polar',
        name: '身体负担',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 2.1333, 1.3333, 1.8667],
        coordinateSystem: 'polar',
        name: '时间需求',
        stack: 'a'
    },
    {
        type: 'bar',
        data: [3, 2.8, 3, 2.2],
        coordinateSystem: 'polar',
        name: '工作绩效',
        stack: 'a'
    },
    {
        type: 'bar',
        data: [2, 2.13333, 1.4667, 2],
        coordinateSystem: 'polar',
        name: '努力程度',
        stack: 'a'
    },
        {
        type: 'bar',
        data: [0, 0, 0, 0],
        coordinateSystem: 'polar',
        name: '挫败感',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['脑力需求', '身体负担', '时间需求','工作绩效','努力程度','挫败感']
    }
};

