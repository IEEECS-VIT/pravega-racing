import React from 'react';

const DriverlessSection: React.FC = () => {
  return (
    <section id='driverless-section' className='bg-white text-dark grey py-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='text-center md:text-left'>
            <h2
              className='text-3xl md:text-4xl font-bold mb-4 ml-0 md:ml-8'
              style={{ color: '#C63446' }}
            >
              Pravega Racing Driverless
            </h2>

            <p className='text-s ml-0 md:ml-8'>
              At Pravega Racing Driverless our goal is aimed at developing the
              software stack and the required integration module for achieving
              driverless capability on our FS car and participate in the
              competition events.
              <br />
              <br />
              Beginning our work from the development of perception module for
              performing object detection and calculating the relative distance
              of the track objects with respect to our sensors, the next step
              involves development of the track map by travelling around the
              racetrack. Now once we have the data pertaining the track layout,
              we proceed towards our next step developing an optimal path for
              our Driverless vehicle to follow around the racetrack. With this
              our Driverless vehicle starts its drive around the racetrack with
              optimal speeds at the appropriate regions of the racetrack.
              <br />
              <br />
              Up until now our team has developed the perception module that can
              detect the FS cones placed around the racetrack using a stereo
              camera on a ROS framework. We have also worked on the development
              of a path planner module for development of path to be followed by
              the Driverless vehicle. We now work on sensor fusion and the
              development of localisation and mapping module for receiving the
              real-time position of the FS cones placed around the racetrack to
              record its layout.
            </p>
          </div>
          <div className='text-center md:text-right'>
            <img
              src='/images/sae_new.png'
              alt='Driverless Car'
              className='mx-auto md:mr-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverlessSection;
