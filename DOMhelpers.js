const createElement = (type, data = {}) => {
  const el = document.createElement(type)
  data.id ? (el.id = data.id) : null
  data.parent ? data.parent.appendChild(el) : null
  data.classList ? (el.classList = data.classList) : null
  data.placeholder ? (el.placeholder = data.placeholder) : null
  data.textContent ? (el.textContent = data.textContent) : null
  data.value ? (el.value = data.value) : null
  return el
}

const buildNavbar = () => {
  const navbar = createElement('nav', {
    classList: 'grid grid-cols-4 h-15 bg-gray-200  justify-center align-center',
    parent: document.body,
  })

  const container = createElement('div', {
    id: 'input-container',
    classList: 'grid col-start-3 col-span-2 justify-center align-center',
    parent: navbar,
  })
  const form = createElement('form', {
    id: 'form',
    parent: container,
    classList: 'flex gap-2 place-items-center',
  })
  const zipContainer = createElement('div', {
    id: 'zip-container',
    parent: form,
    classList: 'grid grid-cols-2 gap-3',
  })
  const zipLabel = createElement('label', {
    textContent: 'Zip Code',
    parent: zipContainer,
    classList: 'font-semibold text-end',
  })
  const zipInput = createElement('input', {
    id: 'zip',
    parent: zipContainer,
    classList: 'col-start-2 shadow-md ring-1 rounded w-20',
    value: '11001',
  })
  const unitContainer = createElement('div', {
    id: 'zip-container',
    parent: form,
    classList: 'grid grid-cols-2 gap-3',
  })
  const unitLabel = createElement('label', {
    textContent: 'Unit',
    parent: unitContainer,
    classList: 'text-end font-semibold',
  })
  const unitSelector = createElement('select', {
    parent: unitContainer,
    classList: 'col-start-2 shadow-md ring-1 rounded ',
  })

  const units = ['us', 'uk', 'metric', 'base']

  units.forEach((unit) => {
    createElement('option', {
      parent: unitSelector,
      value: unit,
      textContent: unit,
    })
  })

  const submitButton = createElement('button', {
    id: 'submit-form',
    parent: form,
    classList:
      'border w-10 rounded-xl bg-blue-300 text-white font-bold p-1 hover:bg-blue-500 transition-colors duration-200 ease-in-out',
    textContent: '🔍',
  })

  // const dummyData = { data1: 'data 1', data2: 'data 2' }

  // const cloudCoverContainer = tableLayout(dummyData, resultContainer)
  // const temperatureContainer = tableLayout(dummyData, resultContainer)
  // const sunContainer = tableLayout(dummyData, resultContainer)

  return {
    submitButton,
    unitSelector,
    zipInput,
  }
}

const buildLocationCard = () => {
  const container = createElement('div', {
    parent: document.body,
    classList:
      'relative grid grid-cols-5 grid-rows-4 my-10 mx-20 h-125 place-items-center shadow-2xl p-5',
  })

  const backgroundOverlay = createElement('div', {
    parent: container,
    classList: 'absolute inset-0 bg-cover bg-center z-0 opacity-30 rounded-lg ',
  })
  backgroundOverlay.style.backgroundImage =
    "url('./assets/background/sunny_with_clouds.jpg')"

  const tempSection = createElement('div', {
    parent: container,
    classList: 'col-start-4 row-start-2 col-span-2',
  })

  const temp = createElement('p', {
    id: 'temp',
    parent: tempSection,
    classList: 'text-5xl font-bold text-center',
  })

  const feelsLikeContainer = createElement('div', {
    parent: container,
    classList: 'col-start-4 row-start-3',
  })

  const feelsLikeTitle = createElement('p', {
    textContent: 'Feels like',
    parent: feelsLikeContainer,
  })

  const feelsLike = createElement('p', {
    id: 'feelslike',
    parent: feelsLikeContainer,
    classList: 'text-2xl font-semibold text-center',
  })

  const humidityContainer = createElement('div', {
    parent: container,
    classList: 'col-start-5 row-start-3',
  })

  const humidityTitle = createElement('p', {
    textContent: 'Humidity',
    parent: humidityContainer,
  })

  const humidity = createElement('p', {
    id: 'feelslike',
    parent: humidityContainer,
    classList: 'text-2xl font-semibold text-center',
  })

  const icon = createElement('img', {
    parent: container,
    classList: 'w-20 h-20 col-start-3 row-start-1',
  })

  const description = createElement('p', {
    parent: container,
    classList: 'ml-5 text-lg font-semibold col-start-1 row-start-4 col-span-2',
  })

  const conditions = createElement('p', {
    parent: container,
    classList: 'col-start-1 row-start-1 col-span-2 text-3xl font-bold',
  })

  const windSpeedContainer = createElement('div', {
    parent: container,
    classList: 'grid col-start-4 row-start-4',
  })

  const windspeedTitle = createElement('p', {
    parent: windSpeedContainer,
    classList: 'text-md',
    textContent: 'Wind Speed',
  })

  const windspeed = createElement('p', {
    parent: windSpeedContainer,
    classList: 'text-xl font-semibold text-center',
  })

  const windGustContainer = createElement('div', {
    parent: container,
    classList: 'grid col-start-5 row-start-4',
  })
  const windgustTitle = createElement('p', {
    parent: windGustContainer,
    classList: 'text-md',
    textContent: 'Wind Gust',
  })
  const windgust = createElement('p', {
    parent: windGustContainer,
    classList: 'text-xl font-semibold text-center',
  })

  const address = createElement('p', {
    parent: container,
    classList: 'col-start-4 col-span-2 text-2xl font-bold',
  })

  const loadingIndicator = createElement('div', {
    parent: container,
    classList:
      'hidden w-6 h-6 border-blue-500 border-t-transparent rounded-full border-4 animate-spin col-start-3 row-start-2 row-span-2',
  })

  return {
    temp,
    feelsLike,
    humidity,
    icon,
    description,
    conditions,
    windspeed,
    windgust,
    address,
    loadingIndicator,
  }
}

const buildLayout = () => {
  const navbar = buildNavbar()
  const elements = buildLocationCard()
  return {
    navbar,
    elements,
  }
}

export { buildLayout }
