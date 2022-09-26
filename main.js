function reveal(e) {
    button = document.getElementById(e.target.id);
    switch(e.target.id) {
        case "MCbutton1":
            let MCbuttonDiv1 = document.getElementById('MCbutton-id1');
            button.style.display='none';
            MCbuttonDiv1.innerHTML = 'marks and channels 1';
            break;
        case "MCbutton2":
            let MCbuttonDiv2 = document.getElementById('MCbutton-id2');
            button.style.display='none';
            MCbuttonDiv2.innerHTML = 'marks and channels 2';
            break;
        case "Cbutton1":
            let CbuttonDiv1 = document.getElementById('Cbutton-id1');
            button.style.display='none';
            CbuttonDiv1.innerHTML = 'colormap 1';
            break;
        case "Cbutton2":
            let CbuttonDiv2 = document.getElementById('Cbutton-id2');
            button.style.display='none';
            CbuttonDiv2.innerHTML = 'colormap 2';
            break;
    }
}
