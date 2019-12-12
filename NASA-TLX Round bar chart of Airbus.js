app.title = '界面A-Airbus';

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
        data: [4, 4, 2.25, 3],
        coordinateSystem: 'polar',
        name: '脑力需求',
        stack: 'a'
    }, {
        type: 'bar',
        data: [3, 1.5, 1.875, 3.57],
        coordinateSystem: 'polar',
        name: '身体负担',
        stack: 'a'
    }, {
        type: 'bar',
        data: [3, 2.625, 1.6875, 2.4375],
        coordinateSystem: 'polar',
        name: '时间需求',
        stack: 'a'
    },
    {
        type: 'bar',
        data: [5, 4.6875, 5, 3.4375],
        coordinateSystem: 'polar',
        name: '工作绩效',
        stack: 'a'
    },
    {
        type: 'bar',
        data: [1, 1, 0.75, 1.125],
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
