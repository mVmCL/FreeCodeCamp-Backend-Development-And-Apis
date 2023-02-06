
      
    const convertDateToUnixTime = async (req, res) => {
console.log(req.params.date)
let eitherOrParsed =parseInt(req.params.date)
let inputDate = req.params.date
let parsedUnix = parseInt(req.params.date)
let utcUnix = new Date(inputDate).toUTCString()
let inputUnix =(req.params.date)
let parsedDate = parseInt(req.params.date)
let isUnix
let inputTimeStamp = req.params.date
let timeStampToString = new Date(parsedUnix)
let unixString = new Date(timeStampToString)
let final = unixString.toUTCString()
let date = new Date(parsedDate)
let utc = new Date(inputDate).toUTCString()
let timeStamp =new Date(utc).getTime()
let isTimeStamp = false
if (inputDate.length >=12){
    isTimeStamp = true
}


console.log(inputDate.length)


if(isTimeStamp){
res.send({
   unix:inputDate,
    string:final,
    isTimeStamp:isTimeStamp

})
} else if(!isTimeStamp) {
    res.send({
        unix:timeStamp,
        string:utc
    })
}
else{
    res.send({
        error: 'Invalid Date'
    })
}





    }






const currentTime = async(req, res) =>{
    

const currentDate = Date.now()
const currentTime = new Date(currentDate).toUTCString()
const unix = new Date(currentTime).getTime()
    res.send({
        utc: currentTime,
        unix:unix
    })
}



module.exports = {
    convertDateToUnixTime,
    currentTime
}

