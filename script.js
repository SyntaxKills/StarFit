const loginScreen = document.getElementById("loginScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const modal = document.getElementById("sectionModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const modalAction = document.getElementById("modalAction");

const sectionTexts = {
  "Treinos": "Aqui o cliente poderá visualizar exercícios, séries, repetições, cargas, descansos e o treino criado pelo professor.",
  "Dieta": "Aqui ficará a dieta montada pelo nutricionista, com refeições, alimentos, quantidades e informações nutricionais.",
  "Progresso": "Aqui serão exibidos peso, medidas, desempenho, histórico de treinos e evolução ao longo do tempo.",
  "Academias": "Área para encontrar academias cadastradas, visualizar unidades e consultar informações da academia.",
  "Sobre": "Perfil e informações da conta Star Fit.",
  "Início": "Você já está na página inicial."
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const pass = password.value.trim();

  if (!email || !pass) return;

  loginScreen.classList.add("hidden");
  dashboardScreen.classList.remove("hidden");
});

togglePassword.addEventListener("click", () => {
  const showing = password.type === "text";
  password.type = showing ? "password" : "text";
  togglePassword.textContent = showing ? "◉" : "◌";
});

document.getElementById("googleLogin").addEventListener("click", () => {
  alert("Protótipo: o login com Google será conectado ao backend posteriormente.");
});

document.getElementById("forgotPassword").addEventListener("click", (event) => {
  event.preventDefault();
  alert("Protótipo: fluxo de recuperação de senha.");
});

document.getElementById("createAccount").addEventListener("click", () => {
  alert("Protótipo: aqui será aberta a tela de cadastro do Star Fitter.");
});

function openSection(section) {
  if (section === "Início") return;

  modalTitle.textContent = section;
  modalText.textContent = sectionTexts[section] || "Área do aplicativo.";
  modal.classList.remove("hidden");

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.section === section);
  });
}

document.querySelectorAll("[data-section]").forEach((button) => {
  button.addEventListener("click", () => openSection(button.dataset.section));
});

function closeSection() {
  modal.classList.add("hidden");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.section === "Início");
  });
}

closeModal.addEventListener("click", closeSection);
modalAction.addEventListener("click", closeSection);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeSection();
});

document.getElementById("profileButton").addEventListener("click", () => {
  openSection("Sobre");
});
