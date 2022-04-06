// #region Список экскурсий
var modal = document.getElementById("myModal");

function OpenModal() {
    modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

// #endregion


// #region Обратная связь
var feedbackModal = document.getElementById("FeedbackModal");
var span2 = document.getElementsByName("fbClose")[0];

function OpenFeedbackModal() {
    feedbackModal.style.display = "block";
}

span2.onclick = function() {
    feedbackModal.style.display = "none";
}

//#endregion 



// #region окно проверка данных
var nameInput = document.getElementsByName('inName')[0];
var mailInput = document.getElementsByName('iMail')[0];
var feedbackInput = document.getElementsByName('feedbackinput')[0];
var statusMsg = document.getElementsByClassName('statusMessage')[0];

var statusModal = document.getElementById("statusModal");
var okButton = document.getElementsByClassName("btnstatus")[0];

okButton.onclick = function(){
    statusModal.style.display = "none";
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.querySelector('form.feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    statusModal.style.display = "block";
    if (validateEmail(mailInput.value)){
        statusMsg.innerHTML = "Данные успешно обработаны";
        console.log(nameInput.value);
        console.log(mailInput.value);
        console.log(feedbackInput.value);
    }
    else {
        statusMsg.innerHTML = "Почта введена некорректно!";
    }
});
// #endregion

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == feedbackModal) {
        feedbackModal.style.display = "none";
    }
    if (event.target == statusModal) {
        statusModal.style.display = "none";
    }
}

// поиск
$(document).ready(function(){
    $("#inSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});