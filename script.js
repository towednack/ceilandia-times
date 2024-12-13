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