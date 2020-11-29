// Objek Literal
var mhs1 = {
	nama : 'Sandhika',
	nrp : '0403040023',
	email : 'sandhika@unpas.ac.id',
	jurusan : 'Teknik informatika'
}

// function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs2 = buatObjectMahasiswa('Nofariza', '0203004201', 'nofa@yahoo.com', 'Teknik Pangan');

// construtor
function Mahasiswa(nama, nrp, email, jurusan){
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa('Erik', '0130402321', 'erik@icloud.com', 'Teknik Mesin')