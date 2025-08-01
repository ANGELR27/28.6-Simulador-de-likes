const postForm = document.getElementById('postForm');
const feed = document.getElementById('feed');

postForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageInput = document.getElementById('image');

  if (imageInput.files.length === 0) {
    alert('Por favor, selecciona una imagen.');
    return;
  }

  const file = imageInput.files[0];
  const imageURL = URL.createObjectURL(file);
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = imageURL;
  img.alt = title;
  card.appendChild(img);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const h3 = document.createElement('h3');
  h3.textContent = title;
  cardContent.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = description;
  cardContent.appendChild(p);

  const cardActions = document.createElement('div');
  cardActions.className = 'card-actions';

  const likeButton = document.createElement('button');
  likeButton.className = 'like-button';
  likeButton.innerHTML = '❤️ <span>0</span>';

  likeButton.addEventListener('click', function() {
    const span = likeButton.querySelector('span');
    let count = parseInt(span.textContent, 10);

    if (likeButton.classList.contains('liked')) {
      count--;
      likeButton.classList.remove('liked');
    } else {
      count++;
      likeButton.classList.add('liked');
    }

    span.textContent = count;
  });

  cardActions.appendChild(likeButton);
  cardContent.appendChild(cardActions);
  card.appendChild(cardContent);

  feed.prepend(card);
  postForm.reset();
  imageInput.value = '';
});
