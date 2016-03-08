(function() {

    "use strict";

    var ui = chatbox.ui;
    var utils = chatbox.utils;

    ui.init.push(function() {

        ui.$onlineUserNum = $('#socketchatbox-online-usercount');
        ui.$onlineUsers = $('.socketchatbox-onlineusers');

        ui.$onlineUserNum.click(function(e) {

            if (ui.$chatBody.is(":visible")){

                ui.$onlineUsers.slideToggle();
                e.stopPropagation();
            }

        });


    });

    ui.updateUserList = function(userList) {

        ui.$onlineUsers.html('');

        for (var username in userList) {
            // console.log(username);
            var $onlineUser = $('<span></span>');
            $onlineUser.text(username);
            ui.$onlineUsers.append($onlineUser);

        }

    }

})();