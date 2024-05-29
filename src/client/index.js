function addAbbreviation(name,fullName,desc) {
    return `<div>
        <h3>${name} • ${fullName}</h3>
        <p>${desc}</p>
    </div>
    <hr style="border-style: none none dashed;">`
}

window.onload = () => {
    
    fetch("/abbreviations").then((res) => {
        res.json().then((resjson) => {
            abbrevArray = Object.entries(resjson)
            abbrevArray.forEach(el => {
                document.body.innerHTML += addAbbreviation(el[1].name,el[1].full_name,el[1].description)
            });
        })
    })
}
