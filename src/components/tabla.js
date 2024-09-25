class Tabla extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render(){

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

        .tabla{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .tabla-cabecera{
          background-color: hsl(0, 0%, 100%);
          padding: 0.02rem 0.5rem;
        }

        .tabla-cabecera-botones{
            align-items: center;
            display: flex;
            gap: 0.5rem;
        }

        .tabla-cabecera-boton{
            height: 2rem;
        }

        .tabla-cabecera-boton svg{
            fill: hsla(0, 0%, 0%);
            height: 2rem;
            width: 2rem;
        }

        .tabla-registros{
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            height: 75vh;
            max-height: 75vh;
            overflow: auto;
        }

        .tabla-registros::-webkit-scrollbar{
            background-color: hsl(210, 83%, 53%);
            width: 0.5rem;
        }

        .tabla-registros::-webkit-scrollbar-thumb{
            background-color: hsl(235, 96%, 19%);
            width: 0.5rem;
        }

        .tabla-registro{
            max-width: 70%;
            width: 70%;
            word-wrap: break-word;
            word-break: break-all;
        }

        .tabla-registro-cabecera{
            display: flex;
            justify-content: flex-end;
            background-color: hsl(0, 0%, 100%);
        }

        .tabla-registro-botones{
            display: flex;
            gap: 0.5rem;
        }

        .tabla-registro-botones svg{
            fill: hsla(0, 0%, 0%);
            height: 2rem;
            width: 2rem;
        }

        .tabla-registro-cuerpo{
            background-color: hsl(0, 0%, 0%);
            padding: 1rem;
        }

        .tabla-registro-cuerpo ul li{
            color: hsl(0, 0%, 100%);
        }

        .tabla-registro-cuerpo ul li::first-letter{
            text-transform: uppercase;
        }

        .tabla-registro-cuerpo ul li span::after{
            color: hsl(0, 0%, 100%);
            content:':';
            margin-right: 0.2rem;
        }

        .tabla-footer{
            background-color: hsl(0, 0%, 100%);
            display: flex;
            justify-content: space-between;
            padding: 0.5rem;
        }

        .tabla-footer-paginacion svg{
            fill: hsl(0, 0%, 50%);
            height: 1rem;
            width: 1rem;
        }

      </style>

      <div class="tabla"> 
        <div class="tabla-cabecera">
          <div class="tabla-cabecera-botones">
            <div class="tabla-cabecera-boton">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
            </div>
          </div>
        </div>

        <div class="tabla-registros">
            <div class="tabla-registro">
              <div class="tabla-registro-cabecera">
                <div class="tabla-registro-botones">
                  <div class="registro-boton-crear">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                  </div>
                <div class="registro-boton-borrar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                  </div>
                </div>
              </div>
              <div class="tabla-registro-cuerpo">
                <ul>
                  <li><span>nombre</span>Carlos</li>
                  <li><span>email</span>carlossedagambin@gmail.com</li>
                  <li><span>fecha de creación</span>2024-09-09</li>
                  <li><span>fecha de actualización</span> 2024-09-09</li>
                </ul>
              </div>
          </div>
        </div>

        <div class="tabla-footer">
          <div class="tabla-footer-informacion">
            <span>1 registro en total, mostrando 10 por página</span>
          </div>
          <div class="tabla-footer-paginacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-double-left</title><path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" /></svg>
          </div>
        </div> 
      </div>


    `
  }
}
customElements.define('tabla-component', Tabla)
