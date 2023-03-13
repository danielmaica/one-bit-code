function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let technologies = 0

addTechBtn.addEventListener('click', function(ev) {
  // nova funcionalidade
  const stackInputs = document.getElementById('stackInputs')

  const newTechnology = document.createElement('li')
  const techIndex = technologies
  technologies++
  newTechnology.id = 'technology-' + techIndex
  newTechnology.className = 'technology'

  const lblTechName = createLabel('Nome da tecnologia: ', 'techName-' + techIndex)
  const inpTechName = createInput('techName-' + techIndex, null, 'techName')
  
  // tempo de experiência
  const lblExp = createLabel('  Experiência: ')
  const expRadio1 = createInput('expRadio-' + techIndex + '.1', '0-2 anos', 'techExp-' + techIndex, 'radio')
  const lblExp1 = createLabel('0-2 anos', 'expRadio-' + techIndex + '.1')
  const expRadio2 = createInput('expRadio-' + techIndex + '.2', '3-4 anos', 'techExp-' + techIndex, 'radio')
  const lblExp2 = createLabel('3-4 anos', 'expRadio-' + techIndex + '.2')
  const expRadio3 = createInput('expRadio-' + techIndex + '.3', '5+ anos', 'techExp-' + techIndex, 'radio')
  const lblExp3 = createLabel('5+ anos  ', 'expRadio-' + techIndex + '.3')

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function (){
    stackInputs.removeChild(newTechnology)
  })
  
  newTechnology.append(lblTechName, inpTechName, lblExp, expRadio1, lblExp1, expRadio2, lblExp2, expRadio3, lblExp3, removeRowBtn)

  stackInputs.append(newTechnology)
})

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const inpFullname = document.getElementById('fullname')
  const techRows = document.querySelectorAll('.technology')

  let technologies = []
  techRows.forEach(function (row) {
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: inpFullname.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  inpFullname.value = ''
  techRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)

})