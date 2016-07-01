Accounts.onLogin(function(){
    var user = Meteor.user();
    if (!user) {
        return;
    }
    var connectionLimit =1;
    var arrTokens = user.services.resume.loginTokens;
    if(arrTokens.length>1){
        arrTokens.splice(0,arrTokens.length-1);
        Meteor.users.update({_id:user._id},{
            $set:{'services.resume.loginTokens':arrTokens}
        });
    }
});
 //Meteor.User 의 services-login의 배열에 로그인할 때 인덱스가 1씩 증가
//중복 로그인을 피하기 위해 배열을 관리


