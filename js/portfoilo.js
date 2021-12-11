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

        const $pfGrid = $('.pfgrid');
        const $pfBox = $('.pfbox');
        const $pfBoxCt = $('.pfbox-ct');

        const $repickGrid =$('.repickgrid');
        const $kodakGrid =$('.kodakgrid');
        const $monsterGrid =$('.monstergrid');
        const $teamlabGrid =$('.teamlabgrid');
        const $fillGrid =$('.fillgrid');

        const $pfpageBtn =$('.pfpage-btn');
        const $pf3dBox =$('.pf3dbox');
        const $pf3dBtn =$('.pf3d-btn');
        const $pfWebBox =$('.pfwebbox');
        const $pfWebBtn =$('.pfweb-btn');
       //페이지 로드
       const pfloadFun=(e)=>{
        $fillGrid.find($pfBoxCt).animate({'bottom':'0','opacity':'1'},'slow',"linear",function(){$repickGrid.delay(200)});
        $repickGrid.find($pfBoxCt).animate({'bottom':'0','opacity':'1'},'slow',"linear",function(){$kodakGrid.delay(250)});
        $kodakGrid.find($pfBoxCt).animate({'bottom':'0','opacity':'1'},'slow',"linear",function(){$monsterGrid.delay(3000)})
        $monsterGrid.find($pfBoxCt).animate({'bottom':'0','opacity':'1'},'slow',"linear",function(){$teamlabGrid.delay(350)})
        $teamlabGrid.find($pfBoxCt).animate({'bottom':'0','opacity':'1'},'slow',"linear",function(){$pf3dBox.delay(700)})
        $pf3dBox.find('div').animate({'top':'50%','opacity':'1'},'slow',"linear")
       }

        window.onload = pfloadFun();

        //오버시 그리드 색 변화
        const pfBoxColorFun=function(){
            if($(this).hasClass('fillgrid')){
                $(this).css({'background-color':'rgb(247,112,35)'});
                $(this).find('h1,h2,span').css({'color':'white'});
                $(this).find($pfpageBtn).animate({'opacity':'1','margin-left':'50%'},300,);
            }
            else if($(this).hasClass('repickgrid')){
                $(this).css({'background-color':'rgb(247,112,35)'});
                $(this).find('h1,h2,span').css({'color':'white'});
                $(this).find($pfpageBtn).animate({'opacity':'1','margin-left':'50%'},300,);
            }
            else if($(this).hasClass('kodakgrid')){
                $(this).css({'background-color':'rgb(247,112,35)'});
                $(this).find('h1,h2,span').css({'color':'white'});
                $(this).find($pfpageBtn).animate({'opacity':'1','margin-left':'50%'},300,);
            }
            else if($(this).hasClass('monstergrid')){
                $(this).css({'background-color':'rgb(247,112,35)'});
                $(this).find('h1,h2,span').css({'color':'white'});
                $(this).find($pfpageBtn).animate({'opacity':'1','margin-left':'50%'},300,);
            }
            else if($(this).hasClass('teamlabgrid')){
                $(this).css({'background-color':'rgb(247,112,35)'});
                $(this).find('h1,h2,span').css({'color':'white'});
                $(this).find($pfpageBtn).animate({'opacity':'1','margin-left':'50%'},300,);
            }
            else if($(this).hasClass('harrygrid')){
                $(this).css({'background-color':'rgb(247,112,35)'});
                $(this).find('h1,h2,span').css({'color':'white'});
                $(this).find($pfpageBtn).animate({'opacity':'1','margin-left':'50%'},300,);
            }
            else if($(this).hasClass('christmasgrid')){
                $(this).css({'background-color':'rgb(247,112,35)'});
                $(this).find('h1,h2,span').css({'color':'white'});
                $(this).find($pfpageBtn).animate({'opacity':'1','margin-left':'50%'},300,);
            }
            else if($(this).hasClass('oncampagingrid')){
                $(this).css({'background-color':'rgb(247,112,35)'});
                $(this).find('h1,h2,span').css({'color':'white'});
                $(this).find($pfpageBtn).animate({'opacity':'1','margin-left':'50%'},300,);
            }
        }  
      
        const pfBoxColorRe=function(){
            if($(this).hasClass('fillgrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});
            }
            else if($(this).hasClass('repickgrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});
            }
            else if($(this).hasClass('kodakgrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});
            }
            else if($(this).hasClass('monstergrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});

            }
            else if($(this).hasClass('teamlabgrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});
            }
            else if($(this).hasClass('fillgrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});
            }
            else if($(this).hasClass('harrygrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});
            }
            else if($(this).hasClass('christmasgrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});
            }
            else if($(this).hasClass('oncampagingrid')){
                $(this).css({'background-color':''});
                $(this).find('h1,span').css({'color':'rgb(247,112,35)'});
                $(this).find('h2').css({'color':'black'});
                $(this).find($pfpageBtn).css({'opacity':'0','margin-left':''});
            }
        }
        
        $pfBox.on('mouseover',pfBoxColorFun);
        $pfBox.on('mouseout',pfBoxColorRe);

        //3d페이지로 넘기기
       const $pfGrid3D =$('.pfgrid-3d');

       const pf3dchangeFun=function(){
           if($pf3dBox.hasClass('next3d')){
            $pf3dBox.prependTo($pfGrid3D );
            $pf3dBox.find('h1').html(`<h1>WEB</br>SITE</h1>`);
            $pf3dBtn.css({'transform':'rotate(180deg)'});
            $pfGrid.css({'opacity':'0','z-index':'11'});
            $pfGrid3D.css({'opacity':'1','z-index':'12'});
            $pf3dBox.removeClass('next3d').addClass('nextWeb');
           }
           else if($pf3dBox.hasClass('nextWeb')){
            $pf3dBox.appendTo($pfGrid);
            $pf3dBox.find('h1').html(`<h1>3D</br>WORK</h1>`)
            $pf3dBtn.css({'transform':''});
            $pfGrid.css({'opacity':'1','z-index':'12'});
            $pfGrid3D.css({'opacity':'0','z-index':'11'});
            $pf3dBox.removeClass('nextWeb').addClass('next3d');
           }
       }
        $pf3dBox.on('click',pf3dchangeFun);

        
        const $project =$('.project');
        const $pjSide =$('.pj-side');
        const $pjSideTxt =$('.pj-side-txt');
        const $SwebName =$('.side-webname');
        const $Sdate =$('.side-date');
        const $Sskill =$('.side-skill');
        const $Sname =$('.side-name');
        const $Scontent =$('.side-content');
        const $sideBox =$('.sidebox');

        const $pjContent =$('.pj-content');
        const $contentBox =$('.contentbox');
        const $pjCtImg =$('.pj-ct-img');
        const $pjCtShowing =$('.pj-ct-showing');
        const $pjCtShowing2 =$('.pj-ct-showing2');

        const $xBtn =$('.xicon');

        //포트폴리오 창 나오기
        const pfNextView=function(){
            $pf3dBox.appendTo($pfGrid);
            $pf3dBox.find('h1').html(`<h1>3D</br>WORK</h1>`)
            $pf3dBtn.css({'transform':''});
            $pf3dBox.removeClass('nextWeb').addClass('next3d');
            $project.css({'opacity':'1','z-index':'12'});
            $pfGrid.css({'opacity':'0','z-index':'11'})
            $pfGrid3D.css({'opacity':'0','z-index':'10'})
        }
        //프로젝트 창 없애기
        const viewBakcPf=function(){
            $project.css({'opacity':'0','z-index':'10'});
            $pfGrid.css({'opacity':'1','z-index':'12'})
            $pfGrid3D.css({'opacity':'0','z-index':'11'})
            $project.removeClass('project-fill,project-repick , project-kodak, project-monster, project-teamlab,project-harry,project-mas,project-on');
            $pjNextBtn.removeClass('project-repick , project-kodak, project-monster, project-teamlab, project-fill,project-harry,project-mas,project-on');
        }
        //프로젝트 내용 변경 함수들
        const pjChangeFill=function(){
            $SwebName.html(`FILL : </br>PORTFOILO`);
            $Sdate.html(`2021`);
            $Sskill.html(`html / css / javascript`);
            $Sname.html(`홍연화 포트폴리오 웹사이트`);
            $Scontent.html(`채우고 채워지는 개발자 홍연화입니다 .
            배움을 채우고 더 채워나가며 성장해 나가는 컨셉으로 채움을 
            비트맵으로 디자인하여 작업하였습니다. 스트롤에 반응하여 
            동적인 인터렉션을 구현하고 개발자가 되기 위해 지금까지 
            어떻게 채워나아갔는지 한칸씩 채워지는 인터렉션으로 표현했습니다 
            앞으로 더 채워나가면서 발전하는 개발자를 표현하는 포트폴리오 웹페이지 입니다`);
            $pjCtImg.attr('src','img/fill.png');
            $pjCtShowing.attr('src','img/fill-showing.png');
            $pjCtShowing2.attr('src','img/fill-about.png');

        }
        const pjChangeRepick =function(){
            $SwebName.html(`RE</br>PICK!`);
            $Sdate.html(`2021`);
            $Sskill.html(`html / css / javascript`);
            $Sname.html(`계원예술대학교 졸업작품`);
            $Scontent.html(`팀 프로젝트 ‘repack!’입니다. 
            Repack!은 업사이클 기업의 소재 공급 문제점을 해결하고자 
            기획된 플랫폼입니다.제작한 리픽박스로 소비자의 쓰레기를
            수거하여 기업에게 소재로 전달 됩니다. repick! 프로젝트는   
            졸업작품 전시를 위해 웹사이트로 제작했습니다.자연스럽게 
            서비스를 이해할수 있도록 스크롤에 반응하여 설명이나오는 
            버튼과 인터렉션 기능을 제작했습니다`);
            $pjCtImg.attr('src','img/repick.png');
            $pjCtShowing.attr('src','img/repick-showing.png');
            $pjCtShowing2.attr('src','img/repick-showing2.png');

        }
        const pjChangeKodak =function(){
            $SwebName.html(`KODAK</br>FILM`);
            $Sdate.html(`2021`);
            $Sskill.html(`html / css / javascript`);
            $Sname.html(`코닥 필름을 소개하는  웹사이트`);
            $Scontent.html(`필름의 가로 배치를 형상화 하여 가로 
            스르롤으로 제작 하였고 메인은 코닥의 필름 카메라를 
            형상화하여 디자인 작업과 사진을 찍는듯한 인터렉션을
            구현하였습니다 .버튼을 이용한 인터렌션으로 카메라를 
            소개하고 애니메이션을 이용하여 코닥 필름의 사진을 
            갤러리 형태로 구현하였습니다 `);
            $pjCtImg.attr('src','img/kodak-showing.png');
            $pjCtShowing.attr('src','img/kodak-film.png');
            $pjCtShowing2.attr('src','');
            
        }
        const pjChangeMonster =function(){
            $SwebName.html(`GENTLE</br>MONSTER`);
                $Sdate.html(`2020`);
                $Sskill.html(`html / css / javascript`);
                $Sname.html(`2020년 젠틀몬스터 시즌그리팅 웹사이트`);
                $Scontent.html(`2020년 젠틀몬스터의 시즌을 소개하는 
                웹페이지입니다.세개의 시즌을 소개하고 시즌별 스토리를
                잘 보여주도록 버튼과 마우스 를 이용한 애니메이션요소를
                넣었습니다 .처음으로 자바스크립트를 배우고 이용한 웹사이트
                로 css의 트랜지션과 애니메이션을 이용하여 구현했습니다  `);
                $pjCtImg.attr('src','img/monster.png');
                $pjCtShowing.attr('src','img/monster-showing.png');
                $pjCtShowing2.attr('src','');
        }
        const pjChangeTeamlab =function(){
            $SwebName.html(`TEAM</br> - LAB`);
            $Sdate.html(`2019`);
            $Sskill.html(`html / css `);
            $Sname.html(`teamlab 브랜드 소개 웹사이트`)
            $Scontent.html(`Html과 css 를 이용한 teamlab 회사를 
            소개하는 웹페이지 입니다.html으로 레이아웃을 마크업
            하는데 부족했던 기초가 채워질수있었고 css으로 이용한
            간단한 효과를 나타내었으며 css에 대해  한걸음 더 
            알아갈수 있었던 웹페이지 작업이였습니다`);
            $pjCtImg.attr('src','img/teamlab.png');
            $pjCtShowing.attr('src','img/teamlab-showing.png');
            $pjCtShowing2.attr('src','');
        }
        const pjChangeHarry =function(){
            $SwebName.html(`HARRY</br> PORTER`);
            $Sdate.html(`2019`);
            $Sskill.html(`3d max `);
            $Sname.html(` harry porter 3d art work`)
            $Scontent.html(`3D MAX 를 이용해서 
            해리포터 기차 를 모델링 해보았습니다 `);
            $pjCtImg.attr('src','img/harryporter.png');
            $pjCtShowing.attr('src','img/홍연화_중간평가4.jpg');
            $pjCtShowing2.attr('src','');
            
        }
        const pjChangeMas =function(){
            $SwebName.html(`CHRISTMAS</br>MOVIE`);
            $Sdate.html(`2019`);
            $Sskill.html(`3d max`);
            $Sname.html(`christmas 3d animation`)
            $Scontent.html(`3D MAX 를 이용한 크리스마스 
            단편 애니메이션 작은 캐롤들이 크리스마스를 위한
            작은 연주회를 여는 내용의 애니메이션 제작`);
            $pjCtImg.attr('src','img/christmas.png');
            $pjCtShowing.attr('src','img/bjk.jpg');
            $pjCtShowing2.attr('src','');
            
        }
        const pjChangeOn =function(){
            $SwebName.html(`ON</br>CAMPAGIN`);
            $Sdate.html(`2019`);
            $Sskill.html(`3d max / illustration`);
            $Sname.html(`3d 인터렉션 게임 캠페인`)
            $Scontent.html(`모션캡쳐를 이용한 인터렉션 게임
            캠페인 'ON' 은 잠시라도 타이느이 잣대에서 벗어나 
            내 삶의 주인이 되어 살아지는 의미를 전달합니다.`);
            $pjCtImg.attr('src','img/on-showing.png');
            $pjCtShowing.attr('src','');
            $pjCtShowing2.attr('src','');
            
        }
        const pfViewChangeFun=function(){
           $pjSide.addClass('on');
           $pjSideTxt.addClass('on');
            if($(this).hasClass('fillgrid')){
                pfNextView();
                pjChangeFill();
                $pjNextBtn.addClass('project-repick');//
            }
            else if($(this).hasClass('repickgrid')){
                pfNextView();
                pjChangeRepick();
                $pjNextBtn.addClass('project-kodak');//
            }
            else if($(this).hasClass('kodakgrid')){
                pfNextView();
                pjChangeKodak();
                $pjNextBtn.addClass('project-monster');//
            }
            else if($(this).hasClass('monstergrid')){
                pfNextView();
                pjChangeMonster();
                $pjNextBtn.addClass('project-teamlab');//
            }
            else if($(this).hasClass('teamlabgrid')){
                pfNextView();
                pjChangeTeamlab();
                $pjNextBtn.addClass('project-harry');//
            }
            else if($(this).hasClass('harrygrid')){
                pfNextView();
                pjChangeHarry();
                $pjNextBtn.addClass('project-mas');//
            }
            else if($(this).hasClass('christmasgrid')){
                pfNextView();
                pjChangeMas();
                $pjNextBtn.addClass('project-on');//
            }
            else if($(this).hasClass('oncampagingrid')){
                pfNextView();
                pjChangeOn();
                $pjNextBtn.addClass('project-fill');//
            }
          
        }

        const pfViewBackFun=function(){
            $pjSide.animate({'width':'-21vw'},300,'swing');
            viewBakcPf();
           
        }
        $pfBox.on('click',pfViewChangeFun);
        $xBtn.on('click',pfViewBackFun);

        //프로젝트 다음버튼

        const $pjNextBtn =$('.pjnextbtn');
        const pjNextView=function(){
            if($pjNextBtn.hasClass('project-fill')){//다음페이지:코닥
                pjChangeFill();
                $pjNextBtn.removeClass('project-fill');//
                $pjNextBtn.addClass('project-repick');//
            }
            else if($pjNextBtn.hasClass('project-repick')){//다음페이지:몬스터
                pjChangeRepick();
                $pjNextBtn.removeClass('project-repick');//
                $pjNextBtn.addClass('project-kodak');//
            }
            else if($pjNextBtn.hasClass('project-kodak')){//다음페이지:팀랩
                pjChangeKodak();
                $pjNextBtn.removeClass('project-kodak');//
                $pjNextBtn.addClass('project-monster');//
            }
            else if($pjNextBtn.hasClass('project-monster')){//다음페이지:
                pjChangeMonster();
                $pjNextBtn.removeClass('project-monster');//
                $pjNextBtn.addClass('project-teamlab');//
            }
            else if($pjNextBtn.hasClass('project-teamlab')){//다음페이지:
                pjChangeTeamlab();
                $pjNextBtn.removeClass('project-teamlab');//
                $pjNextBtn.addClass('project-harry');//
            }
            else if($pjNextBtn.hasClass('project-harry')){//다음페이지:
                pjChangeHarry();
                $pjNextBtn.removeClass('project-harry');//
                $pjNextBtn.addClass('project-mas');//
            }
            else if($pjNextBtn.hasClass('project-mas')){//다음페이지:
                pjChangeMas();
                $pjNextBtn.removeClass('project-mas');//
                $pjNextBtn.addClass('project-on');//
            }
            else if($pjNextBtn.hasClass('project-on')){//다음페이지:
                pjChangeOn();
                $pjNextBtn.removeClass('project-on');//
                $pjNextBtn.addClass('project-fill');//
            }
        }


        $pjNextBtn.on('click',pjNextView);
 
    });
})(jQuery);


