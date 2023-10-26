const apiKey = "GOUWlxW37P1GyAKGk11LNW1DECSBkfRK";

const entrada_texto = document.querySelector(".entrada_texto");
console.log(entrada_texto);

const buscador = document.querySelector(".buscador");

const resultados= document.querySelector(".resultados");

buscador.addEventListener("click", () =>{
    resultados.innerHTML= ""
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${entrada_texto.value}&limit=9`;
    const peticion = fetch (url);

      peticion
        .then((response) => {
            return response.json() //permite visualixar la respuesta del usuario y devuelve una promesa
        .then ((response) => {
            response.data.forEach(element => {
            const urlImg = element.images.original.url; //link del gif, muestra en pantalla 25 gif
            const img = document.createElement("img"); //crea una etiqueta tipo imagen(gif) en el documento
            img.src = urlImg; //a la imagen (img.src buscador) le digo que es igual al enlace urlImg 
            resultados.appendChild(img) //inserta la imagen en resultado, creando un nodo hijo
          });
      })
        })
}) 