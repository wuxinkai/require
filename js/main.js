require.config({
    paths: {
        'jQuery': 'jQuery-2.1.3.min',
    }
});

require(['modeTwo','modeOne'],function(m2,m1){
    alert(m2.a,m2.b)


})
