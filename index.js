window.addEventListener('load', () => {
    document.getElementById('generate_key_btn').addEventListener('click', () => {
        var deviceId = document.getElementById('deviceId').value;
        if (deviceId.length == 12) {
            document.getElementById('key').innerText = generateKey(deviceId)
            return;
        }
        alert("Invalid Device ID Provided")
    })
})

function generateKey(x) {
    var a = "576931245768";
    var b = "692459856491";
    var key = "";
    for (var i = 0; i < x.length; i++) {
        var cc = ((x.charCodeAt(i) % a.charCodeAt(i) + b.charCodeAt(i)) % 26) + 65;
        key += String.fromCharCode(cc);
    }
    return key;
}