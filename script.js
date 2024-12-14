function openCommentWindow(postID) {
    if (document.getElementById('commentsWindow' + postID).style.display == 'none') {
        document.getElementById('commentsWindow' + postID).style.display = 'block'
    }
    else {
        document.getElementById('commentsWindow' + postID).style.display = 'none'
    }
}

function closeCommentWindow(postID) {
    document.getElementById('commentsWindow' + postID).style.display = 'none'
}

function sendCommunityPost(openOrClose) {
    
    if (openOrClose == 'open') {
        document.getElementById('popupContainer').style.display = 'block'
        document.getElementById('sendCommunityPostBlock').style.display = 'block'
        document.getElementById('main').style.visibility = 'hidden'
    }
    else {
        document.getElementById('popupContainer').style.display = 'none'
        document.getElementById('sendCommunityPostBlock').style.display = 'none'
        document.getElementById('main').style.visibility = 'visible'
    }
    
}

function chooseLoginRegisterFunc(loginRegister) {
    if (loginRegister == 1) {
        document.getElementById("forms-cadastro").style.display = "none";
        document.getElementById("formMainLabelRegister").style.display = "none";
    }
    else if (loginRegister == 2) {
        document.getElementById("forms-login").style.display = "none";
        document.getElementById("formMainLabelLogin").style.display = "none";
    }
    
    document.getElementById("desktopMain").style.display = "block";
    document.getElementById("formDivisor").style.display = "none";  // General, valid for any of the options. //
    document.getElementById("mobileMain").style.display = "none";
}

function passwordShowHide(passwordShowHideButtonNumber) {
    var passwordShowHideElementID = document.getElementById("senha" + passwordShowHideButtonNumber)
    var currentPasswordShowHidePosition = document.getElementById("passwordShowHideButton" + passwordShowHideButtonNumber).src

    if (currentPasswordShowHidePosition.includes("openEye")) {
        document.getElementById("passwordShowHideButton" + passwordShowHideButtonNumber).src = "../media/closedEyeBlack.png";
    }
    else {
        document.getElementById("passwordShowHideButton" + passwordShowHideButtonNumber).src = "../media/openEyeBlack.png";
    }

    if (passwordShowHideElementID.type === "password") {
        passwordShowHideElementID.type = "text";
    }
    else {
        passwordShowHideElementID.type = "password";
    }
}

function sideMenuShowHide(showHide) {
    if (showHide == 'show') {
        document.getElementById('hamburgerMenu').style.display = 'block'
    }
    else {
        document.getElementById('hamburgerMenu').style.display = 'none'
    }
}