function searchCollege() {

    const input = document.getElementById("collegeInput").value.toLowerCase().trim();
    const result = document.getElementById("result");

    const colleges = {
        "psg college": "PSG College of Technology, Avinashi Road, Coimbatore, Tamil Nadu",
        "anna university": "Anna University, Guindy, Chennai, Tamil Nadu",
        "vit vellore": "VIT University, Katpadi, Vellore, Tamil Nadu",
        "nit trichy": "National Institute of Technology, Tiruchirappalli, Tamil Nadu",
        "srm university": "SRM Institute of Science and Technology, Kattankulathur, Chennai",
        "amrita university": "Amrita Vishwa Vidyapeetham, Ettimadai, Coimbatore",
        "sastra university": "SASTRA University, Thanjavur, Tamil Nadu",
        "thiagarajar college": "Thiagarajar College of Engineering, Madurai",
        "coimbatore institute of technology": "Coimbatore Institute of Technology, Coimbatore",
        "kumaraguru college": "Kumaraguru College of Technology, Coimbatore",
        "kongu engineering college": "Kongu Engineering College, Perundurai, Erode",
        "karunya university": "Karunya Institute of Technology and Sciences, Coimbatore",
        "sona college": "Sona College of Technology, Salem",
        "velammal engineering college": "Velammal Engineering College, Chennai",
        "saveetha university": "Saveetha Institute of Medical and Technical Sciences, Chennai",
        "nandha college": "Nandha Engineering College, Erode, Tamil Nadu",
        "nandha arts college": "Nandha Arts and Science College, Erode, Tamil Nadu"
    };

    let found = false;

    for (let college in colleges) {

        if (input.includes(college)) {
            result.innerHTML = "<b>Address:</b> " + colleges[college];
            found = true;
            break;
        }
    }

    if (!found) {
        result.innerHTML = "College not found in Tamil Nadu database.";
    }
}
