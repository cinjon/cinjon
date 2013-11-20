if (Meteor.isClient) {
    Meteor.autorun(function() {
        Template.display.rendered = function() {
            var offset = $("#main").offset();
            $("#contacts").offset({left:offset.left});
        },

        Template.critique.subject = function() {
            var str = "mailto:cinjon.resnick@gmail.com?subject="
            var activeLI = $("li.active");
            return str + activeLI.children().text();
        };
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
