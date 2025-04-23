// Управління модалками
const modals = {
    addTeacher: document.getElementById('myModal'),
    teacherInfo: document.getElementById('modalTeacher')
};

const closeModals = () => {
    Object.values(modals).forEach(modal => modal.style.display = 'none');
};

// Відкриття модалок
document.querySelectorAll('.modal-toggle').forEach(btn => {
    btn.addEventListener('click', () => modals.addTeacher.style.display = 'block');
});

document.querySelectorAll('.modal-teacher-toggle').forEach(btn => {
    btn.addEventListener('click', () => modals.teacherInfo.style.display = 'block');
});

// Закриття модалок
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', closeModals);
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) closeModals();
});