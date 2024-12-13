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