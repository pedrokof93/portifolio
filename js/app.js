const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const form = document.querySelector('.search-form');

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

form.addEventListener('submit', function(e) {
  e.preventDefault(); // previnir o reload da página
  const searchValue = document.querySelector('.search-container input[type="text"]').value;
  console.log(searchValue); // aqui você pode colocar a lógica para realizar a pesquisa
});

document.querySelector('.movie-list-item-button').addEventListener('click', function() {
  // cria a janela modal
  var modal = document.createElement("div");
  modal.classList.add("modal");

  // adiciona a imagem à janela modal
  var img = document.querySelector('.movie-list-item-img').cloneNode();
  img.classList.add("modal-img");
  modal.appendChild(img);

  // adiciona o botão de fechar à janela modal
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "Fechar";
  closeButton.classList.add("modal-close-button");
  modal.appendChild(closeButton);

  // exibe a janela modal
  document.body.appendChild(modal);
});

// fecha a janela modal quando o botão de fechar é clicado
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("modal-close-button")) {
    event.target.parentNode.remove();
  }
});


