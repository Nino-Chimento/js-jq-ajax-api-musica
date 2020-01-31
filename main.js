$(document).ready(function() {
	$.ajax({
   "url": "https://flynn.boolean.careers/exercises/api/array/music",
   "method": "GET",
   success :function (data) {
     console.log(data.response.length);
     for (var i = 0; i < data.response.length; i++) {
       var source = $("#entry-template").html();
       var template = Handlebars.compile(source);
       var context = data.response[i];
       var html = template(context);
       $(".cds-container").append(html);
     }
   },
   error: function (richiesta,stato,errore) {
     alert("si e verificato l errore"+ errore)
   }
  });
});
