$(document).ready(function(){

    function onescroll(){
	   //변수 ht에 브라우저의 높이값을 저장
	   var ht = $(window).height();	
	   //브라우저의 높이값을 section의 높이값으로 지정
	   $("section").height(ht);
	
        //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	   $(window).on("resize",function(){
           var ht = $(window).height();	
		  $("section").height(ht);
        });	
	
	   //메뉴 버튼 클릭시
	   $("#menu li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});
	
        /*var slider = $('slider_box');
            slider.no('click', function(){
        
            var $section = $('#container>section');
            $section.eq(next).scrollTop();
        });*/
	
	   $(window).on("scroll",function(){	
		
           //변수 scroll에 현재 문서가 스크롤된 거리 저장
		  var scroll = $(window).scrollTop();
		
		  for(var i=0; i<5; i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				    $("#menu li").removeClass();
				    $("#menu li").eq(i).addClass("on");
                }
		  };
    
	   //section위에서 마우스 휠을 움직이면
	   $("section").on("mousewheel",function(event,delta){
	
            //마우스 휠을 올렸을때	
            if (delta > 0) {  
		      //변수 prev에 현재 휠을 움직인 section에서 이전   section의 offset().top위치 저장
               var prev = $(this).prev().offset().top;
               //문서 전체를 prev에 저장된 위치로 이동
                $("html,body").stop().animate({"scrollTop":prev},1200,"easeOutBounce");
		 
            //마우스 휠을 내렸을때	 
           }else if (delta < 0) {  
                //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
		      var next = $(this).next().offset().top;
		      //문서 전체를 next에 저장된 위치로 이동
		      $("html,body").stop().animate({"scrollTop":next},1200,"easeOutBounce");
            }
        });
        
        if(scroll >= (ht - 200)){
            $('#title_text').css({'right':'35%'});
        }
        else{
            $('#title_text').css({'right':'3%'});
        }
    });
    
        var close_btn = $('.close_btn');
        var c_img = $('.con_03').find('div > div');
        
        c_img.on('click', function(e){
            e.preventDefault;
            $('#title_text').css({'z-index': 0});
            $('#howl_head').css({'z-index': 0});
            
            $(this).removeClass('div_box');
            $(this).addClass('div_box');
            $(this).find('dl').addClass('dl_box');
            $(this).find('dt').addClass('dt_box');
            $(this).find('dd').addClass('dd_box');
            close_btn.fadeIn({'display':'block'}, 1500);
        });
        close_btn.on('click', function(){
            $('#title_text').css({'z-index': 1});
            $('#howl_head').css({'z-index': 10});
            
            c_img.removeClass('div_box');
            c_img.find('dl').removeClass('dl_box');
            c_img.find('dt').removeClass('dt_box');
            c_img.find('dd').removeClass('dd_box');
            close_btn.fadeOut({'display':'none'});
        });
    }
    onescroll();
    
    function player(){
        var mrandom = parseInt(Math.random()*22);
        console.log(mrandom);
		var index = mrandom;
		// play list ----------------------------------------------------------------------------------
		var music_list = ['1. 바람계곡의 나우시카 Tori no Hito (Ending) [Bird Person (Ending)].mp3',
                          '2. 천공의성 라퓨타 Carrying You (Ending Song by Azumi INOUE).mp3',
                          '3. 이웃집 토토로 Stroll -The Opening Theme Song- (performed by Azumi INOUE).mp3',
                          '4. 이웃집 토토로  My Neighbor Totoro -The Ending Song- (performed by Azumi INOUE).mp3',
                          '5. 마녀 배달부 키키 My Neighbor Totoro -The Ending Song- (performed by Azumi INOUE).mp3',
                          "6. 마녀 배달부 키키 If I've Been Enveloped by Tenderness.mp3",
                          '7. 추억은 방울방울 Love is a Flower, You are the Seed (Ending Song).mp3',
                          '8. 붉은 돼지 Once in a While, Talk of the Old Days.mp3',
                          '9. 바다가 들린다 If I can be an Ocean.mp3',
                          "10. 폼포코 너구리 대작전 Heisei Tanuki Gassen Mein Teima 'Genkisetsu'.mp3",
                          "11. 폼포코 너구리 대작전 Endo Teima 'Itsu Demo Dare Ka Ga'.mp3",
                          "12. 귀를 기울이면 Country Road (Theme Song).mp3",
                          "13. 귀를 기울이면 Take Me Home,Country Roads.mp3",
                          "14. 프로모션 필름 주제가 On Your Mark.mp3",
                          "15. 모노노케 히메 Princess Mononoke Theme Song, performed by Yosh (Vocal Ending).mp3",
                          "16. 센과 치히로의 행방불명 One Summer's Day.mp3",
                          "17. 센과 치히로의 행방불명 Always With Me.mp3",
                          "18. 고양이의 보은 Become The Wind (Acoustic Version) (Ayano Tsuji).mp3",
                          "19. 하울의 움직이는 성 Ending - The Promise of the World The Merry-go-round of Life.mp3",
                          "20. 게드 전기 Insert Song [Teru No Uta] Movie Version (A Capella).mp3",
                          "21. 게드 전기 Owari To Hajimari ~ Shudaika [Toki No Uta] ~ Ending.mp3",
                          "22. 벼랑 위의 포뇨 Mother of the Sea.mp3",
                          "23. 벼랑 위의 포뇨 Ponyo by the Cliff by the Sea [Film Version].mp3"
                         ];

		// 기본 재생곡명 ----------------------------------------------------------------------------------
		var nthPlay = './multi/'+music_list[index];
			$('.music').attr('src', nthPlay);  
			$('.m_list > marquee').text(music_list[index]); // 'marquee' 흘러가는 코드

		var prev = $('.m_before'),
            play = $('.m_play'),
            stop = $('.m_stop'),
            next = $('.m_next'),
            au = $('.music')[0],
            multi_audio = $('#music').find('audio');

     var playing = function(){
     if( au.play() ) {stop.addClass('stop_plus');} 
     else {stop.removeClass('stop_plus');}
         //  ( au.play() ) ? stop.addClass('stop_plus'); : else {stop.removeClass('stop_plus');     - 삼항연상자
   };
    
    
 au.play();
 play.addClass('stop_plus');
 stop.addClass('play_plus');
      

		// play btn ----------------------------------------------------------------------------------
	   play.on('click', function(){
	       au.play();
	       stop.addClass('play_plus');
	       stop.removeClass('stop_plus');
	       play.addClass('stop_plus');
	       play.removeClass('play_plus');
	       // playing();
	   });
	   stop.on('click', function(){
           au.pause();
	       play.addClass('play_plus');
	       play.removeClass('stop_plus');
	       stop.addClass('stop_plus');
	       stop.removeClass('play_plus');
	       // playing();
	   });

  	// prev btn ----------------------------------------------------------------------------------
	  	prev.click(function() {
	       stop.addClass('play_plus');
	       stop.removeClass('stop_plus');
	       play.addClass('stop_plus');
	       play.removeClass('play_plus');
            index--;
            if(index < 0) index=music_list.length-1;
            // var nth_list = $('#myaudio source:nth-child('+index+')' ;
            var nthPlay = './multi/'+music_list[index];
            $('#music>.music').attr('src', nthPlay); //.attr('src'));
            // $("#myaudio")[0].load();
            $("#music>.music")[0].load();
            $("#music>.music")[0].play();
            $('marquee').text(music_list[index]);
            playing(); // 리스트를 눌렀을때 안꼬이게 하기 위해
        });
	  
	  //	next btn ---------------------------------------------------------------------------------
   		next.click(function() {
	       stop.addClass('play_plus');
	       stop.removeClass('stop_plus');
	       play.addClass('stop_plus');
	       play.removeClass('play_plus');
            index++;
            if(index > music_list.length-1) index=0; // 한줄이라 중괄호 안해줌
            // var nth_list = $('#myaudio source:nth-child('+index+')' ;
            var nthPlay = './multi/'+music_list[index];
            $('#music>.music').attr('src', nthPlay); //.attr('src'));
            // $("#myaudio")[0].load();
            $("#music>.music")[0].load();
            $("#music>.music")[0].play();
            $('marquee').text(music_list[index]);
            playing(); // 리스트를 눌렀을때 안꼬이게 하기 위해
		});
        }
    player();
    
}); //jQuery end