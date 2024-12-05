
function startCountdown(): void {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const nextYear = yyyy + 1;
    const dayMonth = "11/11/";
    const birthday = new Date(dayMonth + yyyy);
    
    const todayStr = mm + "/" + dd + "/" + yyyy;
    let birthdayStr;
    if (today > birthday) {
      birthdayStr = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days")!.innerText = Math.floor(distance / (day)).toString(),
            document.getElementById("hours")!.innerText = Math.floor((distance % (day)) / (hour)).toString(),
            document.getElementById("minutes")!.innerText = Math.floor((distance % (hour)) / (minute)).toString(),
            document.getElementById("seconds")!.innerText = Math.floor((distance % (minute)) / second).toString();
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline")!.innerText = "It's my birthday!";
            document.getElementById("countdown")!.style.display = "none";
            document.getElementById("content")!.style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)

};



startCountdown();




