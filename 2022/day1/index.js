const { promisify } = require('util')
const fs = require('fs')

const readFile = promisify(fs.readFile)

async function main() {
    data = await readFile('input.txt', "utf8")
    const parsed = data.split("\r\n").map(calorie => calorie !== "" ? parseInt(calorie) : "")
    let highestCalories = 0
    let tempCalories = 0
    parsed.forEach(calorie => {
        if(calorie != ""){
            tempCalories += calorie
            if(tempCalories > highestCalories){
                highestCalories = tempCalories
            }
        }else{
            tempCalories = 0
        }
    })
    console.log(highestCalories)
}

try {
    main()
} catch (e) {
    console.error(e)
}