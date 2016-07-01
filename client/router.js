// 파일 이름은 상관없다

Router.configure({
   layoutTemplate:'layout' //iron Router 객체에게 layout이라는 템플릿이 처음 시작하게 한다.
});

Router.route('/',function(){
    
    this.render('help',{
        data:function(){
            return;
        }
    });
});


Router.route('/baseball',function(){
    this.render('baseball',{
        data:function(){
            return;
        }
    });
});
Router.route('/soccer',function(){
    $("#carousel-example-generic").show();
    this.render('soccer',{
        data:function(){
            return;
        }
    });
});

Router.route('/help',function(){
    this.render('help',{
        data:function(){
            return;
        }
    });
});

Router.route('/record',function(){

    this.render('record',{
        data:function(){
            return;
        }
    });
    // $("#carousel-example-generic").hide();
});


Router.route('/compare',function(){
    //$("#carousel-example-generic").hide();
    this.render('compare',{
        data:function(){
            return;
        }
    });
});
