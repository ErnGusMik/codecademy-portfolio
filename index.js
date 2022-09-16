const closeClickHandler = (id) => {
    const modal = document.getElementById('project-' + id);
    modal.style.display = 'none';
}
const openClickHandler = (id) => {
    const modal = document.getElementById('project-' + id);
    modal.style.display = 'block';
}