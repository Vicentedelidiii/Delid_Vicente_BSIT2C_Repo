function WeatherAdvice(temperature, isRaining){
    if (temperature < 10){
        advice = "Wear a heavy jacket";
    }else if(temperature >= 10 && temperature <= 20 && isRaining){
        advice = "Bring an umbrella";
    }else{
        advice = "Enjoy the weather";
    }
    return advice;
}

console.log(WeatherAdvice(8, false))
console.log(WeatherAdvice(15, true))
console.log(WeatherAdvice(25, true))

/* 
1. Start
2. Create a function named weatherAdvice with 2 parameter named 
temperature and isRaining
3. create if statement that  

*/
