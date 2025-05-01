export default function () {
    if (localStorage.getItem('apptiser') === 'UK') { return}
    console.log('Detect loaded');
    const lang = navigator.language;

    setTimeout(() => {
        if (lang.toLowerCase().includes('fr')) {
            // provide option to switch to fr.apptiser.io
            dialog.showModal()
        }
    }, 1000);

    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
        <div class="dialog-container">
            <div>
                <!--<p>We've noticed that your browser language is set ot French, please confirm your preference below:</p>-->
                <p>Nous avons remarqué que la langue de votre navigateur est définie sur le français, veuillez confirmer votre préférence ci-dessous :</p>
            <div>
            <a href="https://fr.apptiser.io" class="btn btn-med">Accéder à Apptiser FR</a>
            <a href="javascript:void(0)" class="btn btn-med">Restez sur Apptiser UK</a>
            </div>
        </div>
    `;
    dialog.addEventListener('click', (e) => {
        if (e.target.href === 'javascript:void(0)') {
            localStorage.setItem('apptiser', 'UK');
            dialog.remove();
        }
    })
    document.body.appendChild(dialog);


}
