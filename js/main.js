starts.addEventListener('click', event => {
	let photo = document.getElementById("myfile").files[0];
	let formData = new FormData();
	outContent(getName());
	PreviewImage();
	formData.append("finaid", photo);
	fetch('http://finaid.pogonyalo.com/itstep/', {
		method: "POST",
		body: formData
	}).then(e => {
		// console.log(e);
	})
})
function PreviewImage() {
	var oFReader = new FileReader();
	oFReader.readAsDataURL(document.getElementById("myfile").files[0]);

	oFReader.onload = function (oFREvent) {
		document.getElementById("uploadPreview").src = oFREvent.target.result;
	};
};
function getName() {
	var fullPath = document.getElementById('myfile').value;
	if (fullPath) {
		var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
		var filename = fullPath.substring(startIndex);
		if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
			filename = filename.substring(1);
		}
		return filename;
	}
}
function outContent(fileName) {
	out.innerHTML = `
	<img id="uploadPreview" style="width: 100px; height: 100px;" />
	<a href="http://finaid.pogonyalo.com/itstep/uploads/${fileName}">http://finaid.pogonyalo.com/itstep/uploads/${fileName}</a>
	`
}