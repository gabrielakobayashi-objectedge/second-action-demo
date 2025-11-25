
// small DOM helpers: progressive enhancement only
document.getElementById('year').textContent = new Date().getFullYear();

// basic form handling (no network)
const form = document.querySelector('form#contact');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name').trim();
    const email = fd.get('email').trim();
    if (!name || !email) {
        msg.textContent = 'Please provide name and email.';
        msg.style.display = 'block';
        return;
    }
    msg.style.color = '#a7f3d0';
    msg.textContent = `Thanks, ${name}! This demo does not submit data.`;
    msg.style.display = 'block';
    form.reset();
    setTimeout(() => { msg.style.display = 'none'; msg.style.color = ''; }, 4500);
});

// keyboard shortcut: press "g" to focus first link to Get started
document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'g' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        const el = document.getElementById('get-started');
        if (el) el.focus();
    }
});
