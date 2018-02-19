
var localDevMode = true;
var relativePath = ""

function GetPath(){
	if (localDevMode){
		relativePath = "http://localhost:31338"
		return(relativePath);
	}
	else{
		return(relativePath);		
	}
};