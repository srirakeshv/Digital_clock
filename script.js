
function time(){
    let ampm=document.querySelector('.ampm')
    let now=new Date()
    console.log(now)
    let hour=document.querySelector('#hr')
    let minute=document.querySelector('#min')
    let seconds=document.querySelector('#sec')
    let currentHour = now.getHours()
    hour.innerHTML=padZero(currentHour)
    minute.innerHTML=padZero(now.getMinutes())
    seconds.innerHTML=padZero(now.getSeconds())
    if(currentHour>12){
        currentHour=currentHour-12
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
}
setInterval(time,1000)
function padZero(num){
    return num<10?"0"+num:num
}