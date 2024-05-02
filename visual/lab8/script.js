const duusgahButton = document.getElementById("duusgah-button");

duusgahButton.addEventListener("click", (event) => {
    const fileInput = document.getElementById("picture");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function() {
            const imageDataURL = reader.result;
            document.getElementById("image").src = imageDataURL;
        };

        reader.readAsDataURL(file);
    }

    const ovog = document.getElementById("fname").value;
    document.getElementById("Fname").textContent = ovog;

    const ner = document.getElementById("lname").value;
    document.getElementById("Lname").textContent = ner;

    const Nas = document.getElementById("age").value;
    document.getElementById("nas").textContent = Nas;

    const school = document.getElementById("edu").value;
    document.getElementById("school").textContent = school;

    const date = document.getElementById("date").value;
    document.getElementById("torsonOdor").textContent = date;

    const genre = document.getElementById("genre").checked ? "эрэгтэй" : "эмэгтэй";
    document.getElementById("genree").textContent = genre;

    const email = document.getElementById("email").value;
    document.getElementById("mail").textContent = email;

    const PhoneNumber = document.getElementById("phoneNumber").value;
    document.getElementById("pnumber").textContent = PhoneNumber;

    const programmingLanguage = document.querySelector('input[name="html"]:checked') ? "HTML" :
        (document.querySelector('input[name="css"]:checked') ? "CSS" :
            (document.querySelector('input[name="js"]:checked') ? "JS" : ""));
    document.getElementById("hel").textContent = programmingLanguage;

    const register = document.getElementById("register").value;
    document.getElementById("reg").textContent = register;

    const password = document.getElementById("password").value;
    document.getElementById("nuutsVg").textContent = password;

    const site = document.getElementById("site").value;
    document.getElementById("fav").textContent = site;

    const energy = document.getElementById("energy").value;
    document.getElementById("energ").textContent = energy;


    const hicheelSongoltTable = document.getElementById("add")
    if (hicheelSongoltTable.innerHTML !== "") {
        document.getElementById("copy").innerHTML = hicheelSongoltTable.innerHTML
    }
    
});


function addSubmit() {
    var table = document.getElementById('add');
    var subcode = document.getElementById('LName').value;
    var subname = document.getElementById('LKod').value;
    var teacher = document.getElementById('teacher').value;
    var kr = document.getElementById('kerdit').value;

    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = subcode;
    cell2.innerHTML = subname;
    cell3.innerHTML = teacher;
    cell4.innerHTML = kr;
}


