

    /*
    ============================================================
       API ENDPOINT
    ============================================================
    */

    const API_URL = "/api/chat";


    const chatArea =
        document.getElementById("chatArea");

    const userInput =
        document.getElementById("userInput");

    const sendBtn =
        document.getElementById("sendBtn");



    /*
    ============================================================
       SEND MESSAGE
    ============================================================
    */

    async function sendMessage() {


        const message =
            userInput.value.trim();


        if (!message) {

            return;

        }


        /*
        Remove welcome screen
        */

        const welcome =
            document.getElementById("welcome");


        if (welcome) {

            welcome.remove();

        }


        /*
        Show user's message
        */

        addMessage(
            message,
            "user"
        );


        /*
        Clear input
        */

        userInput.value = "";


        /*
        Disable send button
        */

        sendBtn.disabled = true;


        /*
        Show typing animation
        */

        const typingId =
            showTyping();



        try {


            /*
            ====================================================
               API CALL

               This sends the user's question to Python backend.
            ====================================================
            */

            const response = await fetch("/api/chat", {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    message: message

                })

            });



            /*
            Check HTTP response
            */

            if (!response.ok) {

                throw new Error(
                    "Server returned an error"
                );

            }



            /*
            Convert response to JSON
            */

            const data =
                await response.json();



            /*
            Remove typing animation
            */

            removeTyping(typingId);



            /*
            Get Gemini response

            Expected backend response:

            {
                "output_text":
                    "Your Gemini answer"
            }
            */

            const answer =
                data.output_text ||
                data.response ||
                data.message ||
                "Sorry, I could not generate a response.";



            /*
            Display AI response
            */

            addMessage(
                answer,
                "bot"
            );


        }

        catch (error) {


            console.error(
                "API Error:",
                error
            );


            /*
            Remove typing animation
            */

            removeTyping(
                typingId
            );


            /*
            Display error
            */

            addMessage(

                "⚠️ Unable to connect to the backend. Please make sure your Python server is running.",

                "bot"

            );

        }


        finally {


            /*
            Enable send button again
            */

            sendBtn.disabled = false;


            userInput.focus();

        }

    }



    /*
    ============================================================
       ADD MESSAGE
    ============================================================
    */

    function addMessage(
        text,
        sender
    ) {


        const messageDiv =
            document.createElement("div");


        messageDiv.className =
            "message " + sender;



        const avatar =
            document.createElement("div");


        avatar.className =
            "message-avatar";


        avatar.textContent =
            sender === "user"
                ? "👤"
                : "👨‍🏫";



        const bubble =
            document.createElement("div");


        bubble.className =
            "bubble";


        bubble.textContent =
            text;



        messageDiv.appendChild(
            avatar
        );


        messageDiv.appendChild(
            bubble
        );


        chatArea.appendChild(
            messageDiv
        );


        scrollToBottom();

    }



    /*
    ============================================================
       TYPING ANIMATION
    ============================================================
    */

    function showTyping() {


        const id =
            "typing-" +
            Date.now();


        const messageDiv =
            document.createElement("div");


        messageDiv.className =
            "message bot";


        messageDiv.id =
            id;


        messageDiv.innerHTML = `

            <div class="message-avatar">
                👨‍🏫
            </div>

            <div class="bubble">

                <div class="typing">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        `;


        chatArea.appendChild(
            messageDiv
        );


        scrollToBottom();


        return id;

    }



    function removeTyping(id) {


        const element =
            document.getElementById(id);


        if (element) {

            element.remove();

        }

    }



    /*
    ============================================================
       SUGGESTION BUTTON
    ============================================================
    */

    function useSuggestion(text) {


        userInput.value =
            text;


        userInput.focus();


        sendMessage();

    }



    /*
    ============================================================
       NEW CHAT
    ============================================================
    */

    function newChat() {


        chatArea.innerHTML = `

            <div
                class="welcome"
                id="welcome">

                <div class="welcome-icon">
                    🧠
                </div>

                <h1>
                    Learn Cloud & DSA
                </h1>

                <p>
                    Ask me questions related to
                    Cloud Computing, Data Structures
                    and Algorithms.
                </p>

                <div class="suggestions">

                    <button
                        class="suggestion"
                        onclick="useSuggestion('What is Cloud Computing?')">

                        What is Cloud Computing?

                    </button>

                    <button
                        class="suggestion"
                        onclick="useSuggestion('What is a Stack in DSA?')">

                        What is Stack?

                    </button>

                    <button
                        class="suggestion"
                        onclick="useSuggestion('Explain time complexity')">

                        Time Complexity

                    </button>

                </div>

            </div>

        `;

    }



    /*
    ============================================================
       ENTER KEY
    ============================================================
    */

    userInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage();

            }

        }
    );



    /*
    ============================================================
       SCROLL TO BOTTOM
    ============================================================
    */

    function scrollToBottom() {

        chatArea.scrollTop =
            chatArea.scrollHeight;

    }

