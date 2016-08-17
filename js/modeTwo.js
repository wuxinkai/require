define(['modeOne'],function(m1){  //m1 是modeOne  return出来的东西
    var a,b= 3,c=4; //a 自己模块的a
    a= c*m1.a;   //m1.a是modeOne的
    return{
        a:a,
        b:b
    }
})
