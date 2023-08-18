const endDate = "16 October 2023 7:30 PM"

document.querySelector("#endDate").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock (){
    const end = new Date(endDate);
    const start = new Date();
    const diff = Math.floor((end-start)/1000 )
    
    const days = Math.floor((diff/3600/24));
    const hours = Math.floor((diff/3600)% 24);
    const min = Math.floor((diff / 60) %60);
    const sec = Math.floor((diff) % 60);

    // redering to UI
    if(diff < 0) return;
    inputs[0].value =  days
    inputs[1].value = hours
    inputs[2].value = min;
    inputs[3].value = sec;
}

clock();

setInterval(
    () => {
        clock();
    },
    1000
)
