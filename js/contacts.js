// Функция для отправки формы
function submitForm() {
    const form = document.getElementById('feedbackForm');
    const formData = new FormData(form);
    
    // Простая валидация
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Собираем данные формы
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        category: formData.get('category'),
        message: formData.get('message')
    };

    // В реальном приложении здесь был бы AJAX-запрос
    console.log('Данные формы:', data);
    
    // Показываем уведомление об успешной отправке
    alert('Спасибо! Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время.');
    
    // Закрываем модальное окно
    contactModal.close();
    
    // Очищаем форму
    form.reset();
}

// Закрытие модального окна по клику на фон
document.getElementById('contactModal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.close();
    }
});

// Обработка отправки формы через Enter (предотвращаем стандартное поведение)
document.getElementById('feedbackForm').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && event.target.type !== 'textarea') {
        event.preventDefault();
    }
});

// Добавляем маску для телефона
document.getElementById('phone').addEventListener('input', function(e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+7' + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});