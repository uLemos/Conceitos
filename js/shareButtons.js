const facebookButton = document.getElementById('facebook-button');
const twitterButton = document.getElementById('fab fa-twitter');

function shareOnFacebook(){
    const url = encodeURIComponent(window.location.href);

    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, '_blank');
}

function shareOnTwitter(){
    const text = encodeURIComponent('Check out this webSite:');
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

    window.open(shareUrl, '_blank');
}

facebookButton.addEventListener('click', shareOnFacebook);
twitterButton.addEventListener('click', shareOnTwitter);