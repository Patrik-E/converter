const input = document.querySelector("#input")
const resultOutput = document.getElementById("result")
const unit = document.querySelector("#dropdown")


const converter = () => {
     let result = ""

    switch (unit.value) {
        
        case "mphtokmh":
            result = `${input.value} MPH equals ${(input.value * 1.6).toFixed(2)} KMH`
        break
        
        case "kmhtomph":
            result = `${input.value} KMH equals ${(input.value / 1.6).toFixed(2)} MPH`
        break

        case "noktogbp":
            result = `${input.value} NOK equals ${(input.value / 8.2).toFixed(2)}GBP`
        break
        
        case "gbptonok":
            result = `${input.value} GBP equals ${(input.value * 8.2).toFixed(2)} NOK`
        break
        
        case "noktousd":
            result = `${input.value} NOK equals ${(input.value / 10.20).toFixed(2)}USD`
        break
        
        case "usdtonok":
            result = `${input.value} USD equals ${(input.value * 10.20).toFixed(2)}NOK`
        break
        
        default:
            result = "Error" 
    }    

    resultOutput.innerText = result 
}

