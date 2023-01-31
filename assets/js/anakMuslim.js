$(document).ready(function () {
  $(".nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

function Exit() {
  if (window.confirm("Apakah anda yakin untuk keluar dari AnakMuslim?")) {
    window.alert(
      "AnakMuslim di tutup, terima kasih, wassalamualaikum warahmatullahi wabarakatuh"
    );
    window.open("about:blank", "_self");
    Window.close();
  } else {
    alert("Keluar, dibatalkan.");
  }
}


function Maaf() {
  if (window.confirm("Mohon maaf, saat ini fitur belum tersedia. ")) 
  {
    window.alert(
      "Terima kasih, anda dapat memilih fitur lain."
    );
  }
}

