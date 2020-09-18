exports.circleArea=function (r){
    var pi=3.14;
    return pi*r*r;
}
exports.squareArea=function(w,h){
    return w*h;
}
exports.triangleArea=function(b,h){
    return 0.5*b*h;
}
exports.rectangleArea=function(b,h){
    return b*h;
}
exports.parallelogramArea=function(b,h){
    return b*h
}
exports.trapezoidArea=function(b1,b2,h){
    return 0.5*(b1+b2)*h
}
exports.rhombusArea=function(larged,smalld){
    return (larged*smalld)/2
}
exports.polygonArea=function(Perimeter,apothem){
    return (Perimeter/2)*apothem
}
exports.coneArea=function(r,slantheight){
    var pi=3.14;
    return pi*r*slantheight
}
exports.sphereArea=function(r){
    var pi=3.14;
    return 4*pi*r*r
}
exports.cubeVolume=function(side){
    return s*s*s
}
exports.parallelepipedVolume=function(l,w,h){
    return l*h*w
}
exports.prismVolume=function(b,h){
    return b*h
}
exports.cylinderVolume=function(r,h){
    var pi=3.14;
    return pi*r*r*h
}
exports.coneVolume=function(b,h){
    return (b*h)/3
}
exports.sphereVolume=function(r){
    return (4*3.14*r*r*r)/3
}
exports.quadraticFormula=function(a,b,c){
    var sqrt=Math.sqrt((b*b)-(4*a*c))
    return (-b-sqrt)/2*a
}

exports.isPrime=function(n){
    if(n<=1)
    return n+" is not prime";
    if(n<=3)
    return n+" is prime";
    if(n%2===0||n%3 === 0){
        return n+" is not prime"
    }
    for(var i=5;i*i<=n;i=i+6){
        if(n%i===0||n%(i+2)==0)
        return n+" is not prime";
    }
    return n+" is not prime";
}
exports.numberSort=function(n){
    return n.sort((a,b)=>{
        return a-b
    })
}