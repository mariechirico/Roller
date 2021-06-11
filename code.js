function Roll()
{
    var dice = Number(document.getElementById("selectSides").value);
    var result = Math.floor(Math.random()*(dice) + 1);

    document.getElementById("result").innerHTML = result.toString();
}