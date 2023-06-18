// Create function for grade ranges
    function calculateGrade(percentage) {
        if (percentage > 79) {
          return "A";
        } else if (percentage >= 60 && percentage <= 79) {
          return "B";
        } else if (percentage <= 59 && percentage > 49) {
          return "C";
        } else if (percentage <= 49 && percentage > 40) {
          return "D";
        } else {
          return "E";
        }
      }

      function grade() {
        // Get the input element
        let input = document.getElementById("score");

        // Get the value entered by the user
        let percentage = parseInt(input.value);

        // Validate if the input is within the valid range
        if (percentage < 0 || percentage > 100 || isNaN(percentage)) {
          alert("Invalid input. Marks should be between 0 and 100.");
        } else {
          // Calculate the grade
          let grade = calculateGrade(percentage);

          // Get the grade output element
          let gradeOutput = document.getElementById("result");

          // Set the grade output
          gradeOutput.textContent = grade;
        }
      }

