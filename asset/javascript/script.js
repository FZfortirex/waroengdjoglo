const submitBtn = document.getElementById('submitComment');
const kolomSection = document.getElementById('kolomKomentar');
const formKomentar = document.getElementById('formKomentar');

submitBtn.addEventListener('click', () => {
    const commentText = formKomentar.querySelector('#komentar').value;
    const nameText = formKomentar.querySelector('#name').value;

    if(nameText.trim() !== '' && commentText.trim() !== ''){
    if(nameText.trim() !== '') {
        const nameElement = document.createElement('div')
        nameElement.classList.add('nameComment')
        nameElement.innerText = nameText;
        kolomSection.appendChild(nameElement); 
    }

    if(commentText.trim() !== '') {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerText = commentText;
        kolomSection.appendChild(commentElement);
    }

    formKomentar.querySelector('#komentar').value = '';
    formKomentar.querySelector('#name').value = '';
}
});

// let nama;
//     do{
//         nama = prompt("Masukkan Nama Anda : ");
//         if(nama !== ""){
//             document.getElementById('nameInput').innerText = "Selamat Datang, "+nama+" !";
//         } else if(nama == "" || nama == null){
//             alert('Nama Anda Kosong');
//         }
//     }while(nama == "" || nama == null);
