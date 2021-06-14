function Roll()
{
    var dice = Number(document.getElementById("selectSides").value);
    var result = Math.floor(Math.random()*(dice) + 1);

    document.getElementById("result").innerHTML = result.toString();
    document.getElementById("pastResults");

    if(document.getElementById("result").innerHTML === "")
    {
        document.getElementById("resultDiv").classList.value = "dropdown hide";
    }
    else
    {
        document.getElementById("resultDiv").classList.value = "dropdown show";
    }
}
