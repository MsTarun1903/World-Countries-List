const countries = [
  'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bhutan',
      'Bolivia',
      'Bosnia and Herzegovina',
      'Botswana',
      'Brazil',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cape Verde',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Colombi',
      'Comoros',
      'Congo (Brazzaville)',
      'Congo',
      'Costa Rica',
      "Cote d'Ivoire",
      'Croatia',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'East Timor (Timor Timur)',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Ethiopia',
      'Fiji',
      'Finland',
      'France',
      'Gabon',
      'Gambia, The',
      'Georgia',
      'Germany',
      'Ghana',
      'Greece',
      'Grenada',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      'Korea, North',
      'Korea, South',
      'Kuwait',
      'Kyrgyzstan',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Micronesia',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Qatar',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Vincent',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia and Montenegro',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'Spain',
      'Sri Lanka',
      'Sudan',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Tuvalu',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Vatican City',
      'Venezuela',
      'Vietnam',
      'Yemen',
      'Zambia',
      'Zimbabwe'
  ];

  const startsWith = document.querySelector(".Starting-button");
  const includes = document.querySelector(".any-button");
  const Alphabet = document.querySelector(".Alphabet");
  const input = document.getElementById("input-box");
  
   
// working code
  input.addEventListener("input",e=>{
    const input = e.target.value.toLowerCase();
    const filteredCountries = countries.filter(country=>country.toLowerCase().includes(input));
    renderCountries(filteredCountries);
  });

  // Add event listener to the startsWith button
startsWith.addEventListener("click", e => {
  const userInput = input.value.toLowerCase();
  const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(userInput));
  renderCountries(filteredCountries);

  // Highlight the clicked button and unhighlight the other buttons
  startsWith.classList.add("selected");
  includes.classList.remove("selected");
  Alphabet.classList.remove("selected");
});

// Add event listener to the includes button
includes.addEventListener("click", e => {
  const userInput = input.value.toLowerCase();
  const filteredCountries = countries.filter(country => country.toLowerCase().includes(userInput));
  renderCountries(filteredCountries);

  // Highlight the clicked button and unhighlight the other buttons
  includes.classList.add("selected");
  startsWith.classList.remove("selected");
  Alphabet.classList.remove("selected");
});

// Add event listener to the Alphabet button
Alphabet.addEventListener("click", e => {
  const sortedCountries = [...countries].sort();
  renderCountries(sortedCountries);

  // Highlight the clicked button and unhighlight the other buttons
  Alphabet.classList.add("selected");
  startsWith.classList.remove("selected");
  includes.classList.remove("selected");
});

function renderCountries(countriesToRender){
  const countryList = document.getElementById("countryList");
  countryList.innerHTML = "";
  countriesToRender.forEach(country => {
      const newElement = document.createElement("li");
      newElement.textContent = country;
      newElement.className = "country-box";
      countryList.appendChild(newElement);
  });
}

// Initial render
renderCountries(countries);

