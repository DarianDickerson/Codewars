//Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt){
    let nerdy = {"a":"4", "e":"3", "l":"1"}
   
    return txt.split("").map(ch => nerdy[ch.toLowerCase()] == null || ch === "L" ? ch : nerdy[ch.toLowerCase()]).join("")
}