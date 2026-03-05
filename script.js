function searchCollege() {

    const input = document.getElementById("collegeInput").value.toLowerCase().trim();
    const result = document.getElementById("result");

    const colleges = {

        "psg college": {
            address: "PSG College of Technology, Coimbatore, Tamil Nadu",
            rating: "⭐⭐⭐⭐⭐ (5/5)"
        },

        "anna university": {
            address: "Anna University, Guindy, Chennai, Tamil Nadu",
            rating: "⭐⭐⭐⭐⭐ (5/5)"
        },

        "vit vellore": {
            address: "VIT University, Katpadi, Vellore, Tamil Nadu",
            rating: "⭐⭐⭐⭐☆ (4.5/5)"
        },

        "nit trichy": {
            address: "National Institute of Technology, Tiruchirappalli, Tamil Nadu",
            rating: "⭐⭐⭐⭐⭐ (5/5)"
        },

        "srm university": {
            address: "SRM Institute of Science and Technology, Chennai",
            rating: "⭐⭐⭐⭐☆ (4/5)"
        },

        "kongu engineering college": {
            address: "Kongu Engineering College, Perundurai, Erode",
            rating: "⭐⭐⭐⭐☆ (4/5)"
        },

        "kumaraguru college": {
            address: "Kumaraguru College of Technology, Coimbatore",
            rating: "⭐⭐⭐⭐☆ (4/5)"
        },

        "karunya university": {
            address: "Karunya Institute of Technology and Sciences, Coimbatore",
            rating: "⭐⭐⭐⭐☆ (4/5)"
        },

        "sona college": {
            address: "Sona College of Technology, Salem",
            rating: "⭐⭐⭐⭐☆ (4/5)"
        },

        "nandha college": {
            address: "Nandha Engineering College, Erode",
            rating: "⭐⭐⭐⭐☆ (4/5)"
        },

        "nandha arts college": {
            address: "Nandha Arts and Science College, Erode",
            rating: "⭐⭐⭐☆☆ (3/5)"
        }

    };

    let found = false;

    for (let college in colleges) {

        if (input.includes(college)) {

            result.innerHTML = `
            <b>College:</b> ${college.toUpperCase()} <br>
            <b>Address:</b> ${colleges[college].address} <br>
            <b>Rating:</b> ${colleges[college].rating}
            `;

            found = true;
            break;
        }
    }

    if (!found) {
        result.innerHTML = "College not found in Tamil Nadu database.";
    }
}
