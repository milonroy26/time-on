setInterval(() => {
    const time = document.getElementById('curent-time');
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString(); 
}, 1000);