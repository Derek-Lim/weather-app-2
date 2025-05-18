import './styles.css'

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

function getLocation() {
  const input = form.querySelector('input')
  return input.value
}

async function handleSubmit(event) {
  event.preventDefault()
  const weatherData = await getWeatherData(getLocation())
}

async function getWeatherData(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=JGM7G4V9AVASVNWUXBBZVPUPZ`)
  const weatherData = await response.json()
  const address = weatherData.address
  const conditions = weatherData.currentConditions.conditions
  const temp = weatherData.currentConditions.temp
  const windspeed = weatherData.currentConditions.windspeed
   
  return { address, conditions, temp, windspeed }
}
