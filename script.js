
const daysEl =document.getElementById('days');
const hoursEL=document.getElementById('hours');
const secsEL = document.getElementById('seconds');
const minsEL = document.getElementById('mins');

const newYears="1 Jan 2023";


function countDown()
{

const currentDate = new Date(); // Read the dATE
const newYearsDate = new Date (newYears);
const seconds =(newYearsDate-currentDate)/1000; 
const days=Math.floor(seconds / 3600/24);
const hours=Math.floor(seconds / 3600)%24;
const minutes =Math.floor(seconds /60)%60;
const secs =Math.floor(seconds) % 60;
daysEl.innerHTML =days;
hoursEL.innerHTML=formatTime(hours);
minsEL.innerHTML=formatTime(minutes);
secsEL.innerHTML=formatTime(secs);



}


function formatTime(time)
{

return time <10 ?`0${time}` :time ;


}

countDown();
setInterval(countDown,1000);
