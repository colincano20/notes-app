async function loadNotes() {
  const res = await fetch("/api/notes");
  const notes = await res.json();
  const list = document.getElementById("notesList");
  list.innerHTML = "";
  notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = `${note.text}`;
    list.appendChild(li);
  });
}

async function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value;
  if (!text.trim()) return;

  await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  input.value = "";
  loadNotes();
}
var binary = 0;
async function textNote() {
if (binary == 1){
  document.getElementById("test").innerHTML = "See Date/Time";
  const res = await fetch("/api/notes");
  const notes = await res.json();
  const list = document.getElementById("notesList");
  list.innerHTML = "";
  notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = `${note.text}`;
    list.appendChild(li);
  });
  binary = 0;
  return false;
}
  const res = await fetch("/api/notes");
  const notes = await res.json();
  const list = document.getElementById("notesList");
  list.innerHTML = "";
  notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = `${note.text} (${new Date(note.timestamp).toLocaleString()})`;
    list.appendChild(li);
  
  });
  binary = 1;
  console.log(binary)
  return true; // signal that notes were fetched
  
}
function changeText(){
  document.getElementById("test").innerHTML = "See Text";
}
async function binaryNote() {
  const updated = await textNote();
  if (updated) {
    changeText();
  }
}
window.onload = loadNotes;
