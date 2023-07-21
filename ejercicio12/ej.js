function calculate() {
    
    const input = document.getElementById("operator").value;
  
    try {
      
      const result = eval(input);
  
      document.getElementById("result").innerText = "Salida del resultado: " + result;
    } catch (error) {
     
      document.getElementById("result").innerText = "Error: " + error.message;
    }
  }