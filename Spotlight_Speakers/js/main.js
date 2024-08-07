document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');
    const popups = document.querySelectorAll('.popup');
    const closeBtns = document.querySelectorAll('.popup .close');
    const overlay = document.getElementById('overlay');
    // Just to avoid write the Lorem Ipsum 8 times inside the html
    const loremIpsumText = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus ex, vehicula et eleifend nec, egestas et dui. Duis vitae nulla faucibus, fringilla neque vel, hendrerit mauris. Praesent sed mollis odio, non aliquam arcu. Nulla lacinia vel diam at facilisis. Donec sem magna, finibus elementum enim efficitur, ornare dignissim ex. Aliquam erat volutpat. Nunc porta ligula quam, in suscipit justo tincidunt at. Vestibulum lobortis eros sed consectetur pulvinar. Nullam ut posuere mi, et dictum felis. Cras iaculis nisi id nisi molestie, a ornare augue tristique. Sed semper ac eros nec consectetur.</p><p>Duis rutrum odio quis consequat molestie. In elit quam, volutpat vel auctor a, congue eget ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dictum turpis sed elit lacinia eleifend. Donec quis tincidunt magna. Morbi facilisis neque vitae orci accumsan, ut congue odio porttitor.</p><p>Maecenas in justo eget libero aliquam ultricies. Maecenas purus nisi, volutpat vitae aliquam non, rhoncus et diam. Nunc vehicula dui id orci auctor, non accumsan dolor rhoncus. Mauris porta nisi faucibus, congue ligula id, lacinia ex. Fusce eu risus mollis, imperdiet velit non, finibus ipsum. Sed tincidunt id quam et varius. In fermentum aliquam lorem ut dapibus. Phasellus commodo fringilla nulla, ac malesuada elit euismod id. Quisque facilisis justo in nibh auctor ornare. Praesent convallis dapibus purus, at luctus enim pellentesque vel. Etiam tortor metus, dignissim a tincidunt vitae, tempor et nibh.</p><p>Praesent lacinia libero non nisi ultricies, a fringilla sapien vehicula. Suspendisse potenti. Maecenas mollis orci sit amet erat tristique, in laoreet ligula gravida. Duis ultricies massa ac metus dictum, a consequat mi rhoncus. Nullam sollicitudin, dolor vel laoreet bibendum, justo felis fermentum lectus, a pretium justo elit ac libero.</p>';

    // Show popup
    function showPopup(popup) {
        overlay.style.display = 'block';
        overlay.offsetHeight;
        overlay.classList.add('show');
        
        popup.style.display = 'block';
        popup.offsetHeight;
        popup.classList.add('show');
    }

    // Close popup
    function hidePopup(popup) {
        popup.classList.remove('show');
        overlay.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }, 300);
    }

    // Build & Open/Close each popup
    photos.forEach((photo, index) => {
        photo.addEventListener('click', async function() {
            popups.forEach(popup => {
                if (popup.classList.contains('show')) {
                    hidePopup(popup);
                }
            });
            const loremIpsum = loremIpsumText;
            const speakerName = this.closest('.speaker').querySelector('.info h2').outerHTML;
            const speakerInfo = `<div class="popup-Header">${speakerName}<span class="close"></span></div><div class="popupBody">${loremIpsum}</div>`;
            const popup = document.getElementById(`popup${index + 1}`);
            const popupContent = popup.querySelector(`#popup-content${index + 1}`);
            popupContent.innerHTML = speakerInfo;
            showPopup(popup);
        });
    });

    // Close popup with click
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('close')) {
            hidePopup(event.target.closest('.popup'));
        } else if (event.target.classList.contains('overlay')) {
            hidePopup(document.querySelector('.popup.show'));
        }
    });

    // Close popup with esc
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            popups.forEach(popup => {
                if (popup.classList.contains('show')) {
                    hidePopup(popup);
                }
            });
        }
    });
});