'use strict';

window.addEventListener('load',
function header() {
  const _this = header;
  
  _this.init = () => {
    _this.requsicaoPoke();
    _this.formataHtml();
    _this.requsicaoPokeImagem();
  };
  
  _this.requsicaoPoke = () => {
    var result;
    
    var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://pokeapi.co/api/v2/pokemon?offset=0";
    
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // console.log(JSON.parse(xhr.response));
        result = xhr.response;
        _this.formataHtml(result);
      }
    };
    xhr.send();
  };

  _this.requsicaoPokeImagem = (urlImagem) => {
    var result;
    var imagemParse;
    var imagemResult;
    var xhr = new XMLHttpRequest(),
    method = "GET",
    url = urlImagem;
    
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // console.log(JSON.parse(xhr.response));
        result = xhr.response;
        imagemParse = JSON.parse(result);
        imagemResult = imagemParse.sprites.front_default;
        return imagemResult;
      }
    };
    xhr.send();
  };
  
  _this.formataHtml = (textos) => {
    var obj = JSON.parse(textos);
    var results = obj.results;
    var name;
    var imagem;
    var list = document.getElementById("list-group");
    results.forEach(function(element) {
      name = element.name;
      imagem = element.url;
      _this.requsicaoPokeImagem(imagem);
      
      list.insertAdjacentHTML('beforeend', `<li class="list-group-item">${name}</li>`);

    });
  };

  _this.init();
});
