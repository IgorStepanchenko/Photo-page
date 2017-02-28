$(document).ready(function() {
    
// ********* Navigation ******************************
    
    $(".burger").click(function() {
        $(".header-nav").slideToggle(300);
        $(window).resize(function() {
            if($(this).width() > 768) {
                $(".header-nav").removeAttr("style");
            };
        })
    });
    
// **************** Fixed menu *********************
    
  $(window).scroll(function() {
     if($(this).scrollTop() >= 20) {
        $(".top-menu").addClass("nav-fix").fadeTo("slow");
         $("header .top-menu .logo, header .top-menu .header-nav ul li a").css({
             "line-height": "60px",
         });
     } else {
         $(".top-menu").removeClass("nav-fix");
     }
  });
    
    
    
// ************** Close btn for form ********************
    $(".close-btn").click(function() {
       $(".form-analysis").fadeOut("slow"); 
    });
    
    
// **************** Show form again *********************
    $(".round-btn").click(function() {
       $(".form-analysis").fadeIn("slow"); 
    });
    
    
    
// ****************** SMOOTH SCROLL **********************
     $(function(){
        $('a[href^="#"]').on('click', function(event){
            event.preventDefault();
            var topMenu = $(".top-menu").height();
            var target = this.hash;

            console.log(this.hash);
            var $target = $(target);

            console.log(window.location.hash);
            console.log($target.offset());
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - topMenu
            }, 900, 'swing', function(){
                window.location.hash = target;
            })
        })
    }());
    
    
    
//    ******************** FORM SUBMIT *************************
    
       $(".form-analysis").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
             toastr.success('Заявка успешно отправлвена!');
			$("#form").trigger("reset");
		});
		return false;
	});
    
    
  
});