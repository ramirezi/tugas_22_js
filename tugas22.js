function panggil(){
  var kalimat = "Saya ingin belajar bersama";
  var hasil = kalimat.split(" ");
  hasil.forEach(function(item,index,array){
console.log("Item :",item,"Index ke",index);
  })
}
panggil();
