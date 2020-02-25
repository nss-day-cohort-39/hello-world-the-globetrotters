const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line
    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--reginald").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--reginald")
            theDialog.showModal()
        }
     )


document.querySelector("#button--Geraldine").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--Geraldine")
        theDialog.showModal()
    }
 )


document.querySelector("#button--Francois").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--Francois")
        theDialog.showModal()
    }
 )


document.querySelector("#button--Jose").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--Jose")
        theDialog.showModal()
    }
 )


document.querySelector("#button--Emmanuel").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--Emmanuel")
        theDialog.showModal()
    }
 )


document.querySelector("#button--Sally").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--Sally")
        theDialog.showModal()
    }
 )
}



export default initializeDetailButtonEvents