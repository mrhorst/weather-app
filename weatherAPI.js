const API_KEY = 'JTF8KN583MM5KJ2JCY3RQQRFC'

const fetchData = async (zipcode, unit) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipcode}?unitGroup=${unit}&key=${API_KEY}&contentType=json`
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}
const getCurrentConditions = (data) => {
  return data.currentConditions
}
const getSunData = (data) => {
  const currentConditions = getCurrentConditions(data)
  const sun = {
    sunrise: currentConditions.sunrise,
    sunset: currentConditions.sunset,
  }
  return sun
}

const getTemperature = (data) => {
  const currentConditions = getCurrentConditions(data)
  const temp = {
    temp: currentConditions.temp,
    feelslike: currentConditions.feelslike,
  }
  return temp
}

const getDescription = (data) => {
  return {
    Description: data.description,
  }
}

const getCloudCover = (data) => {
  const currentConditions = getCurrentConditions(data)
  const cloud = {
    cloudcover: currentConditions.cloudcover,
  }
  return cloud
}

const getResolvedAddress = (data) => {
  return {
    'Resolved Address': data.resolvedAddress,
  }
}

const getNextDaysArray = (data) => {
  return {
    Days: data.days,
  }
}

const getWindInfo = (data) => {
  const currentConditions = getCurrentConditions(data)
  return {
    windgust: currentConditions.windgust,
    windspeed: currentConditions.windspeed,
  }
}

const getHumidity = (data) => {
  return {
    Humidity: data.currentConditions.humidity,
  }
}

const getIcon = (data) => {
  return {
    icon: data.currentConditions.icon,
  }
}

export {
  fetchData,
  getCloudCover,
  getCurrentConditions,
  getSunData,
  getTemperature,
  getDescription,
  getResolvedAddress,
  getNextDaysArray,
  getWindInfo,
  getHumidity,
  getIcon,
}
