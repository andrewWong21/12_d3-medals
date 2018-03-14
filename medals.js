var svg = document.getElementById("svg");
var dropdown = document.getElementById("dropdown");

var change_medal_sizes = function(cx, cy){
    if (dropdown.value === "america"){
        medals = [9, 8, 6];
    }
    else{
        medals = [14, 14, 11];
    }
    d3.selectAll("circle").data(medals);
    d3.selectAll("circle").attr("r",
        function (d) { 
            return d * 10;
        }
    );
};

change_medal_sizes();