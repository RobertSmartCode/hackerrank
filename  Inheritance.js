class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
        constructor(firstName, lastName, id, scores){
           super(firstName, lastName, id);
            this.scores=scores;
            
        }
        
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
         /*    
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
  calculate() {
      
    var sum = this.scores.reduce((acc, num) =>  acc += num)
    var avg = sum / this.scores.length;
    
    if (avg >= 90) {
      return "O";
    }
    else if (avg >= 80) {
      return "E";
    }
    else if (avg >= 70) {
      return "A";
    }
    else if (avg >= 55) {
      return "P";
    }
    else if (avg >= 40) {
      return "D";
    }
    else {
      return "T";
    }
  }
    
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
