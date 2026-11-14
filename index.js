const testServerBtn = document.getElementById('server-test');
const testHtmlBtn = document.getElementById('page-test');


testServerBtn.onclick = askToServer;
testHtmlBtn.onclick = askToHtml;



async function askToServer() {
    const fetchConfig = { method: "GET" };
    try {
        const serverResponse = await fetch(`https://api.hozpage.com/ansd`, fetchConfig);
        if (!serverResponse.ok) {
            throw new Error(`HTTP error! status: ${serverResponse.status}`);
        }
        const cleanedAnswer = await serverResponse.json()
        console.log(cleanedAnswer)
    } catch (error) {
        console.error('Error:', error);
    }
};


async function askToHtml() {
    const fetchConfig = { method: "GET" };
    try {
        const serverResponse = await fetch(`https://api.hozpage.com/`, fetchConfig);
        if (!serverResponse.ok) {
            throw new Error(`HTTP error! status: ${serverResponse.status}`);
        }
        const cleanedAnswer = await serverResponse.json()
        console.log(cleanedAnswer)
    } catch (error) {
        console.error('Error:', error);
    }
};