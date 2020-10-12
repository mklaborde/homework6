const fourHundredNodes = document.getElementsByClassName("400level");
endText=[];
for (i=0; i<fourHundredNodes.length; i++)
{
    endText.push(fourHundredNodes[i].textContent);
}

console.log(endText);
