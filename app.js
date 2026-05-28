const notesContainer = document.getElementById('notes');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const saveBtn = document.getElementById('saveBtn');
const searchInput = document.getElementById('search');
const themeToggle = document.getElementById('themeToggle');

let notes = JSON.parse(localStorage.getItem('notes')) || [];
let editId = null;

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes(filter = '') {
  notesContainer.innerHTML = '';

  notes
    .filter(note =>
      note.title.toLowerCase().includes(filter.toLowerCase()) ||
      note.content.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach(note => {
      const div = document.createElement('div');
      div.className = 'note';

      div.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <small>${new Date(note.createdAt).toLocaleString()}</small>
        <div class="actions">
          <button onclick="editNote('${note.id}')">Bearbeiten</button>
          <button onclick="deleteNote('${note.id}')">Löschen</button>
        </div>
      `;

      notesContainer.appendChild(div);
    });
}

saveBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) return;

  if (editId) {
    notes = notes.map(note =>
      note.id === editId
        ? { ...note, title, content }
        : note
    );

    editId = null;
    saveBtn.textContent = 'Notiz speichern';
  } else {
    notes.unshift({
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: Date.now()
    });
  }

  saveNotes();
  renderNotes(searchInput.value);

  titleInput.value = '';
  contentInput.value = '';
});

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  saveNotes();
  renderNotes(searchInput.value);
}

function editNote(id) {
  const note = notes.find(note => note.id === id);

  titleInput.value = note.title;
  contentInput.value = note.content;

  editId = id;
  saveBtn.textContent = 'Änderungen speichern';
}

searchInput.addEventListener('input', e => {
  renderNotes(e.target.value);
});

function loadTheme() {
  const dark = localStorage.getItem('darkMode') === 'true';

  if (dark) {
    document.body.classList.add('dark');
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');

  localStorage.setItem(
    'darkMode',
    document.body.classList.contains('dark')
  );
}

themeToggle.addEventListener('click', toggleTheme);

loadTheme();
renderNotes();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('SW registered'))
    .catch(err => console.error('SW error:', err));
}
