function szamol() {
    var sa = document.getElementById("a").value;
    var sb = document.getElementById("b").value;
    var sc = document.getElementById("c").value;
    var gysz; //gyökök száma

    if (isNaN(sa) || isNaN(sb) || isNaN(sc) || sa == "" || sb == "" || sc == "") {
        gysz = "Hiba!"
    }
    else {
        var a = parseFloat(sa);
        var b = parseFloat(sb);
        var c = parseFloat(sc);
        var gysz = Math.sing(D)+1
    }
    document.getElementById("gysz").innerHTML =gysz;
    return false;
}