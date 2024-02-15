import React, { useEffect, useState } from "react";
import List from "../components/List";

import img1 from "../images/matthew-henry-yETqkLnhsUI-unsplash.jpg";
import img2 from "../images/karsten-wurth-0w-uTa0Xz7w-unsplash.jpg";

import T1 from "../text/1_1_det_finstilta_under_erbjudandena_docx.mdx";
import T2 from "../text/1_2_med_xxx_kan_du_enkelt_j_mf_ra_elpriserna_och_hitta_det_avtal_som_ger_dig_det_l_gsta_elpriset_docx.mdx";
import T3 from "../text/1_3_olika_avtalsformer_docx.mdx";
import T4 from "../text/1_4_ut_ver_ink_pspriset_f_r_elektricitet_p__nord_pool_docx.mdx";
import T5 from "../text/1_5__faktorer_som_p_verkar_elpriset_docx.mdx";
import T6 from "../text/1_6_eln_t_och_skatt_docx.mdx";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import svealogo from "../images/svea.png";
import cheaplogo from "../images/cheap.png";
import sthlmlogo from "../images/sthlm.png";
import cheapjson from "../data/Priser_CheapEnergy.xlsx.json";
import sthlmjson from "../data/Priser_SthlmsEL.xlsx.json";
import sveajson from "../data/Priser_SvealandsEL.xlsx.json";
import spot from "../data/Priser_Spot.xlsx.json";

const IndexComponent = () => {
  const [value, setValue] = useState(5000);
  const [fetchedsthlmjson, setFetchedsthlmjson] = useState([]);

  useEffect(() => {
    fetch("https://www.stockholmselbolag.se/Priser_SthlmsEL.xlsx.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data to the console
        setFetchedsthlmjson(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const spotPrice = spot[0][3];

  let i = 0;
  let list = [];
  let avtal = "";
  let elpris = spotPrice;
  let paslag = 0;
  let rabatt = 0;
  let manadpris = 0;
  manadpris = sthlmjson[19]["PRISOMRÅDE"];

  sthlmjson.forEach((element, index) => {
    if (index === 8 || index === 13) {
      avtal = element["FASTPRISER"];
      avtal = avtal.toLowerCase();
      avtal = avtal.charAt(0).toUpperCase() + avtal.slice(1);
    }

    if (index === 9 || index === 14) {
      paslag = element[3];
    }

    if (index === 12 || index === 17) {
      rabatt = element[3];

      let e = eval(
        (100 *
          (manadpris * 12 +
            0 * 12 +
            ((spotPrice + elpris + paslag + 1 - rabatt) / 100) * value)) /
          value
      );

      e = Math.round(e * 100) / 100;
      list.push({
        id: i,
        name: "Stockholms Elbolag",
        avtal: avtal,
        elpris: e,
        logo: sthlmlogo,
        manadpris: manadpris,
        url: "https://www.stockholmselbolag.se/",
      });
      i++;
    }
  });

  manadpris = cheapjson[41]["PRISOMRÅDE"];

  cheapjson.forEach((element, index) => {
    if (index === 10 || index === 15) {
      avtal = element["FASTPRISER"];
      avtal = avtal.toLowerCase();
      avtal = avtal.charAt(0).toUpperCase() + avtal.slice(1);
    }

    if (index === 11 || index === 16) {
      paslag = element[3];
    }

    if (index === 14 || index === 19) {
      rabatt = element[3];
      let e = eval(
        (100 *
          (manadpris * 12 +
            0 * 12 +
            ((spotPrice + elpris + paslag + 1 - rabatt) / 100) * value)) /
          value
      );
      e = Math.round(e * 100) / 100;
      list.push({
        id: i,
        name: "Cheap Energy",
        avtal: avtal,
        elpris: e,
        logo: cheaplogo,
        manadpris: manadpris,
        url: "https://www.cheapenergy.se/",
      });
      i++;
    }
  });

  manadpris = sveajson[20]["PRISOMRÅDE"];

  sveajson.forEach((element, index) => {
    if (index === 9 || index === 14) {
      avtal = element["FASTPRISER"];
      avtal = avtal.toLowerCase();
      avtal = avtal.charAt(0).toUpperCase() + avtal.slice(1);
    }

    if (index === 10 || index === 15) {
      paslag = element[3];
    }

    if (index === 13 || index === 18) {
      rabatt = element[3];
      let e = eval(
        (100 *
          (manadpris * 12 +
            0 * 12 +
            ((spotPrice + elpris + paslag + 1 - rabatt) / 100) * value)) /
          value
      );
      e = Math.round(e * 100) / 100;

      list.push({
        id: i,
        name: "Svealands Elbolag",
        avtal: avtal,
        elpris: e,
        logo: svealogo,
        manadpris: manadpris,
        url: "https://www.svealandselbolag.se/",
      });
      i++;
    }
  });

  list.sort((a, b) => (a.elpris > b.elpris ? 1 : -1));

  const [sortedList, setSortedList] = useState(list);

  console.log(sortedList);

  // Sort function
  const sortList = (a, b) => a.elpris - b.elpris;

  // UseEffect to listen for changes in value
  useEffect(() => {
    const newList = [...list].sort(sortList);
    setSortedList(newList);
  }, [value]);

  return (
    <Layout>
      <SEO title="Home" />

      {/*<div
        className="hero"
        style={{
          backgroundImage: `url('${img1}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content py-20 text-center">
          <article className="prose text-neutral-content">
            <T1 />
          </article>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content py-20 flex-col lg:flex-row gap-8">
          <article className="prose">
            <T2 />
          </article>
        </div>
      </div>*/}

      <div className="container w-full md:w-2/3">
        <div className="px-8 py-8">
          <h3 className="py-4 text-center text-2xl">
            Årlig elanvändning:{" "}
            <span className="text-info font-semibold">{value} kWh</span>
          </h3>
          <input
            type="range"
            min="100"
            max="20000"
            value={value}
            className="range"
            onChange={handleOnChange}
          />
        </div>
        <List list={sortedList} />
      </div>

      {/*<div className="hero">
        <div className="hero-content py-20 flex-col lg:flex-row gap-8">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <article className="prose">
                <T4 />
              </article>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero"
        style={{
          backgroundImage: `url('${img2}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content py-20 text-center">
          <article className="prose text-neutral-content">
            <T3 />
          </article>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content py-20 flex-col lg:flex-row gap-8">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <article className="prose">
                <T5 />
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200">
        <div className="hero-content py-20 flex-col lg:flex-row gap-8">
          <article className="prose">
            <T6 />
          </article>
        </div>
      </div>*/}
    </Layout>
  );
};

export default IndexComponent;
