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

const buildLayout = () => {
  const navbar = createElement('nav', {
    classList: 'grid grid-cols-3 h-16 bg-blue-100 mb-5 items-center',
    parent: document.body,
  })
  const title = createElement('h2', {
    parent: navbar,
    classList: 'col-start-2 text-center font-bold text-lg',
    textContent: 'Weather App',
  })
  const container = createElement('div', {
    id: 'input-container',
    classList: 'grid gap-4 justify-center align-center',
  })
  const form = createElement('form', {
    id: 'form',
    parent: container,
    classList: 'grid grid-rows-2 gap-3 place-items-center',
  })
  const zipContainer = createElement('div', {
    id: 'zip-container',
    parent: form,
    classList: 'grid grid-cols-2 gap-3',
  })
  const zipLabel = createElement('label', {
    textContent: 'Zip Code',
    parent: zipContainer,
    classList: 'text-end',
  })
  const zipInput = createElement('input', {
    id: 'zip',
    parent: zipContainer,
    classList: 'col-start-2 shadow-md ring-1 rounded ',
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
    classList: 'text-end',
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
      'border w-30 rounded-xl bg-blue-700 text-white font-bold p-1 mt-3 hover:bg-blue-500 transition-colors duration-200 ease-in-out',
    textContent: 'Submit',
  })

  const resultContainer = createElement('div', {
    classList: 'grid grid-cols-2 gap-5',
    parent: container,
  })

  const loadingIndicator = createElement('div', {
    parent: container,
    classList:
      'hidden w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto',
  })

  // const dummyData = { data1: 'data 1', data2: 'data 2' }

  // const cloudCoverContainer = tableLayout(dummyData, resultContainer)
  // const temperatureContainer = tableLayout(dummyData, resultContainer)
  // const sunContainer = tableLayout(dummyData, resultContainer)

  document.body.appendChild(container)

  return {
    submitButton,
    unitSelector,
    zipInput,
    resultContainer,
    loadingIndicator,
  }
}

const tableLayout = (data, parent, title) => {
  const cellRefs = {}

  const tableWrapper = createElement('div', {
    parent,
    classList: 'grid bg-white shadow-md rounded p-4 border',
    textContent: title,
  })

  const table = createElement('table', {
    parent: tableWrapper,
    classList: 'w-full border-collapse',
  })
  const tableRowHeader = createElement('tr', {
    parent: table,
  })

  const tableRowData = createElement('tr', {
    parent: table,
  })

  if (data) {
    Object.entries(data).forEach(([key, value]) => {
      createElement('th', {
        textContent: key,
        parent: tableRowHeader,
        classList: 'text-left p-2 border-b border-gray-200',
      })

      const td = createElement('td', {
        textContent: value.toString(),
        parent: tableRowData,
        classList: 'text-left p-2 border-b border-gray-200',
      })
      cellRefs[key] = td
    })
  }
  return {
    tableWrapper,
    cellRefs,
  }
}

export { buildLayout, tableLayout }
