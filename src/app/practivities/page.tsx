'use client';
import Image from 'next/image';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import Prbackground from '@/components/prbackground';
import ScrollToTopButton from '@/components/ScrollToTopButton';


const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>

      <div className='relative z-10'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Prbackground />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-8 pt-60 flex flex-col w-full items-center'
      >
        <div className='w-full grid-rows-1 bg-white grid-cols-1 gap-4'>
          <div className='col-span-1 flex flex-col items-center w-full'>

            <div className='bg-white p-4 max-w-5xl mx-auto '>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Riviera 19
              </h2>
              <p className='text-gray-700'>
                Another year, another Riviera and another great show put up by
                our team and the car. After a great show at FSAE-A, our driver
                had some cheeky ideas in mind and the crowd were awestruck when
                they watched our car, PRV 18 perform on the roads of VIT.
              </p>
              <Image
                src='/images/general/practivities/1.jpg'
                alt='Image 1'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto '>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Grand Rollout 18
              </h2>
              <p className='text-gray-700'>
                The grand rollout is one of the most awaited events at VIT
                University. It attracted a crowd of more than 1500 as the
                students came along to watch our new addition. This year saw the
                presence of Volkswagen Motorsport, our new sponsor for the year
                who brought along with them the 2018 ameo cup car. The new PRV
                18 was unveiled and put up a great show along with the ameo cup
                car.
              </p>
              <Image
                src='/images/general/practivities/2.jpg'
                alt='Image 2'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Riviera 18
              </h2>
              <p className='text-gray-700'>
                When it comes to entertainment, we won’t let the crowd walk away
                disappointed. Riviera 18 was one such event where people enjoyed
                the company of Pravega racing. A miniature racetrack was set up
                by the team and people were given RC cars to set their best lap
                times. Later in the day, when the sun was just above the
                horizon, it was time for the beast, the PRV 17 to perform the
                traditional Riviera doughnuts and the people were buzzing to
                watch us in action.
              </p>
              <Image
                src='/images/general/practivities/3.jpg'
                alt='Image 3'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Grand Rollout 17
              </h2>
              <p className='text-gray-700'>
                With little help from BMW India we conducted a drag race between
                PRV 16 and BMW in our college campus. Revving of engines raised
                the heartbeats of the audience to an unmatched level, like never
                seen before in VIT. The 75m race was flagged off by BMW
                representative at the event, both the cars made 3 runs towards
                the finish line, each time PRV was able to beat the Beemer.
              </p>
              <Image
                src='/images/general/practivities/4.jpg'
                alt='Image 4'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Riviera 17
              </h2>
              <p className='text-gray-700'>
                The Grand Rollout 17 was one of the most successful event
                conducted in VIT University. Director Student Welfare, Dr. Amit
                B. Mahindrakar graced the occasion by his presence. We
                collaborated with ‘The Music Club VIT’ to start the event.
                Multiple fun activities like Formula 1 Quiz and also
                successfully pulled the fake unveiling stunt which left the
                audience in stills. A crowd of more than 1200 students attended
                our event. We went live on Facebook and Instagram for the
                Sponsors and for our Alumni who weren’t able to attend our
                launch. 25th July, 2017 was the first day PRV17 and soon PRV17
                will be back on the roads of VIT again.
              </p>
              <Image
                src='/images/general/practivities/5.jpg'
                alt='Image 5'
                width={800}
                height={700}
                className='mt-4 rounded-lg w-132 h-96 mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Drag Race 2016
              </h2>
              <p className='text-gray-700'>
                Continuing the tradition this year, we set up a pit during
                Riviera 17 - An innovative, out-of-the-box, F1 simulator was
                contrived using the body of PRV 15 to give the enthusiastic F1
                fans a little bit of driver experience. Our crazy driver did
                crazier stunts with the racecar and the crowd went berserk after
                seeing PRV-16 performing colorful doughnuts.
              </p>
              <Image
                src='/images/general/practivities/6.png'
                alt='Image 6'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Rollout 2016
              </h2>
              <p className='text-gray-700'>
                Continuing the tradition, we orchestrated the Grand Rollout of
                our new car PRV16. Our new sponsors BMW and Star sports were
                presented at the event which was attended by Parents, Faculty
                members, sponsors and an overwhelming crowd of more than 1000
                students. The countdown got everybody’s heartbeat racing, we
                again had a staggering response from the freshers.
              </p>
              <Image
                src='/images/general/practivities/7.png'
                alt='Image 7'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Rollout 2015
              </h2>
              <p className='text-gray-700'>
                We conducted a grand launch of our car PRV 15. All the sponsors
                were showcased at the event. All the senior management of VIT,
                sponsors and alumni attended the launch. More than 800 students
                we closely packed in CS hall. Excitement amongst the freshers
                was heartening and it was them who made our event biggest event
                of the semester.
              </p>
              <Image
                src='/images/general/practivities/8.png'
                alt='Image 8'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Riviera 2015
              </h2>
              <p className='text-gray-700'>
                Riviera is the cultural fest of VIT University which sees a
                crowd of over 25,000 people. We had an epic pit setup at Riviera
                with Red Bull providing excitement through its Racing Simulator,
                Parasol and a beautiful Wings Team sampling Red Bull cans while
                our PRV’14 entertained the crowd. On Day 1 we performed some
                donuts in front of an excited crowd and owing to public demand
                on Day 2 we showed our creative side laying the track with
                colors to put up an exhilarating show in front of a huge crowd.
                This was one of the best PR stunts of college in 2014-15 season.
              </p>
              <Image
                src='/images/general/practivities/9.png'
                alt='Image 9'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Calendar Shoot Cornitos
              </h2>
              <p className='text-gray-700'>
                It was a perfect team bonding activity for the team during the
                summer vacations as it gave a break from the busy testing
                schedule. Our calendar was themed on the numerous flavors of
                cornitos. It took a lot of effort to relate chips with our
                racecar but in the end we were successful to create a very cool
                and colorful calendar
              </p>
              <Image
                src='/images/general/practivities/10.png'
                alt='Image 10'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Engage Deodorants Marketing Campaign
              </h2>
              <p className='text-gray-700'>
                Engage deodorants from ITC is an exciting brand that has pushed
                the envelope in Indian advertising and shooting pictures for
                them was a very exciting endeavour. We themed our pictures based
                on the various fragrances of Engage integrating sensuality and
                style to suit the Engage brand. This was a one of a kind
                opportunity and we made the most of it creating some great
                pictures in the process.
              </p>
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-white p-4 max-w-5xl mx-auto'>
              <h2
                className='text-3xl font-bold mb-2'
                style={{ color: '#DC092F' }}
              >
                Red Bull Calendar Shoot
              </h2>
              <p className='text-gray-700'>
                After continual efforts we got a chance to associate with Red
                Bull and we decided to do something special to reciprocate this
                gesture. We did a photo shoot to make a Red Bull calendar with
                pictures having a mix of emotion, creativity, passion for race
                cars and the zeal for the perfect picture. Our driver along with
                our Car and Red Bull cans blended perfectly to create a
                magnificent calendar. This calendar is an achievement that will
                be etched in our memories forever.
              </p>
              <Image
                src='/images/general/practivities/11.png'
                alt='Image 11'
                width={800}
                height={600}
                className='mt-4 rounded-lg mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
