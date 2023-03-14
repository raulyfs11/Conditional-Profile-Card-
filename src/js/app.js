import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  if (variables.twitter === null) variables.twitter;
  if (variables.github === null) variables.github;
  if (variables.linkedin === null) variables.linkedin;
  if (variables.instagram === null) variables.instagram;

  if (variables.name == null) variables.name = "John";
  if (variables.lastname == null) variables.lastname = " Doe";

  if (variables.role == null) variables.role = "<h2>Web Developer</h2>";
  else if (variables.role == "Floor Planner")
    variables.role = "<h2>Floor Planner</h2>";
  else if (variables.role == "Thecnical Writer")
    variables.role = "<h2> Technical Writer</h2>";
  else if (variables.role == "Web Developer")
    variables.role = "<h2> Web Developer</h2>";

  if (variables.city == null) variables.city = "Miami";
  else if (variables.city == "Miami") variables.city = "Miami";
  else if (variables.city == "Munich") variables.city = "Munich";
  else if (variables.city == "Caracas") variables.city = "Caracas";
  else if (variables.city == "Toronto") variables.city = "Toronto";

  if (variables.country == null) variables.country = "USA";
  else if (variables.country == "USA") variables.country = "USA";
  else if (variables.country == "Germany") variables.country = "Germany";
  else if (variables.country == "Canada") variables.country = "Canada";
  else if (variables.country == "Venezuela") variables.country = "Venezuela";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
          ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name}  ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city} , ${variables.country}</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://images.template.net/wp-content/uploads/2015/08/22123910/HD-Wallpapers11-111.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3n-McB6rto-bvwQF7wWsNH0N0nOoQrp8G60h_Jx7wFQ&usqp=CAU&ec=48600113",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
