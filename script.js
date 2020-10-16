       // random pin generator
       function randomNumberFinder(){
        for(let i=1000; i<=9999; i++){
            let randomNumber = Math.random() * 10000;
            let realNumber = Math.round(randomNumber);
            
            if(realNumber>=1000 && realNumber<=9999){
                document.getElementById('random-output').value = realNumber;
            }                
        }            
    }
    
    // to print typed numbers
    let number = document.getElementsByClassName("button");
    for(let i=0; i<number.length; i++){
        number[i].addEventListener("click", function(){
            let output = document.getElementById("output-value").value;
            let newOutput = Number(output);
            // to print number side by side
            if(newOutput!=NaN){
                newOutput = newOutput + this.id;
                document.getElementById("output-value").value = Number(newOutput);
            }
        })
    }       

    // remove output using backspace
    function removeNumber(){
        const output = document.getElementById("output-value").value;
        document.getElementById("output-value").value = output.substring(0, output.length - 1);
    }

    // for clear button
    let operator = document.getElementsByClassName('operator');
    for(let i=0; i<operator.length; i++){
        operator[i].addEventListener('click', function(){
            if(this.id == 'clear'){
                document.getElementById('output-value').value = "";
            }
        })
    }

    // to compare random and typed number
    function handlePinComparison(){
        let randomNumber = document.getElementById("random-output").value;
        let outputNumber= document.getElementById("output-value").value;            

        if(randomNumber == outputNumber){
            document.getElementById("matched").style.display = 'block';
            document.getElementById("not-matched").style.display = 'none';
        }
        else{
            document.getElementById("not-matched").style.display = 'block';
            document.getElementById("matched").style.display = 'none';

            let tryCount = document.getElementById('try-count').innerText;
            for(let i=1; i<=tryCount; i++){                    
                let newTryCount = tryCount - i;
                document.getElementById('try-count').innerText = newTryCount;
                
                if(newTryCount == 0){
                    document.getElementById('submit-button').disabled = true;
                    document.getElementById('submit-button').style.backgroundColor = 'red';
                }
                break;
            }         
        }
    }