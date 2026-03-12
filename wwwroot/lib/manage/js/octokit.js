//GITHUB Docs 
//https://octokit.github.io/rest.js/v21/#repos-list-languages


import { Octokit } from "https://esm.sh/@octokit/rest";

export const OctokitClient = new Octokit({
  userAgent: 'EIC&ESBserver  v2.0.4',
  baseUrl: 'https://api.github.com'
});

let username="liborsvoboda";

//const repo = await OctokitClient.rest.search.repos({q});
const repos = await OctokitClient.rest.repos.listForUser({
    username,
});
  
let html='<ul data-role="treeview" class="fg-white c-pointer">';  
repos.data.forEach(repo=>{
	html +='<li data-caption="' + repo.name + '" onclick=LoadRepoReadme("' + repo.git_url + '") ></li>';
});html +="</ul>";
$("#main").html(html);

window.GithubRequest = async ()=> { window.GithubData = await OctokitClient.rest.search.repos({q});}

window.LoadRepoReadme = async (repoUrl)=> { 
let response = await OctokitClient.rest.repos.getReadme({
	owner: repoUrl.split("github.com/")[1].split("/")[0],
	repo:  repoUrl.split(".git")[0].split("/").pop(),
	mediaType: { format: "application/vnd.github.html+json"},
});
$("#appcontent").html(window.atob(response.data.content));
}
console.log(repos);

// COMPANY REPOS
/*
octokit.rest.repos
listForUser
  .listForOrg({
    org: "octokit",
    type: "public",
  })
  .then(({ data }) => {
    // handle data
  });
*/
  