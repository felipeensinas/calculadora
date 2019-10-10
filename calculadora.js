
        const field1 = document.getElementById("value1");
        const field2 = document.getElementById("value2");
        const operator = document.getElementById("operator");
        const result = document.getElementById("result");

        let value1 = 0;
        let value2 = 0;
        let resultFinal = 0;

        

        const operations = function(){

            value1 = parseInt(field1.value);
            value2 = parseInt(field2.value);

            return {
                sum: () => {
                    resultFinal = value1 + value2;
                    return resultFinal;
                },
                sub: () => {
                    resultFinal = value1 - value2;
                    return resultFinal;
                },
                div: () => {
                    resultFinal = value1 / value2;
                    return resultFinal;
                },
                mult: () => {
                    resultFinal = value1 * value2;
                    return resultFinal;
                },
                perc: () => {
                    resultFinal = (value1 * value2) / 100;
                    return resultFinal;
                }
            }
        }

        function calculate(){
            if(operator.value === "1") operations().sum();
            if(operator.value === "2") operations().sub();
            if(operator.value === "3") operations().div();
            if(operator.value === "4") operations().mult();
            if(operator.value === "5") operations().perc();
            return displayResult();
        }


        function displayResult(){
            result.innerHTML = `${resultFinal}`;
            //alert(`${resultFinal}`);
            console.log(`${resultFinal}`);
            return resultFinal;
        }


        function reset(){
            field1.value = "";
            field2.value = "";
            operator.selectedIndex = 0;
            result.innerHTML = "0";
        }
