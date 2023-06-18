document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var salaryAmount = document.getElementById("salaryAmount").value;
    var benefitsAmount = document.getElementById("benefitsAmount").value;

    TA = (salaryAmount+benefitsAmount)
    PT = 0.10
    ND = 1000
    NSSF = 0.06


    document.getElementById("grossSalary").innerHTML = TA.toFixed(2);
    document.getElementById("payeeTax").innerHTML = (TA*PT).toFixed(2);
    document.getElementById("netSalary").innerHTML = (TA-payeeTax).toFixed(2);
    document.getElementById("nhifDeductions").innerHTML = ND.toFixed(2)
    document.getElementById("nssfDeductions").innerHTML = (TA*NSSF).toFixed(2)
});