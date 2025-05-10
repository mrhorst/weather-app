import { buildLayout } from './DOMhelpers.js'
import {
  fetchData,
  getCloudCover,
  getCurrentConditions,
  getDescription,
  getHumidity,
  getIcon,
  getNextDaysArray,
  getResolvedAddress,
  getSunData,
  getTemperature,
  getWindInfo,
} from './weatherAPI.js'

const innitUI = async () => {
  const { navbar, elements } = buildLayout()
  const { submitButton, zipInput, unitSelector } = navbar
  elements.loadingIndicator.classList.remove('hidden')
  let response = await fetchData(zipInput.value, unitSelector.value)
  elements.loadingIndicator.classList.add('hidden')
  populateData(response, elements)

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault()
    elements.loadingIndicator.classList.remove('hidden')
    submitButton.disabled = true
    response = await fetchData(zipInput.value, unitSelector.value)
    console.log(response)
    submitButton.disabled = false
    elements.loadingIndicator.classList.add('hidden')
    populateData(response, elements)
  })
}

const populateData = (data, elements) => {
  const tempData = getTemperature(data)
  const humidityData = getHumidity(data)
  const cloudData = getCloudCover(data)
  const iconData = getIcon(data)
  const descriptionData = getDescription(data)
  const conditionsData = getCurrentConditions(data)
  const windData = getWindInfo(data)
  const addressData = getResolvedAddress(data)
  const {
    temp,
    feelsLike,
    humidity,
    icon,
    description,
    conditions,
    windspeed,
    windgust,
    address,
  } = elements
  temp.textContent = tempData.temp + ' F'
  feelsLike.textContent = tempData.feelslike + ' F'
  humidity.textContent = humidityData.Humidity + '%'
  icon.src = `./assets/icons/${iconData.icon}.svg`
  description.textContent = descriptionData.Description
  conditions.textContent = conditionsData.conditions
  windspeed.textContent = windData.windspeed + ' MPH'
  windgust.textContent = windData.windgust + ' MPH'
  address.textContent = addressData['Resolved Address']
}
export { innitUI }
