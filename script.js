var website;

safari.self.tab.dispatchMessage("wantwebsite");

$(function() {
	if (window.top === window)
	{
		var counter = 30;
		var addition = 10;
		
		var element = $("a#findFriendsNav").parent("li");
		var weirdclasses = $(element).attr("class");
		
		var htmlString = "<li class=\"" + weirdclasses + "\">" + $(element).html() + "</li>";
		
		htmlString = htmlString.replace("findFriendsNav", "facebookCloserNav");
		htmlString = htmlString.replace("Find Friends", "30");
		
		$(element).after(htmlString);
	
		$("a#facebookCloserNav").attr("href", "#");
		$("a#facebookCloserNav").click(function() {
			if (addition > 0) {
				counter += addition--;
				$("a#facebookCloserNav").html(counter);
			}
		});
				
		var interval = setInterval(function() {
			$("a#facebookCloserNav").html(counter--);
			// make another li next to it instead!
			var currentLoc = window.location;
			if ((counter < 1 && counter > -1) || (counter < 0 && counter % 30 == 0))
			{
				window.location.assign(website);
				if ($("div#pagelet_welcome_box > div > div > div:last-of-type > a.fbxWelcomeBoxName").html() == "Steve Ballmer")
					alert("U R FAT.");
			}
			/*if (counter < -200)
				alert("HAHA!");*/
		}, 1000);
	}
});

function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    var messageData = msgEvent.message;
    
    if (messageName === "website") {
        website = messageData;
        
        if (!(website.length > 7 && website.substring(0, 7) === "http://"))
        {
	        website = "http://" + website;
        }
        
        //alert(website);
    }
}

safari.self.addEventListener("message", handleMessage, false);