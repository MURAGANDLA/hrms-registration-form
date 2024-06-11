document.getElementById('fname').addEventListener('keypress', function() {
    if (this.value.trim() !== "") {
        document.getElementById('emailfield').classList.remove('hidden');
    }
});

document.getElementById('email').addEventListener('keypress', function() {
    if (this.value.trim() !== "") {
        document.getElementById('carsfield').classList.remove('hidden');
    }
});
document.getElementById('cars').addEventListener('keypress', function() {
    if (this.value.trim() !== "") {
        document.getElementById('passwordfield').classList.remove('hidden');
    }
});
document.getElementById('password').addEventListener('keypress', function() {
    if (this.value.trim() !== "") {
        document.getElementById('repasswordfield').classList.remove('hidden');
    }
});
document.getElementById('btn11').addEventListener('keypress', function() {
    if (this.value.trim() !== "") {
        document.getElementById('btnfield').classList.remove('hidden');
    }
        });