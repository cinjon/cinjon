if (Meteor.isClient) {
    function hideUL() {
        $('.ulNav').hide();
    }

    function displayUL(ty) {
        $('#fakeUL').hide();
        $('#' + ty).show();
    }

    Meteor.autorun(function() {
        Template.display.rendered = function() {
            hideUL();
        },

        Template.welcome.rendered = function() {
            $("#inches").hover(function() {
                $('#hoverText').html('Within that inch, I am free');
                $('#hoverText').show();
            }, function() {
                $('#hoverText').hide();
            });

            $("#contact").hover(function() {
                $(this).css('cursor','pointer');
                $('#hoverText').html('Click to email me');
                $('#hoverText').show();
            }, function() {
                $('#hoverText').hide();
                $(this).css('cursor', 'default');
            });

            $("#projects").hover(function() {
                $(this).css('cursor','pointer');
                $('#hoverText').html('See LinkedIn for professional work');
                $('#hoverText').show();
                //show something below
            }, function() {
                $('#hoverText').hide();
                $(this).css('cursor', 'default');
            });

            $("#writing").hover(function() {
                $(this).css('cursor','pointer');
                $('#hoverText').html('Most everything here always needs more editing');
                $('#hoverText').show();
                //show something below
            }, function() {
                $('#hoverText').hide();
                $(this).css('cursor', 'default');
            });

            $('#projects').click(function() {
                hideUL();
                displayUL('projectUL');
            });

            $('#writing').click(function() {
                hideUL();
                displayUL('writingUL');
            });

            $('#contact').click(function() {
                window.location.href = "mailto:cinjon.resnick@gmail.com?subject=Thanks for the message";
            });
        },

        Template.critique.subject = function() {
            var str = "mailto:cinjon.resnick@gmail.com?subject="
            var activeLI = $("li.active");
            return str + activeLI.children().text();
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}



