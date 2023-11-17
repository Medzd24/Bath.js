
    var isModalOpen = localStorage.getItem('modalOpen');

    if (isModalOpen === 'true') {
        openModal();
    }

    function openModal() {
        document.getElementById('videoModal').style.display = 'flex';
        localStorage.setItem('modalOpen', 'true');
    }

    function closeModal() {
        document.getElementById('videoModal').style.display = 'none';
        localStorage.removeItem('modalOpen');
    }

    window.onbeforeunload = function () {
        closeModal();
    };

    window.onload = function () {
        openModal();
    };

    var modalContent = document.querySelector('.modal-content');

    var zoomButton = document.getElementById('zoomButton'); // يجب تعيين id="zoomButton" للزر

    zoomButton.addEventListener('click', function () {
        modalContent.classList.toggle('zoom-in');
    });
