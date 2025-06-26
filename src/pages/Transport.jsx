import React from 'react';
import { FaTrain, FaSubway, FaTaxi, FaBus } from 'react-icons/fa';

const stations = {
  howrah: [
    { time: '10:30 AM', destination: 'Bandel Local', platform: '1' },
    { time: '11:00 AM', destination: 'Burdwan Express', platform: '3' },
    { time: '11:30 AM', destination: 'Katwa Local', platform: '2' },
  ],
  sealdah: [
    { time: '10:45 AM', destination: 'Barrackpore Local', platform: '1' },
    { time: '11:15 AM', destination: 'Naihati Local', platform: '2' },
    { time: '11:45 AM', destination: 'Krishnanagar Express', platform: '4' },
  ],
  santragachi: [
    { time: '10:15 AM', destination: 'Kharagpur Local', platform: '1' },
    { time: '10:45 AM', destination: 'Midnapore Express', platform: '2' },
    { time: '11:15 AM', destination: 'Haldia Local', platform: '3' },
  ],
  shalimar: [
    { time: '10:00 AM', destination: 'Puri Express', platform: '1' },
    { time: '10:30 AM', destination: 'Digha Local', platform: '2' },
    { time: '11:00 AM', destination: 'Kharagpur Fast', platform: '1' },
  ],
  metro: {
    nearMe: [
      { station: 'Kalighat Metro', distance: '0.8 km', time: '10 mins walk' },
      { station: 'Jatin Das Park', distance: '1.2 km', time: '15 mins walk' },
      { station: 'Maidan', distance: '1.5 km', time: '18 mins walk' },
    ],
    northLine: [
      { time: '10:00 AM', from: 'Kavi Subhash', to: 'Dakshineswar' },
      { time: '10:15 AM', from: 'Dakshineswar', to: 'Kavi Subhash' },
      { time: '10:30 AM', from: 'Kavi Subhash', to: 'Dakshineswar' },
    ],
    dakshineswarLine: [
      { time: '10:05 AM', from: 'Dakshineswar', to: 'Kavi Subhash' },
      { time: '10:20 AM', from: 'Kavi Subhash', to: 'Dakshineswar' },
      { time: '10:35 AM', from: 'Dakshineswar', to: 'Kavi Subhash' },
    ]
  }
};

const localTransport = {
  autoStands: [
    { location: 'Gariahat Crossing', distance: '0.3 km', time: '2 mins' },
    { location: 'Rashbehari Crossing', distance: '0.8 km', time: '5 mins' },
    { location: 'Golpark', distance: '1.2 km', time: '7 mins' },
  ],
  busStands: [
    { location: 'Gariahat Bus Stop', distance: '0.5 km', time: '5 mins', routes: ['S24', 'VS5', '47B'] },
    { location: 'Ballygunge Phari', distance: '1.2 km', time: '8 mins', routes: ['S24', 'VS5', '47B'] },
    { location: 'Golpark Bus Stand', distance: '1.5 km', time: '10 mins', routes: ['S24', 'VS5', '47B'] },
  ],
  taxiStands: [
    { location: 'Gariahat Taxi Stand', distance: '0.4 km', time: '3 mins' },
    { location: 'Ballygunge Station', distance: '1.0 km', time: '6 mins' },
    { location: 'Southern Avenue', distance: '1.3 km', time: '8 mins' },
  ],
};

function Transport() {
  return (
    <div className="min-h-screen p-4 pt-20">
      <h1 className="text-2xl font-bold mb-6">Transport</h1>

      {/* Local Transport Section */}
      <div className="mb-8">
        <div className="space-y-6">
          {/* Auto Stands */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <FaTaxi className="text-yellow-600" size={24} />
              </div>
              <h2 className="text-xl font-bold">Auto Stands</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {localTransport.autoStands.map((stand, index) => (
                <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">{stand.location}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Walking time: {stand.time}</p>
                    </div>
                    <span className="text-yellow-600 font-bold">{stand.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bus Stands */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaBus className="text-blue-600" size={24} />
              </div>
              <h2 className="text-xl font-bold">Bus Stands</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {localTransport.busStands.map((stand, index) => (
                <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">{stand.location}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Walking time: {stand.time}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Routes: {stand.routes.join(', ')}
                      </p>
                    </div>
                    <span className="text-blue-600 font-bold">{stand.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Taxi Stands */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FaTaxi className="text-green-600" size={24} />
              </div>
              <h2 className="text-xl font-bold">Taxi Stands</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {localTransport.taxiStands.map((stand, index) => (
                <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">{stand.location}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Walking time: {stand.time}</p>
                    </div>
                    <span className="text-green-600 font-bold">{stand.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Metro Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <FaSubway className="text-purple-600" size={24} />
          </div>
          <h2 className="text-xl font-bold">Metro Railway</h2>
        </div>

        {/* Nearest Metro Stations */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Nearest Metro Stations</h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {stations.metro.nearMe.map((station, index) => (
              <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{station.station}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{station.time}</p>
                  </div>
                  <span className="text-purple-600 font-bold">{station.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* North Line */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">North Line Schedule</h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {stations.metro.northLine.map((train, index) => (
              <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{train.from} → {train.to}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Next train at {train.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dakshineswar Line */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Dakshineswar Line Schedule</h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {stations.metro.dakshineswarLine.map((train, index) => (
              <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{train.from} → {train.to}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Next train at {train.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Howrah Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <FaTrain className="text-blue-600" size={24} />
          </div>
          <h2 className="text-xl font-bold">Howrah Station</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {stations.howrah.map((train, index) => (
            <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{train.destination}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Platform {train.platform}</p>
                </div>
                <span className="text-blue-600 font-bold">{train.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sealdah Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <FaTrain className="text-green-600" size={24} />
          </div>
          <h2 className="text-xl font-bold">Sealdah Station</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {stations.sealdah.map((train, index) => (
            <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{train.destination}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Platform {train.platform}</p>
                </div>
                <span className="text-green-600 font-bold">{train.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Santragachi Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <FaTrain className="text-yellow-600" size={24} />
          </div>
          <h2 className="text-xl font-bold">Santragachi Station</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {stations.santragachi.map((train, index) => (
            <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{train.destination}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Platform {train.platform}</p>
                </div>
                <span className="text-yellow-600 font-bold">{train.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shalimar Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <FaTrain className="text-purple-600" size={24} />
          </div>
          <h2 className="text-xl font-bold">Shalimar Station</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {stations.shalimar.map((train, index) => (
            <div key={index} className="card flex-shrink-0" style={{ width: '250px' }}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{train.destination}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Platform {train.platform}</p>
                </div>
                <span className="text-purple-600 font-bold">{train.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transport;