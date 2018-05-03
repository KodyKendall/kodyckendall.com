var localDevMode = true;
var relativePath = ""

function GenerateBlogPage(blogJson){
	/*blogJson contains: 
	- text (as a WYSIWYG)
	- author
	- date
	- title
	- imgLink
	- subtitle
	*/

	var page = $.template(
			
	)
}

function GetPath(){
    if (localDevMode){
        relativePath = "http://localhost:31338"
        return(relativePath);
    }
    else{
        return(relativePath);		
    }
} 