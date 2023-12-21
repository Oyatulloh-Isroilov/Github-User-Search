const input = document.getElementById("nameInp");
const btn = document.querySelector(".searchBtn");
const user = document.querySelector(".gitUser");
const login = document.querySelector(".gitUserName");
const joined = document.querySelector(".gitJoinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const followings = document.querySelector(".followingTotal");
const locations = document.querySelector(".gitLocations");
const twitter = document.querySelector(".gitTwitter");
const websites = document.querySelector(".gitSite");
const companies = document.querySelector(".gitCompnies");
const bio = document.querySelector(".gitBio");
let block = document.querySelector(".gitImg");

let img = document.createElement("img");

btn.addEventListener("click", async function () {
  const gitUrl = `https://api.github.com/users/${input.value}`;

  try {
    const response = await fetch(gitUrl);
    const data = await response.json();

    img.src = data.avatar_url;
    block.appendChild(img);
    block.style.border = "none";

    user.innerHTML = data.name || "Ism kiritilmagan";
    login.innerHTML = `@${data.login}`;
    joined.innerHTML = `Joined: ${data.created_at.slice(0, 10)}`;
    repo.innerHTML = data.public_repos;
    follower.innerHTML = data.followers;
    followings.innerHTML = data.following;
    locations.innerHTML = data.location || "Manzil ko'rsatilmagan";
    twitter.innerHTML =
      data.twitter_username ||
      `<i class="fa-brands fa-twitter"></i> Twitter berilmagan`;
    websites.innerHTML = data.blog || `Site berilmagan`;
    companies.innerHTML = data.company || `Companiya berilmagan`;
    bio.innerHTML = data.bio || "Ma'lumot berilmagan";
  } catch (error) {
    console.error("Siteda hatolik yuz berdi :", error);
  }
  input.value = "";
});
