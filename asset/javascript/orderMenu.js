function totalBayar(){
    
        const makananItem = document.getElementById('macamMakanan').value;
        const minumanItem = document.getElementById('macamMinuman').value;
        const cemilanItem = document.getElementById('macamCemilan').value;

        let jumlahMakanan = document.getElementById('jumlahMakanan').value;
        let jumlahMinuman = document.getElementById('jumlahMinuman').value;
        let jumlahCemilan = document.getElementById('jumlahCemilan').value;

        let priceMakanan = 0;
        if(makananItem == 'Default'){
            priceMakanan = 0;
        }else if(makananItem == 'Cah Kangkung Udang'){
            priceMakanan = 33500 * jumlahMakanan;
        }else if(makananItem == 'Cap cay Kuah'){
            priceMakanan = 25000 * jumlahMakanan;
        }else if(makananItem == 'Nasi Goreng Gebyog'){
            priceMakanan = 31500 * jumlahMakanan;
        }else if(makananItem == 'Cumi Asam Manis'){
            priceMakanan = 39500 * jumlahMakanan;
        }else if(makananItem == 'Udang Asam Manis'){
            priceMakanan = 39500 * jumlahMakanan;
        }else if(makananItem == 'Ayam Tepung Asam Manis'){
            priceMakanan = 29500 * jumlahMakanan;
        }else if(makananItem == 'Lele Penyet'){
            priceMakanan = 22500 * jumlahMakanan;
        }else if(makananItem == 'Patin Bakar'){
            priceMakanan = 27500 * jumlahMakanan;
        }else if(makananItem == 'Sop Ayam'){
            priceMakanan = 27500 * jumlahMakanan;
        }else if(makananItem == 'Cah Kangkung Pete'){
            priceMakanan = 33000 * jumlahMakanan;
        }
    
        let priceMinuman = 0;
        if(minumanItem == 'Default'){
            priceMinuman = 0;}
        else if(minumanItem == 'Jus Jambu'){
            priceMinuman = 20500 * jumlahMinuman;
        }else if(minumanItem == 'Soda Gembira'){
            priceMinuman = 22000 * jumlahMinuman;
        }else if(minumanItem == 'Jeruk Hangat/Es'){
            priceMinuman = 13500 * jumlahMinuman;
        }else if(minumanItem == 'Teh Manis Hangat/Es'){
            priceMinuman = 7500 * jumlahMinuman;
        }else if(minumanItem == 'Kopi Hitam'){
            priceMinuman = 14000 * jumlahMinuman;
        }else if(minumanItem == 'Jahesu'){
            priceMinuman = 22000 * jumlahMinuman;
        }else if(minumanItem == 'Beras Kencur Hangat/Es'){
            priceMinuman = 17000 * jumlahMinuman;
        }else if(minumanItem == 'Kunyit Asam Hangat/Es'){
            priceMinuman = 17000 * jumlahMinuman;
        }else if(minumanItem == 'Jus Sirsak'){
            priceMinuman = 22000 * jumlahMinuman;
        }else if(minumanItem == 'Jus Alpukat'){
            priceMinuman = 22000 * jumlahMinuman;
        }
    
        let priceCemilan = 0;
        if(cemilanItem == 'Default'){
            priceCemilan = 0;
        }else if(cemilanItem == 'Kentang Goreng'){
            priceCemilan = 13000 * jumlahCemilan;
        }else if(cemilanItem == 'Pisang Goreng'){
            priceCemilan = 12000 * jumlahCemilan;
        }else if(cemilanItem == 'Omelet Djoglo'){
            priceCemilan = 22500 * jumlahCemilan;
        }else if(cemilanItem == 'Roti Bakar'){
            priceCemilan = 18500 * jumlahCemilan;
        }else if(cemilanItem == 'Mendoan'){
            priceCemilan = 12000 * jumlahCemilan;
        }
        
        const note = document.getElementById('note');

        let priceTotal = priceMakanan + priceMinuman + priceCemilan;
        if (priceTotal == 0) {
            note.innerText= "Isi terlebih dahulu";
        } else {
            if (makananItem == 'Default') {
                note.innerText = "";
            } else {
                if (jumlahMakanan == 0 || jumlahMakanan < 0) {
                    note.innerText = "";
                } else {
                    note.innerText = makananItem +" x"+jumlahMakanan +"\n"; 
                }
            }
            if (minumanItem == 'Default') {
                note.innerText += "";
            } else {
                if (jumlahMinuman == 0 || jumlahMinuman < 0) {
                    note.innerText = makananItem +" x"+jumlahMakanan +"\n"; 
                } else {
                    note.innerText += minumanItem +" x"+jumlahMinuman +"\n"; 
                }
            }
            if (cemilanItem == 'Default') {
                note.innerText += "";
            } else {
                if (jumlahCemilan == 0 || jumlahCemilan < 0) {
                    note.innerText = makananItem +" x"+jumlahMakanan +"\n"; 
                    note.innerText += minumanItem +" x"+jumlahMinuman +"\n";
                } else {
                    note.innerText += cemilanItem +" x"+jumlahCemilan +"\n"; 
                }

            }
            if (priceTotal <= 0) {
                innerText += "";
            } else {
                note.innerText += "Total : Rp."+priceTotal;
            }

            alert('Berhasil membeli dengan harga total : Rp. '+priceTotal);
        }
}
