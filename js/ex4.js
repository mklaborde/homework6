const linkElement = document.createElement("li");
linkElement.id = "CoB";
//linkElement.textContent="College of Business";
linkElement.innerHTML +='<a href="https://www.csulb.edu/college-of-business">College of Business</a>';
document.getElementById("links").insertBefore(linkElement, document.getElementById("IS"));