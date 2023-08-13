const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWithoutNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWithoutSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersWithoutSymbolsAndNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const passwordField = document.getElementById('password-field');
const passwordField2 = document.getElementById('password-field2');
const passwordLength = document.getElementById('password-length');
const noNumbers = document.getElementById('no-numbers-checkbox');
const noSymbols = document.getElementById('no-symbols-checkbox');
const passwordStrength = document.getElementById('password-strength');
const passwordCopied = document.getElementById('password-copied');


function clearPasswordFields() {
      passwordField.innerHTML = '';
      passwordField2.innerHTML = '';
}

function getPassword() {
                passwordStrength.textContent = '';
    
                if(noNumbers.checked && !noSymbols.checked) {
                    
                clearPasswordFields();
                
                for(let i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random() * charactersWithoutNumbers.length);
                let randomIndex2 = Math.floor(Math.random() * charactersWithoutNumbers.length);
                passwordField.innerHTML += charactersWithoutNumbers[randomIndex];
                passwordField2.innerHTML += charactersWithoutNumbers[randomIndex2];
                }
                
                } else if(noSymbols.checked && !noNumbers.checked) {
                    
                clearPasswordFields();
                 
                for(let i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random() * charactersWithoutSymbols.length);
                let randomIndex2 = Math.floor(Math.random() * charactersWithoutSymbols.length);
                passwordField.innerHTML += charactersWithoutSymbols[randomIndex];
                passwordField2.innerHTML += charactersWithoutSymbols[randomIndex2];
                
                }
                
                } else if(noSymbols.checked && noNumbers.checked) {
                    
                clearPasswordFields();
                
                for(let i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random()*charactersWithoutSymbolsAndNumbers.length);
                let randomIndex2 = Math.floor(Math.random()*charactersWithoutSymbolsAndNumbers.length);
                passwordField.innerHTML += charactersWithoutSymbolsAndNumbers[randomIndex];
                passwordField2.innerHTML += charactersWithoutSymbolsAndNumbers[randomIndex2];
                
                }
                
                } else {
                    
                clearPasswordFields();
                
                for(let i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random()*characters.length);
                let randomIndex2 = Math.floor(Math.random()*characters.length);
                passwordField.innerHTML += characters[randomIndex];  
                passwordField2.innerHTML += characters[randomIndex2];
                
                }
                
                }
                
                passwordStrengthMessage();
                };

function gifStyle() {
     document.getElementById('container').style.height = "800px";
    document.getElementById('password-strength-gif').classList.remove('hide');
}                

function passwordStrengthMessage() {
    
                if (passwordLength.value >= 8 && !noNumbers.checked && !noSymbols.checked) {
                passwordStrength.innerHTML = `Your password strength: 
                <span class="strong">Strong💪</span>`;
                gifStyle();
                document.getElementById('password-strength-gif').classList.add('strong-gif');
                document.getElementById('password-strength-gif').classList.remove('hide');
                } else if(passwordLength.value >=8 && noNumbers.checked && !noSymbols.checked){
                passwordStrength.innerHTML = `Your password strength: <span class="medium">Medium❤️</span>`;
                gifStyle();
                document.getElementById('password-strength-gif').classList.add('medium-gif');
           
                } else if (passwordLength.value >=8 && !noNumbers.checked && noSymbols.checked){
                passwordStrength.innerHTML = `Your password strength: <span class="medium">Medium❤️</span>`;
                gifStyle();
                document.getElementById('password-strength-gif').classList.add('medium-gif');
             
                } 
                else {
                passwordStrength.innerHTML = `Your password strength: <span class="weak">Weak👎</span>`;
                gifStyle();
                document.getElementById('password-strength-gif').classList.add('weak-gif');
            
                }
};

  
function passwordFieldNotEmptyStyling() {
    passwordCopied.style.paddingTop = "8px";
    passwordCopied.style.color = "#55F991";
    passwordCopied.style.lineHeight = "12px";
    passwordCopied.style.fontStyle = "normal";
};

function passwordFieldEmptyStyling() {
    passwordCopied.textContent = "Password Field Is Empty!";
    passwordCopied.style.color = "red";
    passwordCopied.style.fontWeight = "bold";
    passwordCopied.style.fontStyle= "normal";
    passwordCopied.style.lineHeight = "34px";
};

function copyDivToClipboard() {
    let range = document.createRange();
    range.selectNode(document.getElementById("password-field"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect  
    
    if(range != ''){
        passwordCopied.textContent = "Successfully Copied: " + range;
        passwordFieldNotEmptyStyling();
    }
     else if(range == ''){
      passwordFieldEmptyStyling();
   }
}

function copyDivTwoToClipboard() {
    
    let range = document.createRange();
    range.selectNode(document.getElementById("password-field2"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    
      if(range != ''){
          
    passwordCopied.textContent = "Successfully Copied: " + range;
    passwordFieldNotEmptyStyling();
    
    }
     else if(range == ''){
         
         passwordFieldEmptyStyling();
    }
};




