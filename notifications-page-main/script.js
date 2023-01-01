const notificationNumber = document.querySelector(".notification-number")
const markAsReadBtn = document.querySelector(".mark-btn")
const notification = document.querySelectorAll(".notifcaion-conatiner")

function clearNotification() {
    for (let i = 0; i < notification.length; i++) {
        if (notification[i].classList.contains("active")) {
            notification[i].classList.remove("active")
        }
        
    }

    // Reset notification number
    notificationNumber.textContent = 0
}

markAsReadBtn.addEventListener("click", clearNotification)