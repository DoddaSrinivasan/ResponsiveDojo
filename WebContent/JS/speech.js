/**
 * Speech FeedBack API
 */

speech = {
		
		isSupported: false,
		
		config : "",
		
		reader : new SpeechSynthesisUtterance(),
		
		init: function(){
		
			if ('speechSynthesis' in window) {
 				speech.isSupported = true;
			}
			
			/*
				var configAttr = {
					volume : 1,
					voiceURI : 150,
					rate : 1,
					pitch : 2
					
				};
			
			*/
			
			//speech.config = configAttr ;
			
			speech.reader.voiceURI = 'native';
			speech.reader.volume = 1; // 0 to 1
			speech.reader.rate = 1; // 0.1 to 10
			speech.reader.pitch = 2; //0 to 2
			
			speech.reader.lang = 'en-US';		
			
		},		
		speak:function(content) {			
				speech.reader.text = content;					
				speechSynthesis.speak(speech.reader);
		}
		
}