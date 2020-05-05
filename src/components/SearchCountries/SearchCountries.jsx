import React, { Component, lazy, Suspense } from "react";
import {Link} from "react-router-dom"
//CSS
import "./SearchCountries.css";

//Components
//import CardCountry from "../CardCountry/CardCountry";
import InputFilterByName from "../InputFilterByName/InputFilterByName";
// import SelectFilter from "../SelectFilter/SelectFilter";


//lazyLoaded
 const CardCountry = lazy(() => import ("../CardCountry/CardCountry"))

export default class SearchCountries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: this.props.countries,
            allCountries: this.props.countries,
            flags: []
        };
    }

    filterCountries = (stringTyped) => {
        let filter = stringTyped.toLowerCase();
        let countriesList = this.state.allCountries;
        let countriesFiltered = countriesList.filter(
            (countryElm) =>
                countryElm.country.toLowerCase().search(filter) !== -1
        );
        this.setState({
            countries: countriesFiltered
        });
    };

    sortCountries = () => {
        let sort = this.state.countries.sort((a, b) => {
            return a.cases < b.cases ? 1 : -1;
        });
        this.setState({
            countries: sort
        });
    };
    async componentDidMount() {
        var countryCodes = {
            Afghanistan: "AF",
            "Aland Islands": "AX",
            Albania: "AL",
            Algeria: "DZ",
            "American Samoa": "AS",
            Andorra: "AD",
            Angola: "AO",
            Anguilla: "AI",
            Antarctica: "AQ",
            "Antigua And Barbuda": "AG",
            Argentina: "AR",
            Armenia: "AM",
            Aruba: "AW",
            Australia: "AU",
            Austria: "AT",
            Azerbaijan: "AZ",
            Bahamas: "BS",
            Bahrain: "BH",
            Bangladesh: "BD",
            Barbados: "BB",
            Belarus: "BY",
            Belgium: "BE",
            Belize: "BZ",
            Benin: "BJ",
            Bermuda: "BM",
            Bhutan: "BT",
            Bolivia: "BO",
            "Bosnia and Herzegovina": "BA",
            Botswana: "BW",
            "Bouvet Island": "BV",
            Brazil: "BR",
            "British Indian Ocean Territory": "IO",
            Brunei: "BN",
            Bulgaria: "BG",
            "Burkina Faso": "BF",
            Burundi: "BI",
            Cambodia: "KH",
            Cameroon: "CM",
            Canada: "CA",
            "Cape Verde": "CV",
            "Cayman Islands": "KY",
            "Central African Republic": "CF",
            Chad: "TD",
            Chile: "CL",
            China: "CN",
            "Christmas Island": "CX",
            "Cocos (Keeling) Islands": "CC",
            Colombia: "CO",
            Comoros: "KM",
            Congo: "CG",
            DRC: "CD",
            "Cook Islands": "CK",
            "Costa Rica": "CR",
            "Ivory Coast": "CI",
            Croatia: "HR",
            Cuba: "CU",
            Cyprus: "CY",
            Czechia: "CZ",
            Denmark: "DK",
            Djibouti: "DJ",
            Dominica: "DM",
            "Dominican Republic": "DO",
            Ecuador: "EC",
            Egypt: "EG",
            "El Salvador": "SV",
            "Equatorial Guinea": "GQ",
            Eritrea: "ER",
            Estonia: "EE",
            Ethiopia: "ET",
            "Falkland Islands": "FK",
            "Faeroe Islands": "FO",
            Fiji: "FJ",
            Finland: "FI",
            France: "FR",
            "French Guiana": "GF",
            "French Polynesia": "PF",
            "French Southern Territories": "TF",
            Gabon: "GA",
            Gambia: "GM",
            Georgia: "GE",
            Germany: "DE",
            Ghana: "GH",
            Gibraltar: "GI",
            Greece: "GR",
            Greenland: "GL",
            Grenada: "GD",
            Guadeloupe: "GP",
            Guam: "GU",
            Guatemala: "GT",
            Guernsey: "GG",
            Guinea: "GN",
            "Guinea-Bissau": "GW",
            Guyana: "GY",
            Haiti: "HT",
            "Heard Island & Mcdonald Islands": "HM",
            "Holy See (Vatican City State)": "VA",
            Honduras: "HN",
            "Hong Kong": "HK",
            Hungary: "HU",
            Iceland: "IS",
            India: "IN",
            Indonesia: "ID",
            Iran: "IR",
            Iraq: "IQ",
            Ireland: "IE",
            "Isle Of Man": "IM",
            Israel: "IL",
            Italy: "IT",
            Jamaica: "JM",
            Japan: "JP",
            "Channel Islands": "JE",
            Jordan: "JO",
            Kazakhstan: "KZ",
            Kenya: "KE",
            Kiribati: "KI",
            Korea: "KR",
            "S. Korea": "KR",
            Kuwait: "KW",
            Kyrgyzstan: "KG",
            "Lao People's Democratic Republic": "LA",
            Latvia: "LV",
            Lebanon: "LB",
            Lesotho: "LS",
            Liberia: "LR",
            "Libyan Arab Jamahiriya": "LY",
            Liechtenstein: "LI",
            Lithuania: "LT",
            Luxembourg: "LU",
            Macao: "MO",
            Macedonia: "MK",
            Madagascar: "MG",
            Malawi: "MW",
            Malaysia: "MY",
            Maldives: "MV",
            Mali: "ML",
            Malta: "MT",
            "Marshall Islands": "MH",
            Martinique: "MQ",
            Mauritania: "MR",
            Mauritius: "MU",
            Mayotte: "YT",
            Mexico: "MX",
            "Micronesia, Federated States Of": "FM",
            Moldova: "MD",
            Monaco: "MC",
            Mongolia: "MN",
            Montenegro: "ME",
            Montserrat: "MS",
            Morocco: "MA",
            Mozambique: "MZ",
            Myanmar: "MM",
            Namibia: "NA",
            Nauru: "NR",
            Nepal: "NP",
            Netherlands: "NL",
            "Netherlands Antilles": "AN",
            "New Caledonia": "NC",
            "New Zealand": "NZ",
            Nicaragua: "NI",
            Niger: "NE",
            Nigeria: "NG",
            Niue: "NU",
            "Norfolk Island": "NF",
            "North Macedonia": "MP",
            Norway: "NO",
            Oman: "OM",
            Pakistan: "PK",
            Palau: "PW",
            Palestine: "PS",
            Panama: "PA",
            "Papua New Guinea": "PG",
            Paraguay: "PY",
            Peru: "PE",
            Philippines: "PH",
            Pitcairn: "PN",
            Poland: "PL",
            Portugal: "PT",
            "Puerto Rico": "PR",
            Qatar: "QA",
            Réunion: "RE",
            Romania: "RO",
            Russia: "RU",
            Rwanda: "RW",
            "Saint Barthelemy": "BL",
            "St. Barth": "BL",
            "Saint Helena": "SH",
            "Saint Kitts And Nevis": "KN",
            "Saint Lucia": "LC",
            "Saint Martin": "MF",
            "Saint Pierre And Miquelon": "PM",
            "St. Vincent Grenadines": "VC",
            Samoa: "WS",
            "San Marino": "SM",
            "Sao Tome And Principe": "ST",
            "Saudi Arabia": "SA",
            Senegal: "SN",
            Serbia: "RS",
            Seychelles: "SC",
            "Sierra Leone": "SL",
            Singapore: "SG",
            Slovakia: "SK",
            Slovenia: "SI",
            "Solomon Islands": "SB",
            Somalia: "SO",
            "South Africa": "ZA",
            "South Georgia And Sandwich Isl.": "GS",
            Spain: "ES",
            "Sri Lanka": "LK",
            Sudan: "SD",
            Suriname: "SR",
            "Svalbard And Jan Mayen": "SJ",
            Swaziland: "SZ",
            Sweden: "SE",
            Switzerland: "CH",
            "Syrian Arab Republic": "SY",
            Taiwan: "TW",
            Tajikistan: "TJ",
            Tanzania: "TZ",
            Thailand: "TH",
            "Timor-Leste": "TL",
            Togo: "TG",
            Tokelau: "TK",
            Tonga: "TO",
            "Trinidad and Tobago": "TT",
            Tunisia: "TN",
            Turkey: "TR",
            Turkmenistan: "TM",
            "Turks And Caicos Islands": "TC",
            Tuvalu: "TV",
            Uganda: "UG",
            Ukraine: "UA",
            UAE: "AE",
            UK: "GB",
            USA: "US",
            "United States Outlying Islands": "UM",
            Uruguay: "UY",
            Uzbekistan: "UZ",
            Vanuatu: "VU",
            Venezuela: "VE",
            Vietnam: "VN",
            "Virgin Islands, British": "VG",
            "U.S. Virgin Islands": "VI",
            "Wallis And Futuna": "WF",
            "Western Sahara": "EH",
            Yemen: "YE",
            Zambia: "ZM",
            Zimbabwe: "ZW",
            Curaçao: "CW"
        };
        this.setState({
            flags: countryCodes
        });
        this.sortCountries();
    }

//    {/* <SelectFilter sort={this.sortCountries.bind(this)} /> */}
    render() {
        return (
            <div className="SearchCountries">
                <h4>Affected Countries</h4>
                <div className="filters">
                    <InputFilterByName
                        filterCountries={this.filterCountries.bind(this)}
                    />
                </div>
                <div className="countryList">
                   <Suspense fallback = { <div>Loading Countries</div>}>
                    {this.state.countries.length > 0 ? (
                        this.state.countries.map((country, index) => {
                            let flagCode = (this.state.flags[country.country]) ? this.state.flags[country.country]: "unknown"
                            let flagSrc = `https://coronastatistics.live/assets/flags/${flagCode}.svg`;
                            return (
                                <Link to={`country/${country.country}/${ flagCode }`} key={index}>
                                    <CardCountry
                                        flagCode={`${flagSrc.toLowerCase()}`}
                                        country={country}
                                    />
                                </Link>
                            );
                        })
                    ) : (
                        <div className="white-text m-left">
                            Country Not Found.
                        </div>
                    )}
                    </Suspense>
                </div>
            </div>
        );
    }
}
