console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        const $navBtn = $('.navbtn')
        const $xnavbtnT = $('.xnavbtnT')
        const $xnavbtnB = $('.xnavbtnB')
        const $xnavbtnN = $('.xnavbtnN')

        const $navAbout = $('.navabout')
        const $navWork = $('.navwork')
        const $navContact = $('.navcontact')

        const navFun=(e)=>{
            if($navBtn.hasClass('navon')){
                $xnavbtnT.css('transform','rotate(45deg)');
                $xnavbtnB.css('transform','rotate(-45deg)');
                $xnavbtnN.css('opacity','0');
   
                $navAbout.css({'transform':'translateY(50px)','opacity':'1'});
                $navWork.css({'transform':'translateY(90px)','opacity':'1'});
                $navContact.css({'transform':'translateY(130px)','opacity':'1'});
                $navBtn.removeClass('navon').addClass('navoff');
            }
            else if($navBtn.hasClass('navoff')){
                $xnavbtnT.css('transform','');
                $xnavbtnB.css('transform','');
                $xnavbtnN.css('opacity','1');;
 
                $navAbout.css({'transform':'','opacity':'0'});
                $navWork.css({'transform':'','opacity':'0'});
                $navContact.css({'transform':'','opacity':'0'});
                $navContact.removeClass('on');
                $navBtn.removeClass('navoff').addClass('navon');
            }
            
        }
        $navBtn.on('click',navFun);
  
        /* 비트맵 움직임*/

      
        const $fbitmap1 = $('.f1')
        const $fbitmap2 = $('.f2')
        const $fbitmap3 = $('.f3')
        const $fbitmap4 = $('.f4')
        const $fbitmap5 = $('.f5')
        const $fbitmap6 = $('.f6')
        const $text01 = $('.text01')
        const $Ftext = $('.Ftextct')
        const $FbitmapOff = $('.F .fillbitmap')

        const $ibitmap1 = $('.i1')
        const $ibitmap2 = $('.i2')
        const $ibitmap3 = $('.i3')
        const $ibitmap4 = $('.i4')
        const $Itext = $('.Itextct')
        const $IbitmapOff = $('.I .fillbitmap')

        const $lbitmap1 = $('.l1')
        const $lbitmap2 = $('.l2')
        const $lbitmap3 = $('.l3')
        const $lbitmap4 = $('.l4')
        const $lbitmap5 = $('.l5')
        const $llbitmap1 = $('.ll1')
        const $llbitmap2 = $('.ll2')
        const $llbitmap3 = $('.ll3')
        const $llbitmap4 = $('.ll4')
        const $llbitmap5 = $('.ll5')
        const $LLtext = $('.LLtextct')
        const $LLbitmapOff = $('.LL .fillbitmap')

        const $fillbg =$('.fillpage');
        const $fillOff =$('.fillbitmap');


        //스크롤시 f 나오기
       
        const $window = $(window);
        let scrollY = null;
        let winHeight = window.innerHeight;//현재 높이값

        const fillbg = document.querySelector('.fillpage');

        let fillbgTop = fillbg.offsetTop;
        let fillbgTViewT = fillbgTop - winHeight;
        let fillbgPer = 0;
        const fillbgView = 80; 
        const   fillViewFun= ()=>{
            fillbgPer = (scrollY - fillbgTViewT) / winHeight * 100;
          if(fillbgView  <= fillbgPer){
            console.log('F 오픈!');
                $FbitmapOff.css('opacity','100%');
                $fbitmap1.addClass('on');
                $fbitmap2.addClass('on');
                $fbitmap3.addClass('on');
                $fbitmap4.addClass('on');
                $fbitmap5.addClass('on');
                $fbitmap6.addClass('on');
                $Ftext.css('opacity','1');
          
          }
        }
        const handleScrollFill= () => {
          scrollY = $window.scrollTop();
          fillViewFun();
        }
        $window.on('scroll', handleScrollFill);

        const $nextBtn = $('.nextbtn')
        const $WnextBtn = $('.Wnextbtn')
        const $resetBtn =$('.resetbtn');

        const fillchangeFun =(e)=>{
            console.log('i 오픈!');
            if($nextBtn.hasClass('fnexti')){
                $Ftext.css('opacity','0');
                $FbitmapOff.css('opacity','5%');
                setTimeout(function(){
                    $IbitmapOff.css('opacity','100%');
                    $ibitmap1.addClass('on');
                    $ibitmap2.addClass('on');
                    $ibitmap3.addClass('on');
                    $ibitmap4.addClass('on');  
                    $Itext.css('opacity','1')  ;
                },300);
                $nextBtn.removeClass('fnexti').addClass('inextll');
            }else if($nextBtn.hasClass('inextll')){
                console.log('ll 오픈!');
                $nextBtn.attr('src','img/whitenext.png');
                $Itext.css('opacity','0');
                $IbitmapOff.css('opacity','5%');
                setTimeout(function(){
                    $LLbitmapOff.css('opacity','100%');
                    $lbitmap1.addClass('on');$llbitmap1.addClass('on');
                    $lbitmap2.addClass('on');$llbitmap2.addClass('on');
                    $lbitmap3.addClass('on');$llbitmap3.addClass('on');
                    $lbitmap4.addClass('on');$llbitmap4.addClass('on');
                    $lbitmap5.addClass('on');$llbitmap5.addClass('on');
                    $LLtext.css('opacity','1');
                    $resetBtn.css({'opacity':'1'});
                    $resetBtn.attr('src','img/화살표.png');
                },300);
                $nextBtn.removeClass('inextll').addClass('llnextfill');
            }
            else if($nextBtn.hasClass('llnextfill')){
                console.log('fill 오픈!');
                $LLtext.css('opacity','0');
                $fillbg.css('background-color','rgb(247, 112, 35)');
                $fillOff.css({'background-color':'white','opacity':'100'});
                $nextBtn.css({'opacity':'0'});  
                setTimeout(function(){
                    $fillOff.css({'background-color':'rgb(247, 112, 35)','opacity':'5%'});
                    $FbitmapOff.css('opacity','100%');
                    $fbitmap1.addClass('on');
                    $fbitmap2.addClass('on');
                    $fbitmap3.addClass('on');
                    $fbitmap4.addClass('on');
                    $fbitmap5.addClass('on');
                    $fbitmap6.addClass('on');
                    $Ftext.css('opacity','1');
                    $nextBtn.attr('src','img/next.png');
                    $nextBtn.css({'opacity':'1'});  
                    $fillbg.css('background-color','white');
                    
                },3000);
                $nextBtn.removeClass('llnextfill').addClass('fnexti');
            }
        }
        //fill 버튼 되돌아가기
        const refillFun =(e)=>{
            $resetBtn.attr('src','img/white화살표.png');
            $Ftext.css('opacity','1');
            $FbitmapOff.css('opacity','100%');
            $fbitmap1.addClass('on');
            $fbitmap2.addClass('on');
            $fbitmap3.addClass('on');
            $fbitmap4.addClass('on');
            $fbitmap5.addClass('on');
            $fbitmap6.addClass('on');
            $resetBtn.css('opacity','0');

            $Itext.css('opacity','0');
            $ibitmap1.removeClass('on');
            $ibitmap2.removeClass('on');
            $ibitmap3.removeClass('on');
            $ibitmap4.removeClass('on');  

            $LLtext.css('opacity','0');
            $LLbitmapOff.css({'opacity':'5%','background-color':'rgb(247, 112, 35)'});
            $lbitmap1.removeClass('on');$llbitmap1.removeClass('on');
            $lbitmap2.removeClass('on');$llbitmap2.removeClass('on');
            $lbitmap3.removeClass('on');$llbitmap3.removeClass('on');
            $lbitmap4.removeClass('on');$llbitmap4.removeClass('on');
            $lbitmap5.removeClass('on');$llbitmap5.removeClass('on');
            $nextBtn.css({'opacity':'1'});
            $nextBtn.removeClass('inextf').addClass('fnexti');
            $WnextBtn.css({'opacity':'0','z-index':'9'});  
        }
        $nextBtn.on('click',fillchangeFun);
        $resetBtn.on('click',refillFun);

        //
        const $portfoilo = $('.portfoilo')
        const $repick = $('.repick')
        const $fillpf = $('.fillpf')
        const $teamlab = $('.teamlab')
        const $kodak = $('.kodak')
        const $monster = $('.monster')
        const $pfbox= $('.pfbox')
        const $pfImg= $('.pfimg')

        const portfoiloFun=function(){
            $repick.addClass('on');
            $fillpf.addClass('on');
            $teamlab.addClass('on');
            $kodak.addClass('on');
            $monster.addClass('on');
        }

        $portfoilo.on('mouseenter',portfoiloFun) 
      
        //텍스트 오버 - 이미지
     
        const pfMove=function(){
            if($(this).hasClass('repick')){
                $(this).css({'width':'29%','background-color':'rgb(247,112,35)','color':'white'});
                $(this).find('h2').css({'margin-left':'40px','transition':'all 0.2s ease'},'linear');
                $(this).find('img').addClass('on')
                $pfImg.attr('src','img/repick.png');
            }
            else if($(this).hasClass('teamlab')){
                $(this).css({'width':'36%','background-color':'rgb(247,112,35)','color':'white'});
                $(this).find('h2').animate({'margin-left':'40px','transition':'all 0.2s ease'},'linear');
                $(this).find('img').addClass('on')
                $pfImg.attr('src','img/teamlab.png');
            }
            else if($(this).hasClass('kodak')){
                $(this).css({'width':'45%','background-color':'rgb(247,112,35)','color':'white'});
                $(this).find('h2').css({'margin-left':'40px','transition':'all 0.2s ease'},'linear');
                $(this).find('img').addClass('on')
                $pfImg.attr('src','img/kodak-film.png');
            }
            else if($(this).hasClass('fillpf')){
                $(this).css({'width':'54%','background-color':'rgb(247,112,35)','color':'white'});
                $(this).find('h2').css({'margin-left':'40px','transition':'all 0.2s ease'},'linear');
                $(this).find('img').addClass('on')
                $pfImg.attr('src','img/fillbg.png');
            }
            else if($(this).hasClass('monster')){
                $(this).css({'width':'59%','background-color':'rgb(247,112,35)','color':'white'});
                $(this).find('h2').css({'margin-left':'40px','transition':'all 0.2s ease'},'linear');
                $(this).find('img').addClass('on')
                $pfImg.attr('src','img/monster.png');
            }
        }
        //텍스트 아웃 - 이미지
        const pfMoveRe=function(){
            if($(this).hasClass('repick')){
                $(this).css({'width':'25%','background-color':'white','color':'black'});
                $(this).find('h2').css({'margin-left':'','transition':'all 0.2s ease'});
                $(this).find('img').removeClass('on');
            }
            else if($(this).hasClass('teamlab')){
                $(this).css({'width':'32%','background-color':'white','color':'black'});
                $(this).find('h2').css({'margin-left':'','transition':'all 0.2s ease'});
                $(this).find('img').removeClass('on');
            }
            else if($(this).hasClass('kodak')){
                $(this).css({'width':'41%','background-color':'white','color':'black'});
                $(this).find('h2').css({'margin-left':'','transition':'all 0.2s ease'});
                $(this).find('img').removeClass('on');
            }
            else if($(this).hasClass('fillpf')){
                $(this).css({'width':'50%','background-color':'white','color':'black'});
                $(this).find('h2').css({'margin-left':'','transition':'all 0.2s ease'});
                $(this).find('img').removeClass('on');
            }
            else if($(this).hasClass('monster')){
                $(this).css({'width':'59%','background-color':'white','color':'black',});
                $(this).find('h2').css({'margin-left':'','transition':'all 0.2s ease'});
                $(this).find('img').removeClass('on');
            }
        }
        $pfbox.on('mouseover',pfMove);
        $pfbox.on('mouseout',pfMoveRe);

        
      

        // const contactFun=function(){
        //      $contactFt.addClass('on');
        //      $contactCt.addClass('on');
        // }
        // $contact.on('mouseenter',contactFun);

        const contact = document.querySelector('.contact');
        const $contactFt = $('.contact-ft');
        const $contactCt = $('.contact-ct');

        let contactbgTop = contact.offsetTop;
        let contactTViewT = contactbgTop - winHeight;
        let contactPer = 0;
        const contactView = 80; 
        const   contactViewFun= ()=>{
            contactPer = (scrollY - contactTViewT) / winHeight * 100;
          if(contactView  <= contactPer){
            $contactFt.addClass('on');
             $contactCt.addClass('on'); 
          }
        }
        const handleScrollcontact= () => {
          scrollY = $window.scrollTop();
          contactViewFun();
        }
        $window.on('scroll', handleScrollcontact);

       
      
         

   
    });
})(jQuery);


