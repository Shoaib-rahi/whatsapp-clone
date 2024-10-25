





function searchfreind(){

    let inputbox = document.querySelector("#inputBox").value.toUpperCase();
    let heading = document.querySelectorAll(".h-1");
    let part2 = document.querySelector(".part-2")
    let profiledata= document.querySelector(".profile-data")
Array.from(heading)
for(let i = 0;i < heading.length;i++){
  let searchdata = heading[i];
  if(searchdata){
    let mathc = heading[i].textContent || heading[i].innerHTML;
    if(mathc.toUpperCase().indexOf(inputbox)> -1){
        heading[i].style.display = ""
    }else{
        heading[i].style.display = "none"

    }
  }
  
}
}



