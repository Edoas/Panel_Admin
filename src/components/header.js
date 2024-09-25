class Header extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
      <style>
        header{
          align-items: center;
          padding: 1rem 0;
          display:flex;
          justify-content: space-between;
          width: 100%;  
        }
      </style> 

      <header>
        <slot></slot>
      </header>
    `
    }
}
customElements.define('header-component', Header)