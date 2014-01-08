if (Meteor.isClient) {
    function positionContacts() {
        var offset = $("#main").offset();
        $("#contacts").offset({left:offset.left});
    }

    Meteor.autorun(function() {
        Template.display.rendered = function() {
            positionContacts();
            changeNavToType();
        },

        Template.critique.subject = function() {
            var str = "mailto:cinjon.resnick@gmail.com?subject="
            var activeLI = $("li.active");
            return str + activeLI.children().text();
        },

        window.onresize = function(event) {
            positionContacts();
        },

        changeNavToType = function(ty) {
            $('li').not('.active').not('.' + ty).hide();
            $('li.' + ty).show();
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}



