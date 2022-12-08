const { promisify } = require('util')
const fs = require('fs')

const readFile = promisify(fs.readFile)

async function main() {
    data = await readFile('input.txt', "utf8")
    const parsed = data.split("\r\n").map(calorie => calorie !== "" ? parseInt(calorie) : "")
    
    let tempCalories = 0
    let calorieList = parsed.map(calorie => {
        if(calorie != ""){
            tempCalories += calorie
        }else{
            highestCalories = tempCalories
            console.log(tempCalories, highestCalories)
            tempCalories = 0
            return highestCalories
        }
    }).filter(calorie => calorie !== undefined)
    calorieList.sort((a, b) => {
        return a - b
    }).reverse()
    console.log(calorieList[0] + calorieList[1] + calorieList[2])
}

try {
    main()
} catch (e) {
    console.error(e)
}