// Функция оплаты
function processPayment(productId) {
    const userid = document.getElementById("userid").value.trim();
    const popup = document.getElementById("popup");
    const message = document.getElementById("popup-message");

    if (userid === "") {
        message.innerText = "Оплата невозможна!\nВведите ваш ID.";
    } else {
        message.innerText = "Реквизиты для оплаты:\n0000 1111 2222 3333\nТовар: " + productId;
    }

    popup.style.display = "flex";
}

// Закрытие всплывающего окна
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Работа с табами и динамической подгрузкой
const tabs = document.querySelectorAll(".tab-item");
const panels = document.querySelectorAll(".tab-panel");

// Инициализация вкладок
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const target = tab.dataset.tab;
        panels.forEach(panel => {
            panel.classList.remove("active");

            if (panel.id === target) panel.classList.add("active");
        });
    });
});
