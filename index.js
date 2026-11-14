const testServerBtn = document.getElementById('server-test');

testServerBtn.onclick = askToServer;



async function askToServer() {
    const fetchConfig = { method: "GET", headers: { "Content-Type": "application/json" } };
    try {
        const serverResponse = await fetch(`https:/ans`, fetchConfig);
        if (!serverResponse.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cleanedAnswer = await serverResponse.json()
        console.log(cleanedAnswer)
    } catch (error) {
        console.error('Error:', error);
    }
};