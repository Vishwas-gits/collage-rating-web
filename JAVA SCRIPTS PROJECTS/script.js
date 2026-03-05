function findCollege(){

    let name = document.getElementById("collegeInput").value.toLowerCase();
    let result = document.getElementById("result");

    let colleges = {
        "anna university": "Anna University, Guindy, Chennai, Tamil Nadu",
        "iit madras": "IIT Madras, Adyar, Chennai, Tamil Nadu",
        "psg college": "PSG College of Technology, Coimbatore, Tamil Nadu",
        "vit vellore": "VIT University, Katpadi, Vellore, Tamil Nadu",
        "nit trichy": "National Institute of Technology, Tiruchirappalli, Tamil Nadu"
    };

    if(colleges[name]){
        result.innerHTML = "Address: " + colleges[name];
    }else{
        result.innerHTML = "College not found in database.";
    }

}