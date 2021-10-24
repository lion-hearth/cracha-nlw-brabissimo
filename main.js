const linksSocialMedia = {  /* nome do objeto */
    github: 'lion-hearth',
    youtube: 'darksocergamesbr',
    facebook: '',
    instagram: 'f4azer1337',
    twitter: '', 

 }
 
  function changeSocialMediaLinks() {

      for (let li of socialLinks.children ){
        const social = li.getAttribute('class')
         

       li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
         
      }
  }
    //ser humano le 1234678910
    //PC le 0123456789*
   // i = i + 1
   changeSocialMediaLinks()

   function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response =>response.json())
    .then(data => {
       userName.textContent = data.name
       userBio.textContent = data.bio
       userGithub.href = data.html_url
       userPicture.src = data.avatar_url
       userDescriptionLink.textContent = data.login

    })

   }

   getGitHubProfileInfos()
   

   //ARROW FUNCTION
  /* function nomedafuncao(){

   }

   argumento =>{

   }
   */
  /*span é uma forma de texto que não é um paragrafo*/
