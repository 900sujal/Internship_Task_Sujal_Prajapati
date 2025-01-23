function addnews()
{
	const title = document.getElementById('title').value;
	const artical=document.getElementById('artical').value;
	const image=document.getElementById('image').value;

	//create a new div
	const userdiv=document.createElement('div');
	 userdiv.classList.add('userartical-card');

	 //add artical title

	 const articaltitle=document.createElement('h3');
	 articaltitle.textContent = title;
	 userdiv.appendChild(articaltitle);

	 // add description 

	 const articaldescription= document.createElement('p');
	 articaldescription.textContent=artical;
	 userdiv.appendChild(articaldescription);

	 // add image
	 const articalimage=document.createElement('img')
	 articalimage.src=image;
	 userdiv.appendChild(articalimage)

	  // Append the new article to the user article container
	  document.getElementById('userartical').appendChild(userdiv);

	 // Clear the input fields after adding the article
	  document.getElementById('title').value = '';
	  document.getElementById('artical').value = '';
	  document.getElementById('image').value = '';

}