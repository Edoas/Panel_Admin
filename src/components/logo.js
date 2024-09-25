class Logo extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
    this.color = this.getAttribute('color')
    this.message = this.getAttribute('message')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
      <style>
        h1 {   
          color: ${this.color};
          font-family: "Ubuntu", sans-serif;
          font-weight: 600;
          margin: 0;
        }
      </style>

      <div class="title"> 
        <h1>${this.title}</h1>
      </div>
    `
    console.log(this.shadow.querySelector('.title'))
    
    this.shadow.querySelector('.title').addEventListener('click',() => {
      this.alerMessage()
  })
} 

  alertMessage() {
    alert(this.message)
  }
   

}


customElements.define('logo-component', Logo)