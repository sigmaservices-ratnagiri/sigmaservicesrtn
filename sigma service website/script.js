// Data for each service
const serviceDetails = {
  "voter-id": {
    title: "Voter ID",
    details: [
      { heading: "New Voter ID" },
      { heading: "Corrections in Voter ID" },
      { heading: "Shifting of Address" }
    ]
  },
  "pan": {
    title: "PAN Card Application",
    details: [
      { heading: "New PAN Card, Minor Pan Card" },
      { heading: "PAN Card Corrections" },
      { heading: "Firm & Trust Pan card" }
    ]
  },
  "gazattee": {
    title: "Gazette",
    details: [
      { heading: "Name Change" },
      { heading: "Change in Date of Birth" }, { heading: "Change in Religion" }
    ]
  },
  "mseb": {
    title: "MSEB",
    details: [
      { heading: "All types of New Connections" },
      { heading: "Name Change in Bill" },
      { heading: "Correction in address" },
      { heading: "Industrial Connection" }
    ]
  },
  "divyang": {
    title: "Divyang Services",
    details: [
      { heading: "Divyang Registration" },
      { heading: "Guardianship Certificate" },
      { heading: "Railway Concession Form" }
    ]
  },
  "ayushman-bharat": {
    title: "Ayushman Bharat",
    details: [
      { heading: "ABHA CARD" },
      { heading: "Ayushman Bharat card" }
    ]
  },
  "farmer-id": {
    title: "Farmer ID",
    },
  "senior-citizen-card": {
    title: "Senior Citizen Card",
    },
  "police-verification": {
    title: "Police Verification Certificate",
    },
  "e-mojani": {
    title: "E-Mojani",
    details: [
      { heading: "Application for Mojani (Land survey), Hadd Kayam,"}, { heading: "Varas Tapas"}
    ]
  },
  "mojani": {
    title: "Revenue Department",
    details: [
      { heading: "Digital 7/12, Ferfar, Property Card"}
    ]
  },
  "shop-act": {
    title: "Shop & Act",
    details: [
      { heading: "Registration & Renewal" }
    ]
  },
  "udyam-aadhar": {
    title: "Udyam Aadhaar",
    details: [
      { heading: "Registration & Renewal" }
    ]
  },
  "agriculture-licenses": {
    title: "Agriculture Licenses",
    details: [
      { heading: "Fertilizer License" },
      { heading: "Seed License" },
      { heading: "Pesticides License" },
      { heading: "Pest Control License" }
    ]
  },
  "food-license": {
    title: "Food License",
    details: [
      { heading: "Restaurant License" },
	  { heading: "Kirana Store License" },
	  { heading: "Beer Shop and Permit Room License" },
	  { heading: "Street Food Vendor Registration(Firta Vikreta)" }
    ]
  },
  "excise-department": {
    title: "Excise Department",
    details: [
      { heading: "Bar & Permit Room License" }, { heading: "Beer Shop License"}, {heading: "Liqueur Comsuming License"}
    ]
  },
  "society-registration": {
    title: "Society & Trust Registration",
    details: [
      { heading: "Online Society-registration, Trust Registration" },
		  { heading: "Darpan ID Generation" }
    ]
  },
  "mtdc": {
    title: "Maharashtra Tourism Department",
    details: [
      { heading: "Water Sport Registration" }, { heading: "MTDC Bed & Breakfast Application"}
    ]
  },
  "stamps": {
    title: "Niello & Pre-ink Stamp",
    details: [
      { heading: "Creation", description: "Service for creating and ordering custom niello and pre-ink stamps." }
    ]
  },
  "admissions": {
    title: "Educational Services",
    details: [
      { heading: "Online Admissions ( XI to PHD) " }, { heading: "CET, NEET Application and Guidence"},
  { heading: "Engieering , Medical & Paramedical Admissions"}, { heading: "ANM, GNM, B.sc Nursing Registration" }
    ]
  },
  "govt-recruitment": {
    title: "Govt. Recruitment",
    details: [ { heading: "Assistance & Guidance for Government Recruitment process."},
      { heading: "MPSC, UPSC, Police Bhartri online Application form " }, { heading: "Banking, Jilha Parishad, State Government Recruitment Application"},
		  { heading: "NDA, Army, Navy, Airforce, Railway Applications"}
    ]
  },
  "scholorship": {
    title: "Scholorship Form",
    details: [ { heading: "MahaDBT Scholorship Applications"},
      { heading: "NSP Portal scholorship (std I to X)" }, { heading: "Govt. Hostel Applications"}
    ]
  },
  "books": {
    title: "Competitive Exam Books Available",
    details: [
      { heading: "MPSC, UPSC, POLICE Bharti" }, { heading: "Grammar Books Available"}, { heading: "Current Affairs Books Available"},
		  { heading: " Books Available on Order"}
    ]
  },
  "cast-validity": {
    title: "Caste Validity",
    details: [
      { heading: "Caste validity for Education" },
      { heading: "Caste validity for Service" },
      { heading: "Caste validity for Election" }
    ]
  },
  "bar-council": {
    title: "Bar Council Sanad",
    details: [
      { heading: "Application with Guidance" }
    ]
  },
  "pharmacy-council": {
    title: "Pharmacy Council Registration",
    details: [
      { heading: "New Pharmacist registration" },
      { heading: "PPP card Renewal" }
    ]
  },
  "pwd-engineer": {
    title: "PWD Unemployed engineer Regi.",
      },
  "stationery": {
    title: "Stationery & allied Services",
    details: [
      { heading: "All types of Office and School Stationery" }
    ]
  },
   "lamination": {
    title: "Binding & Lamination",
    details: [
      { heading: "All types of Book Binding, Embossing" },
      { heading: "Lamination" }
    ]
  },
  "xerox": {
    title: "Xerox & Digital Printing",
    details: [
      { heading: "High-quality Copier and Xerox" },
      { heading: "High-quality Digital Color Printing" }
    ]
  },
  "epfo": {
    title: "EPFO",
    details: [
      { heading: "UAN Registration, Activation, Profile Creation" },
	  { heading: "Corrections in PF Profile"},
      { heading: "PF withdrawal, Pension Application 10 D " }
    ]
  },
  "sparsh-pension": {
    title: "Sparsh Defense Pension",
    details: [ { heading: "Sparsh Life Certificate" }, 
	{ heading: "ECHS Card"}, { heading: "KSB Scholorship"}
  ]
  },
  "jeevan-praman": {
    title: "Jeevan Pramaan",
    details: [ {heading: "Digital Life Certificate generation"}]
  },
  "typing": {
    title: "Marathi & English Typing",
    details: [
      { heading: "Government Affidavits Typing" },
	  { heading: "Rent Agreement, Sammatipatra, Hamipatra Typing "},
      { heading: " Educational Project typing" }, { heading: "Questain Paper typing"}
    ]
  }
  
};

// ====== Get DOM elements ======
const serviceItems = document.querySelectorAll('.service-item'); // nodeList of clickable titles
const modal = document.getElementById('serviceModal');            // modal wrapper (overlay)
const closeButton = document.getElementById('close-button');      // close control
const modalTitle = document.getElementById('modal-title');        // where we put title
const modalDetails = document.getElementById('modal-details');    // where we put content

// Small helper to safely set text (avoid accidental HTML injection)
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ====== Attach click listeners to all service items ======
serviceItems.forEach(item => {
  item.style.cursor = 'pointer'; // now the whole card shows hand cursor
  item.addEventListener('click', () => {
    const serviceKey = item.dataset.service;
    const serviceData = serviceDetails[serviceKey];

    if (!serviceData) {
      console.warn('No service data found for key:', serviceKey);
      return;
    }

    // set title and clear old details
    modalTitle.textContent = serviceData.title || '';
    modalDetails.innerHTML = '';

    // If details is an array produce a list, else create a paragraph
    if (Array.isArray(serviceData.details)) {
      const ul = document.createElement('ul');
      ul.classList.add('modal-list');
      serviceData.details.forEach(d => {
        const li = document.createElement('li');
        if (d.heading) {
          li.innerHTML = `<strong>${escapeHtml(d.heading)}:</strong> ${escapeHtml(d.description || '')}`;
        } else {
          li.textContent = d.description || '';
        }
        ul.appendChild(li);
      });
      modalDetails.appendChild(ul);
    } else if (serviceData.details) {
      const p = document.createElement('p');
      p.textContent = serviceData.details;
      modalDetails.appendChild(p);
    }

    // finally show the modal
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    console.log("Modal display set to:", modal.style.display, "aria-hidden:", modal.getAttribute("aria-hidden"));
  });
});

// Close modal when clicking the X
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
});

// Close modal when clicking outside modal-content (click on overlay)
modal.addEventListener('click', (ev) => {
  if (ev.target === modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// ==================== Global Visitor Counter (using CountAPI) ====================
document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.getElementById("visitor-counter");
  if (!counterEl) return; // Only run on index.html

  fetch("https://api.countapi.xyz/hit/sigma-services.github.io/visits")
    .then(res => res.json())
    .then(data => {
      counterEl.textContent = `Visitors: ${data.value}`;
    })
    .catch(err => {
      console.error("Counter error:", err);
      counterEl.textContent = "Visitors: N/A";
    });
});
