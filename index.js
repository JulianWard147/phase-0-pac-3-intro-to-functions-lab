function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string){
    console.log(shout(string))
}

function logWhisper(string) {
    console.log(whisper(string))
}

function sayHiToHeadphonedRoommate(string){
    let reply = "Sorry, I've not been programmed for this case."
    if (string == whisper(string))
        {reply =  "I can't hear you!"}
    else if( string == shout(string))
        {reply = "YES INDEED!"}
    else if (string == "Let's have dinner together!")
        {reply =  "I would love to!"}
    else
        {}
    return reply
}