function searchCollege() {

    const name = document.getElementById("collegeInput").value.trim();
    const result = document.getElementById("result");

    if (name === "") {
        result.innerHTML = "Please enter a college name.";
        return;
    }

    result.innerHTML = "Searching...";

    fetch(`https://universities.hipolabs.com/search?name=${encodeURIComponent(name)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response failed");
            }
            return response.json();
        })
        .then(data => {

            if (data.length === 0) {
                result.innerHTML = "No colleges found.";
                return;
            }

            let output = "";

            data.slice(0,5).forEach(college => {

                output += `
                <div style="margin-top:10px;">
                    <strong>${college.name}</strong><br>
                    Country: ${college.country}<br>
                    Website: <a href="${college.web_pages[0]}" target="_blank">
                    ${college.web_pages[0]}</a>
                </div>
                <hr>
                `;
            });

            result.innerHTML = output;
        })
        .catch(error => {
            console.error(error);
            result.innerHTML = "Unable to fetch college data. Try again later.";
        });
}
