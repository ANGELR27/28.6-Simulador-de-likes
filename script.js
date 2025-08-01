const postForm = document.getElementById('postForm');
const feed = document.getElementById('feed');
 
postForm.addEventListener('submit', function(event) {
  event.preventDefault();
 
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageInput = document.getElementById('image');
  const file = imageInput.files[0];
  const imageURL = URL.createObjectURL(file);
 
  // Crear la card de publicación
  const card = document.createElement('div');
  card.className = 'card';
 
  const img = document.createElement('img');
  img.src = imageURL;
  card.appendChild(img);
 
  const h3 = document.createElement('h3');
  h3.textContent = title;
  card.appendChild(h3);
 
  const p = document.createElement('p');
  p.textContent = description;
  card.appendChild(p);
 
  const likeButton = document.createElement('button');
  likeButton.className = 'like-button';
  likeButton.innerHTML = '❤️ <span>0</span>';
 
  // Lógica de likes
  likeButton.addEventListener('click', function() {
    const span = likeButton.querySelector('span');
    let count = parseInt(span.textContent, 10);
    count++;
    span.textContent = count;
    likeButton.classList.add('red');
  });
 
  card.appendChild(likeButton);
 
  // Agregar al feed
  feed.prepend(card);
 
  // Limpiar formulario
  postForm.reset();
});
 