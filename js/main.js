/**
 * Created by David on 7/15/2017.
 */
var Plowshare ={};
var lastSelected = null;
Plowshare.plots = 9;

Plowshare.init = function () {
    Plowshare.welcomeFunc();
    Plowshare.gridCreate();
};

Plowshare.welcomeFunc = function () {
    var welcomeText = document.createElement("h1");
    welcomeText.id = "welcomeStuff";
    welcomeText.innerHTML = "Turning Swords into Plowshares";
    document.body.appendChild(welcomeText);

};

Plowshare.gridCreate = function () {
    var mainCont = document.createElement("div");
    mainCont.className = "container";
    mainCont.id = "mainCont";
    document.body.appendChild(mainCont);

    Plowshare.createPlots();
};

Plowshare.createPlots = function () {
    var mainCont = document.getElementById("mainCont");
    for (var i = 0; i < Plowshare.plots; i++) {
        var plotDivs = document.createElement("div");
        plotDivs.className += "col-sm-4 plotBox dirtPlot";
        plotDivs.id = i;
        plotDivs.addEventListener("click", Plowshare.navBox);
        mainCont.appendChild(plotDivs);
    }
};

Plowshare.navBox = function (e) {
    console.log("Box id " + e.target.id + " was clicked");
    lastSelected = e.target;
    document.getElementById("myNav").style.width = "100%";
};

Plowshare.closeNav = function () {
    document.getElementById("myNav").style.width = "0%";
};

Plowshare.chickpeaClick = function (e) {
    Plowshare.closeNav();
    lastSelected.innerHTML = "chickpea";
};

Plowshare.sesameClick = function (e) {
    Plowshare.closeNav();
    lastSelected.innerHTML = "sesame";
};

Plowshare.init();