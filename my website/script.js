document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resultForm");
    const resultContainer = document.getElementById("resultContainer");
    const studentData = {
        seatNo: "F1910500238",
        motherName: "SUNITA",
        resultHTML: document.getElementById("result").innerHTML,
    };
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const enteredSeatNo = document.getElementById("seatNo").value.trim();
        const enteredMotherName = document.getElementById("motherName").value.trim().toUpperCase();
        
        if (enteredSeatNo === studentData.seatNo && enteredMotherName === studentData.motherName) {
            document.getElementById("result").style.display = "block";
            form.style.display = "none";
        } else {
            alert("Invalid Seat Number or Mother's Name. Please try again.");
        }
    });
});
