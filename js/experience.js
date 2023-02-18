const experience = document.querySelector(".experience");

const experienceCards = [
  {
    job_1: "📚 Education",
    title_1: "Stanford University",
    price: "MSc (Human Computer Interaction)",
    price_1: "• 2013-2015",
    title_2: "MIT Summer School",
    price_3: "UX Training Bootcamp",
    price_4: "• 2013-2014",
    title_3: "California State University",
    price_5: "BSc in Software Engineering",
    price_6: "• 2009-2012",
  },
  {
    job_1: "💼 Work Experience",
    title_1: "SpaceFleet",
    price: "Senior Product Designer",
    price_1: "• April 2019 - Current",
    title_2: "MusicMash",
    price_3: "Information Architect",
    price_4: "• April 2016 - May 2017",
    title_3: "Kingdom",
    price_5: "UI Designer",
    price_6: "• April 2016 - May 2017",
  },
];

function getexperienceCard(
  job_1,
  title_1,
  price,
  price_1,
  title_2,
  price_3,
  price_4,
  title_3,
  price_5,
  price_6
) {
  const experience_top__job = document.createElement("div");
  experience_top__job.className = "experience-top__job";
  const experience_top__job_h2 = document.createElement("h2");
  experience_top__job_h2.innerHTML = job_1;
  experience_top__job.append(experience_top__job_h2);

  // img
  const experience_body = document.createElement("div");
  experience_body.className = "experience_body";
  const experience_h4 = document.createElement("h4");
  experience_h4.innerHTML = title_1;
  const experience_img = document.createElement("img");
  experience_img.src = "./images/experience.svg";
  experience_body.append(experience_h4, experience_img);

  // h5
  const experience_number = document.createElement("div");
  experience_number.className = "experience_number-top";
  const experience_h5 = document.createElement("h5");
  experience_h5.innerHTML = price;
  const experience_data = document.createElement("h5");
  experience_data.innerHTML = price_1;
  experience_number.append(experience_h5, experience_data);

  const experience_line = document.createElement("div");
  experience_line.className = "experience-line";

  // img
  const experience_body_1 = document.createElement("div");
  experience_body_1.className = "experience_body_1";
  const experience_h4_1 = document.createElement("h4");
  experience_h4_1.innerHTML = title_2;
  const experience_img_1 = document.createElement("img");
  experience_img_1.src = "./images/experience.svg";
  experience_body_1.append(experience_h4_1, experience_img_1);

  // h5
  const experience_number_1 = document.createElement("div");
  experience_number_1.className = "experience_number_1-top";
  const experience_h5_1 = document.createElement("h5");
  experience_h5_1.innerHTML = price_3;
  const experience_data_1 = document.createElement("h5");
  experience_data_1.innerHTML = price_4;
  experience_number_1.append(experience_h5_1, experience_data_1);

  const experience_line_1 = document.createElement("div");
  experience_line_1.className = "experience-line";

  // img
  const experience_body_2 = document.createElement("div");
  experience_body_2.className = "experience_body_2";
  const experience_h4_2 = document.createElement("h4");
  experience_h4_2.innerHTML = title_3;
  const experience_img_2 = document.createElement("img");
  experience_img_2.src = "./images/experience.svg";
  experience_body_2.append(experience_h4_2, experience_img_2);

  // h5
  const experience_number_2 = document.createElement("div");
  experience_number_2.className = "experience_number_2-top";
  const experience_h5_2 = document.createElement("h5");
  experience_h5_2.innerHTML = price_5;
  const experience_data_2 = document.createElement("h5");
  experience_data_2.innerHTML = price_6;
  experience_number_2.append(experience_h5_2, experience_data_2);

  const experience_card = document.createElement("div");
  experience_card.setAttribute("class", "experience_card");
  experience_card.append(
    experience_top__job,
    experience_body,
    experience_number,
    experience_line,
    experience_body_1,
    experience_number_1,
    experience_line_1,
    experience_body_2,
    experience_number_2
  );
  return experience_card;
}

for (el of experienceCards) {
  experience.append(
    getexperienceCard(
      el.job_1,
      el.title_1,
      el.price,
      el.price_1,
      el.title_2,
      el.price_3,
      el.price_4,
      el.title_3,
      el.price_5,
      el.price_6,
    )
  );
}
