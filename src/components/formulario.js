class Formulario extends HTMLElement {
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

        *{
          box-sizing: border-box;
        }
        
        ul{
          margin: 0;
          padding: 0;
          list-style: none;
        }
              
        .formulario{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .formulario-cabecera{
            align-items: center;
            background-color: hsl(0, 0%, 100%);
            display: flex;
            height: 2rem;
            justify-content:space-between;
        }

        .formulario-tab ul li{
            color: hsl(0, 0%, 100%);
        }

        .formulario-tab ul li.active{
            background-color: hsl(318, 51%, 36%);
            padding: 0.5rem;
        }

        .active ul li::first-letter{
            text-transform: uppercase;
        }

        .formulario-botones{
            display: flex;
            gap: 0.5rem;
            justify-content: end;
            padding: 0 0.2rem;
        }

        .formulario-botones svg{
            fill: hsla(0, 0%, 0%);
            height: 2rem;
            width: 2rem;
        }

        .formulario-cuerpo{
            display: flex;
        }

        form{
            display: grid;
            gap: 2rem; 
            grid-template-columns: repeat(auto-fit, minmax(22%, 1fr));
            width: 100%;
        }

        .formulario-cuerpo label{
            color: hsl(0, 0%, 100%);
        }

        .formulario-elemento input {
            background-color: hsl(256, 54%, 53%);
            border: none;
            border-bottom: 2px solid hsl(0, 0%, 100%);
            padding: 0.3rem 0.5rem;
            width: 100%;
        }

        .formulario-elemento-etiqueta{
            padding-bottom: 0.5rem;
        }
    </style>

    <div class="formulario">
      <div class="formulario-cabecera">
          <div class="formulario-tabs">
              <div class="formulario-tab">
                  <ul>
                      <li class="active">General</li>
                  </ul>
              </div>
          </div>
          <div class="formulario-botones">
              <div class="boton-limpiar">
                  <!-- crear boton limpiar -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
              </div>
              <div class="boton-guardar">
                  <!-- crear boton guardar -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
              </div>
          </div>
      </div>
      <div class="formulario-cuerpo">
          <form>
              <div class="formulario-elemento">
                  <div class="formulario-elemento-etiqueta"> 
                      <label>Nombre</label>
                  </div>
                  <div class="formulario-elemento-input">
                      <input type="text" name="" id="">

                  </div>
              </div>
              <div class="formulario-elemento">
                  <div class="formulario-elemento-etiqueta">
                      <label>Email</label>
                  </div>
                  <div class="formulario-elemento-input">
                      <input type="email" name="" id="">
                  </div>
              </div>
          </form>
      </div>
    </div>

    `
  }
}
customElements.define('formulario-component', Formulario)
