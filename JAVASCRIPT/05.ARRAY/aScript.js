// Banyak method yang belum dicoba



var penumpang = ['a',undefined,'b'];
var tambahPenumpang = function(namaPenumpang, penumpang){
	if(penumpang.length == 0){
		penumpang.push(namaPenumpang);
		return penumpang;
	}else {
		for(var i = 0; i < penumpang.length; i++){
			if(penumpang[i] == undefined){
				penumpang[i] = namaPenumpang;
				return penumpang;
			}
			else if(penumpang[i] == namaPenumpang){
				console.log(namaPenumpang + ' sudah ada didalam angkot.');
				return penumpang;
			}
			else if(i == penumpang.length - 1){
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang){
	if(penumpang.length == 0){
		console.log('Angkot masih kosong');
		return penumpang;
	} else{
		for(var i =0; i< penumpang.length; i++){
			if(penumpang[i]==namaPenumpang){
				penumpang[i] = undefined;
				return penumpang;
			}
			else if(i == penumpang.length - 1){
				console.log(namaPenumpang + 'tidak ada didalam angkot');
				return penumpang;
			}
		}
	}
}