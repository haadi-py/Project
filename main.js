fetch("data.json")
.then(function (response) {
    return response.json();
})
.then(function(data) {
    for(let i = 3; i < data.length; i++) {
        document.getElementById('id1').innerHTML +=
        data[0].category;
        document.getElementById('id2').innerHTML +=
        data[1].category;
        document.getElementById('id3').innerHTML +=
        data[2].category;
        document.getElementById('id4').innerHTML +=
        data[3].category;
        document.getElementById('p1').innerHTML +=
        data[0].score;
        document.getElementById('p2').innerHTML +=
        data[1].score;
        document.getElementById('p3').innerHTML +=
        data[2].score;
        document.getElementById('p4').innerHTML +=
        data[3].score;
        document.getElementById('ico').src =
        data[0].icon;
        document.getElementById('ico1').src =
        data[1].icon;
        document.getElementById('ico2').src =
        data[2].icon;
        document.getElementById('ico3').src =
        data[3].icon;
    }
 

}) .catch(function(err) {
    console.log(err);
});
    
