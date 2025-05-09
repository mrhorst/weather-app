import { buildLayout, tableLayout } from './DOMhelpers.js'
import {
  fetchData,
  getCloudCover,
  getSunData,
  getTemperature,
} from './weatherAPI.js'

const innitUI = () => {
  const { submitButton, unitSelector, zipInput, resultContainer } =
    buildLayout()
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const response = await fetchData(zipInput.value, unitSelector.value)
    const tempData = getTemperature(response)
    const sunData = getSunData(response)
    const cloudData = getCloudCover(response)

    resultContainer.innerHTML = ''
    const tempTable = tableLayout(tempData, resultContainer, 'Temperature Data')
    Object.entries(tempTable.cellRefs).forEach((entry) => {
      entry[1].textContent = entry[1].textContent + ' F'
    })
    tableLayout(sunData, resultContainer, 'Sun Data')
    const cloudTable = tableLayout(cloudData, resultContainer, 'Cloud Data')
  })
}

export { innitUI }
