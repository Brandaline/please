function formValue(id) {
    let formElement = document.getElementById(id);
    
    if (formElement === null) {
      return `[${id} NOT FOUND]`;
    }
  
    let value = formElement.value;
  
    if (formElement.value.trim() === "") {
      return `[${formElement.placeholder}]`;
    }
  
    return document.getElementById(id).value;
  }
  
  function addClassToElement(id, className) {
    let element = document.getElementById(id);
    element.classList.add(className);
  }
  
  function resetForm() {
    document.querySelector('form').reset();
    document.getElementById('output').innerHTML = '';
    document.getElementById('container').classList.remove('generated');
  }
  
  /* The code here will be executed each time the Generate button is clicked. */
  function generate() {
    console.log("button clicked.");
    
    let relative = formValue("relative");
    let adj1 = formValue("adj-1");
    let adj2 = formValue("adj-2");
    let adj3 = formValue("adj-3");
    let famper = formValue("fam-per");
    let noun = formValue("noun");
    let dessert = formValue("dessert");
    let petname = formValue("pet-name");
  
    let madLib = `
      Dear ${relative},
        <br><br>
        I have been having a really ${adj1} time 
        at camp. The counselour is ${adj2} and 
        the food is ${adj3}. I met ${famper} 
        and we quickly became ${noun}. Talk soon!
        <br><br>
        Your ${dessert},
        <br>
        ${petname}
        <button class="styled-button" onclick="resetForm()">Try Again</button>`;
    ;
  
    document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
  }