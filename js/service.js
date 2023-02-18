const service = document.querySelector(".service");

const serviceCards = [
  {
    image: "./images/service1.png",
    title:
      "Faster, better products that your users love. Here's all the services I provide:  I'm multilingual.",
    price: "What I can do for you",
    subtitle: "Design Strategy",
    subtitle_1: "Web and Mobile App Design",
    subtitle_2: "Front-end Development",
  },
  {
    image: "./images/service2.png",
    title:
      "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
    price: "Applications I'm fluent in",
    subtitle: "Sketch",
    subtitle_1: "Webflow",
    subtitle_2: "Figma",
  },
  {
    image: "./images/service3.png",
    title:
      "I design products that are more than pretty. I make them shippable and usable.",
    price: "What you can expect",
    subtitle: "Clean and functional",
    subtitle_1: "Device and user friendly",
    subtitle_2: "Efficient and maintainable",
  },
];

function getserviceCard(image, title, price, subtitle, subtitle_1, subtitle_2) {
  // img
  const service_body = document.createElement("div");
  service_body.className = "service_body";
  const service_img = document.createElement("img");
  service_img.src = image;
  service_body.append(service_img);

  // h5
  const service_number = document.createElement("div");
  service_number.className = "service_number-top";
  const service_h5 = document.createElement("h5");
  service_h5.innerHTML = price;
  service_number.append(service_h5);

  // title
  const service_title = document.createElement("div");
  service_title.className = "service-title";
  const service_title_p = document.createElement("p");
  service_title_p.innerHTML = title;
  service_title.append(service_title_p);

  //   bottom
  const service_bottom = document.createElement("div");
  service_bottom.className = "service-bottom";
  const service_bottom_img = document.createElement("img");
  service_bottom_img.src = "./images/square.svg";
  const service_bottom_subtile = document.createElement("h6");
  service_bottom_subtile.innerHTML = subtitle;
  service_bottom.append(service_bottom_img, service_bottom_subtile);

  const service_bottom_1 = document.createElement("div");
  service_bottom_1.className = "service-bottom";
  const service_bottom_1_img = document.createElement("img");
  service_bottom_1_img.src = "./images/square.svg";
  const service_bottom_1_subtile = document.createElement("h6");
  service_bottom_1_subtile.innerHTML = subtitle_1;
  service_bottom_1.append(service_bottom_1_img, service_bottom_1_subtile);

  const service_bottom_2 = document.createElement("div");
  service_bottom_2.className = "service-bottom";
  const service_bottom_2_img = document.createElement("img");
  service_bottom_2_img.src = "./images/square.svg";
  const service_bottom_2_subtile = document.createElement("h6");
  service_bottom_2_subtile.innerHTML = subtitle_2;
  service_bottom_2.append(service_bottom_2_img, service_bottom_2_subtile);

  const service_card = document.createElement("div");
  service_card.setAttribute("class", "service_card");
  service_card.append(
    service_body,
    service_number,
    service_title,
    service_bottom,
    service_bottom_1,
    service_bottom_2
  );
  return service_card;
}

for (el of serviceCards) {
  service.append(getserviceCard(el.image, el.title, el.price, el.subtitle, el.subtitle_1, el.subtitle_2));
}
