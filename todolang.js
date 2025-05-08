const calendar = document.getElementById("calendar");
const modal = document.getElementById("modal");
const modalDate = document.getElementById("modal-date");
const taskInput = document.getElementById("task-input");

let currentDay = null;
let tasks = {};

for (let i = 1; i <= 31; i++) {
  const day = document.createElement("div");
  day.className = "day";
  day.dataset.day = i;
  day.innerHTML = `<strong>${i}일</strong><div class="task">${tasks[i] || ""}</div>`;
  day.onclick = () => openModal(i);
  calendar.appendChild(day);
}

function openModal(day) {
  currentDay = day;
  modalDate.innerText = `${day}일의 할 일`;
  taskInput.value = tasks[day] || "";
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function saveTask() {
  tasks[currentDay] = taskInput.value;
  const dayBox = document.querySelector(`.day[data-day='${currentDay}'] .task`);
  dayBox.innerText = taskInput.value;
  closeModal();
}

function deleteTask() {
  tasks[currentDay] = "";
  const dayBox = document.querySelector(`.day[data-day='${currentDay}'] .task`);
  dayBox.innerText = "";
  closeModal();
}
