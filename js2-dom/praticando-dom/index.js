function addContact() {
  const contactSection = document.getElementById('contacts-list')
  
  // List Title
  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'
  
  // ul creation
  const ul = document.createElement('ul')
  
  // name input
  const nameLi = document.createElement('li')
  const nameLbl = document.createElement('label')
  nameLbl.htmlFor = 'fullname'
  nameLbl.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.append(nameLbl, nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))
  
  // phone input
  const phoneLi = document.createElement('li')
  const phoneLbl = document.createElement('label')
  phoneLbl.htmlFor = 'phone'
  phoneLbl.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.append(phoneLbl, phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))
  
  // adress input
  const adressLi = document.createElement('li')
  const adressLbl = document.createElement('label')
  adressLbl.htmlFor = 'adress'
  adressLbl.innerText = "Endereço: "
  const adressInput = document.createElement('input')
  adressInput.type = 'text'
  adressInput.name = 'adress'
  adressLi.append(adressLbl, adressInput)
  ul.appendChild(adressLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)
}

function removeContact() {
  const contactSection = document.getElementById('contacts-list')
  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')
  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}