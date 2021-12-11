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

        const $aboutCt =$('.about-ct');
        const $aboutImg =$('.about-img');
        const $aboutMe =$('.about-me');
        const $pfImg1 =$('.pfimg1');
        const $pfImg2 =$('.pfimg2');
        const $pfImg3 =$('.pfimg3');
        const $pfImg4 =$('.pfimg4');
        const $pfImg5 =$('.pfimg5');
        const $pfImg6 =$('.pfimg6');
        const $pfImg7 =$('.pfimg7');
        const $pfImg8 =$('.pfimg8');
        const $pfImg9 =$('.pfimg9');

        const $pfImgTxt1 =$('.pfimgtxt1');
        const $pfImgTxt2 =$('.pfimgtxt2');
        const $pfImgTxt3 =$('.pfimgtxt3');
        const $pfImgTxt4 =$('.pfimgtxt4');
        const $pfImgTxt5 =$('.pfimgtxt5');
        const $pfImgTxt6 =$('.pfimgtxt6');
        const $pfImgTxt7 =$('.pfimgtxt7');
        const $pfImgTxt8 =$('.pfimgtxt8');
        const $pfImgTxt9 =$('.pfimgtxt9');


        const profileLoad=(e)=>{
            $aboutMe.addClass('on');
            $aboutCt.addClass('on');
            $aboutImg.addClass('on');
            $pfImg1.addClass('on');
            $pfImg2.addClass('on');
            $pfImg3.addClass('on');
            $pfImg4.addClass('on');
            $pfImg5.addClass('on');
            $pfImg6.addClass('on');
            $pfImg7.addClass('on');
            $pfImg8.addClass('on');
            $pfImg9.addClass('on');
           }
    
        window.onload =profileLoad();

        const pfImg1=function(){
            $pfImg4.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt1.css('opacity','1')}
        const pfImg2=function(){
            $pfImg5.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt2.css('opacity','1')}
        const pfImg3=function(){
            $pfImg6.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt3.css('opacity','1') }
        const pfImg4=function(){
            $pfImg3.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt4.css('opacity','1')}
        const pfImg5=function(){
            $pfImg1.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt5.css('opacity','1')}
        const pfImg6=function(){
            $pfImg2.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt6.css('opacity','1') }
        const pfImg7=function(){
            $pfImg7.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt7.css('opacity','1')}
        const pfImg8=function(){
            $pfImg8.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt8.css('opacity','1')}
        const pfImg9=function(){
            $pfImg9.css({'opacity':'0%','transition':'all 0.3s ease'});$pfImgTxt9.css('opacity','1') }
            //
        const pfImgRe1=function(){
            $pfImg4.css({'opacity':'80%'});$pfImgTxt1.css('opacity','0')}
        const pfImgRe2=function(){
            $pfImg5.css({'opacity':'70%'});$pfImgTxt2.css('opacity','0')}
        const pfImgRe3=function(){
            $pfImg6.css({'opacity':'50%'});$pfImgTxt3.css('opacity','0')}
        const pfImgRe4=function(){
            $pfImg3.css({'opacity':'30%'});$pfImgTxt4.css('opacity','0')}
        const pfImgRe5=function(){
            $pfImg1.css({'opacity':'1'});$pfImgTxt5.css('opacity','0')}
        const pfImgRe6=function(){
            $pfImg2.css({'opacity':'1'});$pfImgTxt6.css('opacity','0')}
        const pfImgRe7=function(){
            $pfImg7.css({'opacity':'1'});$pfImgTxt7.css('opacity','0')}
        const pfImgRe8=function(){
            $pfImg8.css({'opacity':'80%'});$pfImgTxt8.css('opacity','0')}
        const pfImgRe9=function(){
            $pfImg9.css({'opacity':'20%'});$pfImgTxt9.css('opacity','0') }
        $pfImg5.on('mouseover',pfImg2);$pfImg5.on('mouseout',pfImgRe2);
        $pfImg4.on('mouseover',pfImg1);$pfImg4.on('mouseout',pfImgRe1);
        $pfImg6.on('mouseover',pfImg3);$pfImg6.on('mouseout',pfImgRe3);
        $pfImg3.on('mouseover',pfImg4);$pfImg3.on('mouseout',pfImgRe4);
        $pfImg1.on('mouseover',pfImg5);$pfImg1.on('mouseout',pfImgRe5);
        $pfImg2.on('mouseover',pfImg6);$pfImg2.on('mouseout',pfImgRe6);
        $pfImg7.on('mouseover',pfImg7);$pfImg7.on('mouseout',pfImgRe7);
        $pfImg8.on('mouseover',pfImg8);$pfImg8.on('mouseout',pfImgRe8);
        $pfImg9.on('mouseover',pfImg9);$pfImg9.on('mouseout',pfImgRe9);


   
    });
})(jQuery);


