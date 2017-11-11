

  	$(document).ready(function() 
    {

    	var wordList = [
	    	"turnips",
	      	"beets",
		    "parsnips",
		    "garlic",
		    "lettuce",
		    "chives",
		    "nasturtium",
		    "lavender",
		    "onions",
		    "mums"
    	];

    	var keyupChar = [];

    	var selectedWord = "";
    	var displayedWord = "";
  


		document.getElementById("playBtn").addEventListener("click", function() 
		{
    		alert("Input letters into the texbox labeled \"Letters already guessed\"");
  			selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  			console.log(selectedWord);  
  			for (var i=0; i<selectedWord.length; i++)
  			{
  				displayedWord = displayedWord + "_ ";
  			}	
  			$("#display").append(displayedWord);		
		})
		
		document.getElementById("ltrInput").addEventListener("keyup", function(key) 
		{			
			
			for (var i = 0; i < keyupChar.length; i++)
			{
				if (keyupChar[i] == key.key)
				{
					return false;
				}
			}

			keyupChar.push(key.key);

			displayedWord = "";

			for (var i=0; i < selectedWord.length; i++)
  			{
  				var found = false;

  				for (var x = 0; x < keyupChar.length; x++)
  				{
  					if (keyupChar[x] == selectedWord.charAt(i))
					{
						displayedWord = displayedWord + selectedWord.charAt(i) + " ";
						found = true;
					}
  				}	

  				if (!found)
  				{
  					displayedWord = displayedWord + "_ ";
  				}	
  			}	

  			$("#display").html(displayedWord);
  			console.log(key);
		})
})

