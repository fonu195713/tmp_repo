function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getResult() {
    let a = getRandomInt(100, 999) % 8;
    let b = getRandomInt(100, 999) % 8;
    let c = getRandomInt(100, 999) % 6;
    
    a = (a === 0)? 8: a;
    b = (b === 0)? 8: b;
    c = (c === 0)? 6: c;
    
    return {"inner": a, "outer": b, "change": c};
}

document.getElementById("btn").onclock = function() {
    let result = getResult();
    
    let str = "";
    str += "inner: " + result["inner"] + ", ";
    str += "outer: " + result["outer"] + ", ";
    str += "change: " + result["change"];
    
    document.getElementById("txt").innerHTML = str;
}
