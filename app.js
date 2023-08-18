

const endDates = "24 January 2024 11:55 AM";

document.querySelector("#endDate").innerText = endDates;
const inputs = document.querySelectorAll("input")

function clock () {
   const end = new Date(endDates);
   const now = new Date();
   console.log(end)
   console.log(now)
   const diff = (end - now)/1000;

   if(diff < 0) return;
   inputs[0].value = Math.floor(diff/3600/24)
   inputs[1].value = (Math.floor(diff/3600) % 24)
   inputs[2].value = (Math.floor(diff / 60) % 60)
   inputs[3].value = (Math.floor(diff) % 60)

}

clock();


setInterval( () => {
    clock();
},
  1000
)