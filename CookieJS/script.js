const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = ()=>{
    //Setting Cookie For 1 Month. Cookie will be expired automatically
    document.cookie = "CookieBy=CodingMike; max-age="+60*60*24*30
    if(document.cookie){//if the above cookie set 
        cookieBox.classList.add("hide"); //hide cookie box once cookie set
    }else{
        alert("Cookie can't be set!");//if cookie can't be set alert an error
    }
}
//let's hide the cookie if the cookie is set and not expired
let checkCookie = document.cookie.indexOf("CookieBy=CodingMike"); //checking our set cookie
//if cookie is set the hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");
