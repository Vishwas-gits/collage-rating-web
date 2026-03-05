function searchCollege(){

    let name = document.getElementById("collegeInput").value;

    let result = document.getElementById("result");

    if(name === ""){
        result.innerHTML = "Please enter a college name.";
        return;
    }

    result.innerHTML = "Searching...";

    fetch("https://universities.hipolabs.com/search?name=" + name)

    .then(response => response.json())

    .then(data => {

        if(data.length === 0){
            result.innerHTML = "No colleges found.";
            return;
        }

        let output = "";

        data.slice(0,5).forEach(college => {

            output += `
            <p>
            <b>${college.name}</b><br>
            Country: ${college.country}<br>
            Website: <a href="${college.web_pages[0]}" target="_blank">${college.web_pages[0]}</a>
            </p>
            <hr>
            `;

        });

        result.innerHTML = output;

    })

    .catch(error => {

        result.innerHTML = "Error fetching college data.";

    });

}

