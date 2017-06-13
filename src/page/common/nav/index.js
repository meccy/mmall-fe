/*
* @Author: WillGiab
* @Date:   2017-06-13 23:26:03
* @Last Modified by:   WillGiab
* @Last Modified time: 2017-06-14 00:38:21
*/

'use strict';
require('./index.css');
var _mm = require('util/mm.js');
var nav = {
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
    },
    bindEvent : function(){
        // 登录点击事件
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
        });

    },
    loadUserInfo : function(){

    },
    loadCartCount : function(){

    }
};

module.exports  = nav.init();