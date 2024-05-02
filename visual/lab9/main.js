var leftArea = document.getElementById('left');
var leftCircle = leftArea.children[0];
var rightArea = document.getElementById('right');
var rightCircle = rightArea.children[0];
var vs = document.getElementById('vs');

leftArea.addEventListener('click', function (event){
    var i = parseInt(leftCircle.innerText) + 1;
    var l = i + 1;
    leftCircle.innerText = i;
    leftArea.style.flex = l;
    var r = parseInt(rightArea.style.flex || 1);

    vs.style.left = (100* l/ (l + r)) + '%';
});

rightArea.addEventListener('click', function(event){
    var j = parseInt(rightCircle.innerText) + 1;
    var l = j + 1;
    rightCircle.innerText = j;
    rightArea.style.flex = l;
    var r = parseInt(leftArea.style.flex || 1);

    vs.style.left = (100 * r/ (r + l)) + '%';
    // alert('right');
});