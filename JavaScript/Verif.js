function verif() {
  tel = document.getElementById("tel").value;
  password = document.getElementById("pass");
  cpassword = document.getElementById("cpass");
  if (tel.length < 8 || tel.length > 8) {
    alert("Le numero de telephone doit etre composer de 8 chifre");
    return false;
  }
  if (password != cpassword) {
    alert("mot de passe de confirmation incorect !!");
  }
}
