const selector = (el) => document.querySelector(el)

const listOfpresenters = [
  {
    element:selector("#nav-key"),
    type:"click",
    presenter:import("./presenters/showNav")
  }
]

const addEvent = async p => {
  
  let {element,type,presenter} = p

  presenter = await presenter
    .then(e=>e.default)

  element.addEventListener(type,presenter)

}

listOfpresenters.forEach(addEvent)

