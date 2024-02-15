import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

const List = ({ list }) => {
  return (
    <div id="elbolag" className="grid grid-cols-1 gap-8 md:grid-cols-1 mb-10">
      {list.map((item) => (
        <div className="card lg:card-side bg-base-100 shadow-xl" key={item.id}>
          <div className="card-body">
            <h2 className="card-title justify-center">
              <img src={item.logo} alt="" />
            </h2>
            <p></p>
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div
                    className="tooltip tooltip-left"
                    data-tip="Ditt beräknade elpris baseras på det genomsnittliga inköpspriset på Nord Pool de senaste 3 månaderna (januari – mars 2023) i elområde SE3 (1,065 kr/kWh inkl. moms)."
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="stat-title">Avtalsform</div>
                <div className="stat-value">{item.avtal}</div>
                <div className="stat-desc">{item.name}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Jämförspris</div>
                <div className="stat-value">{item.elpris}</div>
                <div className="stat-desc">öre/kWh ex moms</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Månadspris</div>
                <div className="stat-value">{item.manadpris}</div>
                <div className="stat-desc">kr ex moms</div>
              </div>
            </div>
            <div className="flex">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                Köp elavtal
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
