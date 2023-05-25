const userName = prompt("What is your name:");

if (userName === null || userName === ""){
    alert("Hello, noname! How are you?");
} else {
    alert(`Hello, ${userName}! How are you?`);
}