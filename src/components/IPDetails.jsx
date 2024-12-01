import React from "react";

const IPDetails = ({ geoData }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      <div className="p-2 shadow rounded text-xl">
        <p className="pb-2 border-b-2 font-semibold">
          Hostname: {geoData.hostname}
        </p>
        <p className="pb-2 border-b-2 font-semibold">City: {geoData.city}</p>
        <p className="pb-2 border-b-2 font-semibold">
          Region: {geoData.region}
        </p>
        <p className="pb-2 border-b-2 font-semibold">
          Country: {geoData.country}
        </p>
        <p className="pb-2 border-b-2 font-semibold">Location: {geoData.loc}</p>
        <p className="pb-2 border-b-2 font-semibold">Org: {geoData.org}</p>
        <p className="pb-2 border-b-2 font-semibold">
          Postal: {geoData.postal}
        </p>
        <p className="pb-2 border-b-2 font-semibold">
          Timezone: {geoData.timezone}
        </p>
      </div>
      <div className="p-2 shadow rounded">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.44582749995!2d${
            geoData.loc.split(",")[1]
          }!3d${
            geoData.loc.split(",")[0]
          }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2z${
            geoData.loc
          }!5e1!3m2!1sen!2sph!4v1733069557451!5m2!1sen!2sph`}
          allowFullScreen={true}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default IPDetails;
